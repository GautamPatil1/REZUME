import styles from "./styles/Features.module.css";
export default function Features() {
  return (
    <div className={styles.features}>
      <img src="/rezume.jpg" className={styles.browser} alt="" srcset="" />
      <div className={styles.feature}>
        <h1>Features</h1>
        <ul>
          <li>
            <p class="feature-sentence">
              Create personalized profiles with unique usernames for easy access
              to their resumes.
            </p>
          </li>
          <br />

          <li>
            <p class="feature-sentence">
              Generate shareable links for effortless sharing of their resumes
              on websites and social media.
            </p>
          </li>

          <br />

          <li>
            <p class="feature-sentence">
              Embed resumes into personal websites or portfolio pages for
              enhanced visibility using iframe.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
