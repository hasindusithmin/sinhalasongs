
import Document,{Head,Html,Main,NextScript} from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                <link rel='manifest' href='/manifest.json' />
                <link rel='apple-touch-icon' href='/icons-192x192.png' />
                <meta name='theme-color' content='#fff' />
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument