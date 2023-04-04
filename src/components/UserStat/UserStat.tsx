import styles from './UserStat.module.sass';
import { LocalGithubUser } from 'types';
import { UserStatElement } from './UserStatElement';


interface UserStatProps extends Pick<
  LocalGithubUser,
  'repos' | 'followers' | 'following'
> { }

export const UserStat = ({ repos, followers, following }: UserStatProps) => (
  <div className={styles.userStat}>
    <div className={styles.info}>
      <UserStatElement title={'Repos'} qnty={repos} />
      <UserStatElement title={'Followers'} qnty={followers} />
      <UserStatElement title={'Following'} qnty={following} />
    </div>
  </div>
);
