import Document, { Html, Main, Head, NextScript } from "next/document";


class MyDocument extends Document {
    render() {
        return (<Html lang="en">
            <Head>
                <link
                    ref="preload"
                    href="/fonts/IBMPlexSans-Bold.ttf"
                    as="font"
                    crossOrigin="anonymous"
                >
                </link>
                <link
                    ref="preload"
                    href="/fonts/IBMPlexSans-Regular.ttf"
                    as="font"
                    crossOrigin="anonymous"
                >
                </link>
                <link
                    ref="preload"
                    href="/fonts/IBMPlexSans-SemiBold.ttf"
                    as="font"
                    crossOrigin="anonymous"
                >
                </link>
            </Head>
            <body>
                <Main>
                </Main>
                <NextScript />
            </body>
        </Html>);
    }
}

export default MyDocument;