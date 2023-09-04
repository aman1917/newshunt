import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class NewsCom extends Component {
  render() {
    return (
      <div>
        This is News Container that contain all news items
        <NewsItem />
      </div>
    );
  }
}

export default NewsCom;
