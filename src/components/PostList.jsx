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
      <div className="container">
        <h1>Create a New Post</h1>
        <form>
          <label htmlFor="userId">User Id</label>
          <div class="input-group m-3 ">
            <input
              type="text"
              class="form-control"
              placeholder="User Id"
              aria-label="UserId"
              aria-describedby="userId"
              value={userId}
              onChange={(e) => {
                setUserId(e.target.value);
              }}
            />
          </div>
          {/* <label htmlFor="userId">User Id</label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => {
              setUserId(e.target.value);
            }}
          /> */}
          <label htmlFor="id">Id</label>
          <div class="input-group m-3 ">
            <input
              type="text"
              id="id"
              class="form-control"
              placeholder="Comment Id"
              aria-label="Id"
              aria-describedby="id"
              value={id}
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
          </div>

          <label htmlFor="title">Title</label>
          <div className="input-group m-3">
            {" "}
            <input
              type="text"
              id="title"
              class="form-control"
              placeholder="Title"
              aria-label="Title"
              aria-describedby="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>

          <label htmlFor="body">Body</label>
          <div class="input-group m-3">
            <textarea
              class="form-control"
              aria-label="With textarea"
              id="body"
              value={body}
              onChange={(e) => {
                setBody(e.target.value);
              }}
            ></textarea>
          </div>
          {/* <input
            type="text"
            id="body"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          /> */}
          <button type="button" class="btn btn-success" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
      <div className="container">
        <div className="m-3">
          <h1>Posts Lists</h1>
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
    </div>
  );
}

export default PostList;
