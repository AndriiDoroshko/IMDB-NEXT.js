import Head from "next/head";
import SeachMain from "../Searc/SearMain";

const MainLayout = ({ children, title = "Next app" }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="keywords" content="movie" />
            </Head>
            <nav>
                <SeachMain />
            </nav>
            <main>{children}</main>
        </>
    );
};

export default MainLayout;
