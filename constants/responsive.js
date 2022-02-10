export const breakPoint = {
  POINT_MOBIE: 768,
  POINT_TABLET: 992,
  POINT_DESKTOP: 1200,
};

export const mediaWidth = {
  MEDIA_MOBILE: `@media only screen and (min-width: ${breakPoint.POINT_MOBIE}px)`,
  MEDIA_TABLET: `@media only screen and (min-width: ${breakPoint.POINT_TABLET}px)`,
  MEDIA_DESKTOP: `@media only screen and (min-width: ${breakPoint.POINT_DESKTOP}px)`,
};
