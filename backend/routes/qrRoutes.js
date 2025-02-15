const express = require("express");
const { generateQRCode, validateQRCode } = require("../controllers/qrController");

const router = express.Router();

router.post("/generate", (req, res) => {
  const { tokenId } = req.body;
  const secret = generateQRCode(tokenId);
  res.json({ secret });
});

router.post("/verify", (req, res) => {
  const { tokenId, secret } = req.body;
  const isValid = validateQRCode(tokenId, secret);
  res.json({ valid: isValid });
});

module.exports = router;