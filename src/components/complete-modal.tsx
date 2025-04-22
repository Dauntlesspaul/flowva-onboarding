/**
 * CompleteModal Component
 * ------------------------
 * This component displays a modal dialog informing the user that the onboarding process is complete.
 * It indicates that the user is being redirected to their dashboard.
 *
 * **Modal Behavior**:
 * The modal visibility is controlled through the `open` prop. If `open` is `true`, the modal is displayed; if `false`, the modal is hidden.
 * The modal contains a simple message indicating that the onboarding process has been completed, along with an "OK" button to close the modal.
 *
 * Props:
 * - open (boolean): A boolean that determines whether the modal is visible or hidden. If `true`, the modal is shown; if `false`, it is hidden.
 * - setOpen (function): A setter function to update the state of the `open` prop. This is used to toggle the visibility of the modal when the "OK" button is clicked.
 *
 * Behavior:
 * - When the "OK" button is clicked, the `setOpen` function is called with the negation of `open` (`!open`), effectively toggling the modal's visibility.
 *
 * **Usage**:
 * - This modal is primarily used at the end of an onboarding process to notify users that the process has finished and they are about to be redirected to their dashboard.
 * - The modal is styled using a class name `modal-container` and `modal-card`, and the `display` style is dynamically set based on the `open` state.
 */

import { useEffect } from "react";

function CompleteModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);
  return (
    <div
      style={{ display: open ? "block" : "none" }}
      className="modal-container"
    >
      <div className="modal-card">
        <h2>Onboarding Complete!</h2>
        <p>Taking you to your dashboard now.</p>
        <button onClick={() => setOpen(!open)} className="btn">
          OK
        </button>
      </div>
    </div>
  );
}

export default CompleteModal;
