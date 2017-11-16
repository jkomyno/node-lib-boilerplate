// @flow
import { open } from 'fs';
import type { fsOpenPromiseT } from '../types';

export const fsOpenPromise: fsOpenPromiseT = (path, flags) =>
  new Promise((resolve, reject) => {
    open(path, flags, (err, fd) => {
      if (err) {
        reject(err);
      } else {
        resolve(fd);
      }
    });
  });
