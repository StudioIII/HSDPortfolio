import Keys from 'constants/Keys.js';

import leftArrowIcon from 'constants/assets/iconography/left_arrow.svg';
import rightArrowIcon from 'constants/assets/iconography/right_arrow.svg';
import aboutPhotoSrc from 'constants/assets/img/hsd-about.jpg';
import Press1 from 'constants/assets/img/press1.jpg';
import Press2 from 'constants/assets/img/press2.jpg';
import Press3 from 'constants/assets/img/press3.jpg';

// iconography
export const LeftArrow = leftArrowIcon;
export const RightArrow = rightArrowIcon;

// pages
export const aboutMedia = [
  {title: 'about', src: aboutPhotoSrc}
];

export const portfolioMedia = [
  {title: 'Image One', src: 'https://res.cloudinary.com/enclave/image/upload/v1510450363/schnaper-1_xjquc9.jpg'},
  {title: 'Image Two', src: 'https://res.cloudinary.com/enclave/image/upload/v1510450422/schnaper-5_v463av.jpg'},
  {title: 'Image Three', src: 'https://res.cloudinary.com/enclave/image/upload/v1510450428/schnaper-2_nreajl.jpg'},
  {title: 'Image Four', src:'https://res.cloudinary.com/enclave/image/upload/v1510450435/schnaper-4_hv1pfe.jpg'},
  {title: 'five', src: 'https://res.cloudinary.com/enclave/image/upload/v1510450477/schnaper-9_cdtnjz.jpg'},
  {title: 'six', src: 'https://res.cloudinary.com/enclave/image/upload/v1510450485/schnaper-10_bseffw.jpg'},
  {title: 'seven', src: 'https://res.cloudinary.com/enclave/image/upload/v1510451190/schnaper-7_gol917.jpg'},
  {title: 'eight', src: 'https://res.cloudinary.com/enclave/image/upload/v1510451195/schnaper-6_kj8v9y.jpg'},
  {title: 'nine', src: 'https://res.cloudinary.com/enclave/image/upload/v1510451196/schnaper-8_tpgt3z.jpg'},
];

export const pressMedia = [
  {src: Press1, txt: 'At Home - Architectural Digest', link: 'https://www.architecturaldigest.com/story/schnaper-article-092002'},
  {src: Press2, txt: 'Philadelphia Freedom - Architectural Digest', link: 'https://www.architecturaldigest.com/story/schnaper-article-022003'},
  {src: Press3, txt: 'Featured - Architectural Digest', link: 'https://www.architecturaldigest.com/story/harry-schnaper-profile'},
];

export const homeMedia = [
  {title: 'Image One', src: 'https://res.cloudinary.com/enclave/image/upload/v1510451199/schnaper-3_r2cgcp.jpg'},
  {title: 'Image Two', src: 'https://res.cloudinary.com/enclave/image/upload/v1510450435/schnaper-4_hv1pfe.jpg'},
  {title: 'Image Three', src: 'https://res.cloudinary.com/enclave/image/upload/v1510450477/schnaper-9_cdtnjz.jpg'}
];

export const contactMedia = [
  {title: 'Harry Schnaper', src: aboutPhotoSrc},
  {title: 'Elise Casey', src: aboutPhotoSrc}
];

export const landingMedia = [
  {title: 'five', src: 'https://res.cloudinary.com/enclave/image/upload/v1510450477/schnaper-9_cdtnjz.jpg'},
  // {title: 'Image Two', src: 'https://res.cloudinary.com/enclave/image/upload/v1510450435/schnaper-4_hv1pfe.jpg'},
];

const Media = {
  [Keys.about]: aboutMedia,
  [Keys.home]: homeMedia,
  [Keys.contact]: contactMedia,
  [Keys.landing]: landingMedia,
  [Keys.portfolio]: portfolioMedia,
};

export default Media;
