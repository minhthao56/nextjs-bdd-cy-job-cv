import type { NextApiHandler } from "next";
import fs from "fs";
import pdf from "html-pdf";
import Handlebars from "handlebars";

const handler: NextApiHandler = (_, res) => {
  const file = fs.readFileSync("public/html/cv1.hbs", "utf8");

  const DOC = Handlebars.compile(file);

  let html = DOC({ name: "MINH THAO" });
  pdf.create(html, { format: "A4" }).toStream((err, pdfStream) => {
    if (err) {
      console.log("err", err);
      return res.status(500);
    } else {
      res.statusCode = 200;

      pdfStream.on("end", () => {
        return res.end();
      });

      pdfStream.pipe(res);
    }
  });
};

export default handler;
