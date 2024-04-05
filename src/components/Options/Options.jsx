import css from './Options.module.css'

export default function Options({ updateFeedback, total, reset }) {
  return (
    <div>
      <button className={css.container} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button
        className={css.container}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button className={css.container} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {total > 0 && (
        <button className={css.reset} onClick={reset}>
          Reset
        </button>
      )}
    </div>
  );
}
