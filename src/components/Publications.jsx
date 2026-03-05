import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/animations/variants";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const PUBLICATIONS = [
	{
		id: 1,
		title: "Research Publication — IJIRT",
		journal: "International Journal of Innovative Research in Technology",
		journalShort: "IJIRT",
		manuscriptId: "192991",
		year: "2025",
		type: "Journal Article",
		abstract:
			"Published research in the International Journal of Innovative Research in Technology (IJIRT), covering advancements in engineering and technology applications.",
		url: "https://ijirt.org/article?manuscript=192991",
		tags: ["Engineering", "Technology", "Research"],
	},
];

export default function Publications() {
	return (
		<section
			id="publications"
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
						Research
					</p>
					<h2
						className="text-4xl font-extrabold"
						style={{
							color: "#FDFDFA",
							fontFamily: '"DM Sans", sans-serif',
						}}
					>
						Publications
					</h2>
					<p
						className="max-w-xl mx-auto"
						style={{
							color: "#888888",
							fontFamily: '"Lora", serif',
						}}
					>
						Peer-reviewed work contributing to the engineering and
						technology research community.
					</p>
				</RevealOnScroll>

				{/* Publication cards */}
				<motion.div
					variants={staggerContainer}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.1 }}
					className="space-y-6"
				>
					{PUBLICATIONS.map((pub) => (
						<motion.article
							key={pub.id}
							variants={fadeUp}
							className="group relative rounded-2xl p-8 transition-all duration-300"
							style={{
								background: "#1A1A1A",
								border: "1px solid #2A2A2A",
							}}
							onMouseEnter={(e) =>
								(e.currentTarget.style.borderColor = "#4682B4")
							}
							onMouseLeave={(e) =>
								(e.currentTarget.style.borderColor = "#2A2A2A")
							}
						>
							{/* Top row — type badge + year */}
							<div className="flex flex-wrap items-center gap-3 mb-4">
								<span
									className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
									style={{
										background: "rgba(70,130,180,0.15)",
										color: "#4682B4",
										fontFamily: '"DM Mono", monospace',
										border: "1px solid rgba(70,130,180,0.3)",
									}}
								>
									{pub.type}
								</span>
								<span
									className="text-xs"
									style={{
										color: "#888888",
										fontFamily: '"DM Mono", monospace',
									}}
								>
									{pub.year}
								</span>
								<span
									className="text-xs"
									style={{
										color: "#888888",
										fontFamily: '"DM Mono", monospace',
									}}
								>
									· Manuscript #{pub.manuscriptId}
								</span>
							</div>

							{/* Title */}
							<h3
								className="text-xl font-bold mb-2 leading-snug"
								style={{
									color: "#FDFDFA",
									fontFamily: '"DM Sans", sans-serif',
								}}
							>
								{pub.title}
							</h3>

							{/* Journal */}
							<p
								className="text-sm mb-4"
								style={{
									color: "#4682B4",
									fontFamily: '"DM Sans", sans-serif',
									fontStyle: "italic",
								}}
							>
								{pub.journal}
							</p>

							{/* Abstract */}
							<p
								className="text-sm leading-relaxed mb-6"
								style={{
									color: "#888888",
									fontFamily: '"Lora", serif',
								}}
							>
								{pub.abstract}
							</p>

							{/* Tags + CTA */}
							<div className="flex flex-wrap items-center justify-between gap-4">
								<div className="flex flex-wrap gap-2">
									{pub.tags.map((tag) => (
										<span
											key={tag}
											className="px-3 py-1 rounded-full text-xs"
											style={{
												background: "#121212",
												border: "1px solid #2A2A2A",
												color: "#888888",
												fontFamily:
													'"DM Sans", sans-serif',
											}}
										>
											{tag}
										</span>
									))}
								</div>

								<a
									href={pub.url}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200"
									style={{
										background: "#4682B4",
										color: "#FDFDFA",
										fontFamily: '"DM Sans", sans-serif',
									}}
									onMouseEnter={(e) =>
										(e.currentTarget.style.background =
											"#3a70a0")
									}
									onMouseLeave={(e) =>
										(e.currentTarget.style.background =
											"#4682B4")
									}
								>
									Read Paper
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
							</div>
						</motion.article>
					))}
				</motion.div>
			</div>
		</section>
	);
}
