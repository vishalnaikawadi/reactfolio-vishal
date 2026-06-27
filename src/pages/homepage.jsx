import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import {
	faArrowRight,
	faBookOpen,
	faEnvelope,
	faMailBulk,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Works from "../components/homepage/works";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/homepage.css";

const Homepage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "home");

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="homepage-eyebrow">
									{INFO.homepage.eyebrow}
								</div>

								<div className="title homepage-title">
									{INFO.homepage.title}
								</div>

								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description}
								</div>

								<div className="homepage-actions">
									<Link to="/projects" className="primary-action">
										View work
										<FontAwesomeIcon icon={faArrowRight} />
									</Link>
									<a
										href={`mailto:${INFO.main.email}`}
										className="secondary-action"
									>
										<FontAwesomeIcon icon={faEnvelope} />
										Contact
									</a>
								</div>

								<div className="homepage-skill-cloud" aria-label="Core skills">
									{INFO.homepage.skills.map((skill) => (
										<span key={skill}>{skill}</span>
									))}
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-orbit-card">
									<div className="homepage-image-container">
										<div className="homepage-image-wrapper">
											<img
												src="homepage.jpg"
												alt="Vishal Naikawadi"
												className="homepage-image"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="homepage-socials">
						
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.stackoverflow}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faStackOverflow}
									className="homepage-social-icon"
								/>
							</a>
						
							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="homepage-social-icon"
								/>
							</a>
						</div>

						<div className="homepage-stats">
							{INFO.homepage.stats.map((stat) => (
								<div className="homepage-stat" key={stat.label}>
									<strong>{stat.value}</strong>
									<span>{stat.label}</span>
								</div>
							))}
						</div>

						<div className="homepage-current-build">
							<div className="current-build-content">
								<div className="current-build-icon">
									<FontAwesomeIcon icon={faBookOpen} />
								</div>
								<div>
									<p className="section-kicker">
										{INFO.homepage.currentBuild.label}
									</p>
									<h2>{INFO.homepage.currentBuild.name}</h2>
									<p>{INFO.homepage.currentBuild.description}</p>
									<div className="current-build-tags">
										{INFO.homepage.currentBuild.tags.map((tag) => (
											<span key={tag}>{tag}</span>
										))}
									</div>
								</div>
							</div>
							<a
								href={INFO.homepage.currentBuild.link}
								target="_blank"
								rel="noreferrer"
								className="current-build-link"
							>
								{INFO.homepage.currentBuild.linkText}
								<FontAwesomeIcon icon={faArrowRight} />
							</a>
						</div>

						<div className="homepage-highlight-panel">
							<div>
								<p className="section-kicker">How I work</p>
								<h2>Curiosity, ownership, and steady leadership.</h2>
							</div>
							<ul>
								{INFO.homepage.highlights.map((highlight) => (
									<li key={highlight}>{highlight}</li>
								))}
							</ul>
						</div>

						<div className="homepage-after-title">
							<div className="homepage-works">
								<Works />
							</div>
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
