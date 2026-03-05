import { motion } from "framer-motion";
import aboutImg from "@/assets/about_img.jpg";
import {
	slideInLeft,
	slideInRight,
	staggerContainer,
} from "@/animations/variants";

const SKILLS = [
	"Embedded C/C++",
	"Python",
	"ArduPilot / Pixhawk",
	"Mission Planner",
	"React",
	"React Native",
	"Node.js",
	"MongoDB",
	"Socket.io",
	"Tailwind CSS",
	"Expo",
	"REST APIs",
];

export default function About() {
	return (
		<section
			id="about"
			className="py-28 px-6"
			style={{ background: "#161616" }}
		>
			<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
				{/* Left — image / visual */}
				<motion.div
					variants={slideInLeft}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.3 }}
					className="relative"
				>
					<div
						className="rounded-3xl overflow-hidden shadow-2xl shadow-black/60"
						style={{ border: "1px solid #2A2A2A" }}
					>
						<img
							src={aboutImg}
							alt="About me"
							className="w-full object-cover"
						/>
					</div>
					{/* (no experience badge — fresher) */}
				</motion.div>

				{/* Right — copy */}
				<motion.div
					variants={staggerContainer}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.3 }}
					className="space-y-6"
				>
					<motion.p
						variants={slideInRight}
						className="text-xs tracking-[0.3em] uppercase"
						style={{
							color: "#4682B4",
							fontFamily: '"DM Sans", sans-serif',
						}}
					>
						About Me
					</motion.p>

					<motion.h2
						variants={slideInRight}
						className="text-4xl font-extrabold leading-snug"
						style={{
							color: "#FDFDFA",
							fontFamily: '"DM Sans", sans-serif',
						}}
					>
						Building systems that move the real world
					</motion.h2>

					<motion.p
						variants={slideInRight}
						className="leading-relaxed"
						style={{
							color: "#888888",
							fontFamily: '"Lora", serif',
						}}
					>
						I'm a Mechatronics Engineer passionate about bridging
						the gap between hardware and software — building
						autonomous systems, embedded firmware, and intelligent
						robotics that operate in the real world.
					</motion.p>

					<motion.p
						variants={slideInRight}
						className="leading-relaxed"
						style={{
							color: "#888888",
							fontFamily: '"Lora", serif',
						}}
					>
						Outside engineering, I'm deepening my knowledge in AI/ML
						applications for medical devices and contributing to
						open-source robotics projects.
					</motion.p>

					{/* Skills */}
					<motion.div variants={slideInRight} className="pt-2">
						<p
							className="font-semibold mb-3"
							style={{
								color: "#FDFDFA",
								fontFamily: '"DM Sans", sans-serif',
							}}
						>
							Core Technologies
						</p>
						<div className="flex flex-wrap gap-2">
							{SKILLS.map((skill) => (
								<span
									key={skill}
									className="px-3 py-1 rounded-full text-sm"
									style={{
										background: "#1A1A1A",
										border: "1px solid #2A2A2A",
										color: "#888888",
										fontFamily: '"DM Sans", sans-serif',
									}}
								>
									{skill}
								</span>
							))}
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
