import Details from "components/details";
import About from "components/about";
import Projects from "components/projects";
import Footer from "components/footer";
import Head from "next/head";

export default function Home() {
 return (
  <>
   <Head>
    <title>Joan Andrés Lara Mora | Fullstack Developer</title>
   </Head>
   <Details />
   <About />-
   <Projects />
   <Footer />
  </>
 );
}
