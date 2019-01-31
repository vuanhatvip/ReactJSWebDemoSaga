import React, { Component } from 'react';
import {connect} from 'react-redux';
import { RegistrationAction} from '../../../redux/Actions/index';
import {withRouter} from 'react-router-dom';
class RegistrationPage extends Component {
  constructor(props){
    super(props);
      this.state = {
      username:'',
      email: '',
      password: ''
     };
  }
  componentDidUpdate(prevProps){
    if(this.props.registration != prevProps.registration){
      if(this.props.registration.error){
        this.showErrorMessafe();
      }
      else {
        this.props.history.push({pathname: '/'})
      }
    }
  }
  handleUsername=(event)=>{
    this.setState({
      username: event.target.value
    });
  }
  handleEmail=(event)=>{
    this.setState({
      email: event.target.value
    });
  }
  handlePassword = (event)=>{
    this.setState({
      password: event.target.value
    })
  }


  sendEmailAndPassword = (event)=>{
    if(this.state.username && this.state.email && this.state.password){
        this.props.onFecthRegistrationAction(this.state.username, this.state.email, this.state.password);
    }
    else {
        alert ('Please fill username or email or password')
    }
    event.preventDefault();
  }

  showErrorMessafe=()=>{
    var errordata;
    if(this.props.registration.error){
      return(
        <ul className="error-messages">
          <li>{ JSON.stringify(this.props.registration.error.response.data.errors)}</li>
        </ul>
        )
      }
    else{
      return (
        <ul className="error-messages" style={{visibility:'hidden'}}>
        <li></li>
      </ul>
      )
    }
  }

  render() {
   
    
    return (
        <div className="auth-page">
        <div className="container page">
          <div className="row">
      
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign in</h1>
              <p className="text-xs-center">
                <a href="">Don't have an account?</a>
              </p>
              {this.showErrorMessafe()}
              <form>
                <fieldset className="form-group">
                  <input className="form-control form-control-lg" type="text" placeholder="Username" value={this.state.username} onChange={this.handleUsername}/>
                </fieldset>
                <fieldset className="form-group">
                  <input className="form-control form-control-lg" type="text" placeholder="Email" value={this.state.email} onChange={this.handleEmail}/>
                </fieldset>
                <fieldset className="form-group">
                  <input className="form-control form-control-lg" type="password" placeholder="Password" value={this.state.password} onChange={this.handlePassword}/>
                </fieldset>
                <button className="btn btn-lg btn-primary pull-xs-right" onClick={(e)=>this.sendEmailAndPassword(e)}>
                  Sign in
                </button>
              </form>
              </div>

              </div>
            </div>
          </div>
    );
  }
}
// <fieldset className="form-group">
//   <input className="form-control form-control-lg" type="text" placeholder="Your Name"/>
// </fieldset>
const mapStateToProps = (state) => {
  return {
    registration: state.registrationReducer
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFecthRegistrationAction: (username, email, password) => {
      dispatch(RegistrationAction(username, email, password));
    },
  };
}
export default withRouter (connect(mapStateToProps, mapDispatchToProps)(RegistrationPage));
