import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { staggerContainer, fadeUp } from "@/animations/variants";

export default function ProjectVideos() {
	const { id } = useParams();
	const navigate = useNavigate();

	const project = projects.find((p) => p.id === id);

	if (!project || !project.additionalVideos?.length) {
		return (
			<div
				className="min-h-screen flex items-center justify-center"
				style={{ background: "#121212" }}
			>
				<p
					style={{
						color: "#888888",
						fontFamily: '"DM Sans", sans-serif',
					}}
				>
					No videos found.
				</p>
			</div>
		);
	}

	return (
		<div className="min-h-screen" style={{ background: "#121212" }}>
			{/* Back nav */}
			<div className="max-w-5xl mx-auto px-6 pt-8">
				<button
					onClick={() => navigate(-1)}
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
					Back to {project.title}
				</button>
			</div>

			{/* Header */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="max-w-5xl mx-auto px-6 pt-10 pb-6"
			>
				<h1
					className="text-3xl md:text-4xl font-extrabold"
					style={{
						color: "#FDFDFA",
						fontFamily: '"DM Sans", sans-serif',
					}}
				>
					Flight Videos
				</h1>
				<p
					className="mt-2 text-sm"
					style={{
						color: "#888888",
						fontFamily: '"Lora", serif',
					}}
				>
					All recorded flights and tests for the {project.title}{" "}
					project.
				</p>

				<hr
					className="mt-6 border-0 h-px"
					style={{ background: "#2A2A2A" }}
				/>
			</motion.div>

			{/* Video grid */}
			<motion.div
				variants={staggerContainer}
				initial="hidden"
				animate="show"
				className="max-w-5xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-2 gap-8"
			>
				{project.additionalVideos.map((video, i) => (
					<motion.div key={i} variants={fadeUp} className="space-y-3">
						<h2
							className="text-lg font-semibold"
							style={{
								color: "#FDFDFA",
								fontFamily: '"DM Sans", sans-serif',
							}}
						>
							{video.title}
						</h2>
						<div
							className="rounded-2xl overflow-hidden"
							style={{ border: "1px solid #2A2A2A" }}
						>
							<iframe
								src={video.url}
								title={video.title}
								className="w-full"
								style={{ height: "260px" }}
								allowFullScreen
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							/>
						</div>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
}
