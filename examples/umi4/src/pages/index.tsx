import yayJpg from '../assets/yay.jpg';
import styles from './index.scss';
import { Copyright } from 'shared';

export default function HomePage() {
  return (
    <div>
      <h2 className={styles.title}>Yay! Welcome to umi!</h2>
      <p>{/*<img src={yayJpg} width="388" />*/}</p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
      <p>
        {/* todo 更新此处，主应用页面需要手动刷新页面才会更新（期望无需手动刷新，自动更新） */}
        Update umi4
      </p>
      <Copyright />
    </div>
  );
}
