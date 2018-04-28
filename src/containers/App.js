import React, { Component } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import './App.css'

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(responce => {
				return responce.json();
			})
			.then(users => {
				this.setState({ robots: users });
			})
	}

	render() {
		const { robots, searchfield } = this.state;

		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		})

		// if (robots.length === 0) {
		// if (!robots.length) {
		// 	return <h1 className="tc title-text">Loading...</h1>
		// } else {
		// 	return (
		// 		<div className="tc">
		// 			<h1 className="title-text" >RoboFriends</h1>
		// 			<SearchBox searchChange={this.onSearchChange} />
		// 			<Scroll>
		// 				<CardList robots={filteredRobots} />
		// 			</Scroll>
		// 		</div>
		// 	);
		// }

		return !robots.length ? <h1 className="tc title-text">Loading...</h1>
			: (
				<div className="tc">
					<h1 className="title-text" >RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<CardList robots={filteredRobots} />
					</Scroll>
				</div>
			);
	}
}

export default App;