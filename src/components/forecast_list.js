import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { fetchWeather } from "../actions/index";
import Chart from "./chart";

class ForecastList extends Component {

    componentDidMount() {
        const city = 'London'
        this.props.fetchWeather(city);
    }

    render() {
        const { forecasts } = this.props;
        return (
            <Fragment>
                <div className='text'>
                 <p>Weather Forecast For </p>
                 <h1>London</h1>
                </div>
                <div className='chart-container'>
                    <Chart forecasts={forecasts} />
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = ({ forecasts }) => ({
    forecasts
});

const mapDispatchToProps = dispatch => ({
    fetchWeather: city => dispatch(fetchWeather(city)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ForecastList);