/**
 * ToolStack Component
 * ----------------------
 * This component allows users to select which tools are part of their current workflow.
 * It helps pre-load and organize the selected tools into the user's library for easier access and tracking.
 *
 * **Tool Selection**:
 * The component displays a list of popular tools, each represented by a checkbox with an associated icon and name. Users can select and deselect tools as needed.
 *
 * Available tools include:
 * - Notion, Trello, Slack, ClickUp, Canva, Zapier, Stripe, Figma, Calendly (each with an appropriate icon).
 *
 * The user can select multiple tools, and the state will track the selected tools in the `selected` state array.
 *
 * Props:
 * - handleNextStep: A function passed as a prop that is called when the user clicks the "Continue" or "Skip" button, allowing navigation to the next step.
 *
 * State:
 * - selected: An array of strings representing the selected tools.
 *
 * Behavior:
 * - `toggleTool` function handles the toggling (selecting or deselecting) of tools when a checkbox is clicked.
 * - If a tool is already selected, clicking the checkbox will deselect it. If not selected, it will be added to the array of selected tools.
 * - The component also provides a "Skip" button, allowing the user to bypass tool selection and add them later in their library settings.
 *
 * **Usage**:
 * - The component uses checkboxes to allow multi-selection of tools, making it flexible for users with different preferences.
 * - The tools are displayed in a grid format for easy viewing and selection.
 */

import { useState } from "react";

export default function ToolStack({
  handleNextStep,
}: {
  handleNextStep: () => void;
}) {
  const tools = [
    { name: "Notion", icon: "📝" },
    { name: "Trello", icon: "📋" },
    { name: "Slack", icon: "💬" },
    { name: "ClickUp", icon: "✅" },
    { name: "Canva", icon: "🎨" },
    { name: "Zapier", icon: "⚡" },
    { name: "Stripe", icon: "💳" },
    { name: "Figma", icon: "✏️" },
    { name: "Calendly", icon: "📅" },
  ];

  const [selected, setSelected] = useState<string[]>([]);

  const toggleTool = (tool: string) => {
    setSelected((prev) =>
      prev.includes(tool) ? prev.filter((t) => t !== tool) : [...prev, tool]
    );
  };

  return (
    <div className="step tool">
      <h2>Your Tool Stack</h2>
      <p>
        Which tools are part of your workflow? We'll pre-load and organize them
        in your library.
      </p>
      <div className="tool-grid">
        {tools.map((tool) => (
          <div key={tool.name} className="tool-wrapper">
            <input
              type="checkbox"
              id={tool.name}
              value={tool.name}
              checked={selected.includes(tool.name)}
              onChange={() => toggleTool(tool.name)}
              className="tool-checkbox"
            />
            <label htmlFor={tool.name} className="tool-item">
              <span className="icon">{tool.icon}</span>
              <span>{tool.name}</span>
            </label>
          </div>
        ))}
      </div>
      <p>You can always add more tools later in your library settings.</p>
      <div className="btn-group">
        <button onClick={handleNextStep} className="btn">
          Continue
        </button>
        <button onClick={handleNextStep} className="btn-skip">
          Skip – I'll add them later
        </button>
      </div>
    </div>
  );
}
