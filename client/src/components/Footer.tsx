import ic_facebook from "../assets/images/icon/ic_facebook.png";
import ic_instagram from "../assets/images/icon/ic_instagram.png";
import ic_linkedin from "../assets/images/icon/ic_linkedin.png";
import ic_twitter from "../assets/images/icon/ic_twitter.png";
import logo_1 from "../assets/images/logo/logo_1.png";
import styles from "./footer.module.css";

interface FooterProps {
  logo : string;
}
export default function Footer({ logo }: FooterProps) {
  return (
    <div>
      <div className={styles.container}>
        <img src={logo} alt="" className={styles.logo} />
        <img src={logo_1} alt="" className={styles.logo_1} />
        <p>Lao Chai, Sa Pa, Lao Cai, Vietnam</p>
        <div className={styles.info}>
          <div className={styles.hotline}>Hotline: (+84) 214 3892 999</div>
          <div className={styles.email}>
            Email: info@laxsik.com or laxsik.customercare@gmail.com
          </div>
        </div>
        <div className={styles.network}>
          <img src={ic_twitter} alt="" />
          <img src={ic_linkedin} alt="" />
          <img src={ic_facebook} alt="" />
          <img src={ic_instagram} alt="" />
        </div>
        <div className={styles.list}>
          <div className={styles.item}>Join Our Teams</div>
          <div className={styles.item}>Become a Partner</div>
          <div className={styles.item}>Privacy & policies</div>
          <div className={styles.item}>Terms & Conditions</div>
        </div>
        <div className={styles.copyright}>© Copyright Laxsik Ecolodge 2024</div>
      </div>
    </div>
  );
}
