import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Intro() {
  return (
    <>
      <div className="text-white ">
        <h1 className="text-5xl font-extrabold">Onkar Vaidya</h1>
        <h3 className="font-bold text-xl mt-3">
          Software Engineer at Raja Software Labs
        </h3>
        <p className="mt-3 text-lg font-light max-w-xs">
          I build pixel-perfect, accessible products for the web and beyond.
        </p>
      </div>
      <div className="flex gap-4 text-3xl mt-5">
        <a
          href="https://github.com/onkar2405/"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="text-white cursor-pointer hover:text-gray-300" />
        </a>

        <a
          href="https://www.linkedin.com/in/onkar-vaidya/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="text-white cursor-pointer hover:text-gray-300" />
        </a>
      </div>
    </>
  );
}
