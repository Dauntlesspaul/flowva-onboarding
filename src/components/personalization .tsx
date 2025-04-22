/**
 * Personalization Component
 * ----------------------------
 * This component allows users to select their personalization goals to help tailor the features and dashboard for their needs.
 * The goals selected by the user will be used to customize their experience on the platform.
 *
 * **Checkboxes for Goals**:
 * The component presents several checkboxes representing different goals the user may want to track or improve, including:
 * - Subscription costs
 * - Tool usage & engagement
 * - Unused/duplicate tools
 * - Personalized tool suggestions
 *
 * Users can select multiple goals, and the component will track their selections. If no goal is selected, an error message prompts the user to choose at least one option.
 *
 * Props:
 * - handleNextStep: A function passed as a prop to proceed to the next step once the user has selected at least one goal.
 *
 * State:
 * - selected: An array of strings that keeps track of the selected goals.
 * - error: A string used to store the error message if no goals are selected.
 *
 * Behavior:
 * - Users can select and deselect goals using checkboxes.
 * - The "Continue" button will only proceed to the next step if at least one goal is selected; otherwise, an error message will be shown.
 * - The `handleCheckboxChange` function toggles the selection of each goal.
 */

import { useState } from "react";

export default function Personalization({
  handleNextStep,
}: {
  handleNextStep: () => void;
}) {
  const [selected, setSelected] = useState<string[]>([]);
  const [error, setError] = useState("");

  const handleCheckboxChange = (value: string) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleContinue = () => {
    if (selected.length === 0) {
      setError("Please select at least one goal.");
      return;
    }
    setError("");
    handleNextStep();
  };

  return (
    <div className="step personalization">
      <h2>What Do You Want to Track or Improve?</h2>
      <p>This helps us personalize your dashboard and features.</p>
      <h4>Select your goals Please select at least one option</h4>

      <div className="form-group">
        <label>
          <input
            type="checkbox"
            name="track"
            value="subscription costs"
            onChange={() => handleCheckboxChange("subscription costs")}
            checked={selected.includes("subscription costs")}
          />
          Subscription costs
        </label>
        <label>
          <input
            type="checkbox"
            name="track"
            value="Tool usage & engagement"
            onChange={() => handleCheckboxChange("Tool usage & engagement")}
            checked={selected.includes("Tool usage & engagement")}
          />
          Tool usage & engagement
        </label>
        <label>
          <input
            type="checkbox"
            name="track"
            value="Unused/duplicate tools"
            onChange={() => handleCheckboxChange("Unused/duplicate tools")}
            checked={selected.includes("Unused/duplicate tools")}
          />
          Unused/duplicate tools
        </label>
        <label>
          <input
            type="checkbox"
            name="track"
            value="Personalized tool suggestions"
            onChange={() =>
              handleCheckboxChange("Personalized tool suggestions")
            }
            checked={selected.includes("Personalized tool suggestions")}
          />
          Personalized tool suggestions
        </label>
      </div>

      {error && (
        <span style={{ color: "red", marginTop: "10px" }}>{error}</span>
      )}
      <div className="btn-group">
        <button onClick={handleContinue} className="btn">
          Continue
        </button>
      </div>
    </div>
  );
}
