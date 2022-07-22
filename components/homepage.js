import Link from 'next/link';
import style from './homepage.module.css';
import Layout from './layout';

export default function Homepage() {
    return (
        <Layout>
            <h1 className={style.title}>
                Welcome to <a href="/">XXXXX!</a>
            </h1>

            <p className={style.description}>
                Get started by view  
                <a className={style.a} href="/scores"> Scores</a>
            </p>

            <div className={style.grid}>
                <a href="/info" className={style.card}>
                    <h3>Documentation &rarr;</h3>
                    <p>Find in-depth information about XXXX.</p>
                </a>

                <a href="/scores" className={style.card}>
                    <h3>Scores &rarr;</h3>
                    <p>View interactive scores</p>
                </a>

                <a href="/users" className={style.card}>
                    <h3>Users &rarr;</h3>
                    <p>Discover and edit users profile.</p>
                </a>

            </div>
        </Layout>
    );
}