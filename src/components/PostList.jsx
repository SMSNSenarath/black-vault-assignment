import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setPosts(res.data);
      // console.log(res);
    });
  });

  return (
    <div>
      <ul>
        {posts.map((post, i) => (
          <li key={post.id}>
            <Link to={"/post/" + post.id}>{post.title}</Link>
            {/* <h1>{post.title}</h1> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
