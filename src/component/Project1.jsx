import { React, useState, useEffect, memo } from "react";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import { Resizable } from "re-resizable";
import Draggable from "react-draggable";
import ProjectHead1 from "./ProjectHead1";
import ProjectBody1 from "./ProjectBody1";

export default memo(function Project1(props) {
	return (
		<>
			<ProjectHead1 projectHeadId={props.projectId} />
			<ProjectBody1 projectBodyId={props.projectId} />
		</>
	);
});
