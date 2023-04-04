import { useEffect, useState } from 'react';
import { ReactComponent as sun } from 'assets/icon-sun.svg'
import { ReactComponent as moon } from 'assets/icon-moon.svg'
import styles from './ThemeSwitcher.module.sass';

export const ThemeSwitcher = () => {
    const [isDark, setDark] = useState(false);
    const themeText = isDark ? 'dark' : 'light';
    const ThemeIcon = isDark ? moon : sun;

    useEffect(() => {
        document.body.setAttribute('data-theme', isDark ? 'dark' : 'light')
    }, [isDark])
    
    return (
        <div className={styles.switcher} onClick={() => setDark(!isDark)}>
            <span>{themeText}</span>
            <ThemeIcon className={styles.icon} />
        </div >
    )
}


