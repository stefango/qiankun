declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.png';
declare module '*.jpg';

declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}
