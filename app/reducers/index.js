import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import { reducer as formReducer } from 'redux-form';
import EventReducer from './reducer_events';
// import { NEWSPORTFORM_SAVE_SUCCESS } from '../actions/formAction';


const rootReducer = combineReducers({
  weather: WeatherReducer,
  events: EventReducer,
  form: formReducer.plugin({
    NewSportForm: (state, action) => { // <------ 'account' is name of form given to reduxForm()
      switch (action.type) {
        case 'redux-form/STOP_SUBMIT':
          return undefined;       // <--- blow away form data
        default:
          return state;
      }
    }
  })
});

export default rootReducer;
