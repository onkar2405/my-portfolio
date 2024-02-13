import { About } from "./rightPanel/About";
import { Experience } from "./rightPanel/Experience";

/**
 * This component renders complete right panel which includes About and Experience section.
 * @returns Complete right panel.
 */
export function RightPanel() {
  return (
    <>
      <About />
      <Experience />
    </>
  );
}
