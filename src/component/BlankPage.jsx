import { React, useState, useEffect, memo } from "react";
import { Row } from "react-bootstrap";
import $ from "jquery";

export default memo(function BlankPage() {
	const [browserSize, setBrowserSize] = useState({
		width: $(window).width(),
		height: $(window).height(),
	});
	return (
		<Row>
			<div
				style={{ width: browserSize.width, height: browserSize.height }}
			></div>
		</Row>
	);
});
