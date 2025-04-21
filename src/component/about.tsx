/**
 * About Component
 * ----------------
 * This component is part of a multi-step form where the user provides information about themselves.
 * It allows the user to:
 * - Select a description (e.g., freelance, solo entrepreneur, small team, creator).
 * - Choose one or more work types (e.g., design, development, writing, creator).
 * - Optionally specify "others" as a work type and provide details.
 *
 * Form validation:
 * - Ensures that a description is selected.
 * - Ensures that at least one work type is selected.
 * - If "others" is selected, it checks that the user has provided a specification.
 *
 * The component maintains state for user inputs (`description`, `work`, `others`), error messages (`errors`), and a checkbox toggle for "others".
 * On form submission, validation is performed, and if successful, the form data is logged and the next step is triggered.
 */

import { useState } from "react";

export default function About({
  handleNextStep,
}: {
  handleNextStep: () => void;
}) {
  const [check, setCheck] = useState(false);
  const [description, setDescription] = useState("");
  const [work, setWork] = useState<string[]>([]);
  const [others, setOthers] = useState("");
  const [errors, setErrors] = useState<{ description?: string; work?: string }>(
    {}
  );

  const handleCheckboxChange = (value: string) => {
    if (work.includes(value)) {
      setWork(work.filter((item) => item !== value));
    } else {
      setWork([...work, value]);
    }
  };

  const handleSubmit = () => {
    const newErrors: { description?: string; work?: string } = {};

    if (!description) {
      newErrors.description = "Please select a description.";
    }

    if (work.length === 0) {
      newErrors.work = "Please select at least one type of work.";
    } else if (work.includes("others") && others.trim() === "") {
      newErrors.work = "Please specify your 'Others' field.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const formData = {
        description,
        work,
        others: check ? others : "",
      };

      console.log(formData);
      handleNextStep();
    }
  };

  return (
    <div className="step about">
      <h2>About You</h2>
      <p>Help us tailor your library by telling us a bit about yourself.</p>

      <h4>What best describes you? Please select an option</h4>
      {errors.description && (
        <span className="error">{errors.description}</span>
      )}
      <div className="form-group">
        {["freelance", "solo entrepreneur", "small team", "creator"].map(
          (option) => (
            <label key={option}>
              <input
                type="radio"
                name="description"
                value={option}
                checked={description === option}
                onChange={(e) => setDescription(e.target.value)}
              />
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </label>
          )
        )}
      </div>

      <h4>What kind of work do you do? Please select at least one option</h4>
      {errors.work && <span className="error">{errors.work}</span>}
      <div className="form-group">
        {["design", "development", "writing", "creator"].map((option) => (
          <label key={option}>
            <input
              type="checkbox"
              name="work"
              value={option}
              checked={work.includes(option)}
              onChange={() => handleCheckboxChange(option)}
            />
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </label>
        ))}

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input
            type="checkbox"
            checked={check}
            onChange={() => {
              setCheck(!check);
              handleCheckboxChange("others");
              if (!check === false) setOthers("");
            }}
            id="others-checkbox"
            name="work"
            value="others"
          />
          <label htmlFor="others-checkbox" style={{ margin: 0 }}>
            Others
          </label>

          {check && (
            <input
              type="text"
              name="others"
              placeholder="Please specify"
              value={others}
              onChange={(e) => setOthers(e.target.value)}
            />
          )}
        </div>
      </div>

      <button onClick={handleSubmit} className="btn">
        Continue
      </button>
    </div>
  );
}
