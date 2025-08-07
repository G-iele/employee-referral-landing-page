import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__links}>
        <nav aria-label="Sitemap">
          <h5>Sitemap</h5>
          <ul>
            <li>
              <Link href="#">Flight Deals</Link>
            </li>
            <li>
              <Link href="#">Hotels</Link>
            </li>
            <li>
              <Link href="#">Extension</Link>
            </li>
            <li>
              <Link href="#">Press</Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
            <li>
              <Link href="#">Reviews</Link>
            </li>
          </ul>
        </nav>

        <div className={styles.footer__group}>
          <nav aria-label="Follow us">
            <h5>Follow us</h5>
            <ul>
              <li>
                <a href="#">
                  <Image
                    src="facebook.svg"
                    alt="Facebook icon"
                    width={18}
                    height={18}
                  />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <Image
                    src="instagram.svg"
                    alt="Instagram icon"
                    width={18}
                    height={18}
                  />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <Image
                    src="youtube.svg"
                    alt="YouTube icon"
                    width={18}
                    height={18}
                  />
                  <span>YouTube</span>
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h5>Contact us</h5>
            <address>
              <ul>
                <li>
                  <a href="mailto:hi@ratepunk.com">hi@ratepunk.com</a>
                </li>
              </ul>
            </address>
          </div>
        </div>

        <nav aria-label="Extensions">
          <h5>Get the extention</h5>
          <ul>
            <li>
              <a href="#">Chrome Extension</a>
            </li>
            <li>
              <a href="#">Safari Extension</a>
            </li>
            <li>
              <a href="#">Firefox Extension</a>
            </li>
          </ul>
        </nav>

        <nav aria-label="Mobile apps" className={styles.footer__app}>
          <h5>Get the app</h5>
          <ul>
            <li className={styles['footer__app--desctop']}>
              <a href="#">
                <Image src="qr.svg" alt="Qr code" width={124} height={124} />
              </a>
            </li>
            <li className={styles['footer__app--mobile']}>
              <a href="#">
                <Image src="app.svg" alt="App store" width={163} height={48} />
              </a>
            </li>
            <li className={styles['footer__app--desctop']}>
              <a href="#">
                <Image src="app.svg" alt="App store" width={124} height={38} />
              </a>
            </li>
            <li className={styles['footer__app--desctop']}>
              <a href="#">
                <Image
                  src="gooApp.svg"
                  alt="Google app store"
                  width={124}
                  height={38}
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.footer__logoRatings}>
        <div className={styles.footer__logo}>
          <Image src="logoWhite.svg" alt="Logo" width={125} height={32} />
        </div>

        <div className={styles.footer__ratings}>
          <Image
            className={styles.footer__exellent}
            src="exellent.svg"
            alt="Exellent"
            width={98}
            height={32}
          />
          <Image
            src="trustpilot.svg"
            alt="Trustpilot"
            width={130}
            height={32}
          />
          <Image src="rating.svg" alt="Rating" width={132} height={24} />
        </div>
      </div>

      <div className={styles.footer__legalCopyright}>
        <nav aria-label="Legal links">
          <ul className={styles.footer__legal}>
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Terms & Conditions</Link>
            </li>
          </ul>
        </nav>

        <small className={styles.footer__copyright}>
          © 2024 RatePunk. All Rights Reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
