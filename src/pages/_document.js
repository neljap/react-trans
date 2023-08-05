import { Html, Head, Main, NextScript } from 'next/document'
import { useEffect } from 'react'

export default function Document() {
      useEffect(() => {
        function googleTranslateElementInit() {
          new google.translate.TranslateElement(
            { pageLanguage: "en" },
            "google_translate_element"
          );
        }
        googleTranslateElementInit()
      }, []);
  return (
    <Html lang="en">
      <Head />
      <body>
        <div id="google_translate_element"></div>
        <Main />
        <NextScript />
        <script
          type="text/javascript"
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        ></script>
      </body>
    </Html>
  );
}
