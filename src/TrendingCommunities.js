import React from "react";
import trendingCommunitiesData from "./data/trendingCommunitiesData";
import TrendingCommunity from "./TrendingCommunity";

export default function TrendingCommunities() {
  // console.log(trendingCommunitiesData)
  return (
    <div className="trending-communities content">
      <h3>Trending Communities</h3>
      <ul>
        {trendingCommunitiesData.map((community) => (
          <li key={community.id}>
            <TrendingCommunity {...community} />
          </li>
        ))}
      </ul>
    </div>
  );
}
