import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.linksContainer}>
        <div>
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
        </div>

        <div className={styles.followUsContainer}>
          <div>
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
          </div>

          <div>
            <h5>Contact us</h5>
            <ul>
              <li>
                <a href="mailto:hi@ratepunk.com">hi@ratepunk.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div>
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
        </div>

        <div>
          <h5>Get the app</h5>
          <ul>
            <li>
              <a href="#">
                <Image src="app.svg" alt="App store" width={163} height={48} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
