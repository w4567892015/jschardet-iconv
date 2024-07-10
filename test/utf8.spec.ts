import * as fs from 'fs';
import * as path from 'path';

import { convertToUtf8, checkerUtf8OrAscii } from '../src/lib/convert';

const filePath = {
  feUtf8Template: path.join(__dirname, 'file', 'user_import_template.csv'),
  feUtf8: path.join(__dirname, 'file', 'fe-utf8.csv'),
  feBig5: path.join(__dirname, 'file', 'fe-big5.csv'),
  fe88591: path.join(__dirname, 'file', 'fe-88591.csv'),
  feWindow1252: path.join(__dirname, 'file', 'fe-window-1252.csv'),
}

describe('Is Utf8 ?', () => {
  it('should return true with utf-8 template file', async () => {
    const fileContent = fs.readFileSync(filePath.feUtf8Template);
    const data = convertToUtf8(fileContent);
    const result = checkerUtf8OrAscii(data);
    expect(result).toBe(true);
  });

  it('should return true with utf-8 template file', async () => {
    const fileContent = fs.readFileSync(filePath.feUtf8Template);
    const result = checkerUtf8OrAscii(fileContent);
    expect(result).toBe(true);
  });

  it('should return true with utf-8 file', async () => {
    const fileContent = fs.readFileSync(filePath.feUtf8);
    const data = convertToUtf8(fileContent);
    const result = checkerUtf8OrAscii(data);
    expect(result).toBe(true);
  });

  it('should return false with big-5 file', async () => {
    const fileContent = fs.readFileSync(filePath.feBig5);
    const data = convertToUtf8(fileContent);
    const result = checkerUtf8OrAscii(data);
    expect(result).toBe(true);
  });

  it('should return false with iso-8859-1 file', async () => {
    const fileContent = fs.readFileSync(filePath.fe88591);
    const data = convertToUtf8(fileContent);
    const result = checkerUtf8OrAscii(data);
    expect(result).toBe(true);
  });

  it('should return false with windows-1252 file', async () => {
    const fileContent = fs.readFileSync(filePath.feWindow1252);
    const data = convertToUtf8(fileContent);
    const result = checkerUtf8OrAscii(data);
    expect(result).toBe(true);
  });
});
