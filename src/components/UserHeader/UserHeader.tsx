import styles from './UserHeader.module.sass';
import { LocalGithubUser } from 'types';


interface UserHeaderProps extends Pick<
  LocalGithubUser,
  'name' | 'login' | 'created' | 'bio'
> { }

const LocalDate = new Intl.DateTimeFormat('en-BG', {
  day: 'numeric',
  month: 'short',
  year: 'numeric'
})

export const UserHeader = ({ name, login, created, bio }: UserHeaderProps) => {
  const joinedDate = LocalDate.format(new Date(created));

  return (
    <div className={styles.userHeader}>
      <h2>{name}</h2>

      <div className={styles.bioWrapper}>
        <h3>{login}</h3>
        <p className={`${styles.bio} ${bio ? '' : `${styles.empty}`}`}>
          {
            bio || 'This profile has no bio'
          }
        </p>
      </div>

      <span>{joinedDate}</span>
    </div>
  );
}
