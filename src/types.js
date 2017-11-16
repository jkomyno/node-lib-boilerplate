// @flow
export type libraryNameT = (libName: string) => void;

export type fsOpenPromiseT = (path: string, flags: string) =>
  Promise<number>;
