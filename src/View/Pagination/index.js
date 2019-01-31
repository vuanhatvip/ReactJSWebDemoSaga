import React, { Component } from 'react';
import {connect} from  'react-redux';
import { fetchApisAction, fetchSuccessAction, fetchFailedAction } from '../../redux/Actions/index';
import propTypes from 'prop-types';
class Pagination extends Component {
  static propTypes ={
    tagItem: propTypes.string.isRequired,
    yourfeed: propTypes.bool,
    author: propTypes.string,
    favorite: propTypes.string
  };
  constructor(props){
    super(props);
    this.state = {
	    pageNumber: [],
      pageoffset: 0,
     
    }
  }
  componentDidMount(){
    console.log('author',this.props.author)
    this.props.onFetchApiarticles(this.props.tagItem, this.state.pageoffset, this.props.yourfeed, this.props.author, this.props.favorite);
  }

  componentDidUpdate(prevProps, prevState){
    if (this.props.api !== prevProps.api) {
      this.getPageNumber(this.props.api.articlesCount);
    }
    if(this.state.pageoffset !== prevState.pageoffset){
       let pageNumberOffset = this.state.pageoffset * 10;
       this.props.onFetchApiarticles(this.props.tagItem, pageNumberOffset, this.props.yourfeed);
    }
    if(this.props.tagItem !== prevProps.tagItem){
      this.props.onFetchApiarticles(this.props.tagItem, 0, this.props.yourfeed);
    }
    if(this.props.yourfeed !== prevProps.yourfeed){
      this.props.onFetchApiarticles(this.props.tagItem, 0, this.props.yourfeed);
    }
    if(this.props.author !== prevProps.author){
      this.props.onFetchApiarticles(this.props.tagItem, 0, this.props.yourfeed, this.props.author, this.props.favorite);
    }
    if (this.props.favoriteArticle != prevProps.favoriteArticle){
      this.props.onFetchApiarticles(this.props.tagItem, this.state.pageoffset, this.props.yourfeed, this.props.author, this.props.favorite);
    }
    if(this.props.unFavoriteArticle != prevProps.unFavoriteArticle){
      this.props.onFetchApiarticles(this.props.tagItem, this.state.pageoffset, this.props.yourfeed, this.props.author, this.props.favorite);
    }
  }

  getPageNumber = (articleNumber)=>{
    let number = articleNumber/10;
    let oddnumber = articleNumber%10;
    let numberArray = [];
    if(articleNumber <= 10)
    {
      numberArray.push(0);
    }
    else 
    {
      if(oddnumber != 0){
        number += 1;
      }
      for (let i = 0; i < number; i++)
      {
        numberArray.push(i);
      }
    }
   
    this.setState({
      pageNumber: numberArray,
    });
    this.showPageNumber();
  }
  showPageNumber = () =>{
    
	  let arrayNumber;
    if(this.state.pageNumber.length)
     { 
        return arrayNumber = this.state.pageNumber.map((number2)=>{
        let pageActive;
        if (number2 === this.state.pageoffset)
        {
          pageActive = "active";
        }
        else
        {
          pageActive = "";
        }
        return(
            <li className={"page-item"+" "+pageActive} style={{cursor: "pointer"}} key={number2} onClick={()=>this.setPagenumber(number2)}>
                  <a className="page-link" >{number2 + 1}</a>
                </li>
            );
      })
    }
    else{
      return(
        <div>Loading</div>
      );
    }
  }

  setPagenumber=(number3)=>{
    this.setState((state,props)=>{
      return{pageoffset: number3}
    });

  }

  render() {
    
    return (
      <list-pagination>
      <nav>
      <ul className="pagination">
       {this.showPageNumber()}
       </ul>
      </nav>
      </list-pagination>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    api: state.apiReducers,
    favoriteArticle: state.favoriteArticleReducer,
    unFavoriteArticle: state.unfavoriteArticleReducer,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchApiarticles: (tags, offset, yourfeed, author, favorite) => {
      dispatch(fetchApisAction(tags, offset, yourfeed, author, favorite));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (Pagination);