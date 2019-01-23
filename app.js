const players = [
	{
		id: 1,
		name: "Guil",
		score: 50
	},
	{
		id: 2,
		name: "Treasure",
		score: 85
	},
	{
		id: 3,
		name: "Ashley",
		score: 95
	},
	{
		id: 4,
		name: "James",
		score: 80
	},
	{
		id: 5,
		name: "Dan",
		score: 80
	}
];

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

class Counter extends React.Component {
	state = {
		score: 0
	}

	incrementScore = () => {
		this.setState( prevState => ({
				score: prevState.score +1
		}));
	}
	decrementScore = () => {
		this.setState( prevState => ({
				score: prevState.score -1
		}));
	}

	render() {
		return (
			<div className="counter">
				<button 
					className="counter-action decrement" 
					onClick={this.decrementScore}> 
					- 
				</button>
				<span className="counter-score">{ this.state.score }</span>
				<button 
					className="counter-action increment" 
					onClick={this.incrementScore}> 
					+ 
				</button>
			</div>
		);
	}
}

const App = (props) => {
	return (
		<div className="scoreboard">
			<Header 
				title="Scoreboard" 
				totalPlayers={props.initialPlayers.length}
			/>

			{/* Player List */}
			{props.initialPlayers.map ( player =>
				<Player 
					key = {player.id.toString()}
					name = {player.name}
				/>
			)}
		</div>
	);
}


ReactDOM.render(
	<App initialPlayers={players}/>,
	document.getElementById('root')
);