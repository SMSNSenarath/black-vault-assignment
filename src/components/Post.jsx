import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

function Post() {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((res) => {
        setPost(res.data);
        //   console.log(res.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`)
      .then((res) => {
        setComments(res.data);
        // console.log(res.data);
      });
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedPost = {
      title: title,
      body: body,
      id: params.id,
      userId: post.userId,
    };
    // push updatedPost to the frontend
    setPost(updatedPost);
    setIsUpdate(!isUpdate);
  };

  return (
    <div>
      {/* Post Details */}
      <div className="m-3">
        <div className="container">
          <h1>{post.title}</h1>
          <span className="fw-light">Post Id: {post.id}</span>

          <h5>{post.body}</h5>
        </div>
      </div>

      {/* Comment Section */}
      <div className="container mt-5">
        <h2>Comments</h2>
        <ul className="list-group list-group-flush">
          {comments.map((comment, i) => (
            <li className="list-group-item" key={comment.id}>
              <p>
                {comment.body} <i>By</i> <b>{comment.email}</b>
              </p>
              {/* <h1>{post.title}</h1> */}
            </li>
          ))}
        </ul>
        <button className="btn btn-info" onClick={() => setIsUpdate(!isUpdate)}>
          Update Post
        </button>
      </div>

      {/* Update Form */}
      {isUpdate ? (
        <>
          <div className="container mt-3 mb-5">
            <h1>Update Post</h1>
            <form>
              <label htmlFor="title">Title</label>
              <div className="input-group m-3">
                {" "}
                <input
                  type="text"
                  id="title"
                  class="form-control"
                  placeholder={post.title}
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
                  placeholder={post.body}
                  id="body"
                  value={body}
                  onChange={(e) => {
                    setBody(e.target.value);
                  }}
                ></textarea>
              </div>

              <button
                type="button"
                class="btn btn-success"
                onClick={handleUpdate}
              >
                Update
              </button>
            </form>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Post;
