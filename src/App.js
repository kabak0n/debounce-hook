import { useState, useEffect } from "react";
import "./styles.css";
import { useDebounce } from "./hooks";

export default function App() {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value);
  useEffect(() => {
    console.log(value);
  }, [debouncedValue]);

  const handleChange = (e) => setValue(e.target.value);
  return (
    <div className="App">
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}
