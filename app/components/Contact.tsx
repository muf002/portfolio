import { FaLinkedin, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
export default function ContactPage() {
  return (
    <section id="contact" className="bg-neutral-50 py-24 pb-16 sm:pb-16 sm:h-screen">
      <div className="p-6">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-semibold mb-4">CONTACT</h2>
          <div className="h-1 w-9 bg-blue-700 mb-4 rounded-lg"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl">
            <div className="flex flex-col">
              <p className="block text-center text-base sm:text-lg font-light sm:font-normal m-auto text-neutral-500 max-w-2xl leading-loose mb-7">
                Feel free to Contact me by email 
              </p>
              <div className="bg-gray-100 shadow-lg rounded-lg p-8 mr-8">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="text-gray-600">Name</label>
                    <input type="text" id="name" placeholder="Enter Your Name" className="w-full p-2 border border-gray-300 rounded mt-1" />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-gray-600">Email</label>
                    <input type="email" id="email" placeholder="Enter Your Email" className="w-full p-2 border border-gray-300 rounded mt-1" />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-gray-600">Message</label>
                    <textarea id="message" rows={4} placeholder="Enter Your Message" className="w-full p-2 border border-gray-300 rounded mt-1"></textarea>
                  </div>
                  <div className="text-right">
                    <button type="submit" className="bg-blue-700 text-white py-4 px-10 rounded hover:bg-blue-800 transition duration-300">
                      SUBMIT
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="hidden md:block divider h-full w-px bg-gray-300"></div>
              <div className="flex flex-col md:pl-8 space-y-4 items-center">
                <p className="block text-center text-base sm:text-lg font-light sm:font-normal text-neutral-500 max-w-3xl leading-loose ">Or reach out to me on my socials</p>
                <div className="flex justify-center py-5 space-x-4">
                  <a href="https://www.linkedin.com" className="text-blue-600 hover:scale-125 transition-transform duration-300" target="_blank" rel="noopener noreferrer"><FaLinkedin size={40} /></a>
                  <a href="https://www.instagram.com" className="text-pink-600 hover:scale-125 transition-transform duration-300" target="_blank" rel="noopener noreferrer"><FaInstagram size={40} /></a>
                  <a href="https://github.com" className="text-gray-700 hover:scale-125 transition-transform duration-300" target="_blank" rel="noopener noreferrer"><FaGithub size={40} /></a>
                  <a href="https://twitter.com" className="text-blue-400 hover:scale-125 transition-transform duration-300" target="_blank" rel="noopener noreferrer"><FaTwitter size={40} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

