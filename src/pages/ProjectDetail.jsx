import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { projects } from "@/data/projects";
import { staggerContainer, fadeUp } from "@/animations/variants";

export default function ProjectDetail() {
	const { id } = useParams();
	const navigate = useNavigate();
	const project = projects.find((p) => p.id === id);

	// Scroll to top on mount
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "instant" });
	}, [id]);

	if (!project) {
		return (
			<div
				className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-6"
				style={{ background: "#121212" }}
			>
				<h1
					className="text-5xl font-extrabold"
					style={{
						color: "#FDFDFA",
						fontFamily: '"DM Sans", sans-serif',
					}}
				>
					404
				</h1>
				<p
					className="text-lg"
					style={{ color: "#888888", fontFamily: '"Lora", serif' }}
				>
					Project not found.
				</p>
				<Link
					to="/"
					className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-xl transition-all duration-200"
					style={{
						background: "#4682B4",
						color: "#FDFDFA",
						fontFamily: '"DM Sans", sans-serif',
					}}
				>
					← Back to Portfolio
				</Link>
			</div>
		);
	}

	const {
		title,
		tagline,
		techStack,
		thumbnail,
		description,
		highlights,
		liveUrl,
		repoUrl,
		videoUrl,
		researchUrl,
		additionalVideos,
	} = project;

	return (
		<div
			className="min-h-screen text-white"
			style={{ background: "#121212" }}
		>
			{/* Back nav */}
			<div className="max-w-4xl mx-auto px-6 pt-8">
				<button
					onClick={() => navigate("/")}
					className="inline-flex items-center gap-2 transition-colors text-sm font-medium"
					style={{
						color: "#888888",
						fontFamily: '"DM Sans", sans-serif',
					}}
					onMouseEnter={(e) =>
						(e.currentTarget.style.color = "#FDFDFA")
					}
					onMouseLeave={(e) =>
						(e.currentTarget.style.color = "#888888")
					}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-4 h-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M10 19l-7-7m0 0l7-7m-7 7h18"
						/>
					</svg>
					Back
				</button>
			</div>

			{/* Hero image */}
			<motion.div
				initial={{ opacity: 0, scale: 1.02 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
				className="max-w-4xl mx-auto px-6 mt-8"
			>
				<img
					src={thumbnail}
					alt={title}
					className="w-full h-64 md:h-96 object-cover rounded-3xl shadow-2xl shadow-black/60"
					style={{ border: "1px solid #2A2A2A" }}
				/>
			</motion.div>

			{/* Content */}
			<motion.div
				variants={staggerContainer}
				initial="hidden"
				animate="show"
				className="max-w-4xl mx-auto px-6 py-14 space-y-10"
			>
				{/* Header */}
				<motion.div variants={fadeUp} className="space-y-4">
					<h1
						className="text-4xl md:text-5xl font-extrabold"
						style={{
							color: "#FDFDFA",
							fontFamily: '"DM Sans", sans-serif',
						}}
					>
						{title}
					</h1>
					<p
						className="text-lg"
						style={{
							color: "#888888",
							fontFamily: '"Lora", serif',
						}}
					>
						{tagline}
					</p>

					{/* Tech stack */}
					<div className="flex flex-wrap gap-2 pt-2">
						{techStack.map((t) => (
							<span
								key={t}
								className="px-3 py-1 rounded-full text-sm"
								style={{
									background: "#1A1A1A",
									border: "1px solid #2A2A2A",
									color: "#888888",
									fontFamily: '"DM Mono", monospace',
								}}
							>
								{t}
							</span>
						))}
					</div>
				</motion.div>

				{/* Divider */}
				<motion.hr
					variants={fadeUp}
					className="border-0 h-px"
					style={{ background: "#2A2A2A" }}
				/>

				{/* Description */}
				<motion.div variants={fadeUp} className="space-y-3">
					<h2
						className="text-2xl font-bold"
						style={{
							color: "#FDFDFA",
							fontFamily: '"DM Sans", sans-serif',
						}}
					>
						Overview
					</h2>
					<p
						className="leading-relaxed whitespace-pre-line"
						style={{
							color: "#888888",
							fontFamily: '"Lora", serif',
						}}
					>
						{description}
					</p>
				</motion.div>

				{/* Highlights */}
				<motion.div variants={fadeUp} className="space-y-4">
					<h2
						className="text-2xl font-bold"
						style={{
							color: "#FDFDFA",
							fontFamily: '"DM Sans", sans-serif',
						}}
					>
						Key Highlights
					</h2>
					<ul className="space-y-3">
						{highlights.map((h, i) => (
							<li key={i} className="flex items-start gap-3">
								<span
									className="mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
									style={{
										background: "rgba(70,130,180,0.12)",
										border: "1px solid #4682B4",
									}}
								>
									<svg
										className="w-3 h-3"
										style={{ color: "#4682B4" }}
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={3}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M5 13l4 4L19 7"
										/>
									</svg>
								</span>
								<span
									style={{
										color: "#888888",
										fontFamily: '"Lora", serif',
									}}
								>
									{h}
								</span>
							</li>
						))}
					</ul>
				</motion.div>

				{/* YouTube Video */}
				{videoUrl && (
					<motion.div variants={fadeUp} className="space-y-4">
						<div className="flex items-center justify-between">
							<h2
								className="text-2xl font-bold"
								style={{
									color: "#FDFDFA",
									fontFamily: '"DM Sans", sans-serif',
								}}
							>
								Flight Demo
							</h2>
							{additionalVideos?.length > 0 && (
								<Link
									to={`/projects/${id}/videos`}
									className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200"
									style={{
										background: "rgba(70,130,180,0.12)",
										border: "1px solid #4682B4",
										color: "#4682B4",
										fontFamily: '"DM Sans", sans-serif',
									}}
									onMouseEnter={(e) => {
										e.currentTarget.style.background =
											"rgba(70,130,180,0.25)";
										e.currentTarget.style.color = "#FDFDFA";
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.background =
											"rgba(70,130,180,0.12)";
										e.currentTarget.style.color = "#4682B4";
									}}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-4 h-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
									More Videos ({additionalVideos.length})
								</Link>
							)}
						</div>
						<div
							className="rounded-2xl overflow-hidden"
							style={{ border: "1px solid #2A2A2A" }}
						>
							<iframe
								src={videoUrl}
								title="Project Demo"
								className="w-full"
								style={{ height: "420px" }}
								allowFullScreen
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							/>
						</div>
					</motion.div>
				)}

				{/* Links */}
				<motion.div
					variants={fadeUp}
					className="flex flex-wrap gap-4 pt-4"
				>
					{liveUrl && (
						<a
							href={liveUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-xl transition-all duration-200"
							style={{
								background: "#4682B4",
								color: "#FDFDFA",
								fontFamily: '"DM Sans", sans-serif',
							}}
							onMouseEnter={(e) =>
								(e.currentTarget.style.background = "#3a70a0")
							}
							onMouseLeave={(e) =>
								(e.currentTarget.style.background = "#4682B4")
							}
						>
							Live Demo
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-4 h-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
								/>
							</svg>
						</a>
					)}
					{repoUrl && (
						<a
							href={repoUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-xl border transition-all duration-200"
							style={{
								border: "1px solid #2A2A2A",
								color: "#888888",
								fontFamily: '"DM Sans", sans-serif',
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.borderColor = "#4682B4";
								e.currentTarget.style.color = "#FDFDFA";
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.borderColor = "#2A2A2A";
								e.currentTarget.style.color = "#888888";
							}}
						>
							View Source
							<svg
								className="w-4 h-4"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
							</svg>
						</a>
					)}
					{researchUrl && (
						<a
							href={researchUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-xl border transition-all duration-200"
							style={{
								border: "1px solid #4682B4",
								color: "#4682B4",
								fontFamily: '"DM Sans", sans-serif',
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.background =
									"rgba(70,130,180,0.1)";
								e.currentTarget.style.color = "#FDFDFA";
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.background =
									"transparent";
								e.currentTarget.style.color = "#4682B4";
							}}
						>
							📜 Research Paper
						</a>
					)}
				</motion.div>
			</motion.div>
		</div>
	);
}
