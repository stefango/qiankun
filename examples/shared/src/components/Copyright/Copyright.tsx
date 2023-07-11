import { VFC } from 'react';
import styles from './style.scss';

interface CopyrightProps {}

export const Copyright: VFC<CopyrightProps> = ({}) => {
  console.log(`xzl Copyright styles`, styles);
  return <div className={styles.copyright}>Copyright {new Date().getFullYear()}</div>;
  // return <div className={styles.copyright}>Updated Copyright {new Date().getFullYear()}</div>;
};
