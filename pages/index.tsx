import { FC, Fragment } from "react";
import Head from "next/head";
import { Button } from "@src/components/Button";

const Home: FC = () => {
  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Home Page</h1>
        <Button>TEST</Button>
      </div>
    </Fragment>
  );
};

export default Home;
