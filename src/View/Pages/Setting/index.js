import React, { Component } from 'react';
import {fetchCurrentUserAction, changeStatusLogin, fetchUpdateSettingAction, ChangeStatusUpdateAction} from '../../../redux/Actions/index';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import changeStatusReducers from '../../../redux/Reducers/ChangStatusUpdateAction';
//import Article from './View/Article/index';
class Setting extends Component {

  constructor(props){
    super(props);
      this.state = {
        user: {
          image:'',
          username: '',
          bio: '',
          email: '',
          newpassword: ''
        },
     };
  }

  componentDidMount(){
    const tolken = sessionStorage.getItem('tolken');
    if(tolken){
      this.props.onFetchCurrentUser(tolken);
    }
    else {
      this.props.history.push({pathname: '/'});
    }
  }
  componentWillReceiveProps(nextProps){
    //console.log(nextProps.currentUser);
    this.changeStateInfo(nextProps.currentUser);
    console.log(nextProps.updateUser);
  }
  componentDidUpdate(prevProps){
    if(this.props.updateUser != prevProps.updateUser){
      if(this.props.updateUser.error){
        console.log(this.props.updateUser.error)
      }
      else{
        this.changeInfoAndSession(this.props.updateUser.user)
      }
    }
  }
  changeInfoAndSession = (user)=>{
    sessionStorage.clear();
    sessionStorage.setItem('tolken', user.token );
    sessionStorage.setItem('username', user.username );
    this.props.onFetchCurrentUser( user.token );
    this.props.onChangeStatusUpdate();
  }
  updateProfileUser=(user, tolken, event)=>{
    this.props.onFetchUpdateSetting(user, tolken);
    event.preventDefault();
  }

  changeStateInfo=(user)=>{
    if(user.user){
      let image = '';
      let bio = '';
      if(user.user.image)
      {
        image = user.user.image;
      }
      if(user.user.bio)
      {
        bio = user.user.bio;
      }
     this.setState({
      user: {
        image: image,
        username: user.user.username,
        bio: bio,
        email: user.user.email,
        newpassword: ''
      },
     })
    }
    else{
      return ;
    }
  }

  logOut = (event) =>{
    this.props.onChangeSatusLogin(false);
    sessionStorage.clear();
    event.preventDefault();
    this.props.history.push({pathname: '/'});
  }

  handleuUername =(event)=>{
    this.setState({
      user:{
        ...this.state.user,
        username: event.target.value
      }
    });
  }

  handleEmail =(event)=>{
    this.setState({
      user:{
        ...this.state.user,
        email: event.target.value
      }
    })
  }

  handleImage =(event)=>{
    this.setState({
      user:{
        ...this.state.user,
        image: event.target.value
      }
    })
  }

  handleBio =(event)=>{
    this.setState({
      user:{
        ...this.state.user,
        bio: event.target.value
      }
    })
  }

  handleNewpassword =(event)=>{
    this.setState({
      user:{
        ...this.state.user,
        newpassword: event.target.value
      }
    })
  }
  render() {
    const tolken = sessionStorage.getItem('tolken');
    return (
    <div className="settings-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Your Settings</h1>
              <form>
                <fieldset>
                    <fieldset className="form-group">
                      <input className="form-control" type="text" placeholder="URL of profile picture" value={this.state.user.image} onChange={(event)=>this.handleImage(event)}/>
                    </fieldset>
                    <fieldset className="form-group">
                      <input className="form-control form-control-lg" type="text" placeholder="Your Name" value={this.state.user.username} onChange={(event)=>this.handleuUername(event)}/>
                    </fieldset>
                    <fieldset className="form-group">
                      <textarea className="form-control form-control-lg" rows="8" placeholder="Short bio about you " value={this.state.user.bio} onChange={(event)=>this.handleBio(event)} ></textarea>
                    </fieldset>
                    <fieldset className="form-group">
                      <input className="form-control form-control-lg" type="text" placeholder="Email" value={this.state.user.email} onChange={(event)=>this.handleEmail(event)}/>
                    </fieldset>
                    <fieldset className="form-group">
                      <input className="form-control form-control-lg" type="password" placeholder="New Password" value={this.state.user.newpassword} onChange={(event)=>this.handleNewpassword(event)}/>
                    </fieldset>
                    <button className="btn btn-lg btn-primary pull-xs-right" onClick={(event)=>this.updateProfileUser(this.state.user, tolken, event)}>
                      Update Settings
                    </button>
                </fieldset>
              </form>
              <hr/>
              <button className="btn btn-outline-danger" onClick={(event)=>this.logOut(event)}>
                Or click here to logout.
                </button>
            </div>
      
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
    return {
      currentUser: state.getCurrentUserReducer,
      loginstatus: state.loginStatusReducer,
      updateUser: state.updateSettingReducer
    }
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
        onFetchCurrentUser: (tolken) => {
            dispatch(fetchCurrentUserAction(tolken));
        },
        onChangeSatusLogin: (status)=>{
            dispatch(changeStatusLogin(status));
          },
        onFetchUpdateSetting: (user, tolken)=>{
            dispatch(fetchUpdateSettingAction(user, tolken));
          },
          onChangeStatusUpdate: ()=>{
            dispatch(ChangeStatusUpdateAction());
          },
    };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Setting));
