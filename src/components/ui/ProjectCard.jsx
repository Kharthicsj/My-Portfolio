import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cardReveal } from "@/animations/variants";

export default function ProjectCard({ project }) {
	const { id, title, tagline, techStack, thumbnail, featured } = project;

	return (
		<motion.div
			variants={cardReveal}
			whileHover={{ y: -6, transition: { duration: 0.25 } }}
			className="group flex flex-col rounded-2xl overflow-hidden shadow-lg"
			style={{
				background: "#1A1A1A",
				border: featured ? "1px solid #4682B4" : "1px solid #2A2A2A",
			}}
		>
			{/* Thumbnail */}
			<div className="overflow-hidden relative">
				<img
					src={thumbnail}
					alt={title}
					className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
				/>
				{featured && (
					<span
						className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
						style={{
							background: "rgba(70,130,180,0.9)",
							color: "#FDFDFA",
							fontFamily: '"DM Mono", monospace',
						}}
					>
						★ Featured
					</span>
				)}
			</div>

			{/* Body */}
			<div className="flex flex-col flex-1 p-6 gap-3">
				<h3
					className="text-xl font-semibold"
					style={{
						color: "#FDFDFA",
						fontFamily: '"DM Sans", sans-serif',
					}}
				>
					{title}
				</h3>
				<p
					className="text-sm leading-relaxed"
					style={{ color: "#888888", fontFamily: '"Lora", serif' }}
				>
					{tagline}
				</p>

				{/* Tech stack pills */}
				<div className="flex flex-wrap gap-2 mt-auto pt-3">
					{techStack.map((tech) => (
						<span
							key={tech}
							className="px-2.5 py-0.5 rounded-full text-xs font-medium"
							style={{
								background: "#222222",
								color: "#888888",
								fontFamily: '"DM Mono", monospace',
								border: "1px solid #2A2A2A",
							}}
						>
							{tech}
						</span>
					))}
				</div>

				{/* CTA */}
				<Link
					to={`/projects/${id}`}
					className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl text-sm font-medium py-2.5 px-5 transition-all duration-200"
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
					View Details
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
							d="M17 8l4 4m0 0l-4 4m4-4H3"
						/>
					</svg>
				</Link>
			</div>
		</motion.div>
	);
}
