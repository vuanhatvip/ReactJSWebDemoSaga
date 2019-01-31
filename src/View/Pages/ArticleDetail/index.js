import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchSingleArticleAction, fetchCommentsAction, fetchProfileUserAction, FavoriteArticleAction, 
  UnFavoriteArticleAtion, FetchFollowAction, FetchUnFollowAction,
   AddCommentAction,  DeleteCommentAction, DeleteArticleAction} from '../../../redux/Actions/index';
import {withRouter} from 'react-router-dom';
class ArticleDetail extends Component {

  constructor(props){
    super(props);
      this.state = {
        body: '',
     };
  }

  componentDidMount(){
    this.props.onFecthSingleArticleAction(this.props.match.params.slug);
    this.props.onFecthCommentsAction(this.props.match.params.slug);
  }

  componentDidUpdate(prevProps){
    
    if(this.props.singleArticle != prevProps.singleArticle){
     this.shownSingleArticle();
     this.props.onFecthProfileUserAction(this.props.singleArticle.article.author.username);
     this.showBodyARticle()
    }
    if (this.props.comments != prevProps.comments)
      this.showComments();
    if (this.props.favoriteArticle != prevProps.favoriteArticle){
      this.props.singleArticle.article = this.props.favoriteArticle.article;
      this.showAuthorLicense();
      this.shownSingleArticle();
    }
    if(this.props.unFavoriteArticle != prevProps.unFavoriteArticle){
      this.props.singleArticle.article = this.props.unFavoriteArticle.article ;
      this.showAuthorLicense();
      this.shownSingleArticle();
    }
    if(this.props.followUser != prevProps.followUser){
      this.props.singleArticle.article.author = this.props.followUser.profile;
      this.showAuthorLicense();
      this.shownSingleArticle();
    }
    if(this.props.unFollowUser != prevProps.unFollowUser){
      this.props.singleArticle.article.author = this.props.unFollowUser.profile;
      this.showAuthorLicense();
      this.shownSingleArticle();
    }
    if(this.props.addComment != prevProps.addComment){
      this.props.onFecthCommentsAction(this.props.match.params.slug);
    }
    if(this.props.deleteComment != prevProps.deleteComment){
      this.props.onFecthCommentsAction(this.props.match.params.slug);
    }
  }
  shownSingleArticle = ()=>{
    let username = sessionStorage.getItem('username');
    let usernamevisible = '';
    let usernamunvisbile = '';
    // let favoriteSatus, followStatus;
    if (this.props.singleArticle.article){
      if(username == this.props.singleArticle.article.author.username)
      {
        usernamevisible = '';
        usernamunvisbile = 'none';
      }
      else{
        usernamevisible = 'none';
        usernamunvisbile = '';
      }
      // if(this.props.singleArticle.article.favorited == false) {
      //   favoriteSatus = 'Favorite';
      // }
      // if(this.props.singleArticle.article.favorited == true) {
      //   favoriteSatus = 'UnFavorite';
      // }
      // if(this.props.singleArticle.article.author.following == false) {
      //   followStatus = 'Follow'
      // }
      // if(this.props.singleArticle.article.author.following == true){
      //   followStatus = 'Un Follow'
      // }
       return (
            <div className="banner">
            <div className="container">
              <h1>{this.props.singleArticle.article.title}</h1>
              <div className="article-meta">
                <a href=""><img src={this.props.singleArticle.article.author.image} /></a>
                <div className="info">
                  <a href="" className="author">{this.props.singleArticle.article.author.username}</a>
                  <span className="date">{this.props.singleArticle.article.updatedAt}</span>
                </div>

                <button className="btn btn-sm btn-outline-secondary" style={{display: usernamevisible}} onClick={()=>this.props.history.push({pathname: '/EditArticle/' + this.props.singleArticle.article.slug})}>
                  <i className="ion-plus-round"></i>
                  &nbsp;
                  Edit this Article<span className="counter"></span>
                </button>
                &nbsp;
                <button className="btn btn-sm btn-outline-danger"  style={{display: usernamevisible}} onClick={(event)=>this.deleteArticle(this.props.match.params.slug, event)}>
                  <i className="ion-heart"></i>
                  &nbsp;
                Delete Article <span className="counter"></span>
                </button>

                <button className="btn btn-sm btn-outline-secondary" style={{display: usernamunvisbile}} onClick={(event)=>this.setFollow(this.props.singleArticle.article.author.username, this.props.singleArticle.article.author.following, event)}>
                  <i className="ion-plus-round"></i>
                  &nbsp;
                  Follow {this.props.singleArticle.article.author.username} <span className="counter"></span>
                </button>
                &nbsp;&nbsp;
                <button className="btn btn-sm btn-outline-primary"style={{display: usernamunvisbile}} onClick={(event)=>this.setFavorite(this.props.singleArticle.article.slug, this.props.singleArticle.article.favorited, event)}>
                  <i className="ion-heart"></i>
                  &nbsp;
                  Favorite Post <span className="counter">({this.props.singleArticle.article.favoritesCount})</span>
                </button>
              </div>
        
            </div>
          </div>
          );
        }
      else{
        return ( <div>Loading</div>)
      }
  }

