const crypto = require("crypto");

const qrSecrets = new Map();

function generateQRCode(tokenId) {
  const secret = crypto.randomBytes(32).toString("hex");
  qrSecrets.set(tokenId, secret);
  return secret;
}

function validateQRCode(tokenId, secret) {
  return qrSecrets.get(tokenId) === secret;
}

module.exports = { generateQRCode, validateQRCode };