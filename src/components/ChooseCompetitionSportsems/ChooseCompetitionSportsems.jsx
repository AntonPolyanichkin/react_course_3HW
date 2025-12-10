import styles from "./styles/ChooseCompetitionSportsems.module.scss";
import { athletes } from "./sportsmensList";
import { useState } from "react";
function ChooseCompetitionSportsmen() {
  const [sportsmensList, setSportsmensList] = useState(athletes);
  const [selectedSportsmensList, setSelectedSportsmensList] = useState([]);

  function addSportsmens(athlet) {
    setSelectedSportsmensList((prevList) => [...prevList, athlet]);
    setSportsmensList((prevList) => prevList.filter((el) => el.id !== athlet.id));
  }

  function cancelSelectedAthlet(selectedAthlet) {
    setSportsmensList((prevList) => [...prevList, selectedAthlet]);
    setSelectedSportsmensList((prevlist) => prevlist.filter((el) => el.id !== selectedAthlet.id));
  }

  return (
    <section className={styles["sportsmens"]}>
      <div className={styles["sportsmens__container"]}>
        <div className={styles["sportsmens__content"]}>
          <ul className={styles["sportsmens__list-of-sportsmens"]}>
            {sportsmensList.map((athlet) => (
              <li key={athlet.id}>
                {athlet.name}
                <button onClick={() => addSportsmens(athlet)}>add</button>
              </li>
            ))}
          </ul>
          <ul className={styles["sportsmens__list-competition-sportsmens"]}>
            {selectedSportsmensList.map((selectedAthlet) => (
              <li key={selectedAthlet.id}>
                {selectedAthlet.name}
                <button onClick={() => cancelSelectedAthlet(selectedAthlet)}>remove</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ChooseCompetitionSportsmen;
