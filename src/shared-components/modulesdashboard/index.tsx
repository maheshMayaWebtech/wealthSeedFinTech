import Blog from "@/screens/blogs/blogcontent/Blog";
import axios from "axios";
import { useEffect, useState } from "react";

const Modules: React.FC = () => {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const response = await axios.get("/api/modules/get");
        setModules(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchModules();
  }, []);
  return (
    <div className="settings-panel">
      <h3 style={{marginLeft: '10px', marginBottom: '30px', fontSize: '40px'}}>All Modules</h3>
      <Blog data={modules} type={"dashboard"} />
    </div>
  );
};

export default Modules;
