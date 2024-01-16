import { FaGithub } from "react-icons/fa"
import { FaPlay } from "react-icons/fa"
import Image from "next/image";
export default function ProjectCard({ name, description, githubUrl, demoUrl, imageUrl }: {
  name: string,
  description: string,
  githubUrl?: string,
  demoUrl?: string,
  imageUrl: string
}) {
  return (
    <section className="py-10 px-6">
      <div className="flex flex-col items-center bg-white rounded-lg shadow-xl hover:shadow-lg transition-all duration-500 ease-in-out hover:scale-105 transform overflow-hidden h-auto">
        <Image
          src={imageUrl}
          alt="imageName"
          height={100}
          width={500}
          className="py-5 px-5"
        />
        <div className="flex flex-col items-center p-4">
          <h3 className="text-2xl font-medium text-center">{name}</h3>
          <p className="text-gray-600 text-lg font-light text-center my-3">{description}</p>
          <div className="flex mt-4">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-4 py-2 mr-2 border border-cyan-700 text-base font-medium rounded-md  bg-inherit hover:bg-cyan-700 hover:text-white">
                <FaGithub className="mr-2" /> GitHub
              </a>
            )}
            {demoUrl && (
              <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-4 py-2 border border-cyan-700 text-base font-medium rounded-md hover:text-white bg-inherit hover:bg-cyan-700">
                <FaPlay className="mr-2" /> Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
