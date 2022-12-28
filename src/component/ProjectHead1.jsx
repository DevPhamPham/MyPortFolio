import { React, useState, useEffect, memo } from "react";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import { Resizable } from "re-resizable";
import Draggable from "react-draggable";
import "../style/ProjectHead1.css";
import { Row } from "react-bootstrap";

import Image from "./Image";
import Text from "./Text";

export default function ProjectHead1(props) {
	const projectHeadId = "projectHeadId" + props.projectHeadId;
	const [browserSize, setBrowserSize] = useState({
		width: $(window).width(),
		height: $(window).height(),
	});
	return (
		<Row>
			<div className="position-relative">
				<Draggable handle=".anchor">
					<>
						<div className="anchor">
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
				<Text textId={4} placeholder="Your project name..." />
				<Text textId={5} placeholder="Your project overview..." />
			</div>
		</Row>
	);
}
