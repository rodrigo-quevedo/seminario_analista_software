import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

import styles from "./MainLayout.module.css"

export default function MainLayout({children}: {children: React.ReactNode}){

    return (
        <>
            <Header/>

            <main className={styles.main}>
                {children}
            </main>

            <Footer/>
        </>
    )
}