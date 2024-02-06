import ProjectCard from "./ProjectCard";
export default function Project() {
  const projects = [
    {
      name: "Virtual Cafeteria",
      description: "A one-stop lunch solution for your employees. A platform where you can register your business and employees and get daily home-cooked lunch with a variety of different cuisines.",
      demoUrl: "https://business.getbyte.app/#/en",
      imageUrl: "/cloud-kitchen.png"
    },
    {
      name: "Order Delivery System",
      description: "A complete solution for a food delivery service which aims to connect customers with restaurants, enabling them to browse menus, place orders, and manage deliveries.",
      githubUrl: "https://github.com/muf002/food-delivery-application",
      imageUrl: "/food-delivery.jpg"
    },
    {
      name: "System",
      description: "A good desciption is to have between the projects and the believer in himself to rectify the amusment of the world",
      githubUrl: "hello@hello",
      demoUrl: "hello@hello",
      imageUrl: "/lofi-winter-wallpaper-2560×1440.jpg"
    },
    {
      name: "System",
      description: "A good desciption is to have between the projects and the believer in himself to rectify the amusment of the world",
      githubUrl: "hello@hello",
      demoUrl: "hello@hello",
      imageUrl: "/lofi-winter-wallpaper-2560×1440.jpg"
    },
  ]
  return (
    <section id="projects" className="bg-neutral-50">
      <div className="sm:container mx-auto pt-32">
        <h2 className="sm:mb-28 mb-16">
          <span className="block text-4xl font-semibold sm:font-bold uppercase text-center mb-12 relative tracking-wide after:content-[''] after:top-[calc(100%+1.2rem)] after:absolute after:h-1 after:w-8 after:bg-blue-700 after:rounded after:left-1/2 after:-translate-x-1/2">
            Projects
          </span>
          <span className="block text-center text-base sm:text-lg font-light sm:font-normal m-auto text-neutral-500 max-w-3xl leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
            tempora explicabo quae quod deserunt eius sapiente
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              description={project.description}
              githubUrl={project.githubUrl}
              demoUrl={project.demoUrl}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
