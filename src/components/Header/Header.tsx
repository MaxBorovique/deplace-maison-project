import styles from './Header.module.scss';

interface Props {
  toggleThemeHandler: () => void;
}

export const Header: React.FC<Props> = ({ toggleThemeHandler }) => {


  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <li className={styles.toggle}>
          <button className={styles.button} onClick={toggleThemeHandler}></button>
        </li>
        <li className={styles.cart}></li>
      </nav>
    </header>
  )
}