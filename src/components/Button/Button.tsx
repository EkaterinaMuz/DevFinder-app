import styles from './Button.module.sass';

interface ButtonProps {
  children: string
}

export const Button = ({ children }: ButtonProps) => (
  <button className={styles.button}>
    {children}
  </button>
);
