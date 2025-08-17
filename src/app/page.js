"use client"; // <- required for Next.js App Router

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
	return (
		<main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white font-sans">
			{/* Hero Section */}
			<section className="h-screen flex flex-col justify-center items-center text-center px-6">
				<motion.h1
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					className="text-5xl md:text-7xl font-bold mb-6">
					Hi, I’m <span className="text-purple-400">Wes Sidani</span>
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5, duration: 1 }}
					className="text-lg md:text-2xl text-gray-300 max-w-2xl mb-8">
					I build modern, stylish, and effective digital experiences for
					businesses.
				</motion.p>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1, duration: 1 }}>
					<Button className="px-6 py-3 text-lg rounded-2xl shadow-lg bg-purple-500 hover:bg-purple-600">
						View My Work
					</Button>
				</motion.div>
			</section>

			{/* About Section */}
			<section className="py-20 px-6 max-w-5xl mx-auto text-center">
				<motion.h2
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-4xl font-semibold mb-6">
					About Me
				</motion.h2>
				<p className="text-gray-400 max-w-3xl mx-auto">
					I specialize in creating visually stunning, high-performance websites
					with modern animations, intuitive layouts, and responsive design. I
					combine design and technology to help businesses stand out online.
				</p>
			</section>

			{/* Projects Section */}
			<section className="py-20 px-6 max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-4xl font-semibold text-center mb-12">
					Featured Projects
				</motion.h2>
				<div className="grid md:grid-cols-2 gap-10">
					{[1, 2].map((project) => (
						<motion.div
							key={project}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] transition-transform">
							<div className="h-56 bg-gradient-to-tr from-purple-600 to-pink-500"></div>
							<div className="p-6">
								<h3 className="text-2xl font-semibold mb-3">
									Project Title {project}
								</h3>
								<p className="text-gray-400 mb-4">
									A short description of the project, highlighting what you
									built and its impact.
								</p>
								<Button variant="outline">View Project</Button>
							</div>
						</motion.div>
					))}
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-20 px-6 bg-gradient-to-tr from-purple-900 via-black to-gray-900 text-center">
				<motion.h2
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-4xl font-semibold mb-6">
					Let’s Work Together
				</motion.h2>
				<p className="text-gray-300 max-w-2xl mx-auto mb-8">
					Interested in collaborating or want to discuss your project? Let’s
					connect.
				</p>
				<Button className="px-6 py-3 text-lg rounded-2xl shadow-lg bg-purple-500 hover:bg-purple-600">
					Get in Touch
				</Button>
			</section>
		</main>
	);
}
