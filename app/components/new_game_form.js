import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { newEvent } from '../actions/formAction';
import 'rc-time-picker/assets/index.css';
import moment from 'moment';
import TimePicker from 'rc-time-picker';

const format = 'h:mm a';

const now = moment().hour(0).minute(0);


class NewGame extends Component {
    submitMyForm(event) {
        const { newEvent, resetForm } = this.props;
        return newEvent(event).then(() => {
            resetForm();
        });
    }
    render() {
        const { fields: { title, location, sport, time }, handleSubmit, resetForm, submitting } = this.props;
        return (
            <form onSubmit={handleSubmit(this.submitMyForm.bind(this))}>
                <h3>Add a New Pickup Game!</h3>
                <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                    <label>Event Name</label>
                    <input placeholder="Event Title" type="text" className="form-control" {...title} />
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
                    <input placeholder="Event Location" type="text" className="form-control" {...location} />
                    <div className="text-help">
                        {location.touched ? location.error : ''}
                    </div>
                </div>
                <div className={`form-group ${time.touched && time.invalid ? 'has-danger' : ''}`}>
                    <label>Time</label>
                    <input placeholder="Time of Event" type="text" className="form-control" {...time} />
                    <div className="text-help">
                        {time.touched ? time.error : ''}
                    </div>
                </div>
                {localStorage.getItem("id_token") ?
                <button className='btn btn-primary submit'>Submit</button>
                : <div>Please log in to post an event</div>}
            </form>
        )
    }
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

NewGame.propTypes = {
    resetForm: PropTypes.func.isRequired
}
export default reduxForm({
    form: 'NewSportForm',
    fields: ['title', 'location', 'sport', 'time'],
    validate
}, null, { newEvent })(NewGame);