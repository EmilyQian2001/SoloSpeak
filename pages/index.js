import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Login from "@/components/Login";
import { getSession, useSession } from "next-auth/react";
import Image from "next/image";
import Head from "next/head";
import Feed from "@/components/Feed";
import RightSidebar from "@/components/RightSidebar";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session } = useSession();
  if (!session) return <Login />;
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex bg-gray-100">
        <Sidebar />
        <Feed />
        <RightSidebar />
      </main>
    </>
  );
}
export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}
