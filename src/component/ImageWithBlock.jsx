import { React, useState, useEffect, memo } from "react";
import $ from "jquery";
import "../style/ImageWithBlock.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Resizable } from "re-resizable";
import Draggable from "react-draggable";

export default memo(function ImageWithBlock(props) {
	const [load, setLoad] = useState(false);
	const [browserSize, setBrowserSize] = useState({
		width: $(window).width(),
		height: $(window).height(),
	});
	const imageId = "imageWithBlockId" + props.imageWithBlockId;
	$(`#${imageId}`).dblclick(() => {
		$(`#Input${imageId}`).css("display", "block");
		$(`#${imageId}`).css("background-image", `url()`);
		$(`#${imageId}`).text("Upload");
	});
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

	return (
		<>
			<div
				style={{ width: browserSize.width * 0.3 }}
				className="position-relative pt-5 pb-5"
			>
				<Draggable handle=".anchor">
					<Resizable id={"Resize" + imageId}>
						<div style={{ height: browserSize.height * 0.7 }}></div>
						<div>
							<div className="anchor">
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
						<div
							style={{
								position: "absolute",
								width: "100%",
								height: "100%",
								backgroundColor: "black",
								top: "5%",
								right: "-10%",
								zIndex: -1,
							}}
						></div>
					</Resizable>
				</Draggable>
			</div>
		</>
	);
});
