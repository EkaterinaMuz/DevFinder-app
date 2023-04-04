import styles from './Search.module.sass';
import { ReactComponent as search } from 'assets/icon-search.svg';
import { Button } from 'components/Button';

interface SearchProps {
  hasErrors: boolean,
  onSubmit: (text: string) => void
};

type FormFields = {
  username: HTMLInputElement
}

export const Search = ({ hasErrors, onSubmit }: SearchProps) => {
  const SearchIcon = search;
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement & FormFields>) => {
    e.preventDefault()
    const text = e.currentTarget.username.value
    if (text) {
      onSubmit(text)
      e.currentTarget.reset();

    }
  };
  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
      <div className={styles.search}>
        <label htmlFor='serach' className={styles.label}>
          <SearchIcon />
        </label>
        <input
          className={styles.textField}
          id='search'
          placeholder='Serach GitHub username...'
          type='text'
          name='username' />
        {
          hasErrors && (
            <div className={styles.error}>
              No results
            </div>
          )
        }
        <Button>Search</Button>
      </div>
    </form>
  )

};
