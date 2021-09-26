export const a = (v: string) => {
  const h = `html <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>CV!</title>
    </head>
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Yaldevi:wght@200;300;400;500;600;700&display=swap");
      body {
        background-color: red;
        font-family: "Yaldevi", sans-serif;
      }
    </style>
    <body>
      <div id="test">${v}</div>
    </body>
  </html>`;
  return h;
};
