import Head from "next/head";
import { Heading } from "@chakra-ui/layout";

const About = () => {
    return (
        <div>
            <Head>
                <title>About this</title>
                <meta name="description" content="About this" />
            </Head>
            <Heading as='h1' size='xl'>About this</Heading>
        </div>
    )
}

export default About