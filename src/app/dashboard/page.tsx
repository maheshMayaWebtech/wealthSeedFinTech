"use client";
import React, { useEffect, useState } from "react";
import { FaPhotoVideo , FaBlogger , FaBell, FaFileUpload } from "react-icons/fa";
import { TbCategoryFilled } from "react-icons/tb";
import { MdLockReset } from "react-icons/md";
import { RiVideoUploadFill } from "react-icons/ri";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import Loader from "@/shared-components/loader";
import "../../styles/DashboardPage.css";
import Image from "next/image";

const VideoForm = dynamic(() => import("@/screens/videoForm"), {
  loading: () => <Loader />,
});

const Videos = dynamic(
  () => import("@/shared-components/videodashboard-module"),
  {
    loading: () => <Loader />,
  }
);
const Modules = dynamic(() => import("@/shared-components/modulesdashboard"), {
  loading: () => <Loader />,
});
const CategoryPage = dynamic(() => import("@/screens/categories"), {
  loading: () => <Loader />,
});
const AddModule = dynamic(() => import("@/screens/addModule"), {
  loading: () => <Loader />,
});
const ResetPassword = dynamic(() => import("@/screens/resetPassword"), {
  loading: () => <Loader />,
});

const DashboardPage: React.FC = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("upload-module");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!!!token) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [router]);
  const handleLogOut = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="profile">
          <Image onClick={()=> router.push('/')} src={'/Images/companylogo.png'} width={150} height={50} alt="logo" />
          <p>Company Inc.</p>
        </div>
        <ul>
          <li
            className={activeTab === "upload-video" ? "active" : ""}
            onClick={() => setActiveTab("upload-video")}
          >
            <RiVideoUploadFill className="icon" />
            Upload Video
          </li>
          <li
            className={activeTab === "upload-module" ? "active" : ""}
            onClick={() => setActiveTab("upload-module")}
          >
            <FaFileUpload className="icon" />
            Upload Module
          </li>
          <li
            className={activeTab === "video" ? "active" : ""}
            onClick={() => setActiveTab("video")}
          >
            <FaPhotoVideo className="icon" />
            View Videos
          </li>
          <li
            className={activeTab === "modules" ? "active" : ""}
            onClick={() => setActiveTab("modules")}
          >
            <FaBlogger  className="icon" />
            View Modules
          </li>
          <li
            className={activeTab === "category" ? "active" : ""}
            onClick={() => setActiveTab("category")}
          >
            <TbCategoryFilled className="icon" />
            Categories
          </li>
          <li
            className={activeTab === "reset" ? "active" : ""}
            onClick={() => setActiveTab("reset")}
          >
            <MdLockReset className="icon" />
            Reset Password
          </li>
        </ul>
      </aside>
      <main className="main-content">
        <div className="cover-photo">
          <button onClick={handleLogOut} className="change-cover">
            Logout
          </button>
        </div>
        <div className="tabs">
          <button
            className={activeTab === "upload-video" ? "active" : ""}
            onClick={() => setActiveTab("upload-video")}
          >
            Upload Video
          </button>
          <button
            className={activeTab === "upload-module" ? "active" : ""}
            onClick={() => setActiveTab("upload-module")}
          >
            Upload Module
          </button>
          <button
            className={activeTab === "video" ? "active" : ""}
            onClick={() => setActiveTab("video")}
          >
            View Videos
          </button>
          <button
            className={activeTab === "modules" ? "active" : ""}
            onClick={() => setActiveTab("modules")}
          >
            View Modules
          </button>
          <button
            className={activeTab === "category" ? "active" : ""}
            onClick={() => setActiveTab("category")}
          >
            Categories
          </button>
          <button
            className={activeTab === "reset" ? "active" : ""}
            onClick={() => setActiveTab("reset")}
          >
            Reset Password
          </button>
        </div>
        <div className="content-section">
          {activeTab === "upload-video" && <VideoForm />}
          {activeTab === "upload-module" && <AddModule />}
          {activeTab === "video" && <Videos />}
          {activeTab === "modules" && <Modules />}
          {activeTab === "category" && <CategoryPage />}
          {activeTab === "reset" && <ResetPassword />}
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
