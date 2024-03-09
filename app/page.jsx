"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import HeroSection from '../components/HeroSection'

export default function Index() {

	return (
		<main className="mainContainer">
			{/* <navbar>
				<div className="logo">
					<img src="" alt="" />
				</div>
			</navbar> */}

			<HeroSection />

		</main>
	)
}
