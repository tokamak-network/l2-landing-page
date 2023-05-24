"use client";
import GNB from "@/components/GNB";
import Footer from "@/components/Footer";
import MobileGNB from "@/components/MobileGNB";
import { Providers } from "./providers";
import useMediaView from "./hooks/useMediaView";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  // const {width} = useWindowDimensions()
  const {mobileView}  = useMediaView()
  // const [dWidth, setDWidth] = useState(0);

  // useEffect(() => {
  //   const deviceWidth = window.outerWidth;
  //   setDWidth(deviceWidth);
  // }, []);


  return (
    <html lang="en">
      <body>
      <Providers>
    
         {mobileView? <MobileGNB/>:<GNB />} 
         <Header/>
          {children}
          <Footer />
        </Providers>
       
      </body>
    </html>
  );
}


