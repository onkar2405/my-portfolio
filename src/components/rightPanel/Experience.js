import { HiExternalLink } from "react-icons/hi";
import { ExperienceItem } from "../common/ExperienceItem";

export function Experience() {
  return (
    <>
      <section id="experience" className="mt-10">
        <h2 className="text-sm font-bold uppercase tracking-widest mb-6 text-slate-200 lg:sr-only">
          Experience
        </h2>
        <ExperienceItem
          title={"Software Engineer · "}
          endDate={null}
          s
          startDate={"June 2021"}
          isCurrentlyWorking={true}
          companyLink={"https://rajasoftwarelabs.com/"}
          companyName={"Raja Software Labs"}
          techStack={[
            "ReactJS",
            "TailwindCSS",
            "EmberJS",
            "Javascript",
            "SCSS",
            "HTML & CSS",
            "Rest APIs",
            "Git",
            "JIRA",
          ]}
          projects={[
            {
              projectName: "Linkedin Ads",
              link: "https://www.linkedin.com/campaignmanager/accounts/",
            },
            {
              projectName: "True pill",
              link: "https://www.truepill.com/",
            },
          ]}
        >
          <p className="text-slate-400 text-sm">
            Initially worked on adding features to
            <span className="text-slate-100">
              {" "}
              Linkedin's Campaign Manager{" "}
            </span>
            project. Currently, developing and leading{" "}
            <span className="text-slate-100">LinkedIn's</span> internal
            <span className="text-slate-100"> Trust tools </span>
            project. In last 2 years, developed accessible and responsive 26
            addons and integrated them accross 3 web applications. Additionally,
            configured event tracker to track user activity, mirage to stub API
            responses for faster UI development.
          </p>
        </ExperienceItem>
      </section>

      <div className="mt-10">
        <ExperienceItem
          title={"Intern · "}
          endDate={"Dec 2019"}
          startDate={"June 2019"}
          isCurrentlyWorking={false}
          companyLink={"https://shreeyansh.com/"}
          companyName={"Shreeyansh DB Softwate"}
          techStack={["PostgreSQL", "SQL", "Jenkins", "Nagios"]}
        >
          <p className="text-slate-400 text-sm">
            Initially worked on adding features to
            <span className="text-slate-100">
              {" "}
              Linkedin's Campaign Manager{" "}
            </span>
            project. Currently, developing and leading{" "}
            <span className="text-slate-100">LinkedIn's</span> internal
            <span className="text-slate-100"> Trust tools </span>
            project. In last 2 years, developed accessible and responsive 26
            addons and integrated them accross 3 web applications. Additionally,
            configured event tracker to track user activity, mirage to stub API
            responses for faster UI development.
          </p>
        </ExperienceItem>
      </div>

      <a
        href="/assets/Resume.pdf"
        target="_blank"
        className="lg:pl-4 mt-10 flex text-slate-200 font-semibold gap-1 hover:text-teal-300 focus-visible:text-teal-300"
        rel="noreferrer"
      >
        <span>View full Resume </span>
        <HiExternalLink className="self-center" />
      </a>
    </>
  );
}
