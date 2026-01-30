import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.box}>
      <p className={styles.desc}>
        We can help you with any questions or information.
      </p>

      <div className={styles.contactGroup}>
        <div className={styles.phone}>
          <span className={styles.call}>CALL</span>
          +84 214 3892 999
        </div>

        <span className={styles.or}>or</span>

        <button className={styles["btn-contact"]}>CONTACT US</button>
      </div>
    </div>
  );
}
