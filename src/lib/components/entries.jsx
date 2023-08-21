import { useState } from "react";

function Entries({ onEntriesChange }) {
  const optionsEntries = [10, 25, 50, 100];
  const [entries, setEntries] = useState(10);

  const onInputChange = (value) => {
    setEntries(value);
    onEntriesChange(value);
  };
  return (
    <div>
      <label>
        Show{" "}
        <select value={entries} onChange={(e) => onInputChange(e.target.value)}>
          {optionsEntries.map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
        </select>{" "}
        entries
      </label>
    </div>
  );
}

export default Entries;
