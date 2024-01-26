import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime, remainingTime, onReset },
  ref
) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        try {
          dialog.current.showModal();
        } catch (error) {
          console.log("Couldn't open modal or modal is already open.", error);
        }
      },
    };
  });

  return (
    <dialog ref={ref} className="result-modal" onClose={onReset}>
      {userLost ? <h2>Your {result}</h2> : <h2>Your score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onRest}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
