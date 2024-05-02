"use client"
import { useEffect } from "react";

const HotjarScript = () => {
  useEffect(() => {
    const hjid = "4964709"; // Sesuaikan dengan ID Hotjar Anda
    const hjsv = "6"; // Versi Hotjar

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:${hjid},hjsv:${hjsv}};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    `;

    document.head.appendChild(script);

    // Clean up
    return () => {
      // Remove Hotjar script when component unmounts
      document.head.removeChild(script);
    };
  }, []);

  return null; // No need to render anything in the DOM
};

export default HotjarScript;
