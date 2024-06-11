import { useEffect, useState } from "react";

const useGetBlogs = (id) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const GetBlog = async () => {
    setLoading(true);
    try {
      var res;
      if (id) {
        res = await fetch("http://localhost:4000/api/blogs/" + id);
      } else {
        res = await fetch("http://localhost:4000/api/blogs/allblogs");
      }
      const data = await res.json();
      // return data;
      // console.log(data);
      if (data.error) throw new Error(data.error);
      setBlogs(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    GetBlog();
  }, []);
  // console.log(blogs);

  return { loading, blogs };
};

export default useGetBlogs;
