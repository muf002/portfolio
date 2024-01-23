export default function About() {
  const skills = [
    "Golang",
    "NestJs",
    "NodeJs",
    "NextJs",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "ReactJs",
    "GIT",
    "Angular",
    "Command Line",
    "Linux"
  ];
  return (
    <section id="about" className="bg-neutral-50 py-32 px-0 pb-16 sm:pb-20">
      <div className="m-auto max-w-[120rem] px-3 sm:px-32">
        <h2 className="sm:mb-28 mb-16">
          <span className="block text-4xl font-semibold sm:font-bold uppercase text-center mb-12 relative tracking-wide after:content-[''] after:top-[calc(100%+1.2rem)] after:absolute after:h-1 after:w-8 after:bg-blue-700 after:rounded after:left-1/2 after:-translate-x-1/2">
            About Me
          </span>
          <span className="block text-center text-base sm:text-lg font-light sm:font-normal m-auto text-neutral-500 max-w-3xl leading-loose">
            Here you will find more about me, my experience, passion projects I have build and much more in terms of my technical skills
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-32 gap-20">
          <div className="">
            <h3 className="font-bold text-lg sm:text-2xl mb-8 tracking-wide">
              Get to know me!
            </h3>
            <div className="">
              <p className="max-w-xl text-sm sm:text-base font-normal mb-4 text-neutral-500 sm:leading-relaxed leading-loose">
                This is Usman Farooq, and I am a Full Stack Software engineer deeply engaged with all things tech.
                Since secondary school, I have been playing with computers and different emerging technologies be it software or hardware. 
              </p>
              <p className="max-w-xl text-sm sm:text-base font-normal mb-4 text-neutral-500 sm:leading-relaxed leading-loose">
                I completed my undergrad in CS from GIKI, Pakistan and since then I have been working with different startups and tech companies in building
                impactful applications and meaningful businesses. Currently, I am working as a backend software engineer at a YC backed startup with cloud kitchen model building a product from the ground up that
                provides lunch solutions to different businesses
              </p>
              <p className="max-w-xl text-sm sm:text-base mb-10 font-normal text-neutral-500 sm:leading-relaxed leading-loose">
                I want to solve meaningful and high-impact problems that improve the lives of the people around me. 
                My interest areas include working on Distributed, Scalable, and High availability systems. 
                I love building data-intensive applications and solving problems that require analysis and contain engineering/design challenges.
              </p>
            </div>
            <a
              href="./#contact"
              className="uppercase inline-block font-bold rounded bg-blue-500 text-white tracking-wide text-base py-4 px-11"
            >
              Contact
            </a>
          </div>
          <div className="">
            <h3 className="font-bold text-lg sm:text-2xl mb-8 tracking-wide">
              My Skills
            </h3>
            <div className="flex flex-wrap">
              {skills &&
                skills.map((skill, index) => {
                  return (
                    <div
                      key={index}
                      className="mb-3 mr-3 text-sm rounded font-medium py-3 sm:px-6 px-4 bg-neutral-200 text-neutral-500"
                    >
                      {skill}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
