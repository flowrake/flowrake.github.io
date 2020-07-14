import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TextField, Button, Card } from '@material-ui/core';
import * as emailjs from 'emailjs-com';
import toastr from 'toastr';

const styles = theme => ({
  card: {
    display: 'flex',
    width: 850,
    flexDirection: 'column',
  }
});

export default class ContactUs2 extends Component {

  state = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    feedback: '',
    formSubmitted: false
  };

  handleCancel = this.handleCancel.bind(this);
  handleChangeFN = this.handleChangeFN.bind(this);
  handleChangeLN = this.handleChangeLN.bind(this);
  handleChangeEA = this.handleChangeEA.bind(this);
  handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);

  handleCancel() {
    this.setState({
      feedback: ''
    });
  }

  handleChangeFN(event) {
    this.setState({
      firstName: event.target.value
    });
  }

  handleChangeLN(event) {
    this.setState({
      lastName: event.target.value
    });
  }

  handleChangeEA(event) {
    this.setState({
      emailAddress: event.target.value
    });
  }

  handleChange(event) {
    this.setState({
      feedback: event.target.value
    });
  }

  updateStateOnSuccess() {
    if (this.formSubmitted == false) {
      this.setState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        feedback: ''
      });
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    this.sendFeedback2(
      this.state.firstName,
      this.state.lastName,
      this.state.emailAddress,
      this.state.feedback
    );
    this.setState({
      formSubmitted: true
    });
  }

  sendFeedback(firstName, lastName, emailAddress, feedback) {
    var templateParams = {
      firstName: firstName,
      lastName: lastName,
      emailAddress: emailAddress,
      feedback: feedback
    }
    emailjs.send('default_service', 'template', templateParams, 'user_ggKWmS2aAAENBBJXgJrUl')
      .then(function (response) {
        toastr.options.showDuration = 100
        toastr.options.hideDuration = 500
        toastr.options.onShown = function () {
          console.log('EmailSent!', response.status, response.text);
        }
        toastr.success('Email sent!')

      })
      // Handle errors here however you like
      .catch(err => console.error('Failed to send feedback. Error: ', err));
  }

  sendFeedback2() {
    toastr.options = {
      "showDuration": 100,
      "hideDuration": 300,
      "onShown": function () {
        console.log('EmailSent!');
      }
    }
    toastr.success('Email sent!')
    this.setState({
      firstName: '',
      lastName: '',
      emailAddress: '',
      feedback: '',
      formSubmitted: false
    })
  }

  render() {
    return (
      <Card className="card" >
        <div>
          If you have any questions or concerns feel free to let us know! <br /> <br />
          <TextField className="firstName" id="firstName" name="firstName" placeholder='First Name' onChange={this.handleChangeFN} value={this.state.firstName} />
          <br />
          <TextField className="lastName" id="lastName" name="lastName" placeholder='Last Name' onChange={this.handleChangeLN} value={this.state.lastName} />
          <br />
          <TextField className="emailAddress" id="emailAddress" name="emailAddress" placeholder='Email Address' onChange={this.handleChangeEA} value={this.state.emailAddress} />
          <br />
          <TextField className="text-input" id="text-input" name="text-input" multiline rows="4" placeholder='Message' onChange={this.handleChange} value={this.state.feedback} />
          <br />
          <Button className="btn btn--submit" value="Submit" onClick={this.handleSubmit}>
            Submit
              </Button>
        </div>
      </Card>
    );
  }
}

ContactUs2.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};