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
        <div className="w-1/2">
          <Profile />
        </div>
        <div className="w-1/2">
          <RightPanel />
        </div>
      </div>
    </>
  );
}
