declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.svg";
// declare module 'src/assets/svgr/*.svg' {
//   import React from "react";
//   const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
//   export default SVG;
// }

declare const __IS_DEV__: boolean;
