// import React, { useEffect, useState } from "react";
import BlogsCard from "../components/BlogsCard";
import useGetBlogs from "../hooks/useGetBlogs";

const Home = () => {
  const { loading, blogs } = useGetBlogs();
  console.log(blogs);
  return (
    <>
      <div className="blogs container flex flex-col p-10 justify-center max-w-fit ml-auto mr-auto min-w-150">
        {blogs.map((blog) => (
          <BlogsCard blog={blog} key={blog._id} />
        ))}
        {loading ? (
          <span className="loading loading-ring loading-xs"></span>
        ) : null}
      </div>
    </>
  );
};

export default Home;
