import styles from "./style/Square.module.scss"

function Square({value,handleClick}) {
	return ( 
		<button className={styles["tic-tac-toe__square"]} onClick={handleClick}>{value}</button>
	 );
}

export default Square;