declare module "*.png" {
  const path: string;
  export default path;
}

declare module "*.svg" {
  const value: any;
  export = value;
}
