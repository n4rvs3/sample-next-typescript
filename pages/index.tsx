import Head from "next/head";
import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
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
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
              {isOpen ? 'Close' : 'Open'}
            </MenuButton>
            <MenuList>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <MenuItem onClick={() => alert('Kagebunshin')}>Create a Copy</MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    </div>
  )
}

export default Home