import React, { Component } from 'react'
import { setSearchField, requestRobots } from '../actions';
import { connect } from 'react-redux';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import './App.css'

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPanding: state.requestRobots.isPanding,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}

class App extends Component {
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		robots: []
	// 	}
	// }

	// componentDidMount() {
	// 	fetch('https://jsonplaceholder.typicode.com/users')
	// 		.then(responce => { return responce.json(); })
	// 		.then(users => { this.setState({ robots: users }); })
	// }

	componentDidMount() {
		this.props.onRequestRobots();
	}

	render() {
		//const { robots } = this.state;
		const { searchField, onSearchChange, robots, isPanding } = this.props;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		})

		return isPanding ? <h1 className="tc title-text">Loading...</h1>
			: (
				<div className="tc">
					<h1 className="title-text" >RoboFriends</h1>
					<SearchBox searchChange={onSearchChange} />
					<Scroll>
						<CardList robots={filteredRobots} />
					</Scroll>
				</div>
			);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);