  deleteArticle =(slug, event)=>{
    const tolken =  sessionStorage.getItem('tolken');
    this.props.onFetchDeleteArticleAction(slug, tolken);
    event.preventDefault();
    this.props.history.push({pathname: '/'});
  }


  deleteComment = (slug, id, event) => {
    const tolken =  sessionStorage.getItem('tolken');
    if(tolken){
      this.props.onFetchDeleteCommentAction(slug, id, tolken);
    }
    else{
      this.props.history.push({pathname: '/Login'});
    }
    event.preventDefault();
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

  setFavorite = (slug, status,event) =>{
    const tolken =  sessionStorage.getItem('tolken');
    if(tolken){
      if(status == false){
        console.log(status)
        this.props.onFavoriteArticleAction(slug, tolken);
      }
      if(status == true) {
        
        this.props.onUnFavoriteArticleAction(slug, tolken);
      }
    }
    else{
      this.props.history.push({pathname: '/Login'});
    }
    event.preventDefault();
  }

  showBodyARticle = ()=>{
    if (this.props.singleArticle.article){
      return (
          <div className="col-md-12">
          <p>
            {this.props.singleArticle.article.body}
          </p>
          {this.showTaglist()}
        </div>
         );
       }
     else{
       return ( <div>Loading</div>)
     }
  }

  addComment( event){
    const tolken =  sessionStorage.getItem('tolken');
    if(tolken) {
      if(this.state.body){
        this.props.onFetchAddCommentACtion(this.props.match.params.slug, this.state.body, tolken)
      }
      else{
        alert('Please fill the comment section')
      }
    }
    else {
      this.props.history.push({pathname: '/Login'});
    }
    event.preventDefault();
  }

  handleBody=(event)=>{
    this.setState({
      body: event.target.value
    });
  }
  showComments = ()=>{
    let username = sessionStorage.getItem('username');
    let commentsDetail;
    if(this.props.comments.comments){
      return commentsDetail = this.props.comments.comments.map((commentDetail)=>{
        if(this.props.singleArticle.article.author.username == username){
            return(
              <div className="card" key={commentDetail.id}>
              <div className="card-block">
                <p className="card-text">{commentDetail.body}.</p>
              </div>
              <div className="card-footer">
                <a href="" className="comment-author">
                  <img src={commentDetail.author.image} className="comment-author-img" />
                </a>
                &nbsp;
                <a href="" className="comment-author">{commentDetail.author.username}</a>
                <span className="date-posted">{commentDetail.updatedAt}</span>
                <span className="mod-options">
                <i className="ion-trash-a" onClick={(event)=>this.deleteComment(this.props.match.params.slug, commentDetail.id, event)}></i>
              </span>
              </div>
            </div>
            )
          }
        else {
          if(commentDetail.author.username == username)
          {
            return(
              <div className="card" key={commentDetail.id}>
              <div className="card-block">
                <p className="card-text">{commentDetail.body}.</p>
              </div>
              <div className="card-footer">
                <a href="" className="comment-author">
                  <img src={commentDetail.author.image} className="comment-author-img" />
                </a>
                &nbsp;
                <a href="" className="comment-author">{commentDetail.author.username}</a>
                <span className="date-posted">{commentDetail.updatedAt}</span>
                <span className="mod-options">
                <i className="ion-trash-a" onClick={(event)=>this.deleteComment(this.props.match.params.slug, commentDetail.id, event)}></i>
              </span>
              </div>
            </div>
            )
          }
          else {
            return(
                <div className="card" key={commentDetail.id}>
                <div className="card-block">
                  <p className="card-text">{commentDetail.body}.</p>
                </div>
                <div className="card-footer">
                  <a href="" className="comment-author">
                    <img src={commentDetail.author.image} className="comment-author-img" />
                  </a>
                  &nbsp;
                  <a href="" className="comment-author">{commentDetail.author.username}</a>
                  <span className="date-posted">{commentDetail.updatedAt}</span>
                </div>
              </div>
            )
          }
        }
      })
    }
    else {
      return <div>Loading</div>
    }
  }

  showTaglist = ()=>{
    let tagitem
    if ( this.props.singleArticle.article.tagList){
      return tagitem = this.props.singleArticle.article.tagList.map((tag, index)=>{
        return(
        <ul className="tag-list" key = {index}>
              <li className="tag-default tag-pill tag-outline " >
                {tag}
              </li>
            </ul>
        )
      })
    }else{
      return (<div>
        </div>)
    }
  }

  showAuthorLicense =()=>{
    let username = sessionStorage.getItem('username');
    let usernamevisible = '';
    let usernamunvisbile = '';
    if (this.props.singleArticle.article){
      if(username == this.props.singleArticle.article.author.username)
      {
        usernamevisible = '';
        usernamunvisbile = 'none';
      }
      else{
        usernamevisible = 'none';
        usernamunvisbile = '';
      }
      return (
            <div className="article-actions">
            <div className="article-meta">
              <a href="profile.html"><img src={this.props.singleArticle.article.author.image} /></a>
              <div className="info">
                <a href="" className="author">{this.props.singleArticle.article.author.username}</a>
                <span className="date">{this.props.singleArticle.article.updatedAt}</span>
              </div>
      
                <button className="btn btn-sm btn-outline-secondary" style={{display: usernamevisible}} onClick={()=>this.props.history.push({pathname: '/EditArticle/' + this.props.singleArticle.article.slug})}>
                <i className="ion-plus-round"></i>
                &nbsp;
                Edit this Article<span className="counter"></span>
              </button>
              &nbsp;
              <button className="btn btn-sm btn-outline-danger"  style={{display: usernamevisible}} onClick={(event)=>this.deleteArticle(this.props.match.params.slug, event)}>
                <i className="ion-heart"></i>
                &nbsp;
              Delete Article <span className="counter"></span>
              </button>

              <button className="btn btn-sm btn-outline-secondary" style={{display: usernamunvisbile}} onClick={(event)=>this.setFollow(this.props.singleArticle.article.author.username, this.props.singleArticle.article.author.following, event)}>
                <i className="ion-plus-round"></i>
                &nbsp;
                Follow {this.props.singleArticle.article.author.username} <span className="counter"></span>
              </button>
              &nbsp;
              <button className="btn btn-sm btn-outline-primary" style={{display: usernamunvisbile}} onClick={(event)=>this.setFavorite(this.props.singleArticle.article.slug, this.props.singleArticle.article.favorited, event)}>
                <i className="ion-heart"></i>
                &nbsp;
                Favorite Post <span className="counter">({this.props.singleArticle.article.favoritesCount})</span>
              </button>
            </div>
          </div>
         );
       }
     else{
       return ( <div>Loading</div>)
     }
  }

  render() {
   //console.log("fetchrender",this.props.singleArticle)
    return (
        <div className="article-page">
        {this.shownSingleArticle()}
        <div className="container page">
         
          <div className="row article-content">
          
            <div className="col-md-12">
              {this.showBodyARticle()}
            </div>
          </div>
      
          <hr />
          {this.showAuthorLicense()}
      
          <div className="row">
      
            <div className="col-xs-12 col-md-8 offset-md-2">
      
              <form className="card comment-form">
                <div className="card-block">
                  <textarea value={this.state.body} onChange={(event)=>this.handleBody(event)} className="form-control" placeholder="Write a comment..." rows="3"></textarea>
                </div>
                <div className="card-footer">
                  <img src={this.props.singleArticle.article? this.props.singleArticle.article.author.image: ""} className="comment-author-img" />
                  <button className="btn btn-sm btn-primary" onClick={(event)=>this.addComment(event)}>
                   Post Comment
                  </button>
                </div>
              </form>
                {this.showComments()}
              
            </div>
      
          </div>
      
        </div>
      
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    singleArticle: state.singleArticleReducers,
    comments: state.commentsReducers,
    profileUser: state.profileUserReducer,
    favoriteArticle: state.favoriteArticleReducer,
    unFavoriteArticle: state.unfavoriteArticleReducer,
    followUser: state.followReducer,
    unFollowUser: state.unFollowReducer,
    addComment: state.addCommentReducer,
    deleteComment: state.deleteCommentReducer,
    deleteArticle: state.deleteArticleReducer
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFecthSingleArticleAction: (slug) => {
      dispatch(fetchSingleArticleAction(slug));
    },
    onFecthCommentsAction: (slug) => {
      dispatch(fetchCommentsAction(slug));
    },
    onFecthProfileUserAction: (username) => {
      dispatch(fetchProfileUserAction(username))
    },
    onFavoriteArticleAction: (slug, tolken) =>{
      dispatch(FavoriteArticleAction(slug, tolken))
    },
    onUnFavoriteArticleAction: (slug, tolken) => {
      dispatch(UnFavoriteArticleAtion(slug, tolken))
    },
    onFetchFollowAction: (username, tolken) =>{
      dispatch(FetchFollowAction(username, tolken))
    },
    onFetchUnFollowAction: (username, tolken) =>{
      dispatch(FetchUnFollowAction(username, tolken))
    },
    onFetchAddCommentACtion:(slug, body, tolken) =>{
      dispatch(AddCommentAction(slug, body, tolken))
    },
    onFetchDeleteCommentAction: (slug, id, tolken) =>{
      dispatch(DeleteCommentAction(slug, id, tolken))
    },
    onFetchDeleteArticleAction: (slug, tolken)=>{
      dispatch(DeleteArticleAction(slug, tolken))
    },
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArticleDetail));