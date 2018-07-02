import _ from 'lodash';
import React, { Component } from 'react';
import moment from 'moment';
import { ResponsiveContainer, ComposedChart, Line, Area, Bar, 
    XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';



const Chart = ({ forecasts }) => {

    const temps = forecasts.list && forecasts.list.map(weather =>  weather.main.temp);
    const humidities = forecasts.list && forecasts.list.map(weather =>  weather.main.humidity);
    const dates = forecasts.list && forecasts.list.map(weather => weather.dt_txt.substr(0, 10));

    const getUniques = (value, index, self) => self.indexOf(value) === index;
    const uniqueDates = dates && dates.filter(getUniques);
    let avg = 0;
    let counter = 0;
    const tempResult = {};

    uniqueDates && uniqueDates.forEach( date => {
      avg = 0, counter = 0;
      dates.map((key, i) => {
        if (key === date) {
          avg += temps[i];
          ++counter;
        }
      });
      tempResult[date] = (avg / counter).toFixed(2);
    })

    const data = _.map(tempResult, function(value, key) {
        const date = moment(key).format("MMM Do YY");
        const tempCelsius = parseInt(value) - 273.15;
        return { name: date, temperature: _.round(tempCelsius) };
      });

    return (
      <ResponsiveContainer>
        <ComposedChart width={600} height={400} data={data} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
            <CartesianGrid stroke='#f5f5f5'/>
            <XAxis dataKey="name"/>
            <YAxis />
            <Tooltip/>
            <Legend/>
            <Bar dataKey='temperature' barSize={80} fill='#413ea0'/>
            <Line type='monotone' dataKey='temperature' stroke='#ff7300'/>
        </ComposedChart>
     </ResponsiveContainer>
  );
}

export default Chart;