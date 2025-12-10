import { useRef, useState } from "react";
import styles from "./styles/TemperatureChecker.module.scss";

function TemperatureChecker() {
  const [temperature, setTemperature] = useState("");
  const inputFocusRef = useRef(null);
  const numerick = temperature === "" ? null : Number(temperature);
  function handleInput(e) {
    const value = Number(e.target.value);
    if (!Number.isNaN(value) && Number.isFinite(value)) {
      setTemperature(value);
    }
  }
  function getBgColor() {
    if (numerick < 0) {
      return "very-cold-temperature";
    } else if (numerick >= 0 && numerick <= 10) {
      return "cold-temperature";
    } else if (numerick > 10 && numerick <= 22) {
      return "comfort-temperature";
    } else if (numerick > 22) {
      return "hot-temperature";
    } else {
      return "default-bg-color";
    }
  }

  function handleWrapperClick() {
    inputFocusRef.current.focus();
  }

  return (
    <section className={styles["temperature-checker"]}>
      <div className={styles["temperature-checker__container"]}>
        <div className={`${styles["temperature-checker__content"]} ${styles[getBgColor()]}`} onClick={handleWrapperClick}>
          <div className={styles["temperature-checker__input-wrapper"]}>
            <label htmlFor="temperature-input">Enter current temperature</label>
            <input type="number" id="temperature-input" value={temperature} onChange={handleInput} ref={inputFocusRef} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TemperatureChecker;
