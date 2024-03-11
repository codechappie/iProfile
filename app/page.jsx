"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import HeroSection from '../components/HeroSection'
import { Button } from "@nextui-org/react";

export default function Index() {

	return (
		<main className="mainContainer">
			{/* <navbar>
				<div className="logo">
					<img src="" alt="" />
				</div>
			</navbar> */}
			<Button color="primary" isLoading>
				Loading
			</Button>
			<HeroSection />

		</main>
	)
}
