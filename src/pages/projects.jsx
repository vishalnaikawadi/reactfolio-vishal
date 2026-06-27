import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							Mobile products across AI learning, education platforms, and personal product experiments.
						</div>

						<div className="subtitle projects-subtitle">
							Recent work is centered on React Native ownership: architecture, native integrations, AI workflows, app quality, Expo/EAS builds, and release coordination.
						</div>

						<section className="projects-focus" aria-labelledby="projects-focus-title">
							<div className="projects-focus-heading">
								<h2 id="projects-focus-title">What I am building right now</h2>
								<p>
									Alongside professional work, I am putting most of my personal
									product energy into Solo Saga and Claripath.
								</p>
							</div>

							<div className="projects-focus-grid">
								{INFO.currentFocusProjects.map((project) => (
									<a
										className="projects-focus-card"
										href={project.link}
										key={project.title}
										target="_blank"
										rel="noreferrer"
									>
										<div className="projects-focus-copy">
											<h3>{project.title}</h3>
											<p>{project.description}</p>
											<div className="projects-focus-tags">
												{project.tags.map((tag) => (
													<em key={tag}>{tag}</em>
												))}
											</div>
											<strong>{project.linkText}</strong>
										</div>
										<div className="projects-focus-media">
											{project.images.map((image) => (
												<img src={image.src} alt={image.alt} key={image.src} />
											))}
										</div>
									</a>
								))}
							</div>
						</section>

						<div className="projects-list-heading">
							<h2>Apps and products I have worked on</h2>
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
