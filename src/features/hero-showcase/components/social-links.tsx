import { Github, Linkedin } from "lucide-react";

const SocialLinks = () => {
  return (
    <>
      <a
        href="https://github.com/juancholopes"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 md:p-3 border rounded-lg hover:bg-blue-500/10 transition-colors duration-300"
        data-cursor="text"
      >
        <Github
          size={20}
          className="text-blue-500 dark:text-blue-400 md:w-6 md:h-6"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/juan-carlos-lopez-moreno-9a29b0299/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 md:p-3 border border-blue-500/30 rounded-lg hover:bg-blue-500/10 transition-colors duration-300"
        data-cursor="text"
      >
        <Linkedin
          size={20}
          className="text-blue-500 dark:text-blue-400 md:w-6 md:h-6"
        />
      </a>
    </>
  );
};

export default SocialLinks;
