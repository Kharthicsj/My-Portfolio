import { motion } from "framer-motion";
import { fadeUp } from "@/animations/variants";

/**
 * Wraps any section content in a Framer Motion whileInView reveal.
 * Children animate when ~15% of the element enters the viewport.
 */
export default function RevealOnScroll({
	children,
	className = "",
	delay = 0,
}) {
	return (
		<motion.div
			className={className}
			variants={fadeUp}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.15 }}
			transition={{ delay }}
		>
			{children}
		</motion.div>
	);
}
