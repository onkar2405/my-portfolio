import { Profile } from "./Profile";
import { RightPanel } from "./RightPanel";

/**
 * Parent most component in the tree. Renders Profile and Rightpanel section.
 * @returns Renders Profile and Rightpanel section
 */
export function Homepage() {
  return (
    <>
      <div className="lg:flex lg:w-4/5 p-12 m-auto">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:pb-24">
          <Profile />
        </header>
        <div className="lg:w-3/4">
          <RightPanel />
        </div>
      </div>
      <footer>
        <div className="lg:w-4/5 text-slate-400 font-semibold px-12 lg:text-md m-auto lg:text-center ">
          <p>
            Thank you for visiting! Reach out to me at{" "}
            <a
              className="text-teal-300"
              href="mailto:onkarvaidyad789@gmail.com?subject=Let%27s%20Connect%21%21"
            >
              onkarvaidyad789@gmail.com
            </a>
            {". "}
            Let's connect and create together.{" "}
          </p>
        </div>
      </footer>
    </>
  );
}
