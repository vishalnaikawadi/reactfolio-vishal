import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { asset, title, description, tags = [], linkText, link } = props;
	const isExternal = /^https?:\/\//.test(link);
	const linkProps = isExternal
		? { href: link, target: "_blank", rel: "noreferrer" }
		: { href: link };

	return (
		<React.Fragment>
			<div className="project">
				<a {...linkProps}>
					<div className="project-container">
						<div className="project-asset">
							<img src={asset} alt={`${title} app asset`} loading="lazy" />
						</div>
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						<div className="project-tags">
							{tags.map((tag) => (
								<span key={tag}>{tag}</span>
							))}
						</div>
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
							</div>

							<div className="project-link-text">{linkText}</div>
						</div>
					</div>
				</a>
			</div>
		</React.Fragment>
	);
};

export default Project;
