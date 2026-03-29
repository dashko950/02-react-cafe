import css from "./VoteOptions.module.css";
import { VoteType } from "../../types"; // ← Це головне, що треба додати

interface VoteOptionsProps {
  onVote: (type: VoteType) => void; // ← використовуємо імпортований тип
  onReset: () => void;
  canReset: boolean;
}

const VoteOptions = ({ onVote, onReset, canReset }: VoteOptionsProps) => {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => onVote("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => onVote("neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onVote("bad")}>
        Bad
      </button>

      {canReset && (
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default VoteOptions;
