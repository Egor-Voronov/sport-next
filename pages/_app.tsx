import {AppProps} from "next/app";
import Head from "next/head";
import {MantineConfig} from 'src/components/MantineConfig'
import {HeaderModule} from "src/modules/Header";
import {linksProps, socialProps} from 'src/modules/Header/props'

const App = (props: AppProps) => {
    const {Component, pageProps} = props;

    return (
        <>
            <Head>
                <title>Sport-Next</title>
                <link rel="icon" href="/assets/favicon.svg"/>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>
            <MantineConfig>
                <HeaderModule links={linksProps} socials={socialProps}/>
                <Component {...pageProps} />
            </MantineConfig>
        </>
    );
}

export default App