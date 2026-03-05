import { motion } from "framer-motion";
import { staggerContainer } from "@/animations/variants";
import CertCard from "@/components/ui/CertCard";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { certifications } from "@/data/certifications";

export default function Certifications() {
	return (
		<section
			id="certifications"
			className="py-28 px-6"
			style={{ background: "#121212" }}
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
						Certifications
					</p>
					<h2
						className="text-4xl font-extrabold"
						style={{
							color: "#FDFDFA",
							fontFamily: '"DM Sans", sans-serif',
						}}
					>
						Credentials & Badges
					</h2>
					<p
						className="max-w-xl mx-auto"
						style={{
							color: "#888888",
							fontFamily: '"Lora", serif',
						}}
					>
						Formal recognitions of skills I've built through
						hands-on projects and structured learning.
					</p>
				</RevealOnScroll>

				{/* Grid */}
				<motion.div
					variants={staggerContainer}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.1 }}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
				>
					{certifications.map((cert) => (
						<CertCard key={cert.id} cert={cert} />
					))}
				</motion.div>
			</div>
		</section>
	);
}
