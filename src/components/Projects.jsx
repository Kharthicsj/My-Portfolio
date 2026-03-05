import { motion } from "framer-motion";
import { staggerContainer } from "@/animations/variants";
import ProjectCard from "@/components/ui/ProjectCard";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { projects } from "@/data/projects";

export default function Projects() {
	return (
		<section
			id="projects"
			className="py-28 px-6"
			style={{ background: "#161616" }}
		>
			<div className="max-w-6xl mx-auto space-y-14">
				{/* Heading */}
				<RevealOnScroll className="text-center space-y-3">
					<p
						className="text-xs tracking-[0.3em] uppercase"
						style={{
							color: "#4682B4",
							fontFamily: '"DM Sans", sans-serif',
						}}
					>
						Portfolio
					</p>
					<h2
						className="text-4xl font-extrabold"
						style={{
							color: "#FDFDFA",
							fontFamily: '"DM Sans", sans-serif',
						}}
					>
						Selected Projects
					</h2>
					<p
						className="max-w-xl mx-auto"
						style={{
							color: "#888888",
							fontFamily: '"Lora", serif',
						}}
					>
						A curated selection of things I've built — click any
						card for the full breakdown.
					</p>
				</RevealOnScroll>

				{/* Grid */}
				<motion.div
					variants={staggerContainer}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.1 }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					{projects.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</motion.div>
			</div>
		</section>
	);
}
