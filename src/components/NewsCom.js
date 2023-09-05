import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class NewsCom extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9f2b11791fe24008aaa27cbddb495c58&pageSize=20";
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
    });
  }

  handlePrevClick = async () => {
    console.log("previous");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9f2b11791fe24008aaa27cbddb495c58&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
    });
  };

  handleNextClick = async () => {
    console.log("next");
    if (this.state.page + 1 > Math.ceil(this.totalResults / 20)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9f2b11791fe24008aaa27cbddb495c58&page=${
        this.state.page + 1
      }&pageSize=20`;
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles,
        totalResults: this.state.totalResults,
      });
    }
  };

  render() {
    return (
      <div className="container my-2 ">
        <h2>NewsHunts- Top Headlines</h2>

        <div className="row my-2">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage ? element.urlToImage : null}
                />
              </div>
            );
          })}
        </div>
        <div
          className="container d-flex justify-content-between"
          onClick={this.handlePrevClick}
        >
          <button
            disabled={this.state.page < 1}
            type="button"
            className="btn btn-primary"
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-primary mx-3"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default NewsCom;