import Search from "../components/Search";
import postsData from "../posts.json";
import Article from "../components/Article";
import { useState } from "react";

function Homepage() {
  const [posts, setPosts] = useState(postsData)
  const [totalPosts, setTotalPosts] = useState(0);
  const onSearchChange = (value) => {
    console.log(value);
    const filterPosts = postsData.filter(item => item.title.includes(value));
    setPosts(filterPosts);
    setTotalPosts(filterPosts.length);
  }

  return (
    <>
      <h1>Simple Blog</h1>
      <Search onSearchChange={onSearchChange} totalPosts={totalPosts}/>
      {posts.map((props, index) => (
        <Article {...props} key={index} />
      ))}
    </>
  );
}

export default Homepage;
