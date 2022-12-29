import { React, useState } from "react";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import Draggable from "react-draggable";
import "../style/ProjectHead1.css";
import { Row } from "react-bootstrap";

import Image from "./Image";
import Text from "./Text";

export default function ProjectHead1(props) {
	const projectHeadId = "projectHeadId" + props.projectHeadId;
	const reviewMode = props.reviewMode;

	const [browserSize, setBrowserSize] = useState({
		width: $(window).width(),
		height: $(window).height(),
	});
	return (
		<Row>
			<div className="position-relative pt-5 pb-5 mb-5">
				<Draggable handle=".anchor">
					<>
						<div
							className="anchorHead"
							style={{
								width: "100%",
								height: "fit-content",
								position: "relative",
							}}
						>
							<div className="headContainer">
								<Draggable>
									<div className="topBlock"></div>
								</Draggable>
								<Image imageId={projectHeadId} vertical={true} />

								<Draggable>
									<div className="botBlock"></div>
								</Draggable>
							</div>
						</div>
					</>
				</Draggable>
				<Text
					textId={4}
					placeholder="Your project name..."
					reviewMode={reviewMode}
					left={"10%"}
					top={"45%"}
				/>
				<Text
					textId={5}
					placeholder="Your project overview..."
					reviewMode={reviewMode}
					left={"75%"}
					top={"45%"}
				/>
			</div>
		</Row>
	);
}
