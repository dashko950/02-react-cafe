import css from "./VoteStats.module.css";
import { Votes } from "../../types/votes"; // ← Головне виправлення

interface VoteStatsProps {
  votes: Votes; // ← використовуємо імпортований тип
  totalVotes: number;
  positiveRate: number; // ← ти використовуєш positiveRate
}

const VoteStats = ({ votes, totalVotes, positiveRate }: VoteStatsProps) => {
  return (
    <div className={css.container}>
      <p className={css.stat}>
        Good: <strong>{votes.good}</strong>
      </p>
      <p className={css.stat}>
        Neutral: <strong>{votes.neutral}</strong>
      </p>
      <p className={css.stat}>
        Bad: <strong>{votes.bad}</strong>
      </p>
      <p className={css.stat}>
        Total: <strong>{totalVotes}</strong>
      </p>
      <p className={css.stat}>
        Positive: <strong>{positiveRate}%</strong>
      </p>
    </div>
  );
};

export default VoteStats;
