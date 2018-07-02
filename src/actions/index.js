import * as CONST from "./constants";
import axios from 'axios';

export const fetchWeather = city => async dispatch => {    
    const url = `${CONST.ROOT_URL}&q=${city},uk`;
    const response = await axios.get(url);
    
    dispatch(fetchDataSuccess(response.data));
};

const fetchDataSuccess = data => ({
    type: CONST.FETCH_WEATHER,
    data 
});
