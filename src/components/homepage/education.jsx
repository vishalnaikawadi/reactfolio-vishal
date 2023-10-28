import React from "react";
import { faSchool } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Education = () => {

    return (
		<div className="works">
			<Card
				icon={faSchool}
				title="Education"
				body={
					<div className="works-body">

						<div className="work">
							<div className="work-title">Lovely Professional University</div>
							<div className="work-subtitle">
								Masters of Computer Application
						</div>
						</div>

						<div className="work">
							<div className="work-title">Dahanukar College (Mumbai University)</div>
							<div className="work-subtitle">
								Bachelors of Information Technology
						</div>
						</div>

						
					</div>

					
				}
			/>
		</div>
	);
};

export default Education;