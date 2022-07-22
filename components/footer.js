import style from './footer.module.css';


export default function Footer() {
    return (
        <footer className={style.footer}>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/icons/AP-dev.png" alt="Alfonso Pisicchio Developer" className={style.logo} />
        </a>
      </footer>
    );
}