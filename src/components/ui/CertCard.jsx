import { motion } from "framer-motion";
import { cardReveal } from "@/animations/variants";

export default function CertCard({ cert }) {
	const { title, issuer, date, badge, url } = cert;

	return (
		<motion.a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			variants={cardReveal}
			whileHover={{
				y: -8,
				boxShadow: "0 20px 40px -12px rgba(70,130,180,0.25)",
				transition: { duration: 0.25 },
			}}
			className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl cursor-pointer"
			style={{ background: "#1A1A1A", border: "1px solid #2A2A2A" }}
		>
			<img
				src={badge}
				alt={`${title} badge`}
				className="w-16 h-16 rounded-xl object-cover"
			/>
			<div className="space-y-1">
				<h3
					className="text-base font-semibold leading-snug"
					style={{
						color: "#FDFDFA",
						fontFamily: '"DM Sans", sans-serif',
					}}
				>
					{title}
				</h3>
				<p
					className="text-sm"
					style={{
						color: "#4682B4",
						fontFamily: '"DM Sans", sans-serif',
					}}
				>
					{issuer}
				</p>
				<p
					className="text-xs"
					style={{
						color: "#666666",
						fontFamily: '"DM Mono", monospace',
					}}
				>
					{date}
				</p>
			</div>
		</motion.a>
	);
}
