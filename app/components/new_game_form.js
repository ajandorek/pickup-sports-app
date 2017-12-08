import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { newEvent } from '../actions/formAction';
import 'rc-time-picker/assets/index.css';
import moment from 'moment';
// import TimePicker from 'rc-time-picker';
import Datetime from 'react-datetime';

const format = 'h:mm a';

const now = moment().hour(0).minute(0);

function onChange(value) {
    console.log(value && value.format(format));
}

class NewGame extends Component {
    submitMyForm(event) {
        const { reset } = this.props
        this.props.dispatch(newEvent(event))
            .then(() => {
                reset();
            })
    }

    renderTime(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`
        return (
            <div className={className}>
                <Datetime
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

    renderSelector(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`

        return (
            <div className={className}>
                <select
                    className="form-control"
                    type="select"
                    {...field.input}
                >
                    <option value="">Please Select a Sport...</option>
                    <option value="Baseball">Baseball</option>
                    <option value="Basketball">Basketball</option>
                    <option value="Football">Football</option>
                    <option value="Soccer">Soccer</option>
                    <option value="Volleyball">Volleyball</option>
                    <option value="Other">Other</option>
                </select>
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`

        return (
            <div className={className}>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

    render() {
        const { fields: { title, location, sport, time }, handleSubmit, resetForm, submitting } = this.props;
        return (
            <div className='well'>
                <form onSubmit={handleSubmit(this.submitMyForm.bind(this))}>
                    <h3>Add a New Pickup Game!</h3>
                    <div>
                        <label>Event Name</label>
                        <Field
                            placeholder="Event Title"
                            type="text"
                            component={this.renderField}
                            name='title'
                            className="form-control"
                        />
                    </div>
                    <div>
                        <label>Date/Time</label>
                        <Field
                            name='time'
                            component={this.renderTime}
                            type="text"
                            className="form-control"
                        />
                        <div className="text-help">
                        </div>
                    </div>
                    <div>
                        <label>Sport</label>
                        <Field
                            name="sport"
                            component={this.renderSelector}
                            className="form-control" />
                    </div>
                    <div className="text-help">
                    </div>
                    <div>
                        <label>Location</label>
                        <Field
                            placeholder="Event Location"
                            component={this.renderField}
                            name='location'
                            type="text"
                            className="form-control"
                        />
                        <div className="text-help">
                        </div>
                    </div>
                    <button className='btn btn-primary submit'>Submit</button>
                </form>
            </div>
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

export default reduxForm({
    form: 'NewSportForm',
    fields: ['title', 'location', 'sport', 'time'],
    validate
}, null, { newEvent })(NewGame);