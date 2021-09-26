import { FC, Fragment, useEffect } from "react";
// import { jsPDF } from "jspdf";
import Head from "next/head";
import Link from "next/link";
import { Button } from "@src/components";
import axios from "axios";

const Home: FC = () => {
  console.log("env", process.env.HOST);

  const gener = async () => {
    const res = await axios.get("api/hello", { responseType: "blob" });
    const flie = new Blob([res.data], { type: "application/pdf" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(flie);
    link.href = url;
    link.setAttribute("download", "cv.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    gener();
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Home Page</title>
      </Head>
      <div id="text">
        <h1>Home Page</h1>
        <Link href="/login">Login</Link>
        <Button onClick={gener}>TEST</Button>
      </div>
    </Fragment>
  );
};

export default Home;
