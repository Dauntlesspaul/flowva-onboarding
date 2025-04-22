/**
 * Flova Multi-Step Flow Application
 *
 * This app guides users through a multi-step process with the following features:
 * - Modular, reusable components for each step (Welcome, About, Location, etc.)
 * - Dynamic step handling using an array for easy scalability (add/remove steps as needed).
 * - A progress bar that updates based on the current step, providing users with a visual indication of their progress.
 * - A modal that is conditionally rendered once the process is completed.
 *
 * Scalability Practices:
 * - **Step Management**: The steps are stored in an array (`steps`), making it easy to add or remove steps without major changes to the logic.
 * - **Modular Components**: Each step is encapsulated in its own component. This modular approach allows for easy reusability and modification of individual steps.
 * - **State Management**: React's `useState` hook is used to manage the state of the current step and the visibility of the completion modal. This ensures that the app remains flexible and easy to extend.
 * - **Progress Bar**: The progress bar's width dynamically adjusts based on the current step, allowing for an adaptable, scalable UI element.
 * - **Completion Modal**: The modal that appears upon completion of the steps is handled independently from the main flow, ensuring separation of concerns and modularity.
 *
 * This structure ensures that the app is scalable, maintainable, and easy to extend in the future.
 */
import { useState } from "react";
import About from "./components/about";
import Welcome from "./components/welcome";
import Location from "./components/location";
import ToolStack from "./components/stack";
import Personalization from "./components/personalization ";
import Completed from "./components/complete";
import CompleteModal from "./components/complete-modal";

function App() {
  const [step, setStep] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  const handleNextStep = () => {
    setStep((prevCount) => prevCount + 1);
  };
  const steps = [
    <Welcome handleNextStep={handleNextStep} />,
    <About handleNextStep={handleNextStep} />,
    <Location handleNextStep={handleNextStep} />,
    <ToolStack handleNextStep={handleNextStep} />,
    <Personalization handleNextStep={handleNextStep} />,
    <Completed open={open} setOpen={setOpen} />,
  ];

  const totalSteps = steps.length - 1;
  const progressPercentage = (step / totalSteps) * 100;

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="progress">
            <div
              style={{ width: `${progressPercentage}%` }}
              className="progress-indicator"
            ></div>
          </div>
          {steps[step]}
        </div>
        <CompleteModal setOpen={setOpen} open={open} />
      </div>
    </>
  );
}

export default App;
