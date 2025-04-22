/**
 * Welcome Component
 * -----------------
 * This component is the introductory screen for the Flowva onboarding process.
 * It introduces the user to Flowva and encourages them to proceed with setting up their digital library.
 * The main purpose of this component is to provide a welcoming message and trigger the transition to the next step.
 *
 * Props:
 * - handleNextStep: A function passed as a prop that triggers the transition to the next step of the onboarding process.
 *
 * Behavior:
 * - Displays a welcoming message along with a brief description of Flowva's features.
 * - Includes a button that triggers the `handleNextStep` function when clicked, advancing the user to the next step.
 */

function Welcome({ handleNextStep }: { handleNextStep: () => void }) {
  return (
    <div className=" step">
      <div className="welcome-content">
        <h1>Welcome to Flowva</h1>
        <p>
          Your smart library for organizing tools, tracking usage, and turning
          productivity into rewards. Let's set up your digital library in 2
          minutes.
        </p>
      </div>
      <button onClick={handleNextStep} className="btn">
        Let's Go
      </button>
    </div>
  );
}

export default Welcome;
