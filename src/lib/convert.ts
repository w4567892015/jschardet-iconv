import { detect } from 'jschardet';
import iconvLite from 'iconv-lite';

const list = ['UTF-8', 'ascii'];

export function checkerUtf8OrAscii(text: string | Buffer): boolean {
  return list.includes(detect(text).encoding) ? true : false;
}

export function convertToUtf8(text: string | Buffer): Buffer {
  const { encoding } = detect(text);
  let dataBuffer: Buffer = Buffer.from(text);
  if (!list.includes(encoding)) {
    const data = iconvLite.decode(dataBuffer, encoding);
    dataBuffer = iconvLite.encode(data, 'utf8');
  }

  return dataBuffer;
}
