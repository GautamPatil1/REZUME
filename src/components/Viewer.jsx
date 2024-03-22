// Viewer.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./styles/Viewer.module.css";
import { readUserData } from "../firebase";

export default function Viewer() {
  const { param } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await readUserData(param);
        setUserData(result);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    fetchData();
  }, [param]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  // Encode the URL
  const fileUrl = encodeURI(userData.file);

  return (
    <div className={styles.container}>
      <div className={styles.pdf}>
      <iframe src={userData.file} frameborder="0"></iframe>
      </div>
    </div>
  );
}
