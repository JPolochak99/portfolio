import styles from "./preloader.module.css";

function Preloader() {
  return (
    <div className={styles.preloader}>
      <div className={styles.logo}><img src="assets/JpLogo.png"></img></div>
      <div className={styles.progressBar}>
        <div className={styles.progress}></div>
      </div>
    </div>
  );
}

export default Preloader;
