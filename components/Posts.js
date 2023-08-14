import React, { useEffect } from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { addAllPost, selectPost } from "@/redux/features/postSlice";
import axios from "axios";

const Posts = () => {
  const FACEBOOK_CLONE_ENDPOINT = "https://localhost:8443/api/v1/post";
  const dispatch = useDispatch();
  const posts = useSelector(selectPost);
  useEffect(() => {
    const fetchPost = () => {
      const response = axios.get(FACEBOOK_CLONE_ENDPOINT).then((response) => {
        dispatch(addAllPost(response.data));
      });
    };
    fetchPost();
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
