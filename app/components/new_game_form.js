import React, { Component } from 'react';
import { Form, reduxForm } from 'redux-form';
import { newEvent } from '../actions/formAction';
// import 'rc-time-picker/assets/index.css';
import moment from 'moment';
import TimePicker from 'rc-time-picker';

const format = 'h:mm a';

const now = moment().hour(0).minute(0);

class NewGame extends Component {
    render() {
        const { fields: { name, location, sport, time }, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <h3>Add a new pickup game!</h3>
                <div className="form-group">
                    <label>Event Name</label>
                    <input type="text" className="form-control" {...name} />
                </div>
                <div className="form-group">
                    <label>Sport</label>
                    <select name="cars" className="form-control" {...sport}>
                        <option value="Baseball">Baseball</option>
                        <option value="Basketball">Basketball</option>
                        <option value="Football">Football</option>
                        <option value="Soccer">Soccer</option>
                        <option value="Volleyball">Volleyball</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Location</label>
                    <input type="text" className="form-control" {...location} />
                </div>
                <div className="form-group">
                    <label>Time</label>
                    <input type="text" className="form-control" {...time} />
                    {/*<TimePicker
                        showSecond={false}
                        defaultValue={now}
                        className="xxx"
                        format={format}
                        use12Hours
                    />*/}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}
export default reduxForm({
    form: 'NewSportForm',
    fields: ['name', 'location', 'sport', 'time']
})(NewGame);