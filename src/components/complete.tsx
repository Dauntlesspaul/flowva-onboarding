/**
 * Completed Component
 * --------------------
 * This component is displayed when the onboarding process is completed.
 * It confirms to the user that their Flowva library setup is complete and provides them with a button to navigate to their dashboard.
 *
 * Props:
 * - open: A boolean state indicating whether the modal is open or closed.
 * - setOpen: A function used to toggle the `open` state, controlling the visibility of the modal.
 *
 * Behavior:
 * - Displays a completion message indicating that the setup is complete.
 * - Provides a button that toggles the visibility of the dashboard modal.
 */

import React from "react";

export default function Completed({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="step complete">
      {/* Title for the completed setup message */}
      <h2>Setup Complete!</h2>

      {/* Description text confirming the completion of the library setup */}
      <p>
        Your Flowva library is ready to use. We'll take you to your dashboard
        now where you can start organizing your tools and tracking your
        productivity.
      </p>

      {/* Button group containing the "Go to Dashboard" button */}
      <div className="btn-group">
        {/* When clicked, it toggles the 'open' state to show or hide the dashboard */}
        <button onClick={() => setOpen(!open)} className="btn">
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}
