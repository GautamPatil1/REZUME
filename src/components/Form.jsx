import React from "react";
import styles from "./styles/Form.module.css";
import { getStorage, ref, uploadBytes, getMetadata } from "firebase/storage";
import { writeUserData } from "../firebase"; // Import ref as dbRef and set functions
import { useNavigate } from "react-router-dom";

export default function Form() {
  const navigate = useNavigate();
  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const fileInput = document.getElementById("formFile");
    const file = fileInput.files[0]; // Get the selected file

    // Get specific URL from the formcontrol
    const name = event.target.elements.name.value;
    const url = event.target.elements.url.value;

    // Check if a file is selected
    if (file) {
      // Get a reference to the storage service
      const storage = getStorage();

      // Create a storage reference from our storage service
      const storageRef = ref(storage);

      // Reference to the file in Firebase Storage
      const resumeRef = ref(storageRef, file.name);

      try {
        // Upload the file to Firebase Storage
        const snapshot = await uploadBytes(resumeRef, file);
        writeUserData(name, url, `https://firebasestorage.googleapis.com/v0/b/rezume-a5269.appspot.com/o/${file.name}?alt=media`)
        getMetadata(resumeRef)
          .then((metadata) => {
            console.log("File metadata:", metadata);
            console.log(metadata.name);
          })
          .catch((error) => {
            // Uh-oh, an error occurred!
          });
        console.log("File uploaded and user data saved successfully!");
        navigate(`/${name}`)
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    } else {
      console.log("No file selected.");
    }
  };

  return (
    <div>
      <h1>Form</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* Form fields */}
        <div className="mb-3">
          <label htmlFor="basic-url" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="basic-addon3 basic-addon4"
            required
          />
        </div>

        <div class="mb-3">
          <label for="basic-url" class="form-label">
            Your specific URL
          </label>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3">
              https://rezume.link/
            </span>
            <input
              type="text"
              class="form-control"
              id="url"
              aria-describedby="basic-addon3 basic-addon4"
              required
            />
          </div>
        </div>

        {/* File input */}
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

        {/* Submit button */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
