/* eslint-disable @next/next/no-title-in-document-head */
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/*Bootstrap*/}
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
          />
          {/* Fim Bootstrap*/}

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Questrial&display=swap"
            rel="stylesheet"
          />
          {/*Font Poppins*/}
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap"
            rel="stylesheet"
          />
          {/*End Font Poppins*/}

          <link rel="icon" href="" />
          <link
            rel="shortcut icon"
            href="/imagens/logoLeoflin1.png"
            type="image/png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
1;
