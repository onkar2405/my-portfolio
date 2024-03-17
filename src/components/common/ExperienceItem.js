import { HiExternalLink } from "react-icons/hi";
import { SkillItem } from "./SkillItem";

/**
 * This component holds the skeleton code for items of Experience section.
 * @param {date} startDate - Start date of the company.
 * @param {date} endDate - end date of the company.
 * @param {boolean} isCurrentlyWorking - represents whether currently working at the company.
 * @param {string} title - profile title of the company.
 * @param {string} companyLink - Company link.
 * @param {string} companyName - Name of the company.
 * @param {array} techStack - Technologies used in current company.
 * @param {string} children - block level component to be rendered in this component.
 *
 * @returns Experience item.
 */
export function ExperienceItem({
  startDate,
  endDate,
  isCurrentlyWorking,
  title,
  companyLink,
  companyName,
  techStack,
  children,
}) {
  return (
    <>
      <div className="group font-semibold">
        <a
          target="_blank"
          rel="noreferrer noopener"
          href={companyLink}
          className="p-4 rounded-lg flex gap-8 lg:group-hover:bg-slate-800/50 transition motion-reduce:transition-none focus-visible:text-teal-300 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
        >
          <p className="text-s shrink-0 font-semibold text-slate-400 leading-normal">
            {startDate}-{isCurrentlyWorking ? "Present" : endDate}
          </p>
          <div>
            <div className="flex flex-row align-middle gap-1">
              <h3 className="text-slate-200 text-base lg:group-hover:text-teal-300 transition motion-reduce:transition-none">
                {title}
                {companyName}
              </h3>
              <p className="text-white self-center lg:group-hover:text-teal-300 transition motion-reduce:transition-none">
                <HiExternalLink />
              </p>
            </div>
            <div className="mt-2">{children}</div>
            <div className="mt-3 flex gap-2 text-white flex-wrap">
              {techStack.map((tech, index) => (
                <SkillItem skill={tech} key={index} />
              ))}
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
