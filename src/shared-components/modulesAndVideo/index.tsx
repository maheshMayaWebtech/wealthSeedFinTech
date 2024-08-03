import React from "react";
import "./index.css";
import Image from "next/image";
import Link from "next/link";
import playButtonSvg from "../../../public/Images/playbutton.svg";
import { FaTrash } from "react-icons/fa";
import {
  useEffect,
  useState,
} from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

import { toastSuccess } from "@/utils/toast";
import { usePathname } from "next/navigation";

export const SharedComp = ({ type, data }: { type?: string; data: any }) => {
  const pathname = usePathname()
  const homePath = pathname === '/'
  const [tempdata, setTempData] = useState(data);
  const colorArr = [
    "magenta",
    "#2BEE14",
    "#F4F80C",
    "#0CB8F8",
    "#7D00DE",
    "#002CDC",
  ];

  useEffect(() => {
    setTempData(data);
  }, [data]);

  const deleteItem = async (id: any) => {
    try {
      const response = await axios.delete(`/api/videos/delete`, {
        headers: {
          "Content-Type": "application/json",
        },
        data: { id },
      });

      if (response.status === 200) {
        const newTodos = tempdata.filter(
          (item: { _id: any }) => item._id !== id
        );
        setTempData(newTodos);
        toastSuccess("Deleted Successfully");
      }
    } catch (error) {
      console.error("Error deleting data", error);
    }
  };

  return (
    <>
      {tempdata?.map(
        (
          values: any,
          id: number
        ) => {
          const youtubeUrl = values.youtubeUrl || "https://youtube.com";

          return (
            <div className={`col-lg-4 mb-5 ${homePath && `cardHomePageStyle`}`} key={values._id}>
              <div
                className="upperCountingArea"
                style={{ borderTopColor: `${colorArr[id % 6]}` }}
              >
                {type !== "modules" && (
                  <div className="box video-thumb">
                    <Link
                      href={youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={values.image}
                        alt="videothumb"
                        className="operationlogo"
                        width={500}
                        height={500}
                      />
                      <Image
                        src={playButtonSvg}
                        alt="playbutton"
                        className="playButtonLogo"
                        width={100}
                        height={100}
                      />
                    </Link>
                  </div>
                )}
                <h3 className="moduleTitle">
                  {!homePath && <span className="moduleNumber">{id + 1}</span>}
                  <Link
                    href={youtubeUrl}
                    className="areaIntro"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {values.title}
                  </Link>
                </h3>
                {!homePath && <p className="chapterCount">{values.chapter} Chapters</p>}
                {!homePath && <p className="discription mb-3">{values.description}</p>}
                <p className="modulesOpts">
                  <Link
                    href={youtubeUrl}
                    className="innerModuleCont"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Module
                  </Link>
                  {type === "admin" && (
                    <FaTrash
                      className="trashData"
                      onClick={() => deleteItem(values._id)}
                    />
                  )}
                </p>
              </div>
            </div>
          );
        }
      )}
    </>
  );
};
