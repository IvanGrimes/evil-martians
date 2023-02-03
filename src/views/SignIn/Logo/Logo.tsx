import { useState } from "react";
import baseLogo from "./assets/logo.svg";
import logo1 from "./assets/logo1.svg";
import logo2 from "./assets/logo2.svg";
import logo3 from "./assets/logo3.svg";
import logo4 from "./assets/logo4.svg";
import logo5 from "./assets/logo5.svg";
import s from "./Logo.module.css";
import { clsx } from "@/lib/clsx";
import { Image } from "@/lib/Image";

const logos = [logo1, logo2, logo3, logo4, logo5];

export const Logo = () => {
  const [logoVariantSrc, setLogoVariantSrc] = useState<string>("");
  const [isLogoVariantVisible, setLogoVariantVisible] = useState(false);

  const handleMouseEnter = () => {
    const logoIndex = (Math.random() * logos.length) << 0;

    setLogoVariantSrc(logos[logoIndex]);
  };
  const handleMouseLeave = () => {
    if (!isLogoVariantVisible) {
      setLogoVariantSrc("");
      return;
    }

    setLogoVariantVisible(false);
  };
  const handleLoad = () => {
    if (!logoVariantSrc) return;

    setLogoVariantVisible(true);
  };

  return (
    <div
      className={clsx(s.root, isLogoVariantVisible && s.logoVariantVisible)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image className={s.logo} src={baseLogo} aria-hidden="true" alt="" />
      <Image className={s.logoVariant} src={logoVariantSrc} onLoad={handleLoad} aria-hidden="true" alt="" />
    </div>
  );
};
