import { FC, Fragment } from "react";
// import { jsPDF } from "jspdf";
import Head from "next/head";
import { Button } from "@src/components";

const Home: FC = () => {
  console.log("env", process.env.HOST);

  const gener = () => {
    // const doc = new jsPDF("p", "pt", "a4");
    // doc.f(document.body, function (pdf) {
    //   pdf.save("web.pdf");
    // });
  };

  return (
    <Fragment>
      <Head>
        <title>Home Page</title>
      </Head>
      <div id="text">
        <h1>Home Page</h1>
        <Button onClick={gener}>TEST</Button>
      </div>
    </Fragment>
  );
};

export default Home;
