import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import { reducer as formReducer} from 'redux-form';
import EventReducer from './reducer_events';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  events: EventReducer,
  form: formReducer
});

export default rootReducer;
