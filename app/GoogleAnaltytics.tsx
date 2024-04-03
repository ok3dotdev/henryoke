import React from 'react';
import Script from 'next/script';

const GoogleAnaltytics = () => {
  return (
    <>
      <Script
        strategy='lazyOnload'
        src='https://www.googletagmanager.com/gtag/js?id=G-M761KEXHSX'
      ></Script>
      <Script id='ga' strategy='lazyOnload'>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-M761KEXHSX');`}
      </Script>
    </>
  );
};

export default GoogleAnaltytics;
