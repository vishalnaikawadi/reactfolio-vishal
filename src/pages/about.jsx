import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBowlFood,
	faDumbbell,
	faFilm,
	faMotorcycle,
	faRocket,
} from "@fortawesome/free-solid-svg-icons";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");
	const hobbies = [
		{
			icon: faMotorcycle,
			title: "Bike rides",
			description: "Long rides, open roads, and the reset that comes from motion.",
		},
		{
			icon: faFilm,
			title: "Anime",
			description: "I watch everything from shonen and seinen to isekai and mecha.",
		},
		{
			icon: faBowlFood,
			title: "Food",
			description: "Finding good coffee, calm corners, new food cultures, and the stories behind them.",
		},
		{
			icon: faDumbbell,
			title: "Health",
			description: "Trekking, training regularly, and reading deeply about nutrition resources.",
		},
		{
			icon: faRocket,
			title: "Astronomy",
			description: "Space, cosmos, strange scales, and everything that feels out of this world.",
		},
	];

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>

								<div className="about-focus-grid">
									{INFO.about.focus.map((item, index) => (
										<div className="about-focus-card" key={item}>
											<span>{String(index + 1).padStart(2, "0")}</span>
											<p>{item}</p>
										</div>
									))}
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
											alt="Vishal Naikawadi with his bike"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>

						<section className="about-hobbies" aria-labelledby="hobbies-title">
							<div className="about-hobbies-heading">
								<p className="section-kicker">Outside code</p>
								<h2 id="hobbies-title">The things that keep me curious.</h2>
								<p>
									A small constellation of interests: movement, stories, food,
									health, and the occasional astronomy rabbit hole.
								</p>
							</div>

							<div className="about-hobbies-grid">
								{hobbies.map((hobby) => (
									<div className="about-hobby-card" key={hobby.title}>
										<div className="about-hobby-icon">
											<FontAwesomeIcon icon={hobby.icon} />
										</div>
										<div>
											<h3>{hobby.title}</h3>
											<p>{hobby.description}</p>
										</div>
									</div>
								))}
							</div>
						</section>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
