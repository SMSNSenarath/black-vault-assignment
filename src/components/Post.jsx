import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

function Post() {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const params = useParams();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((res) => {
        setPost(res.data);
        //   console.log(res.data);
      });
  });

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`)
      .then((res) => {
        setComments(res.data);
        // console.log(res.data);
      });
  }, []);

  return (
    <div>
      <h1>Title: {post.title}</h1>
      <h3>{post.id}</h3>
      <p>{post.body}</p>

      <h2>Comments</h2>
      <ul>
        {comments.map((comment, i) => (
          <li key={comment.id}>
            <p>
              {comment.body} <i>By</i> <b>{comment.email}</b>
            </p>
            {/* <h1>{post.title}</h1> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Post;
