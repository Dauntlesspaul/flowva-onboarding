/**
 * Location Component
 * --------------------
 * This component allows the user to select their country as part of a setup or onboarding process.
 * The selected country will help personalize tool suggestions, currencies, and rewards.
 *
 * **Custom Select**:
 * The default select view varies from device to device, which can lead to inconsistent design across different platforms (e.g., mobile vs desktop).
 * To ensure consistent UI/UX across all devices, we use a custom select component that overrides the default browser select dropdown and provides a unified design experience.
 *
 * Props:
 * - handleNextStep: A function passed as a prop that will be called when the user moves to the next step of the process.
 *
 * State:
 * - selectedCountry: A string representing the code of the currently selected country.
 * - open: A boolean flag that controls whether the country selection dropdown is open or closed.
 *
 * Behavior:
 * - Displays a dropdown list of countries.
 * - When a country is selected, it is stored in the `selectedCountry` state, and the dropdown is closed.
 * - There is a "Continue" button to move to the next step and a "Skip this step" button to skip the country selection.
 */

import { useState } from "react";

const countries = [
  { code: "US", name: "United States" },
  { code: "GB", name: "United Kingdom" },
  { code: "CA", name: "Canada" },
  { code: "AU", name: "Australia" },
  { code: "IN", name: "India" },
  { code: "DE", name: "Germany" },
  { code: "FR", name: "France" },
  { code: "JP", name: "Japan" },
  { code: "BR", name: "Brazil" },
  { code: "NG", name: "Nigeria" },
];

export default function Location({
  handleNextStep,
}: {
  handleNextStep: () => void;
}) {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [open, setOpen] = useState(false);

  const handleSelect = (code: string) => {
    setSelectedCountry(code);
    setOpen(false);
  };

  return (
    <div className="step location">
      <h2>Where Are You Based?</h2>
      <p>
        This helps us personalize tool suggestions, currencies, and rewards for
        you.
      </p>
      <h4>Country</h4>
      <div style={{ position: "relative", width: "100%" }}>
        <div
          tabIndex={0}
          onClick={() => setOpen(!open)}
          style={{
            userSelect: "none",
          }}
          className="select"
        >
          {selectedCountry
            ? countries.find((c) => c.code === selectedCountry)?.name
            : "Select your country"}
        </div>

        {open && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              border: "1px solid #ccc",
              borderTop: "none",
              maxHeight: "200px",
              overflowY: "auto",
              backgroundColor: "#fff",
              zIndex: 100,
            }}
          >
            {countries.map((country) => (
              <div
                className="select-options"
                key={country.code}
                onClick={() => handleSelect(country.code)}
              >
                {country.name}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="btn-group" style={{ marginTop: "20px" }}>
        <button onClick={handleNextStep} className="btn">
          Continue
        </button>
        <button onClick={handleNextStep} className="btn-skip">
          Skip this step
        </button>
      </div>
    </div>
  );
}
