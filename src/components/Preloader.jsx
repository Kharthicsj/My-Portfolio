import { useEffect } from "react";
import { motion } from "framer-motion";
import {
	preloaderChar,
	preloaderContainer,
	preloaderOverlay,
} from "@/animations/variants";

/**
 * Full-screen loading overlay.
 * Types out the logo, holds, then dissolves upward.
 *
 * Props:
 *   onExitComplete — called by AnimatePresence in the parent after exit finishes
 */

const LOGO_CHARS = "<KharthicSJ />".split("");

// Duration (ms) before the parent removes this component and triggers exit animation
const HOLD_DURATION_MS = 2600;

export default function Preloader({ onготов, triggerExit, onMounted }) {
	// Notify parent this component has mounted so it can start the countdown
	useEffect(() => {
		onMounted?.();
	}, []);

	return (
		<motion.div
			key="preloader"
			variants={preloaderOverlay}
			initial="initial"
			animate={{ opacity: 1 }}
			exit="exit"
			className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden"
			style={{ background: "#121212" }}
		>
			{/* Top decorative rule */}
			<motion.div
				initial={{ scaleX: 0 }}
				animate={{ scaleX: 1 }}
				transition={{
					duration: 1,
					ease: [0.22, 1, 0.36, 1],
					delay: 0.1,
				}}
				className="absolute top-1/2 left-0 right-0 h-px origin-left"
				style={{ background: "#2A2A2A" }}
			/>

			{/* Corner markers */}
			{[
				"top-10 left-10",
				"top-10 right-10",
				"bottom-10 left-10",
				"bottom-10 right-10",
			].map((pos, i) => (
				<motion.div
					key={i}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 + i * 0.08 }}
					className={`absolute ${pos} w-4 h-4 border-[#2A2A2A]`}
					style={{
						borderTopWidth: pos.includes("top") ? "1px" : 0,
						borderBottomWidth: pos.includes("bottom") ? "1px" : 0,
						borderLeftWidth: pos.includes("left") ? "1px" : 0,
						borderRightWidth: pos.includes("right") ? "1px" : 0,
					}}
				/>
			))}

			{/* ── Typing Logo ── */}
			<motion.div
				variants={preloaderContainer}
				initial="hidden"
				animate="show"
				className="relative flex items-baseline gap-0 select-none"
				style={{ fontFamily: '"DM Mono", monospace' }}
			>
				{LOGO_CHARS.map((char, i) => (
					<motion.span
						key={i}
						variants={preloaderChar}
						transition={{ duration: 0.04 }}
						className="text-4xl md:text-6xl font-medium"
						style={{ color: "#FDFDFA" }}
					>
						{char === " " ? "\u00A0" : char}
					</motion.span>
				))}

				{/* Blinking cursor — visible during typing, then fades out */}
				<motion.span
					initial={{ opacity: 1 }}
					animate={{ opacity: [1, 0, 1, 0, 1, 0, 0] }}
					transition={{
						duration: 1.6,
						times: [0, 0.1, 0.2, 0.3, 0.4, 0.7, 1],
						delay: 0.4,
					}}
					className="ml-1 inline-block w-[3px] rounded-sm"
					style={{
						height: "1em",
						background: "#4682B4",
						verticalAlign: "baseline",
					}}
				/>
			</motion.div>

			{/* Subtitle beneath */}
			<motion.p
				initial={{ opacity: 0, y: 8 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					delay: 1.6,
					duration: 0.6,
					ease: [0.22, 1, 0.36, 1],
				}}
				className="mt-4 text-sm tracking-[0.3em] uppercase"
				style={{
					color: "#888888",
					fontFamily: '"DM Sans", sans-serif',
				}}
			>
				Innovation in Hands
			</motion.p>

			{/* ── Progress bar ── */}
			<motion.div
				initial={{ scaleX: 0 }}
				animate={{ scaleX: 1 }}
				transition={{
					delay: 0.5,
					duration: HOLD_DURATION_MS / 1000 - 0.8,
					ease: "linear",
				}}
				className="absolute bottom-0 left-0 h-[2px] w-full origin-left"
				style={{ background: "#4682B4" }}
			/>
		</motion.div>
	);
}
