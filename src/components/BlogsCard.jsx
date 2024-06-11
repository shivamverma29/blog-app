import React from "react";
import { Link } from "react-router-dom";

const BlogsCard = ({ blog }) => {
  // console.log(blog._id);
  var id = blog._id;
  console.log(id);
  // blog = blog.blog;
  return (
    <div className="p-5 w-96">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{blog.blogName}</h2>
          <p>{blog.author}</p>
          <div className="card-actions justify-end">
            <Link to={"/blog-details/" + id}>
              <button className="btn btn-primary">View</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;
