import React, { Component } from 'react';
import {connect} from 'react-redux';
import Pagination from '../../Pagination/index';
import {fetchProfileUserAction, FetchFollowAction, FetchUnFollowAction, FavoriteArticleAction, 
  UnFavoriteArticleAtion} from '../../../redux/Actions/index';
import {withRouter} from 'react-router-dom';
class ProfilePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      yourArticle: this.props.match.params.username,
      favoriteArticle:'',
      yourarticleActive: 'active',
      FavoriteArticleActive: '',
    }
  }
  componentDidMount(){
      this.props.onFetchProfileUser(this.props.match.params.username);
  }
  componentWillReceiveProps(nextProps){
    this.showProfileUser(nextProps.profileUser);
    this.showArticle(nextProps.api);
  }

  componentDidUpdate(prevProps){
    if(this.props.followUser != prevProps.followUser){
      this.props.onFetchProfileUser(this.props.match.params.username);
    }
    if(this.props.unFollowUser != prevProps.unFollowUser){
      this.props.onFetchProfileUser(this.props.match.params.username);
    }
  }

  showArticle = (articles)=>{
    const currentUser = sessionStorage.getItem('username');
    let userdisable = '';
    let articlesitem;
    //console.log(this.props.api)
    if(articles.articles){
      return articlesitem = articles.articles.map((article, index)=>{
        if(article.author.username == currentUser)
      {
         userdisable = 'disabled';
       
      }
      else {
        userdisable = '';
      }
        return(
          <div className="article-preview" key={index}  >
            <div className="article-meta">
              <a style={{cursor: "pointer"}}><img src={article.author.image} /></a>
              <div className="info">
                <a  className="author" style={{cursor: "pointer"}}>{article.author.username}</a>
                <span className="date">{article.updatedAt}</span>
              </div>
              <button className="btn btn-outline-primary btn-sm pull-xs-right" disabled = {userdisable} onClick={(event)=>this.setFavorite(article.slug, article.favorited, event)}>
                <i className="ion-heart" ></i> {article.favoritesCount}
              </button>
            </div>
            <a  className="preview-link">
              <h1 style={{cursor: "pointer"}} onClick={()=>this.props.history.push({pathname: '/ArticleDetail/' + article.slug})}>{article.title}</h1>
              <p>{article.description}</p>
              <span>Read more...</span>
              <ul className="tag-list">
                {this.showArticleTaglist(article.tagList)}
              </ul>
            </a>
          </div>
        )
      })
    }
    else{
      return <div>No Article yet</div>
    }
  }

  setFavorite = (slug, status,event) =>{

    const tolken =  sessionStorage.getItem('tolken');
    if(tolken){
      if(status == false){
        this.props.onFavoriteArticleAction(slug, tolken);
      }
      else {
        this.props.onUnFavoriteArticleAction(slug, tolken);
      }
    }
    else{
      this.props.history.push({pathname: '/Login'});
    }
    event.preventDefault();
  }
  showProfileUser=(user)=>{
    const currentUser = sessionStorage.getItem('username');
    let uservisible = '';
    let notuservisible = '';
    let follow;
    //console.log(user);
    if(user.profile){
      if(user.profile.username == currentUser)
      {
        uservisible = '';
        notuservisible= 'none';
      }
      else {
        uservisible = 'none';
        notuservisible= '';
      }
      if(user.profile.following == false)
      {
        follow = 'Follow';
      }
      else 
      {
        follow = 'Unfollow';
      }
      return (
        <div className="col-xs-12 col-md-10 offset-md-1">
              <img src={user.profile.image} className="user-img" />
              <h4>{user.profile.username}</h4>
              <p>
                {user.profile.bio}
              </p>
              <button className="btn btn-sm btn-outline-secondary action-btn" style={{display:uservisible}}>
                <i className="ion-plus-round"></i>
                &nbsp;
                Edit Setting Profile
              </button>
              <button className="btn btn-sm btn-outline-secondary action-btn" style={{display:notuservisible}} onClick={(event)=>this.setFollow(user.profile.username, user.profile.following, event)}>
                <i className="ion-plus-round"></i>
                &nbsp;
                {follow} {user.profile.username}
              </button>
        </div>
      );
    }
    else{
      return(
        <div>Loading</div>
      )
    }
  }
  setFollow = (username, status, event) =>{
    const tolken =  sessionStorage.getItem('tolken');
    if(tolken){
      if(status == false){
        this.props.onFetchFollowAction(username, tolken);
      }
      else {
        this.props.onFetchUnFollowAction(username, tolken);
      }
    }
    else{
      this.props.history.push({pathname: '/Login'});
    }
    event.preventDefault();
  }
  showArticleTaglist =(articletaglist)=>{
    let tagitem
    if(articletaglist){
      return tagitem = articletaglist.map((tag, index)=>{
        return (
                <li className="tag-default tag-pill tag-outline" key = {index}>{tag}</li>
        );
      })
    }
    else {
      return <div></div>
    }
  }
  setShowlistUserArticles = (event)=>{
    this.setState({
      yourArticle: this.props.match.params.username,
      favoriteArticle:'',
      yourarticleActive: 'active',
      FavoriteArticleActive: '',
    })
    event.preventDefault();
  }

  setShowlistUserFavoriteArticles = (event)=>{
    this.setState({
      yourArticle: '',
      favoriteArticle: this.props.match.params.username,
      yourarticleActive: '',
      FavoriteArticleActive: 'active',
    })
    event.preventDefault();
  }

  render(){
    return (
        <div className="profile-page">
      <div className="user-info">
        <div className="container">
          <div className="row">
            {this.showProfileUser(this.props.profileUser)}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">

          <div className="col-xs-12 col-md-10 offset-md-1">
            <div className="articles-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <a className={`nav-link ${this.state.yourarticleActive}`}  style={{cursor: "pointer"}} onClick={(event)=>this.setShowlistUserArticles(event)}>My Articles</a>
                </li>
                <li className="nav-item">
                  <a className= {`nav-link ${this.state.FavoriteArticleActive}`}  style={{cursor: "pointer"}} onClick={(event)=>this.setShowlistUserFavoriteArticles(event)} >Favorited Articles</a>
                </li>
              </ul>
            </div>
            {this.showArticle(this.props.api)}
            <Pagination tagItem={''} yourfeed={false} author={this.state.yourArticle} favorite={this.state.favoriteArticle}/>

          </div>

        </div>
      </div>

    </div>
    );
 }
}
const mapStateToProps = (state) => {
  return {
    api: state.apiReducers,
    profileUser: state.profileUserReducer,
    followUser: state.followReducer,
    unFollowUser: state.unFollowReducer,
    favoriteArticle: state.favoriteArticleReducer,
    unFavoriteArticle: state.unfavoriteArticleReducer,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchProfileUser: (username) => {
      dispatch(fetchProfileUserAction(username));
    },
    onFetchFollowAction: (username, tolken) =>{
      dispatch(FetchFollowAction(username, tolken))
    },
    onFetchUnFollowAction: (username, tolken) =>{
      dispatch(FetchUnFollowAction(username, tolken))
    },
    onFavoriteArticleAction: (slug, tolken) =>{
      dispatch(FavoriteArticleAction(slug, tolken))
    },
    onUnFavoriteArticleAction: (slug, tolken) => {
      dispatch(UnFavoriteArticleAtion(slug, tolken))
    },
  };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfilePage));
