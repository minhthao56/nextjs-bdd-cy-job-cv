import { Fragment } from "react";
import nextI18NextConfig from "../next-i18next.config.js";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { BannerHome, CarouselHome } from "@src/modules";
// import Link from "next/link";
// import { Button } from "@src/components";
// import axios from "axios";
// import { useTranslation } from "react-i18next";

const Home = () => {
  // const gener = async () => {
  //   const res = await axios.get("api/stream-pdf", { responseType: "blob" });
  //   const flie = new Blob([res.data], { type: "application/pdf" });
  //   const link = document.createElement("a");
  //   const url = URL.createObjectURL(flie);
  //   link.href = url;
  //   link.setAttribute("download", "cv.pdf");
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  // useEffect(() => {
  //   axios
  //     .post("api/lang", { test: "TEST" })
  //     .then((res) => console.log(res.data));
  // }, []);
  // const { t } = useTranslation("common");

  return (
    <Fragment>
      <Head>
        <title>Home Page</title>
      </Head>
      <BannerHome />
      <CarouselHome />
    </Fragment>
  );
};

type Location = {
  locale: string;
};
export const getStaticProps = async ({ locale }: Location) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], nextI18NextConfig)),
    },
    revalidate: 10,
  };
};

export default Home;
