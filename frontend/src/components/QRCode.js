import { useEffect, useRef } from "react";
import QRCode from "qrcode";

export default function QRCodeComponent({ tokenId, secret }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (tokenId && secret) {
      const data = `https://eventchain.com/verify?tokenId=${tokenId}&secret=${secret}`;
      QRCode.toCanvas(canvasRef.current, data, (error) => {
        if (error) console.error("Error generating QR code:", error);
      });
    }
  }, [tokenId, secret]);

  return <canvas ref={canvasRef} />;
}