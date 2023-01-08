import Head from "next/head";
import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export const Page = ({ title, children }: Props) => {
  return (
    <>
      <Head>
        <title>{`${title} | Next Starter`}</title>
      </Head>
      {children}
    </>
  );
};
