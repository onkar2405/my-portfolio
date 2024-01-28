import { Profile } from "./Profile";
import { RightPanel } from "./RightPanel";

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
