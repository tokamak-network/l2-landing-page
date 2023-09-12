"use client";
import GNB from "@/components/GNB";
import Footer from "@/components/Footer";
import MobileGNB from "@/components/MobileGNB";
import { Providers } from "./providers";
import useMediaView from "./hooks/useMediaView";
import Header from "@/components/Header";
import MobileHeader from "@/components/MobileHeader";
import BlueAnimations from "@/components/BlueAnimations";
import BottomRing from "@/components/animations/BottomRing";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const {width} = useWindowDimensions()
  const { mobileView, tabletView, pcView } = useMediaView();
  // const [dWidth, setDWidth] = useState(0);

  // useEffect(() => {
  //   const deviceWidth = window.outerWidth;
  //   setDWidth(deviceWidth);
  // }, []);


  const GoogleAnalyticsScript = () => {
    return (
      <>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1BLT0N7H0P"></Script>
        <Script id="google-analytics">
          {` window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-1BLT0N7H0P');`}
        </Script>
      </>
    );
  };

  return (
    <html lang="en">
      <GoogleAnalyticsScript />
      <head>
        <title>Titan - Tokamak</title>
        <meta name="robots" content="all" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://titan.tokamak.network/" />
        <meta property="og:title" content="Titan - Tokamak" />
        <meta
          name="description"
          content="Titan is an L2 network that is a customized fork of the Optimism codebase. It is deployed and operated by Tokamak Network."></meta>
        <meta
          property="og:description"
          content="Titan is an L2 network that is a customized fork of the Optimism codebase. It is deployed and operated by Tokamak Network."></meta>
        <meta
          name="keywords"
          content="titan network, tokamak network, L2, rollup, ethereum"
        />
      </head>
      <body>
        <Providers>
          {mobileView ? <MobileGNB /> : <GNB />}
          <BlueAnimations />
          {mobileView ? <MobileHeader /> : <Header />}

          {children}
          {/* <BottomRing/> */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
