import { React, memo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectHead1 from "./ProjectHead1";
import ProjectBody1 from "./ProjectBody1";
import { Row } from "react-bootstrap";

export default memo(function Project1(props) {
	return (
		<Row>
			<Row>
				<ProjectHead1
					projectHeadId={props.projectId}
					reviewMode={props.reviewMode}
				/>
			</Row>
			<Row>
				<ProjectBody1
					projectBodyId={props.projectId}
					reviewMode={props.reviewMode}
				/>
			</Row>
		</Row>
	);
});
