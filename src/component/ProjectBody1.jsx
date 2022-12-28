import { React, useState, useEffect, memo } from "react";
import Image from "./Image";
import Text from "./Text";
import { Col, Row } from "react-bootstrap";

export default memo(function ProjectBody1(props) {
	const projectBodyId = "projectBodyId" + props.projectBodyId + "-";
	return (
		<Row className="pb-5">
			<Row>
				<Col>
					<Image imageId={projectBodyId + 1} />
				</Col>
				<Col>
					<Text textId={projectBodyId + 3} />
				</Col>
			</Row>
			<Row>
				<Col>
					<Text textId={projectBodyId + 4} />
				</Col>
				<Col>
					<Image imageId={projectBodyId + 2} />
				</Col>
			</Row>
		</Row>
	);
});
