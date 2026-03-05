import { motion } from "framer-motion";
import heroImg from "@/assets/hero_img.jpg";
import {
	staggerContainer,
	fadeUp,
	fadeIn,
	floatAnimation,
} from "@/animations/variants";

export default function Hero({ ready = true }) {
	const animateState = ready ? "show" : "hidden";

	return (
		<section
			id="hero"
			className="relative min-h-screen flex items-center overflow-hidden px-6"
			style={{ background: "#121212" }}
		>
			{/* ── Decorative background geometry ── */}
			<div
				className="pointer-events-none absolute -top-32 -right-32 w-[36rem] h-[36rem] rounded-full opacity-[0.07]"
				style={{
					background:
						"radial-gradient(circle, #4682B4 0%, transparent 70%)",
				}}
			/>
			<div
				className="pointer-events-none absolute -bottom-20 -left-20 w-[28rem] h-[28rem] rounded-full opacity-[0.06]"
				style={{
					background:
						"radial-gradient(circle, #2F4F4F 0%, transparent 70%)",
				}}
			/>

			{/* ── Main content grid ── */}
			<motion.div
				variants={staggerContainer}
				initial="hidden"
				animate={animateState}
				className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-16 items-center py-36 md:py-28"
			>
				{/* ── LEFT: Text ── */}
				<div className="space-y-7 text-center md:text-left order-2 md:order-1">
					{/* Name */}
					<motion.h1
						variants={fadeUp}
						className="text-[clamp(2.8rem,7vw,5.5rem)] font-extrabold leading-[1.05] tracking-tight"
						style={{
							fontFamily: '"DM Sans", sans-serif',
							color: "#FDFDFA",
						}}
					>
						Hi, I'm <br className="hidden md:block" />
						<span
							style={{
								backgroundImage:
									"linear-gradient(135deg, #4682B4 0%, #7BB8E8 100%)",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
							}}
						>
							Kharthic S J
						</span>
					</motion.h1>

					{/* Bio */}
					<motion.p
						variants={fadeUp}
						className="text-lg md:text-xl leading-relaxed max-w-lg mx-auto md:mx-0"
						style={{
							color: "#888888",
							fontFamily: '"DM Sans", sans-serif',
						}}
					>
						<span style={{ color: "#FDFDFA" }}>
							Mechatronics &amp; Automation Engineer
						</span>{" "}
						&nbsp;·&nbsp;{" "}
						<span style={{ color: "#FDFDFA" }}>
							Full-Stack Developer
						</span>{" "}
						&nbsp;·&nbsp;{" "}
						<span style={{ color: "#FDFDFA" }}>
							Drone Technology Specialist
						</span>
					</motion.p>

					{/* CTAs */}
					<motion.div
						variants={fadeUp}
						className="flex flex-wrap gap-4 justify-center md:justify-start pt-2"
					>
						<a
							href="#projects"
							onClick={(e) => {
								e.preventDefault();
								document
									.querySelector("#projects")
									?.scrollIntoView({ behavior: "smooth" });
							}}
							className="inline-flex items-center gap-2 font-semibold px-7 py-3 rounded-xl transition-all duration-200"
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
							View My Work
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
						</a>

						<a
							href="/resume.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 font-semibold px-7 py-3 rounded-xl border transition-all duration-200"
							style={{
								borderColor: "#2A2A2A",
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
							Download CV
						</a>
					</motion.div>

					{/* Social row */}
					<motion.div
						variants={fadeUp}
						className="flex items-center gap-5 justify-center md:justify-start pt-1"
					>
						{[
							{
								label: "GitHub",
								href: "https://github.com/Kharthicsj",
								icon: (
									<path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
								),
							},
							{
								label: "LinkedIn",
								href: "https://www.linkedin.com/in/kharthic-sj-188235256/",
								icon: (
									<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
								),
							},
						].map(({ label, href, icon }) => (
							<a
								key={label}
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={label}
								className="transition-colors"
								style={{ color: "#888888" }}
								onMouseEnter={(e) =>
									(e.currentTarget.style.color = "#FDFDFA")
								}
								onMouseLeave={(e) =>
									(e.currentTarget.style.color = "#888888")
								}
							>
								<svg
									className="w-5 h-5"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									{icon}
								</svg>
							</a>
						))}
						<div
							className="h-px w-12"
							style={{ background: "#2A2A2A" }}
						/>
						<span
							className="text-xs tracking-widest"
							style={{
								color: "#888888",
								fontFamily: '"DM Sans", sans-serif',
							}}
						>
							Based in Coimbatore, India
						</span>
					</motion.div>
				</div>

				{/* ── RIGHT: Photo ── */}
				<motion.div
					variants={fadeUp}
					className="flex-shrink-0 flex justify-center order-1 md:order-2"
				>
					<div
						className="relative"
						style={{
							width: "clamp(15rem, 26vw, 26rem)",
							height: "clamp(15rem, 26vw, 26rem)",
						}}
					>
						{/* Outer pulsing glow */}
						<motion.div
							animate={{
								scale: [1, 1.06, 1],
								opacity: [0.15, 0.28, 0.15],
							}}
							transition={{
								duration: 4,
								repeat: Infinity,
								ease: "easeInOut",
							}}
							className="absolute inset-0 rounded-full"
							style={{
								background:
									"radial-gradient(circle, #4682B4 0%, transparent 70%)",
							}}
						/>

						{/* Static soft ring */}
						<div
							className="absolute inset-0 rounded-full"
							style={{
								boxShadow:
									"0 0 0 1px #2A2A2A, 0 0 0 8px #1A1A1A",
							}}
						/>

						{/* Floating photo */}
						<motion.div
							animate={floatAnimation}
							className="relative w-full h-full rounded-full overflow-hidden"
							style={{
								border: "2px solid #2A2A2A",
								background: "#1A1A1A",
							}}
						>
							<img
								src={heroImg}
								alt="Kharthic S J"
								className="w-full h-full object-cover"
							/>
						</motion.div>

						{/* Status badge */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={
								ready
									? { opacity: 1, x: 0 }
									: { opacity: 0, x: 20 }
							}
							transition={{
								delay: 1.1,
								duration: 0.6,
								ease: [0.22, 1, 0.36, 1],
							}}
							className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl text-xs font-medium"
							style={{
								background: "#1A1A1A",
								border: "1px solid #2A2A2A",
								color: "#888888",
								fontFamily: '"DM Mono", monospace',
								boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
							}}
						>
							<span style={{ color: "#4682B4" }}>✦</span> Open to
							work
						</motion.div>
					</div>
				</motion.div>
			</motion.div>

			{/* Scroll cue */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={ready ? { opacity: 1 } : { opacity: 0 }}
				transition={{ delay: 1.4 }}
				className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
			>
				<motion.div
					animate={{ y: [0, 9, 0] }}
					transition={{
						duration: 1.6,
						repeat: Infinity,
						ease: "easeInOut",
					}}
					className="w-px h-10 origin-top"
					style={{
						background:
							"linear-gradient(to bottom, #4682B4, transparent)",
					}}
				/>
				<span
					className="text-[10px] tracking-[0.3em] uppercase"
					style={{
						color: "#888888",
						fontFamily: '"DM Sans", sans-serif',
					}}
				>
					Scroll
				</span>
			</motion.div>
		</section>
	);
}
