import styles from "./styles/Hero.module.css";
export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.left}>
        <div className={styles.title}>
          Your Personalized <br /> Resume Hosting Platform
        </div>
        <div className={styles.subtitle}>
          Create your own personalized resume website in minutes & host it on a personalized username of your choice.
        </div>
        <div className={styles.buttons}>
            <div className={styles.getStarted}>
                <a href="/dashboard">Get Started</a>
            </div>
        </div>
      </div>
      <div className={styles.cube}>
        <video src="/cube.mp4" autoPlay muted loop></video>
      </div>
    </div>
  );
}
