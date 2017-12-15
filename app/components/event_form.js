import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import axios from 'axios';
import { fetchEvents } from '../actions/eventAction';

//Material Components
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardTitle, CardText } from 'material-ui/Card';


class EventForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
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
    
    axios.post('api/events', {
      title: this.state.title,
      sport: this.state.sport,
      location: this.state.location,
      time: appointmentMoment,
    }).then(() => {
      this.props.fetchEvents('#');
      this.setState({
        title: '',
        time: '',
        date: '',
        sport: '',
        location: ''
      });
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className='well'>
        <Card>
          <CardTitle title="Add a New Pickup Game" />
          <CardText>
            <form>
              <TextField
                type="text"
                floatingLabelText='Event Title'
                value={this.state.title}
                onChange={(e, value) => this.setState({ title: value })}
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
                <DatePicker hintText="Select Date" value={this.state.date} onChange={(event, value) => this.setState({ date: value})} />
                <TimePicker hintText="Select Time" value={this.state.time} onChange={(event, value) => this.setState({ time: value})} />
              <TextField
                type="text"
                floatingLabelText='Location'
                value={this.state.location}
                onChange={(e) => this.setState({ location: e.target.value })}
              />
               <RaisedButton label="Submit" primary={true} fullWidth={true} onClick={this.handleSubmit.bind(this)} />
            </form>
          </CardText>
        </Card>
      </div>

    )
  }
}

export default connect(null, { fetchEvents })(EventForm);