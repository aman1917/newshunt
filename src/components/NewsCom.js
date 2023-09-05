import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";

export class NewsCom extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async updateState() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9f2b11791fe24008aaa27cbddb495c58&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ loading: true });
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateState();
  }

  handlePrevClick = async () => {
    // console.log("previous");
    this.setState({ page: this.parseData.page - 1 });
    this.updateState();
  };

  handleNextClick = async () => {
    // console.log("next");
    this.setState({ page: this.parseData.page + 1 });
    this.updateState();
  };

  render() {
    return (
      <div className="container my-2 ">
        <h2 className="text-center" style={{ margin: "35px 0px" }}>
          NewsHunts- Top Headlines
        </h2>
        <div className="row my-2">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage ? element.urlToImage : null}
                    author={element.author ? element.author : "Unknown"}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          ;
        </div>
        <div
          className="container d-flex justify-content-between"
          onClick={this.handlePrevClick}
        >
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-primary"
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.totalResults / this.props.pageSize)
            }
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
