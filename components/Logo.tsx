import Image from "next/image";
import rzBarsLogo from "@/public/darkmode-logo-rz_bars-path.svg";

export default function Logo({
  className
}: {  
  className?: string
}) {
    return (
      <div className={className}>
        <Image
          priority={true}
          src={rzBarsLogo}
          alt="Logo"
          style={{objectFit: "contain"}}/>
      </div>
    );
  }
  