import * as React from 'react';
import Document, {Head, Html, Main, NextScript} from 'next/document';
import {Server, Sheet} from 'styletron-engine-atomic';
import {createRelayDocument, RelayDocument} from 'relay-nextjs/document';
import {engine} from '@anthaathi/web-lib';

class MyDocument extends Document<{
  stylesheets: Sheet[];
  relayDocument: RelayDocument;
}> {
  static async getInitialProps(props: any) {
    const relayDocument = createRelayDocument();

    const renderPage = props.renderPage;

    props.renderPage = () =>
      renderPage({
        enhanceApp: (App) =>
          relayDocument.enhance((props) => {
            return <App {...props} />;
          }),
      });

    const stylesheets = (engine as Server).getStylesheets() || [];

    const initialProps = await Document.getInitialProps(props);

    return {
      ...initialProps,
      relayDocument,
      stylesheets,
    };
  }

  render() {
    const {relayDocument} = this.props;

    return (
      <Html>
        <Head>
          <style
            dangerouslySetInnerHTML={{
              __html: 'html, body { padding: 0; margin: 0 }',
            }}
          />
          {this.props.stylesheets.map((sheet, i) => (
            <style
              className="_styletron_hydrate_"
              dangerouslySetInnerHTML={{__html: sheet.css}}
              media={sheet.attrs.media}
              data-hydrate={sheet.attrs['data-hydrate']}
              key={i}
            />
          ))}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@500&family=Red+Hat+Display:wght@400;500&display=swap"
            rel="stylesheet"
          />
          <relayDocument.Script />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
