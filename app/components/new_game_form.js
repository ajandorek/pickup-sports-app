import React, { Component } from 'react';
import { Field, Form, reduxForm, reset } from 'redux-form';
import { newEvent } from '../actions/formAction';
// import 'rc-time-picker/assets/index.css';
import moment from 'moment';
import TimePicker from 'rc-time-picker';

const format = 'h:mm a';

const now = moment().hour(0).minute(0);


const NewGame = (props) => {
    const { fields: { title, location, sport, time }, handleSubmit, reset } = props;
    return (
        <form onSubmit={handleSubmit(props.newEvent)}>
            <h3>Add a new pickup game!</h3>
            <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                <label>Event Name</label>
                <div>
                    <input name="title" type="text" className="form-control" {...title} />
                </div>
                <div className="text-help">
                    {title.touched ? title.error : ''}
                </div>
            </div>
            <div className={`form-group ${sport.touched && sport.invalid ? 'has-danger' : ''}`}>
                <label>Sport</label>
                <select name="cars" className="form-control" {...sport}>
                    <option value="">Please Select a Sport...</option>
                    <option value="Baseball">Baseball</option>
                    <option value="Basketball">Basketball</option>
                    <option value="Football">Football</option>
                    <option value="Soccer">Soccer</option>
                    <option value="Volleyball">Volleyball</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div className="text-help">
                {sport.touched ? sport.error : ''}
            </div>
            <div className={`form-group ${location.touched && location.invalid ? 'has-danger' : ''}`}>
                <label>Location</label>
                <input type="text" className="form-control" {...location} />
                <div className="text-help">
                    {location.touched ? location.error : ''}
                </div>
            </div>
            <div className={`form-group ${time.touched && time.invalid ? 'has-danger' : ''}`}>
                <label>Time</label>
                <input type="text" className="form-control" {...time} />
                <div className="text-help">
                    {time.touched ? time.error : ''}
                </div>
                {/*<TimePicker
                        showSecond={false}
                        defaultValue={now}
                        className="xxx"
                        format={format}
                        use12Hours
                    />*/}
            </div>
            <button className="btn btn-primary submit" onClick={reset}>Submit</button>
        </form>
    )
}
function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = 'Please enter a title';
    }
    if (!values.location) {
        errors.location = 'Please enter a location';
    }
    if (!values.time) {
        errors.time = 'Please enter an event time';
    }
    if (!values.sport) {
        errors.sport = 'Please select a sport'
    }

    return errors;
}
export default reduxForm({
    form: 'NewSportForm',
    fields: ['title', 'location', 'sport', 'time'],
    validate
}, null, { newEvent })(NewGame);