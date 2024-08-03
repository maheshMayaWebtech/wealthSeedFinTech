"use client";
import BlogsData from "@/screens/blogs";
import Loader from "@/shared-components/loader";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const CategoryData = () => {
  const param = useParams();
  const [modules, setModules] = useState<any[]>([]);
  const [title, setTitle] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchModules = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("/api/modules/get");
        const filteredData = response?.data?.filter((item: any) => {
          const categorySplit = item.category.split(" ");
          const categoryId = categorySplit[0];
          return categoryId === param.category;
        });
        setModules(filteredData);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };
    async function fetchCategories() {
      setIsLoading(true);
      try {
        const { data } = await axios.get("/api/categories");
        data?.filter((item: any) => {
          if (item._id === param.category) setTitle(item.category);
          return item._id === param.category;
        });
        setIsLoading(true);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
        setIsLoading(true);
      }
    }

    fetchCategories();
    fetchModules();
  }, [param.category]);
  return (
    <div>
      {isLoading ? <Loader /> : <BlogsData modules={modules} title={title} />}
    </div>
  );
};

export default CategoryData;
