import {AppProps} from "next/app";
import Head from "next/head";
import {useState} from 'react';
import {ColorSchemeProvider, ColorScheme, MantineProvider} from '@mantine/core';
import {HeaderModule} from "src/modules/Header";
import {linksProps, socialProps} from 'src/modules/Header/data/props'

const App = (props: AppProps) => {
    const {Component, pageProps} = props;
    const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));


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

            <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                <MantineProvider
                    withGlobalStyles
                    withNormalizeCSS
                    theme={{
                        colorScheme,
                        loader: "bars"
                    }}
                >
                    <HeaderModule links={linksProps} socials={socialProps}/>
                    <Component {...pageProps} />
                </MantineProvider>
            </ColorSchemeProvider>
        </>
    );
}

export default App