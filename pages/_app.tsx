import { AppProps } from "next/app";
import NextNprogress from "nextjs-progressbar";
import { wrapper } from "../src/store";
import { MainColor } from "src/color";
import "i18n";

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <NextNprogress
                color="#29D"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
            />
            <Component {...pageProps} />
            <style jsx global>
                {`
                    body {
                        margin: 0;
                        background-color: ${MainColor};
                        font-family: "Noto Sans TC", sans-serif;
                    }
                `}
            </style>
        </>
    );
};

export default wrapper.withRedux(App);
