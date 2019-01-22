const Header = (props) => {
	return (
		<header>
			<h1>{ props.title }</h1>
			<span className="stats">Player: {props.totalPlayers}</span>
		</header>
	);
}

const Player = (props) => {
	return (
		<div className="player">
			<span className="player-name">
				{ props.name }
			</span>

			<Counter score={ props.score }/>
		</div>
	);
}

const Counter = (props) => {
	return (
		<div className="counter">
			<button className="counter-action decrement"> - </button>
			<span className="counter-score">{ props.score }</span>
			<button className="counter-action increment"> + </button>
		</div>
	);
}

const App = () => {
	return (
		<div className="scoreboard">
			<Header 
				title="Scoreboard" 
				totalPlayers={4}
			/>

			{/* Player List */}
			<Player name = "Daniel" score = {35} />
			<Player name = "Guil" score = {40} />
			<Player name = "Dan" score = {45} />
			<Player name = "Dani" score = {3} />
		</div>
	);
}


ReactDOM.render(
	<App />,
	document.getElementById('root')
);