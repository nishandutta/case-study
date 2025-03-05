import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>RYN Case Study</h1>
      <nav>
        <ul>
          <li><a href="#case-studies">Case Studies</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;