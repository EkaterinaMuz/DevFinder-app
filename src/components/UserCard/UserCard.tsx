import styles from './UserCard.module.sass';
import { UserStat } from 'components/UserStat';
import { LocalGithubUser } from 'types';
import { UserHeader } from 'components/UserHeader';
import { UserInfo } from 'components/UserInfo';


interface UserCardProps extends LocalGithubUser { }

export const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard}>
    <img
      className={styles.avatar}
      src={props.avatar}
      alt={props.login} />

    <UserHeader
      name={props.name}
      login={props.login}
      created={props.created}
      bio={props.bio}
    />

    <UserStat
      repos={props.repos}
      followers={props.followers}
      following={props.following}
    />

    <UserInfo
      company={props.company}
      twitter={props.twitter}
      blog={props.blog}
      location={props.location}
    />
  </div>
);
