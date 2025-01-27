'use strict';

const EX = {
  LibPsd() { throw new Error('Stub!'); },
  async gunzip(data) { throw new Error('Stub!', data); },
  async fromFile(path) { throw new Error('Stub!', path); },


  async autoDecompress(bytes) {
    const peek = String.fromCharCode(...bytes.slice(0, 2));
    if (peek.startsWith('\x1F\x8B')) { return this.ungzip(bytes); }
    return bytes;
  },


  async fromUint8Array(fileBytes) {
    const psdBytes = await this.autoDecompress(fileBytes);
    const psdFile = new EX.LibPsd(psdBytes);
    psdFile.parse();
    return psdFile;
  },


};


module.exports = EX;
