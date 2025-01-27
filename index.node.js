'use strict';

const fsPr = require('fs/promises');

const LibPsd = require('psd');
const fflate = require('fflate');

const EX = require('./api.js');

Object.assign(EX, {

  LibPsd,

  async ungzip(data) {
    return fflate.gunzipSync(data);
    //  I'm waiting for clarification on how to use the async mode:
    //  https://github.com/101arrowz/fflate/issues/79 */
  },

  async fromFile(path) {
    const data = Uint8Array.from(await fsPr.readFile(path));
    return EX.fromUint8Array(data);
  },


});


module.exports = EX;
