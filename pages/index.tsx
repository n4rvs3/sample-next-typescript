import Head from "next/head";
import Link from "next/link";
import {
  Heading,
  Button
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import React from "react";

const Home = () => {
  return (
    <div>
      <Head>
        <title>sample next typescript</title>
        <meta name="description" content="Typescriptを用いたNext.jsのサンプル" />
      </Head>
      <Heading as='h1' size='xl'>Hello World</Heading>
      <Link href="/about">
        <Button>About</Button>
      </Link>
    </div>
  )
}

export default Home