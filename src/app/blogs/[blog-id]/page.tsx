"use client";
import { useEffect, useState } from "react";
import "../../../styles/blogs.css";
import { useParams } from "next/navigation";
import axios from "axios";
import Loader from "@/shared-components/loader";

const Blogs = () => {
  const param = useParams();
  const [post, setPost] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const request = await axios.post("/api/modules/get", {
          _id: param["blog-id"],
        });
        const result = request.data;
        setPost(result?.[0]);
        setIsLoading(false)
      } catch (error) {
        console.error("Failed to fetch :", error);
        setIsLoading(false)
      }
    };
    fetchData();
  }, [param]);

  return (
    <>
    {isLoading ? <Loader /> : <div className="mainBlogPage">
      <div className="mainBlogPageTitle">{post?.title}</div>
      <div dangerouslySetInnerHTML={{ __html: post?.content }}></div>
    </div>}
    </>
  );
};

export default Blogs;
