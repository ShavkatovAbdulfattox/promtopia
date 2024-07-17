"use client";

import { useEffect, useState } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data?.map((post) => {
        return <PromptCard key={post._id} post={post} />;
      })}
    </div>
  );
};

function Feed() {
  const [searchText, setSearchText] = useState();
  const [posts, setPosts] = useState([]);

  const handleSearchText = () => {};

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/prompt");
      const data = await res.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);
  return (
    <section className="feed">
      <div className="w-full relative flex-center">
        <input
          type="text"
          placeholder="Search for a tag or username"
          value={searchText}
          onChange={handleSearchText}
          className="search_input peer"
        />
      </div>
      <PromptCardList data={posts} handleTagClick={() => {}} />
    </section>
  );
}

export default Feed;
