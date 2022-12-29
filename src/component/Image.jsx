import { React, useState, useEffect, memo } from "react";
import $ from "jquery";
import "../style/Image.css";
import "../style/delete.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Resizable } from "re-resizable";
import Draggable from "react-draggable";

import "../style/delete.css";

export default memo(function Image(props) {
	const [load, setLoad] = useState(false);
	const [browserSize, setBrowserSize] = useState({
		width: $(window).width(),
		height: $(window).height(),
	});
	const [show, setShow] = useState(true);
	const imageId = "imageId" + props.imageId;
	const reviewMode = props.reviewMode;

	$("Input" + imageId).prop("disabled", reviewMode);
	function getUrl(e) {
		$(`#${imageId}`).css(
			"background-image",
			`url('${
				e.target.files[0] ? URL.createObjectURL(e.target.files[0]) : ""
			}')`
		);
		$(`#Input${imageId}`).css("display", "none");
		$(`#${imageId}`).text("");

		setLoad(!load);
	}
	if (!reviewMode) {
		$(`#${imageId}`).on("dblclick", () => {
			$(`#Input${imageId}`).css("display", "block");
			$(`#${imageId}`).css("background-image", `url()`);
			$(`#${imageId}`).text("Upload");
		});
		$(`#${imageId}`).on("mouseenter", () => {
			$("#delete" + imageId).css("visibility", "visible");
		});
		$("#delete" + imageId).on("mouseenter", () => {
			("#delete" + imageId).css("visibility", "visible");
		});
		$("#delete" + imageId).on("mouseout", () => {
			$(this).css("visibility", "hidden");
		});
		$(`#${imageId}`).on("mouseout", () => {
			$("#delete" + imageId).css("visibility", "hidden");
		});
		$("#Resize" + imageId).on("mouseenter", () => {
			$("#delete" + imageId).css("visibility", "visible");
		});
		$("#Resize" + imageId).on("mouseenter", () => {
			$("#delete" + imageId).css("visibility", "hidden");
		});
		$("#container" + imageId).on("mouseenter", () => {
			$("#delete" + imageId).css("visibility", "visible");
		});
		$("#container" + imageId).on("mouseout", () => {
			$("#delete" + imageId).css("visibility", "hidden");
		});
		$("#Input" + imageId).on("mouseenter", () => {
			$("#delete" + imageId).css("visibility", "visible");
		});
	} else {
		$(`#${imageId}`).off("dblclick");
	}
	if (show) {
		return (
			<>
				<div
					style={
						props.vertical
							? { width: browserSize.width * 0.8 }
							: { width: browserSize.width * 0.3 }
					}
					className="position-relative mb-2"
					id={"container" + imageId}
				>
					<div id={"imageEdge" + imageId} style={{ height: 20 }}></div>

					<Draggable handle=".anchor">
						<Resizable className="" id={"Resize" + imageId}>
							<div
								className="delete"
								id={"delete" + imageId}
								onClick={() => setShow(false)}
							>
								X
							</div>
							<div
								style={{ height: browserSize.height * 0.7, top: "-25px" }}
							></div>
							<div className="delete" id={"delete" + imageId}>
								X
							</div>
							<div>
								<div className="anchor" id={"anchor" + imageId}>
									<div
										id={imageId}
										style={{
											position: "absolute",
											width: "100%",
											height: "100%",
											backgroundColor: "#f0f0f0",
											backgroundRepeat: "no-repeat",
											backgroundSize: "contain",
											padding: "2px",
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
										}}
									>
										Upload
									</div>
									<input
										type="file"
										name=""
										id={"Input" + imageId}
										onChange={(e) => getUrl(e)}
										style={{
											position: "absolute",
											zIndex: 3,
											width: "100%",
											height: "100%",
											opacity: 0,
										}}
									/>
								</div>
							</div>
						</Resizable>
					</Draggable>
				</div>
			</>
		);
	} else {
		return <></>;
	}
});
