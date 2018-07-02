import { combineReducers } from 'redux';
import forecasts from './weather_reducer';

const rootReducer = combineReducers({
  forecasts
});

export default rootReducer;