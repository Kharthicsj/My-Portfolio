import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const NAV_LINKS = [
	{ label: "Home", href: "#hero" },
	{ label: "About", href: "#about" },
	{ label: "Certifications", href: "#certifications" },
	{ label: "Projects", href: "#projects" },
	{ label: "Publications", href: "#publications" },
];

export default function Header() {
	const [scrolled, setScrolled] = useState(false);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", (latest) => {
		setScrolled(latest > 40);
	});

	const handleNavClick = (e, href) => {
		e.preventDefault();
		const target = document.querySelector(href);
		if (target) target.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<motion.header
			initial={{ y: -80, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
			className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
			style={
				scrolled
					? {
							background: "rgba(18,18,18,0.94)",
							backdropFilter: "blur(12px)",
							borderBottom: "1px solid #2A2A2A",
						}
					: {}
			}
		>
			<nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
				{/* Logo */}
				<a
					href="#hero"
					onClick={(e) => handleNavClick(e, "#hero")}
					className="font-bold text-xl tracking-tight transition-colors"
					style={{
						color: "#FDFDFA",
						fontFamily: '"DM Mono", monospace',
					}}
					onMouseEnter={(e) =>
						(e.currentTarget.style.color = "#4682B4")
					}
					onMouseLeave={(e) =>
						(e.currentTarget.style.color = "#FDFDFA")
					}
				>
					&lt;KharthicSJ /&gt;
				</a>

				{/* Desktop links */}
				<ul className="hidden md:flex items-center gap-8">
					{NAV_LINKS.map(({ label, href }) => (
						<li key={href}>
							<a
								href={href}
								onClick={(e) => handleNavClick(e, href)}
								className="text-sm font-medium transition-colors"
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
								{label}
							</a>
						</li>
					))}
				</ul>

				{/* CTA */}
				<a
					href="mailto:kharthicsj@gmail.com"
					className="hidden md:inline-flex items-center gap-2 text-sm font-medium px-5 py-2 rounded-xl transition-all duration-200"
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
					Hire Me
				</a>
			</nav>
		</motion.header>
	);
}
