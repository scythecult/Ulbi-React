// declare module '*.scss' {
//   const css: { [key: string]: string };
//   export default css;
// }

declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}
