import React, { useState } from "react";
import styles from "./styles/Form.module.css";
import { getStorage, ref, uploadBytes, getMetadata } from "firebase/storage";
import { writeUserData, checkLink } from "../firebase";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const [linkStatus, setLinkStatus] = useState("");
  const [loading, setLoading] = useState(false); // State to track loading

  const handleSubmit = async (event) => {
    event.preventDefault();

    const fileInput = document.getElementById("formFile");
    const file = fileInput.files[0];

    const name = event.target.elements.name.value;
    const url = event.target.elements.url.value;

    if (file) {
      try {
        setLoading(true); // Set loading state to true

        const urlExists = await checkLink(url);

        if (urlExists) {
          setLinkStatus("URL already in use!");
          setLoading(false); // Reset loading state
        } else {
          setLinkStatus("");
          const storage = getStorage();
          const storageRef = ref(storage);
          const resumeRef = ref(storageRef, file.name);

          const snapshot = await uploadBytes(resumeRef, file);

          writeUserData(
            name,
            url,
            `https://firebasestorage.googleapis.com/v0/b/rezume-a5269.appspot.com/o/${file.name}?alt=media`
          );

          const metadata = await getMetadata(resumeRef);
          console.log("File metadata:", metadata);
          console.log(metadata.name);

          console.log("File uploaded and user data saved successfully!");
          navigate(`/${url}`);
        }
      } catch (error) {
        console.error("Error handling form submission:", error);
      } finally {
        setLoading(false); // Reset loading state regardless of success or failure
      }
    } else {
      console.log("No file selected.");
    }
  };

  return (
    <div>
      <h1>Form</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="url" className="form-label">
            Your specific URL
          </label>
          <div className="input-group">
            <span className="input-group-text" id="basic-addon3">
              https://rezume.link/
            </span>
            <input
              type="text"
              className="form-control"
              id="url"
              required
            />
          </div>
          {linkStatus && (
            <div className="text-danger">{linkStatus}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            Upload Your Resume/CV
          </label>
          <input
            className="form-control"
            type="file"
            id="formFile"
            accept=".pdf"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Form;
