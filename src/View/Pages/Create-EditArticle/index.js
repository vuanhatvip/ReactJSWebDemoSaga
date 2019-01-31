import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchTagsAction, fetchCreateArticleAction, fetchSingleArticleAction, FetchEditArticleAction } from '../../../redux/Actions/index';
import {withRouter} from 'react-router-dom';
class CreateAndEditArticlePage extends Component {
  constructor(props){
    super(props);
      this.state = {
       title:'',
       description:'',
       body:'',
       tagList:[],
     };
  }
  componentWillMount(){
    console.log(this.props.match.params.slug)
  }
  // componentDidUpdate(prevProps){
  //   if (this.props.tags != prevProps.tags) {
  //    //this.getPageNumber(this.props.api.articlesCount);
  //     this.showTaglist(this.props.tags.tags);
  //   }
  // }

  componentDidMount(){
    const tolken =  sessionStorage.getItem('tolken');
    if(tolken){
      console.log(this.props.match.params.slug)
      this.props.onFectTagsAction();
      if(this.props.location.pathname == `/EditArticle/${this.props.match.params.slug}`)
      {
        this.props.onFecthSingleArticleAction(this.props.match.params.slug);;
      }
    }
    else
    {
      this.props.history.push({pathname: '/'});
    }
    // else
    // {
    //   this.props.onFecthSingleArticleAction(this.props.match.params.slug);
    // }
  }
  componentWillReceiveProps(nextProps){
    //console.log(nextProps.currentUser);
    this.showTaglist(nextProps.tags.tags);
    this.setStateShow(nextProps.singleArticle);
  }
  setStateShow = (singleArticle) => {
    this.setState({
      title: singleArticle.article.title,
      description:singleArticle.article.description,
      body:singleArticle.article.body,
      tagList:singleArticle.article.tagList,
    })
  }
  handleTitlle =(event)=>{
    this.setState({
      title: event.target.value
    })
  }
  handleDescription =(event)=>{
    this.setState({
      description: event.target.value
    })
  }
  handleBody =(event)=>{
    this.setState({
      body: event.target.value
    })
  }
  handleTaglist =(event)=>{
    // this.setState({
    //   body: event.target.value
    // })
    return;
  }
  showTaglist =(tags)=>{
    //console.log('tgas create',tags)
    let listTags;
    if(this.props.location.pathname == '/CreateArticle'){
      if(tags.tags){
        return listTags = tags.tags.map((tag, index)=>{
          return(
            
            <button className="btn btn-outline-primary btn-sm pull-xs-right" key={index} onClick={(event)=>this.pushAndSetactiveTag( tag,  event)} >
                {tag}
              </button>
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
    else{
      return (<div></div>)
    }
  }
  pushAndSetactiveTag = ( tag, event)=>{
    let array = this.state.tagList
    if(this.state.tagList.includes(tag)){
      var indexofarr = this.state.tagList.indexOf(tag);
        array.splice(indexofarr, 1)
    }
    else
    {
      array.push(tag);
    }
    this.setState({
      tagList: array
    })
    console.log(this.state.tagList);
    event.preventDefault();
  }

  createArticleOrEditARticle = (event)=>{
    const tolken =  sessionStorage.getItem('tolken');
    if(this.state.title && this.state.description && this.state.body)
    {
      if(this.props.location.pathname == '/CreateArticle')
      { 
        this.props.onFetchCreateArticleAction(this.state.title, this.state.description, this.state.body, this.state.tagList, tolken);  
      }
      else{
        this.props.onFetchEditARticleAction(this.state.title, this.props.match.params.slug, this.state.description, this.state.body, tolken)
      }
    }
    else
      alert('Title or Description or Body is missing');
    event.preventDefault(); 
  }
  render() {
    let valuetaglist ;
    if(this.state.tagList){
      valuetaglist = this.state.tagList;
    }
    else{
      valuetaglist = '[]'
    }

    return (
        <div className="editor-page">
        <div className="container page">
          <div className="row">
      
            <div className="col-md-10 offset-md-1 col-xs-12">
              <form>
                <fieldset>
                  <fieldset className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="Article Title" value={this.state.title} onChange={(event)=>this.handleTitlle(event)}/>
                  </fieldset>
                  <fieldset className="form-group">
                      <input type="text" className="form-control" placeholder="What's this article about?" value={this.state.description} onChange={(event)=>this.handleDescription(event)}/>
                  </fieldset>
                  <fieldset className="form-group">
                      <textarea className="form-control" rows="8" placeholder="Write your article (in markdown)" value={this.state.body} onChange={(event)=>this.handleBody(event)}></textarea>
                  </fieldset>
                  <fieldset className="form-group">
                      <input type="text" className="form-control" placeholder="Enter tags" value={valuetaglist} disabled onChange={(event)=>this.handleTaglist(event)}/>
                      <div className="tag-list">{this.showTaglist(this.props.tags)}         </div>
                  </fieldset>
                  <button className="btn btn-lg pull-xs-right btn-primary" type="button" onClick={(event)=>this.createArticleOrEditARticle(event)}>
                      Publish Article
                  </button>
                </fieldset>
              </form>
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
    createArticle: state.createArticleReducer,
    singleArticle: state.singleArticleReducers,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFectTagsAction: () => {
      dispatch(fetchTagsAction());
    },
    onFetchCreateArticleAction: (title, description, body, tagList, tolken)=>{
      dispatch(fetchCreateArticleAction(title, description, body, tagList, tolken))
    },
    onFecthSingleArticleAction: (slug) => {
      dispatch(fetchSingleArticleAction(slug));
    },
    onFetchEditARticleAction: (title, slug,description, body, tolken) => {
      dispatch(FetchEditArticleAction(title, slug,description, body, tolken))
    }
  };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)( CreateAndEditArticlePage));
