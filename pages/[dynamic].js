import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react'

const DynamiRoute = () => {
    const routerVal = useRouter().query.dynamic;

    return (
        <div> <Head>{routerVal}</Head>

            <h1>Welcome {routerVal}</h1></div>
    )
}

export default DynamiRoute