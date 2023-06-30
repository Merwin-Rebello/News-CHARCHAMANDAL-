import React, { Component } from "react";
import Newsitems from "./Newsitems";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";

export class Newscomponent extends Component {
   static defaultProps={
    country:"in",
    pageSize:1,
    category:"general",
   }
    static propTypes={
      country:PropTypes.string,
      pageSize:PropTypes.number,
      category:PropTypes.string,
    }
  constructor(props){
    super(props);
    console.log("this is a news component constructor")
    this.state ={
      articles: [],
      loading: false,
      page:1,  
      // totalResults:0
    }
    document.title=`${this.props.category}-CharchaMandal`;
  }

  async componentDidMount(){
    this.props.setProgress(10)
    let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=1$pageSize=10`;
    this.setState({loading:true});
    let data= await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles ,
      totalResults:parsedData.totalResults,
       loading:false
  })
   this.props.setProgress(100)
  }

  handleprevclick =async()=>{
  this.props.setProgress(10);
  console.log("previous");
  let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
  this.setState({loading:true});
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);
  this.setState({
    page: this.state.page - 1,
    articles:parsedData.articles,
    loading:false
  })
  this.props.setProgress(100);
  }
  handlenextclick =async()=>{
    this.props.setProgress(10);
    console.log("next");
    if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
    let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      page : this.state.page + 1,
      articles:parsedData.articles,
      loading:false
    })
   }
   this.props.setProgress(100);
  } 
  // fetchMoreData = async () => {
  //    this.setState({page:this.state.page + 1})
  //    this.updatenews() this is bascially the function for fetching for instead of every time writing.
  // let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=49d94cd12c7e47bc87ddd9c9e2a7d6a3&page=1$pageSize=10`;
  // this.setState({loading:true});
  // let data= await fetch(url);
  // let parsedData = await data.json()
  // console.log(parsedData);
  // this.setState({
  //   articles: this.state.articles.concat.parsedData.articles ,
  //   totalResults:parsedData.totalResults,
  //    loading:false
// })
  // };
  render() {
    return (
      <div className="container my-3">
        <h2>Charchamandal-Topnews On {this.props.category} </h2>
        {this.state.loading && <Spinner/>}
        {/* <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        > */}
        <div className="row"> 
          {!this.state.loading && this.state.articles.map ( (element)=>{
            return <div className="col-lg-4 mb-3" key={element.url} >
                   <Newsitems  title={element.title} description={element.description} imageurl={element.urlToImage} 
                   newsURL={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                   </div>
          })}
        </div>
        {/* </InfiniteScroll> */}
        <div className="container d-flex justify-content-between ">
          <button disabled={this.state.page<=1}type="button" className="btn btn-dark" onClick={this.handleprevclick}> &larr; PREVIOUS</button>
          <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark" onClick={this.handlenextclick}>NEXT &rarr; </button>
        </div>
      </div>
    );
  }
}

export default Newscomponent;
