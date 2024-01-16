import Project from "./Project";
export default function About() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "SASS",
    "GIT",
    "Shopify",
    "Wordpress",
    "Google Ads",
    "Facebook Ads",
    "Android",
    "IOS",
  ];
  return (
    <section id="about" className="bg-neutral-50 py-32 px-0 pb-16 sm:pb-20 sm:h-screen">
      <div className="m-auto max-w-[120rem] px-3 sm:px-0 sm:w-5/6">
        <h2 className="sm:mb-28 mb-16">
          <span className="block text-4xl font-semibold sm:font-bold uppercase text-center mb-12 relative tracking-wide after:content-[''] after:top-[calc(100%+1.2rem)] after:absolute after:h-1 after:w-8 after:bg-blue-700 after:rounded after:left-1/2 after:-translate-x-1/2">
            About Me
          </span>
          <span className="block text-center text-base sm:text-lg font-light sm:font-normal m-auto text-neutral-500 max-w-3xl leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
            tempora explicabo quae quod deserunt eius sapiente
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-32 gap-20">
          <div className="">
            <h3 className="font-bold text-lg sm:text-2xl mb-8 tracking-wide">
              Get to know me!
            </h3>
            <div className="">
              <p className="max-w-xl text-sm sm:text-base font-normal mb-4 text-neutral-500 sm:leading-relaxed leading-loose">
                Hey! It&lsquo;s<strong> John Doe </strong>
                and I&lsquo;m a <strong> Frontend Web Developer </strong>{" "}
                located in Los Angeles. I&lsquo;ve done
                <strong> remote </strong>
                projects for agencies, consulted for startups, and collaborated
                with talented people to create
                <strong> digital products </strong>
                for both business and consumer use.
              </p>
              <p className="max-w-xl text-sm sm:text-base mb-10 font-normal text-neutral-500 sm:leading-relaxed leading-loose">
                I&lsquo;m a bit of a digital product junky. Over the years,
                I&lsquo;ve used hundreds of web and mobile apps in different
                industries and verticals. Feel free to
                <strong> contact </strong> me here.
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
