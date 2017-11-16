jest.unmock('../src/utils');

import { fsOpenPromise } from '../src/utils';

let fd;

describe('fsOpenPromise', () => {
  it('should throw exception if file is not found', async () => {
    let caughtException = false;

    try {
      await fsOpenPromise('/path/to/file/that/does/not/exist', 'r');
    } catch (e) {
      expect(e.code).toBe('ENOENT');
      caughtException = true;
    }

    expect(caughtException).toBe(true);
  });

  it('should return a file identifier if file is found', async () => {
    fd = await fsOpenPromise('./package.json', 'r');
    expect(fd).toBeTruthy();
    expect(typeof fd).toBe('number');
  });
});
