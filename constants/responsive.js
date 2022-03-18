export const breakPoint = {
  POINT_MOBILE: 768,
  POINT_TABLET: 1024,
  POINT_DESKTOP: 1200,
};

export const mediaWidth = {
  MEDIA_MOBILE: `@media only screen and (max-width: ${breakPoint.POINT_MOBILE}px)`,
  MEDIA_TABLET: `@media only screen and (max-width: ${breakPoint.POINT_TABLET}px)`,
  MEDIA_DESKTOP: `@media only screen and (max-width: ${breakPoint.POINT_DESKTOP}px)`,
  MEDIA_WIDE: `@media only screen and (min-width: ${breakPoint.POINT_DESKTOP + 1}px)`,
};
