'use strict';
// Jimp 0.22 calls only the asynchronous legacy fromBuffer method.
// Keep the official patched parser intact; do not backport or suppress audit data.
let modern;
exports.fromBuffer=async buffer=>{
  modern ||= import('file-type-modern');
  const {fileTypeFromBuffer}=await modern;
  return fileTypeFromBuffer(buffer);
};
