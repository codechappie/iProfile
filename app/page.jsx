"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import AppContainer from "../components/AppContainer";
import SwipeableCards from "../components/swipe-card";

export default function Index() {



	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/1/photos`);
			setPosts(response.data);
		}

		fetchData();
	}, []);



	return (
		<main>
			<AppContainer>
				<SwipeableCards profiles={posts} />
			</AppContainer>
		</main>
	)
}
