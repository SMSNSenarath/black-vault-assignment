import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [userId, setUserId] = useState("");
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setPosts(res.data);
      // console.log(res);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      userId: userId,
      id: id,
      title: title,
      body: body,
    };
    setPosts((posts) => [newPost, ...posts]);
  };

  return (
    <div>
      {/* Create a Post */}
      <div>
        <form>
          <label htmlFor="userId">User Id</label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => {
              setUserId(e.target.value);
            }}
          />
          <label htmlFor="id">Id</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <label htmlFor="body">Body</label>
          <input
            type="text"
            id="body"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
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
    </div>
  );
}

export default PostList;
