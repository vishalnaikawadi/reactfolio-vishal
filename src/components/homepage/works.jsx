import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work timeline"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./magic.jpeg"
								alt="Magic Edtech"
								className="work-image"
							/>
							<a
								href="https://www.magicedtech.com/"
								target="_blank"
								rel="noreferrer"
								className="work-title work-link"
							>
								Magic Edtech
							</a>
							<div className="work-subtitle">
								Tech Lead · Quicktakes.ai
							</div>
							<div className="work-duration">May 2023 - Present</div>
						</div>

						<div className="work">
							<img
								src="./lead.png"
								alt="lead school"
								className="work-image"
							/>
							<a
								href="https://leadschool.in/"
								target="_blank"
								rel="noreferrer"
								className="work-title work-link"
							>
								LEAD School
							</a>
							<div className="work-subtitle">
								SDE-2 · Student App, Teacher App
							</div>
							<div className="work-duration">Jan 2022 - May 2023</div>
						</div>

						<div className="work">
							<img
								src="./companylogo.jpeg"
								alt="2015Nine"
								className="work-image"
							/>
							<div className="work-title">2015Nine Consultants</div>
							<div className="work-subtitle">
								Software Engineer · Firebase, quality systems
							</div>
							<div className="work-duration">Jul 2021 - Jan 2022</div>
						</div>

						<div className="work">
							<img
								src="./neosoft.png"
								alt="neosoft"
								className="work-image"
							/>
							<a
								href="https://www.neosofttech.com/"
								target="_blank"
								rel="noreferrer"
								className="work-title work-link"
							>
								Neosofttech Pvt. Ltd.
							</a>
							<div className="work-subtitle">
								Software Engineer · BCG One
							</div>
							<div className="work-duration">Oct 2019 - Jul 2021</div>
						</div>

						<div className="work">
							<img
								src="./transovative.jpeg"
								alt="transovative"
								className="work-image"
							/>
							<a
								href="https://transovative.com/about/"
								target="_blank"
								rel="noreferrer"
								className="work-title work-link"
							>
								Transovative
							</a>
							<div className="work-subtitle">
								Technical Consultant · OKI STA, mAudit
							</div>
							<div className="work-duration">May 2018 - Oct 2019</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
