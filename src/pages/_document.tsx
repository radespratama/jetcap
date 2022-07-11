import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />

          <link
            href="http://fonts.cdnfonts.com/css/cascadia-code"
            rel="stylesheet"
          />

          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        </Head>
        <body className="antialiased font-sans bg-gray-950">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
