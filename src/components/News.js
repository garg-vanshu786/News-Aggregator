import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  static defaultProps = {
    country :'in',
    pageSize: 8,
    category: 'general',
  }

  static propTypes = {
     country: PropTypes.string,
     pageSize: PropTypes,
     category: PropTypes.string,
  }

  capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

    constructor(props){
        super(props)
        console.log("hello i am a constr frm news component");
        this.state={
               articles: [],
               loading: false,
               page:1,
              totalResults: 0
              }
              document.title=`${this.capitalizeFirstLetter(this.props.category)} - ENews`; 
               
        }

        async updateNews(){
          this.props.setProgress(10);
          const url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bab9194eba834eb292750b214913fdf1&page=${this.state.page}&pagesize=${this.props.pageSize}`;
          this.setState({loading: true});
          let data = await fetch(url);
          this.props.setProgress(30);
          let parsedData = await data.json()
          this.props.setProgress(70);
          // console.log(parsedData);
          this.setState({ articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false })
          this.props.setProgress (100);



        }



        async componentDidMount(){
          // console.log("cdm");
          // let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8a29f60a84ca468eb8d3ab5b1e0dd6f7&page=1&pagesize=${this.props.pageSize}`;
          // this.setState({loading: true});
          // let data = await fetch(url);
          // let parsedData = await data.json()
          // console.log(parsedData);
          // this.setState({ articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false })
            this.updateNews();
        }

      handlePrevClick =  async ()=>{ 
        // console.log("Previous");

        // let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8a29f60a84ca468eb8d3ab5b1e0dd6f7&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
        // this.setState({loading: true});
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // console.log(parsedData);
       
        // this.setState({
        //   page: this.state.page-1,
        //   articles:parsedData.articles,
        //   loading: false
        // })
        this.setState({page:this.state.page - 1})
        this.updateNews();

    }

      handleNextClick = async  ()=>{
    //     console.log("Next");
    //     if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){

        
    //     let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8a29f60a84ca468eb8d3ab5b1e0dd6f7&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
    //    this.setState({loading: true});
    //     let data = await fetch(url);
    //     let parsedData = await data.json()
    //     // console.log(parsedData);
    //     this.setState({
    //       page: this.state.page+1,
    //       articles:parsedData.articles,
    //       loading: false
    //     })
    this.setState({page:this.state.page + 1})
    this.updateNews();

    // }
  }

   fetchMoreData = async () => {
    this.setState({page: this.state.page + 1})
    const url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bab9194eba834eb292750b214913fdf1&page=${this.state.page}&pagesize=${this.props.pageSize}`;
         
    // this.setState({loading: true});
          let data = await fetch(url);
          let parsedData = await data.json()
          console.log(parsedData);
          this.setState({ articles: this.state.articles.concat(parsedData.articles),totalResults:parsedData.totalResults })
          this.updateNews();
  };  
  
    
  render() {
    console.log("render")
    return (
        <div>
          <h1 className="text-center" style={{margin: '35px 0px;'}} >E-NewsTeller Top {this.capitalizeFirstLetter(this.props.category)} HeadLines</h1>   
          { this.state.loading && <Spinner/>}  
            <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner/>}>
              
              

              <div className="container">

              
              <div className="row">
              {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                    <NewsItem  title = {element.title?element.title.slice(0,45):""} description= {element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} 
                    source={element.source.name}/>
                    </div>
              })}
                  {/* // in bootstrap there is 4*3 column so thats why we write 4 so that it occupy space */}
            
            </div>
            </div>

        </InfiniteScroll>
        
        </div> 
    )
  }
}

export default News