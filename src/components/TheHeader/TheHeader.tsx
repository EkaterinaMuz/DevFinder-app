import { ThemeSwitcher } from 'components/ThemeSwitcher';
import styles from './TheHeader.module.sass';

export const TheHeader = () => (
  <div className={styles.header}>
    <div className={styles.logo}>
      devfinder
    </div>
    <ThemeSwitcher />
  </div>
);
