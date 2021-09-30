import type { NextApiHandler } from "next";
import fs from "fs";
import http from "http";

const handler: NextApiHandler = (req, res) => {
  console.log(req.body);

  const file = fs.createWriteStream("public/locales/en/common.json");
  var request = http.get(
    "http://localhost:3002/locales/en/common.json",
    function (response) {
      response
        .on("finish", function () {
          console.log(
            fs.readFileSync("public/locales/en/common.json", {
              encoding: "utf8",
            })
          );
        })
        .pipe(file);
    }
  );
  res.json("OK");
};

export default handler;
//http://localhost:3002/locales/en/common.json
