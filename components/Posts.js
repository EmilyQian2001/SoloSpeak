import React, { useEffect } from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { addAllPost, selectPost } from "@/redux/features/postSlice";
import axios from "axios";
import { useSession } from "next-auth/react";

const Posts = () => {
  const FACEBOOK_CLONE_ENDPOINT =
    "https://facebook-clone-demo.yichun-qian.com/api/v1/post";
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const posts = useSelector(selectPost);
  useEffect(() => {
    const fetchData = () => {
      const response = axios.get(FACEBOOK_CLONE_ENDPOINT).then((response) => {
        const currentUser = session?.user?.name; // 获取当前用户的用户名
        // console.log(response.data);
        // console.log(response.data[0]);
        const filteredData = response.data.filter(
          (action) => action.name === currentUser
        );
        dispatch(addAllPost(filteredData));
      });
    };
    fetchData();
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
