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
        console.log(result);
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

  return (
    <div>
      <h1>{userData.name}</h1>
      <div className={styles.pdf}>
        <embed
          className={styles.pdf}
          src={userData.file}
        />
      </div>
    </div>
  );
}
