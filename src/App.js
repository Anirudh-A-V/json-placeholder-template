import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './components/List';

function App() {

	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_URL}/posts`)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setPosts(data);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, []);

	return (
		<div className="App">
			<div className="list-container">
				{
					posts.map((item, index) => {
						return (
							<List key={index} item={item} />
						);
					}, [])
				}
			</div>
		</div>
	);
}

export default App;
