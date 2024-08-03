import axios from "axios";
import "./Blog.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toastError, toastSuccess } from "@/utils/toast";

const Blog = ({ data, type }: { data: any; type?: string }) => {
  const router = useRouter();
  const [moduleData, setModuleData] = useState([]);
  const categoryColors = [
    "#77b4f2",
    "#f2c8ca",
    "#f0b32a",
    "#b6adf4",
    "#b2d8e6",
    "#b2e6bc",
  ];

  useEffect(() => {
    setModuleData(data);
  }, [data]);

  const handleClick = (id: number) => {
    router.push(`/blogs/${id}`);
  };
  const handleDelete = async (id: number) => {
    const request = await axios.post("/api/modules/delete", { id });
    const filteredData = moduleData?.filter((item: any) => item._id !== id);
    if (request.status) {
      setModuleData(filteredData);
      toastSuccess("Deleted Successfully")
    } else {
      toastError('Something went wrong')

    }
  };
  return (
    <div className="moduleCategoryCards">
      {moduleData?.map((item: any, id: number) => {
        const category = item.category.split(' ')
        category.shift()
        return (
          <section className="moduleCategoryCardSection" key={id}>
            <h3
              className="blogTitle"
              style={{ backgroundColor: `${categoryColors[id % 6]}` }}
            >
              <div onClick={() => handleClick(item._id)} className="titleLink">
                <span>{id + 1}. </span>
                {item.title} <span style={{fontSize: '15px', fontWeight: '500'}}>{type === "dashboard" && `( ${category.join(' ')} )`}</span>
              </div>
            </h3>
            <p className="blogContent">{item.description}</p>
            <div className="bothButtons">
              <button
                onClick={() => handleClick(item._id)}
                className="moduleReadMore"
                style={{
                  color: `${categoryColors[id % 6]}`,
                  border: `2px solid ${categoryColors[id % 6]}`,
                }}
              >
                Read More
              </button>
              {type === "dashboard" && (
                <button
                  onClick={() => handleDelete(item._id)}
                  className="moduleReadMore moduleDelete"
                >
                  Delete
                </button>
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Blog;
