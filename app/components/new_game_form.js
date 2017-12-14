import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { newEvent } from '../actions/formAction';
import 'rc-time-picker/assets/index.css';
import moment from 'moment';
import Datetime from 'react-datetime';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const format = 'h:mm a';

const now = moment().hour(0).minute(0);

class NewGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Soccer'
        };
    }

    handleChange(value){
        console.log('here', value)
        this.setState({ value });
    }

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
        const { value } = this.state;
        const { meta: { touched, error } } = field;
        return (
            <div>
                <SelectField
                    floatingLabelText="Please Select a Sport"
                    value='Soccer'
                    onChange={(value) => this.handleChange(value)}
                    type="select"
                    {...field.input}
                >
                    <MenuItem value={1} primaryText='' />
                    <MenuItem value={2} primaryText='Baseball' />
                    <MenuItem value={3} primaryText='Basketball' />
                    <MenuItem value={4} primaryText='Football' />
                    <MenuItem value={5} primaryText='Soccer' />
                    <MenuItem value={6} primaryText='Volleyball' />
                    <MenuItem value={7} primaryText='Other' />
                </SelectField>
            </div>
        )
    }

    renderField(field) {
        const { meta: { touched, error } } = field;

        return (
            <div>
                <TextField
                    type="text"
                    floatingLabelText={this.name = 'title' ? 'Event Title' : 'Location'}
                    {...field.input}
                    errorText={touched ? error : ''}
                />
            </div>
        )
    }

    render() {
        const { fields: { title, location, sport, time }, handleSubmit, resetForm, submitting } = this.props;
        return (
            <div className='well'>
                <Card>
                    <CardTitle title="Add a New Pickup Game" />
                    <CardText>
                        <form onSubmit={handleSubmit(this.submitMyForm.bind(this))}>
                            <div>
                                <Field
                                    type="text"
                                    component={this.renderField.bind(this)}
                                    ref='name'
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
                            </div>
                            <div>
                                <Field
                                    name="sport"
                                    component={this.renderSelector.bind(this)}
                                />
                            </div>
                            <div>
                                <Field
                                    placeholder="Event Location"
                                    component={this.renderField.bind(this)}
                                    name='location'
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <button className='btn btn-primary submit'>Submit</button>
                        </form>
                    </CardText>
                </Card>
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