import { useState } from "react";
import { Profile } from "./Profile";
import { RightPanel } from "./RightPanel";
import ContactMeForm from "./ContactMeForm";

/**
 * Parent most component in the tree. Renders Profile and Rightpanel section.
 * @returns Renders Profile and Rightpanel section
 */
export function Homepage() {
  const [contactFormState, setContactFormState] = useState(false);

  const handleFormState = () => {
    setContactFormState((prev) => !prev);
  };

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
        <div className="w-4/5 m-auto text-center">
          <button
            className="bg-teal-400/10 text-teal-300 text-lg font-bold rounded-full px-5 py-3 cursor-pointer hover:bg-teal-100 hover:text-teal-950"
            onClick={handleFormState}
          >
            Contact Me
          </button>
          <ContactMeForm isOpen={contactFormState} onClose={handleFormState} />
        </div>
      </footer>
    </>
  );
}
