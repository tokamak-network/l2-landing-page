"use client";
import GNB from "@/components/GNB";
import Footer from "@/components/Footer";
import MobileGNB from "@/components/MobileGNB";
import { Providers } from "./providers";
import useMediaView from "./hooks/useMediaView";
import Header from "@/components/Header";
import MobileHeader from "@/components/MobileHeader";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  // const {width} = useWindowDimensions()
  const {mobileView, tableView,pcView}  = useMediaView()
  // const [dWidth, setDWidth] = useState(0);

  // useEffect(() => {
  //   const deviceWidth = window.outerWidth;
  //   setDWidth(deviceWidth);
  // }, []);
console.log('mobileView, tableView,pcView',mobileView, tableView,pcView);

  return (
    <html lang="en">
      <body>
      <Providers>
    
         {mobileView? <MobileGNB/>:<GNB />} 
         {mobileView? <MobileHeader/>:<Header/>} 
         
          {children}
          <Footer />
        </Providers>
       
      </body>
    </html>
  );
}


