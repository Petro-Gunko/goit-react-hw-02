import css from './Feedback.module.css'
export default function Feedback({ feedbacks, total, positiveFeedback }) {
  return (
    <div>
      <p className={css.container}>Good: {feedbacks.good}</p>
      <p className={css.container}>Neutral: {feedbacks.neutral}</p>
      <p className={css.container}>Bad: {feedbacks.bad}</p>
      <p className={css.container}>Total: {total}</p>
      <p className={css.container}>Positive: {positiveFeedback}%</p>
    </div>
  );
}
