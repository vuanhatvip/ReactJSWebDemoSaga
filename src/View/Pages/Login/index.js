import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchLoginAction, changeStatusLogin} from '../../../redux/Actions/index';
import {withRouter} from 'react-router-dom';
class LoginPage extends Component {
  constructor(props){
    super(props);
      this.state = {
      email: '',
      password: ''
     };
  }
  componentDidUpdate(prevProps){
    if(this.props.loginTolken != prevProps.loginTolken){
      if(this.props.loginTolken.error){
        this.showErrorMessafe();
      }
      else {
        //console.log(this.props.loginTolken.user.token);
        sessionStorage.setItem('tolken', this.props.loginTolken.user.token );
        sessionStorage.setItem('username', this.props.loginTolken.user.username );
        this.props.onChangeSatusLogin(true);
        this.props.history.push({pathname: '/'})
      }
    }
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
    this.props.onFecthLoginAction(this.state.email, this.state.password);
    event.preventDefault();
  }

  showErrorMessafe=()=>{
    var errordata;
    if(this.props.loginTolken.error){
      return(
        <ul className="error-messages">
          <li>{ JSON.stringify(this.props.loginTolken.error.response.data.errors)}</li>
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
    loginTolken: state.loginReducer
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFecthLoginAction: (email, password) => {
      dispatch(fetchLoginAction(email, password));
    },
    onChangeSatusLogin: (status)=>{
      dispatch(changeStatusLogin(status));
    },
  };
}
export default withRouter (connect(mapStateToProps, mapDispatchToProps)(LoginPage));
