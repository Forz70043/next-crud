import Header from './header';
import Footer from './footer';
import Navbar from './navbar';
import styles from './layout.module.css';

export const siteTitle = 'CRUD Website';


export default function Layout({ children, home }) {
    return (
        <>
            <Header />
            <Navbar />
            <main>
                <div className="container">
                    {children}
                </div>
            </main>
            <Footer />
        </>
    );
}