import Link from "next/link";
import { Header } from "./Header";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

export default function Home() {
  return (
    <div className="h-[unset] min-h-[unset] relative bg-center sm:h-screen bg-[linear-gradient(to_right_bottom,rgba(6,95,70,0.8),rgba(6,95,70,0.8)),url('../public/common-bg.svg')]">
      <Header />
      <div className="static m-auto translate-x-0 translate-y-0 pt-44 pb-24 px-1 sm:absolute sm:top-2/4 sm:left-2/4 sm:-translate-y-2/4 sm:-translate-x-2/4">
        <h1 className="text-4xl uppercase tracking-wider text-center font-bold text-white font-sans leading-relaxed">
          {`Hey, I'm Usman Farooq`}
        </h1>
        <div className="mt-9 mr-auto mb-0 ml-auto px-2 max-w-7xl">
          <p className="text-white text-center w-full font-sans text-base sm:text-xl leading-relaxed sm:leading-9">
            A Full Stack Software Engineer with a keen interest in everything up-and-coming in tech and passionate about building meaningful applicaitons.
          </p>
        </div>
        <div className="mt-16 text-center">
          <button className="bg-white text-black font-sans font-bold text-lg uppercase rounded-md py-3 px-16">
            <a href={"/#projects"} className="tracking-widest">
              Projects
            </a>
          </button>
        </div>
      </div>
      <div className="hidden sm:rounded-sm sm:absolute sm:top-2/4 sm:-translate-y-2/4 sm:flex flex-col sm:bg-white">
        <div className="relative aspect-square w-14 m-1 rounded-md inline-block hover:bg-purple-200">
          <a href={`https://github.com/muf002`} target="_blank" rel="noopener noreferrer" className="absolute w-full aspect-square">
            <div className="grid place-items-center aspect-square">
              <BsGithub size={30} className=""></BsGithub>
            </div>
          </a>
        </div>
        <div className="relative aspect-square w-14 m-1 rounded-md inline-block hover:bg-purple-200">
          <a href={`https://www.instagram.com/muf002/`} target="_blank" rel="noopener noreferrer" className="absolute w-full aspect-square">
            <div className="grid place-items-center aspect-square">
              <BsInstagram size={30} className=""></BsInstagram>
            </div>
          </a>
        </div>
        <div className="relative aspect-square w-14 m-1 rounded-md inline-block hover:bg-purple-200">
          <Link href={`https://twitter.com/muf002`} target="_blank" rel="noopener noreferrer" className="absolute w-full aspect-square">
            <div className="grid place-items-center aspect-square">
              <BsTwitter size={30} className=""></BsTwitter>
            </div>
          </Link>
        </div>
        <div className="relative aspect-square w-14 m-1 rounded-md inline-block hover:bg-purple-200">
          <a href={`https://www.linkedin.com/in/usman-farooq-44241a148/`} target="_blank" rel="noopener noreferrer" className="absolute w-full aspect-square">
            <div className="grid place-items-center aspect-square">
              <BsLinkedin size={30} className=""></BsLinkedin>
            </div>
          </a>
        </div>
      </div>
      <div
        className="relative sm:absolute sm:left-1/2 sm:-translate-x-1/2"
        style={{ bottom: "3%" }}
      >
        <div className="w-6 h-10 border-2 border-solid border-gray-200 rounded-3xl relative overflow-hidden before:content-[''] before:w-1 before:h-1 before:absolute before:top-2 before:left-1/2 before:-translate-x-1/2 before:bg-gray-200 before:rounded-3xl before:opacity-100 before:animate-wheeling"></div>
      </div>
    </div>
  );
}
