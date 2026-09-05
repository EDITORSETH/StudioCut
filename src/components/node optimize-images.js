const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "public");

const files = fs.readdirSync(publicDir).filter((file) =>
  /\.(png|jpg|jpeg)$/i.test(file)
);

async function optimize() {
  for (const file of files) {
    const input = path.join(publicDir, file);
    const output = path.join(
      publicDir,
      file.replace(/\.(png|jpg|jpeg)$/i, ".webp")
    );

    await sharp(input)
      .webp({ quality: 80 })
      .toFile(output);

    console.log(`✓ ${file} → ${path.basename(output)}`);
  }

  console.log("\nDone! All images converted to WebP.");
}

optimize().catch(console.error);