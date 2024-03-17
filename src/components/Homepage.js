import { Profile } from "./Profile";
import { RightPanel } from "./RightPanel";

/**
 * Parent most component in the tree. Renders Profile and Rightpanel section.
 * @returns Renders Profile and Rightpanel section
 */
export function Homepage() {
  return (
    <>
      <div className="flex w-4/5 p-24 m-auto">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <Profile />
        </header>
        <div className="w-1/2">
          <RightPanel />
        </div>
      </div>
    </>
  );
}
