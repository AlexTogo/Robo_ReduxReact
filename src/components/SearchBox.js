import React from 'react'

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className="pa2">
			<input
				className="pa3 mb3 ba b--green bg-lightest-blue"
				type="search"
				placeholder="search robots by Name"
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;