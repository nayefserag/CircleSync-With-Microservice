// const fs = require('fs');
const pdfLib = require('pdf-lib');
const { StandardFonts } = pdfLib;

module.exports = async function createPDF(text,name) {
  const pdfDoc = await pdfLib.PDFDocument.create();
  const page = pdfDoc.addPage();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const width = font.widthOfTextAtSize(text, 12);
  const height = font.heightAtSize(12);
  const x = page.getWidth() / 2 - width / 2;
  const y = page.getHeight() / 2 + height / 2;
  page.drawText(`${text} ${name}`, {
    x: x,
    y: y,
    size: 12,
    font: font,
  });

  const pdfBytes = await pdfDoc.save();
  // fs.writeFileSync(`./pdf/${name}.pdf`, pdfBytes);
  return pdfBytes;
};
