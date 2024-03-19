import { FaGithub, FaLinkedin } from "react-icons/fa";

/**
 * This component renders the profile summary.
 * @returns Profile summary.
 */
export function Profile() {
  return (
    <>
      <div className="text-white">
        <div className="mb-20">
          <div>
            <h1 className="text-5xl font-extrabold">Onkar Vaidya</h1>
            <h3 className="text-slate-200 font-bold text-xl mt-3">
              Software Engineer at Raja Software Labs
            </h3>
            <p className="text-slate-400 mt-4 max-w-xs leading-normal">
              I build pixel-perfect, accessible web products for good digital
              experience.
            </p>
          </div>
          <div className="flex gap-4 text-3xl mt-5">
            <a
              href="https://github.com/onkar2405/"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="cursor-pointer hover:text-gray-300" />
            </a>

            <a
              href="https://www.linkedin.com/in/onkar-vaidya/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="cursor-pointer hover:text-gray-300" />
            </a>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className=" text-slate-500 flex flex-col gap-y-2">
            <a className="group flex items-center py-3" href="#about_section">
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                About
              </span>
            </a>
            <a className="group flex items-center py-3" href="#experience">
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                Experience
              </span>
            </a>
            <a className="group flex items-center py-3" href="#projects">
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                Projects
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
