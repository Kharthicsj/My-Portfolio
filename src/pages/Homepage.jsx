import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Footer from "@/components/Footer";

// Total duration the preloader is visible before its exit animation triggers
const PRELOADER_MS = 2800;

export default function Homepage() {
	const [isLoading, setIsLoading] = useState(true);
	const [contentReady, setContentReady] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setIsLoading(false), PRELOADER_MS);
		return () => clearTimeout(timer);
	}, []);

	// Prevent background scroll while preloader is up
	useEffect(() => {
		document.body.classList.toggle("no-scroll", isLoading);
		return () => document.body.classList.remove("no-scroll");
	}, [isLoading]);

	return (
		<div style={{ background: "#121212" }}>
			{/* ── Preloader overlay ── */}
			<AnimatePresence onExitComplete={() => setContentReady(true)}>
				{isLoading && <Preloader key="preloader" />}
			</AnimatePresence>

			{/* ── Page content ── */}
			{/* Header mounts immediately so it's ready; Hero defers its animation
			    until contentReady to avoid double-animating before preloader exits */}
			<Header />
			<main>
				<Hero ready={contentReady} />
				<About />
				<Certifications />
				<Projects />
				<Publications />
			</main>
			<Footer />
		</div>
	);
}
