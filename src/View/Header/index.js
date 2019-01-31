import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchCurrentUserAction} from '../../redux/Actions/index';
class Navbar extends Component {
  constructor(props){
    super(props);
      this.state = {
        home: '',
        setting:'',
        signIn: '',
        signUp: '',
        newPost: '',
        username: '',
     };
  }
  componentWillMount(){
    
  }
  componentDidUpdate(prevProps){
    if(this.props.loginStatusReducer != prevProps.loginStatusReducer){
      this.changeLoginVisible();
      this.showUsername();
    }
    if(this.props.statusUpdateProfile != prevProps.statusUpdateProfile){
      this.changeLoginVisible();
      this.showUsername();
    }
  }
  changeLoginVisible =()=>{
    let tolken = sessionStorage.getItem('tolken');
    if(tolken){
      return {
        logined: '',
        unlogin: 'none',
      }
    }
    else{
      return {
        logined: 'none',
        unlogin: '',
      }
    }
  }
  setPushAndActive = (pathname, username)=>{
    if(username)
    {
      this.props.history.push({pathname: pathname + username});
      this.activePathName(pathname, username);
    }
    else{
      this.props.history.push({pathname: pathname});
      this.activePathName(pathname, '');
    }
  }
  activePathName = (pathname, username)=>{
    //this.props.history.push({pathname: pathname});
    switch(pathname){
      case '/':
       return{
          home: 'active',
          setting:'',
          signIn: '',
          signUp: '',
          newPost: '',
          username: '',
        }; 
      case '/Login':
      return{
          home: '',
          setting:'',
          signIn: 'active',
          signUp: '',
          newPost: '',
          username: '',
        };
      case '/Setting':
        return{
          home: '',
          setting:'active',
          signIn: '',
          signUp: '',
          newPost: '',
          username: '',
        };
      case '/CreateArticle':
        return {
          home: '',
          setting:'',
          signIn: '',
          signUp: '',
          newPost: 'active',
          username: '',
        };
      case '/Profile/' + username:
        return{
          home: '',
          setting:'',
          signIn: '',
          signUp: '',
          newPost: '',
          username: 'active',
        }
      case '/Registration':
        return {
          home: '',
          setting:'',
          signIn: '',
          signUp: 'active',
          newPost: '',
          username: '',
        }
      default :
        return {
          home: '',
          setting:'',
          signIn: '',
          signUp: '',
          newPost: '',
          username: '',
        };
    }
  }
  showUsername =()=>{
    let username = sessionStorage.getItem('username');
    if (username){
      return username
    }
    else return
  }

  render(){
    let user = this.activePathName(this.props.location.pathname, this.showUsername());
    let login = this.changeLoginVisible();
    return(
        <nav className="navbar navbar-light">
        <div className="container">
          <a className="navbar-brand" style={{cursor: "pointer"}} onClick={()=>this.setPushAndActive('/')}>conduit</a>
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              <a className={`nav-link ${user.home}`} style={{cursor: "pointer"}} onClick={()=>this.setPushAndActive('/')}>Home</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${user.newPost}`} style={{cursor: "pointer", display: login.logined}} onClick={()=>this.setPushAndActive('/CreateArticle')}>
                <i className="ion-compose"></i>&nbsp;New Post
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${user.setting}`} style={{cursor: "pointer",  display: login.logined}} onClick={()=> this.setPushAndActive('/Setting')}>
                <i className="ion-gear-a"></i>&nbsp;Settings
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${user.signIn}`} onClick={()=> this.setPushAndActive('/Login')} style={{cursor: "pointer",  display: login.unlogin}}>Sign in</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${user.signUp}`} onClick={()=> this.setPushAndActive('/Registration', '')} style={{cursor: "pointer",  display: login.unlogin}}>Sign up</a>
            </li>
            <li className="nav-item">
            <a className={`nav-link ${user.username}`} style={{cursor: "pointer",  display: login.logined}} onClick={()=> this.setPushAndActive('/Profile/', this.showUsername())}>{this.showUsername()}</a>
          </li>
          </ul>
        </div>
      </nav>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    loginstatus: state.loginStatusReducer,
    updateUser: state.updateSettingReducer,
    statusUpdateProfile: state.changeStatusReducers,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));