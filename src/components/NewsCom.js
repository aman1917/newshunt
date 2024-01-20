import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";

const NewsCom = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState([]);

  const CapFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateState = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=$
    {props.country}&category=${props.category}&apiKey=${props.apiKey}&page=
    ${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(70);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${CapFirst(props.category)} -NewsHunts`;
    updateState();
    //eslist-disable-next-line
  }, []);

  // const handlePrevClick = async () => {
  //   setPage(page-1);
  //   updateState();
  // };

  // const handleNextClick = async () => {
  //   setPage(page-1);
  //   updateState();
  // };

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=$
    {props.country}&category=${props.category}&apiKey=$
    {props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
  };

  console.log(articles.length);
  return (
    <>
      <h2
        className="text-center"
        style={{ margin: "35px 0px", marginTop: "90px" }}
      >
        NewsHunts- Top {CapFirst(props.category)} Headlines
      </h2>
      {loading && <Loading />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Loading />}
      >
        <div className="container">
          <div className="row my-2">
            {articles.map((element) => {
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
                    source={element.source.name}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
            ;
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-primary"
            onClick={handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              state.page + 1 >
              Math.ceil(totalResults / props.pageSize)
            }
            type="button"
            className="btn btn-primary mx-3"
            onClick={handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
    </>
  );
};

NewsCom.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};
NewsCom.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default NewsCom;
