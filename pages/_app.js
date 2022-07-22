import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from "react";
import '../styles/global.css';

export default function App({ Component, pageProps }) {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
    }, []);
    
    return <Component {...pageProps} />;
}