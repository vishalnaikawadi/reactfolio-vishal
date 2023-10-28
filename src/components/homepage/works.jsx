import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./magic.jpeg"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Magic Edtech</div>
							<div className="work-subtitle">
								Senior Software Engineer
							</div>
							<div className="work-duration">May 2023 - Present</div>
						</div>

						<div className="work">
							<img
								src="./lead.png"
								alt="lead school"
								className="work-image"
							/>
							<div className="work-title">LEAD School</div>
							<div className="work-subtitle">
								SDE-II
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
								Software Engineer
							</div>
							<div className="work-duration">Jul 2021 - Jan 2022</div>
						</div>

						<div className="work">
							<img
								src="./neosoft.png"
								alt="neosoft"
								className="work-image"
							/>
							<div className="work-title">Neosofttech Pvt. Ltd.</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">Oct 2019 - Jul 2021</div>
						</div>

						<div className="work">
							<img
								src="./transovative.jpeg"
								alt="transovative"
								className="work-image"
							/>
							<div className="work-title">Transovative</div>
							<div className="work-subtitle">
								Technical Consultant
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
