import React from "react";
import { useParams } from "react-router-dom";
import useGetBlogs from "../hooks/useGetBlogs";

const BlogDetails = () => {
  const id = useParams();
  console.log(id.id);
  const { blogs, loading } = useGetBlogs(id.id);
  console.log(blogs);
  return (
    <div>
      <div
        className="hero min-h-screen "
        // style={{
        //   backgroundImage:
        //     "url(https://www.pexels.com/photo/close-up-photo-of-green-leaves-3178786/)",
        // }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{blogs.blogName}</h1>
            <h3 className="mb-5 text-2xl">~{blogs.author}</h3>
            <p className="mb-5">{blogs.description}</p>
            <button className="btn btn-primary">delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
