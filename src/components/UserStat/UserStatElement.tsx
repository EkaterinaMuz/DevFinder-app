import styles from "./UserStat.module.sass";

interface UserStatElementProps {
  title: string
  qnty: number
}

export function UserStatElement({ title, qnty }: UserStatElementProps) {
  return (
    <div className={styles.infoWrapper}>
      <div className={styles.infoTitle}>{title}</div>
      <div className={styles.infoNumber}>{qnty}</div>
    </div>
  );
}
