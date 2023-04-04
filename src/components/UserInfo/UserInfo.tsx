import styles from './UserInfo.module.sass';
import { InfoItem } from 'components/InfoItem';
import { ReactComponent as CompanyIcon } from 'assets/icon-company.svg';
import { ReactComponent as TwitterIcon } from 'assets/icon-twitter.svg';
import { ReactComponent as LocationIcon } from 'assets/icon-location.svg';
import { ReactComponent as BlogIcon } from 'assets/icon-website.svg';
import { LocalGithubUser } from 'types';


interface UserInfoProps extends Pick<
  LocalGithubUser,
  'twitter' | 'location' | 'company' | 'blog'
> { }

export const UserInfo = ({ twitter, location, company, blog }: UserInfoProps) => (
  <div className={styles.userInfo}>
    <InfoItem
      icon={<CompanyIcon />}
      text={company}
    />
    <InfoItem
      icon={<TwitterIcon />}
      text={twitter}
    />
    <InfoItem
      icon={<LocationIcon />}
      text={location}
    />
    <InfoItem
      icon={<BlogIcon />}
      text={blog}
      isLink={true}
    />
  </div>
);
