import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import RaisedButton from 'material-ui/RaisedButton';
import moment from 'moment';
import axios from 'axios';

export default class EventForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      event: '',
      time: '',
      date: '',
      sport: '',
      location: ''
    }
  }

  handleSubmit(e) {
    let momentTime = moment(this.state.time);
    let momentDate = moment(this.state.date);
    let appointmentMoment = moment({
        year: momentDate.year(),
        month: momentDate.month(),
        day: momentDate.date(),
        hour: momentTime.hours(),
        minute: momentTime.minutes()
    });
    console.log(moment(appointmentMoment._d).format('MM/DD/YYYY hh:mm A'));
    e.preventDefault();
    
  }

  render() {
    console.log(this.state);
    return (
      <div className='well'>
        <Card>
          <CardTitle title="Add a New Pickup Game" />
          <CardText>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <TextField
                type="text"
                floatingLabelText='Event Title'
                onChange={(e) => this.setState({ event: e.target.value })}
              />
              <SelectField
                    floatingLabelText="Please Select a Sport"
                    value={this.state.sport}
                    onChange={(event, index, value) => this.setState({ sport: value})}
                    type="select"
                >
                    <MenuItem value='Baseball' primaryText='Baseball' />
                    <MenuItem value='Basketball' primaryText='Basketball' />
                    <MenuItem value='Football' primaryText='Football' />
                    <MenuItem value='Soccer' primaryText='Soccer' />
                    <MenuItem value='Volleyball' primaryText='Volleyball' />
                    <MenuItem value='Other' primaryText='Other' />
                </SelectField>
                <DatePicker hintText="Select Date" onChange={(event, value) => this.setState({ date: value})} />
                <TimePicker hintText="Select Time" onChange={(event, value) => this.setState({ time: value})} />
              <TextField
                type="text"
                floatingLabelText='Location'
                onChange={(e) => this.setState({ location: e.target.value })}
              />
               <RaisedButton label="Submit" primary={true} fullWidth={true} />
            </form>
          </CardText>
        </Card>
      </div>

    )
  }
}
