import React from "react";

export default function TrendingPost({ title, description, subreddit, image }) {
  // console.log(props)
  return (
    <a href="/" className="trending-post">
      <img src={image} alt="a trending post" />
      <div className="trending-post-overlay">
        <div className="trending-post-text">
          <p className="trending-post-title">{title}</p>
          <p className="trending-post-description">{description}</p>
          <div className="trending-post-footer">
            {/* <img src={}/> */}
            <p>{subreddit} and more</p>
          </div>
        </div>
      </div>
    </a>
  );
}
