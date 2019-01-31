import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTagsAction, FavoriteArticleAction, 
  UnFavoriteArticleAtion,  } from '../../../redux/Actions/index';
import Pagination from '../../Pagination/index';
import {withRouter} from 'react-router-dom';

//import './index.css'
class Home extends Component {
  constructor(props){
    super(props);
      this.state = {
       articleitem:{},
       tagsitem:"",
       toArticleDetail:false,
       loginvisible:'',
       yourfeed: false,
     };
  }

  componentWillMount(){
    let data =  sessionStorage.getItem('tolken' );
    if(data){
      this.setState({
        loginvisible: 'initial'
      })
    }
    else{
      this.setState({
        loginvisible: 'none'
      })
    }
  }

  // componentDidMount(){
  //   this.props.onFectTagsAction();
  // }

componentDidUpdate(prevProps){
  if (this.props.api != prevProps.api) {
    //this.getPageNumber(this.props.api.articlesCount);
    this.showArticles();
    this.props.onFectTagsAction();
  }
  // if (this.props.tags != prevProps.tags) {
  //   //this.getPageNumber(this.props.api.articlesCount);
  //   this.showPopularTags();
  // }
}

showArticles = ()=>{
  let articlesitem;
  //console.log(this.props.api)
  if(this.props.api.articles){
    return articlesitem = this.props.api.articles.map((article, index)=>{
      return(
        <div className="article-preview" key={index}  >
          <div className="article-meta">
            <a style={{cursor: "pointer"}} onClick={()=>this.props.history.push({pathname: '/Profile/' + article.author.username})}><img src={article.author.image} /></a>
            <div className="info">
              <a  className="author" style={{cursor: "pointer"}} onClick={()=>this.props.history.push({pathname: '/Profile/' + article.author.username})}>{article.author.username}</a>
              <span className="date">{article.updatedAt}</span>
            </div>
            <button className="btn btn-outline-primary btn-sm pull-xs-right" onClick={(event)=>this.setFavorite(article.slug, article.favorited, event)}>
              <i className="ion-heart"></i> {article.favoritesCount}
            </button>
          </div>
          <a  className="preview-link">
            <h1 style={{cursor: "pointer"}} onClick={()=>this.props.history.push({pathname: '/ArticleDetail/' + article.slug})}>{article.title}</h1>
            <p>{article.description}</p>
            <span>Read more...</span>
          </a>
        </div>
      )
    })
  }
  else{
    return(
      <div>Loading</div>
    )
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
setTagsItem=(tagslistItem)=>{
  this.setState({
    tagsitem: tagslistItem
  });
}
showPopularTags=()=>{
  let listTags;
  let tagsItems = this.props.tags.tags;
  if(tagsItems !== undefined){
    return listTags = tagsItems.map((tag, index)=>{
      return(
        <a key = {index} className="tag-pill tag-default" style={{cursor: "pointer"}} onClick={()=>this.setTagsItem(tag)}>{tag}</a>

      )
    })
  }
  else{
    return(
      <div className="tag-list">
        <a href="" className="tag-pill tag-default">Loading</a>
      </div>
    )
  }
}

ChangeYourfeedStatus = (status, event)=>{
  this.setState({
    yourfeed: status,
  });
  event.preventDefault(); 
}

  render() {
    let yourFeedActive, globalFeedActive;
    if(this.state.yourfeed == true){
      yourFeedActive = 'active';
      globalFeedActive = '';
    }
    else {
      yourFeedActive = '';
      globalFeedActive = 'active';
    }
    return (
      <div className="home-page">
        <div className="banner">
          <div className="container">
            <h1 className="logo-font" style={{cursor: "pointer"}} onClick={()=>{this.props.history.push('/')}}>conduit</h1>
            <p>A place to share your knowledge.</p>
          </div>
        </div>

        <div className="container page">
          <div className="row">

            <div className="col-md-9">
              <div className="feed-toggle">
                <ul className="nav nav-pills outline-active">
                  <li className="nav-item" style={{display: this.state.loginvisible, cursor: "pointer"}}>
                    <a className= {`nav-link ${yourFeedActive}`} onClick={(event)=>this.ChangeYourfeedStatus(true,event)}>Your Feed</a>
                  </li>
                  <li className="nav-item">
                    <a className= {`nav-link ${globalFeedActive}`} style={{cursor: "pointer"}} onClick={(event)=>this.ChangeYourfeedStatus(false,event)}>Global Feed</a>
                  </li>
                </ul>
              </div>
              <div className="tag-list">
              {this.showArticles()}
              </div>
              <Pagination tagItem={this.state.tagsitem} yourfeed={this.state.yourfeed} author={''} favorite={''}/>
            </div>

            <div className="col-md-3">
              <div className="sidebar">
                <p>Popular Tags</p>
                {this.showPopularTags()}
              </div>
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
    tags: state.tagsReducers,
    favoriteArticle: state.favoriteArticleReducer,
    unFavoriteArticle: state.unfavoriteArticleReducer,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFectTagsAction: () => {
      dispatch(fetchTagsAction());
    },
    onFavoriteArticleAction: (slug, tolken) =>{
      dispatch(FavoriteArticleAction(slug, tolken))
    },
    onUnFavoriteArticleAction: (slug, tolken) => {
      dispatch(UnFavoriteArticleAtion(slug, tolken))
    },
  };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));