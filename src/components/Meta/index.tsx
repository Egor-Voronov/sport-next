import Head from 'next/head'
import type {IMeta} from "./types"

const getTitle = (title: string) => `${title} | Sport-Next`

export const Meta = ({title, description, children}: IMeta) => {
    return (
        <>
            <Head>
                <title>{getTitle(title)}</title>
                {description ? (
                    <>
                        <meta name='description' content={description}/>
                        <meta name='og:title' content={getTitle(title)}/>
                        <meta name='og:description' content={description}/>
                    </>
                ) : (
                    <meta name='robots' content='noindex, nofollow'/>
                )}
            </Head>
            {children}
        </>
    )
}