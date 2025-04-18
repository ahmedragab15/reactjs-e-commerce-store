
import Logo from "./../assets/images/logo.png";
import GooglePlay from "./../assets/images/google-play.png";
import AppStore from "./../assets/images/app-store.png";
import notFound from "./../assets/images/404.svg";

import aboutImgsHero1 from "./../assets/images/about-page/1.png";
import aboutImgsHero2 from "./../assets/images/about-page/2.png";
import aboutImgsHero3 from "./../assets/images/about-page/3.png";
import aboutImgsHero4 from "./../assets/images/about-page/4.png";

import aboutImgsService1 from "./../assets/images/about-page/s1.png";
import aboutImgsService2 from "./../assets/images/about-page/s2.png";
import aboutImgsService3 from "./../assets/images/about-page/s3.png";
import aboutImgsService4 from "./../assets/images/about-page/s4.png";
import aboutImgsService5 from "./../assets/images/about-page/s5.png";
import aboutImgsService6 from "./../assets/images/about-page/s6.png";

import contactImg from "./../assets/images/contact-page/1.png"

import homeImg1 from "./../assets/images/home-page/1.png"
import homeImg2 from "./../assets/images/home-page/deal.png"

import checkoutImg1 from "./../assets/images/checkout-page/visa.jpg"
import checkoutImg2 from "./../assets/images/checkout-page/master-card.jpg"
import checkoutImg3 from "./../assets/images/checkout-page/paypal.jpg"
import checkoutImg4 from "./../assets/images/checkout-page/american-express.jpg"

const Images = {
  logo: Logo,
  GP: GooglePlay,
  AS: AppStore,
  nF: notFound,
  aboutImgs: {
    h1: aboutImgsHero1,
    h2: aboutImgsHero2,
    h3: aboutImgsHero3,
    h4: aboutImgsHero4,

    s1: aboutImgsService1,
    s2: aboutImgsService2,
    s3: aboutImgsService3,
    s4: aboutImgsService4,
    s5: aboutImgsService5,
    s6: aboutImgsService6,
  },
  contactImgs: {
    c1: contactImg,
  },
  homeImgs: {
    h1: homeImg1,
    h2: homeImg2,
  },
  checkoutImgs: {
    h1: checkoutImg1,
    h2: checkoutImg2,
    h3: checkoutImg3,
    h4: checkoutImg4,
  },
};

export default Images;