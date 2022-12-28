import { React, useState, useEffect, memo } from "react";
import "../style/Avatar.css";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import { Resizable } from "re-resizable";
import Draggable from "react-draggable";

import avatar from "../images/avatar.jpg";

export default memo(function Avatar() {
	const [imageUrl, setImageUrl] = useState();
	const [browserSize, setBrowserSize] = useState({
		width: $(window).width(),
		height: $(window).height(),
	});
	const [imageSize, setImageSize] = useState({
		width: ($(window).width() / 2) * 0.7,
		height: $(window).height(),
	});

	function getUrl(event) {
		setImageUrl(event.target.files[0]);
		$(".imageLabel").text("");
		$("#uploadImage").css("display", "none");
	}
	$(".imageLabel").dblclick(() => {
		$("#uploadImage").css("display", "block");
		$(".imageLabel").text("Upload");
	});
	$(".imageLabel").css(
		"background-image",
		`url('${imageUrl ? URL.createObjectURL(imageUrl) : ""}')`
	);
	return (
		<>
			<div className="position-relative page">
				<div>
					<Draggable
						handle=".anchor"
						bounds={{ left: 0, top: 0, right: browserSize.width }}
					>
						<Resizable
							defaultSize={{
								width: (browserSize.width / 2) * 0.8,
								height: browserSize.height,
							}}
						>
							<div className="anchor">
								<div
									className="imageLabel text-secondary"
									htmlFor="uploadImage"
								>
									Upload
								</div>
								<div>
									<input
										type="file"
										name=""
										id="uploadImage"
										onChange={(e) => {
											getUrl(e);
										}}
									/>
								</div>
								<div className="smallBlock"></div>
								<Draggable>
									<div className="block">
										<div
											style={{
												fontSize: (40 * browserSize.width) / 1536,
											}}
										>
											<div>P</div>
											<div>O</div>
											<div>R</div>
											<div>T</div>
											<div>F</div>
											<div>O</div>
											<div>L</div>
											<div>I</div>
											<div>O</div>
										</div>
									</div>
								</Draggable>
							</div>
						</Resizable>
					</Draggable>
				</div>
			</div>
		</>
	);
});
