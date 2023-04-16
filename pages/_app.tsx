import {AppProps} from "next/app";
import Head from "next/head";
import {MantineProvider} from "@mantine/core";
import {HeaderModule} from "../src/modules/Header";
import {FaGithub, FaLinkedinIn, FaTelegramPlane} from "react-icons/fa";

const App = (props: AppProps) => {
    const {Component, pageProps} = props;

    const linksProps = [
        {link: "/", label: "На главную"},
        {link: "/about", label: "О нас"},
        {link: "/catalog", label: "Каталог"},
    ];
    const socialProps = [
        {Icon: FaTelegramPlane, link: "https://t.me/Egor_Voronov_Dev"},
        {Icon: FaGithub, link: "https://github.com/Egor-Voronov"},
        {Icon: FaLinkedinIn, link: "https://t.me/Egor_Voronov_Dev"},
    ];

    return (
        <>
            <Head>
                <title>Sport-Next</title>
                <link rel="icon" href="/favicon.svg"/>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>

            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    /** Put your mantine theme override here */
                    colorScheme: "light",
                    loader: "bars"
                }}
            >
                <HeaderModule links={linksProps} socials={socialProps}/>
                <Component {...pageProps} />
            </MantineProvider>
        </>
    );
}

export default App