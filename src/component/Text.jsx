import { React, useState, memo, useEffect } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.bubble.css";
import Draggable from "react-draggable";
import { Resizable } from "re-resizable";

import $ from "jquery";
import "../style/Text.css";
import "../style/delete.css";

export default memo(function Text(props) {
	const theme = "bubble";
	const [textAnchorId, setTextAnchorId] = useState("textAnchor" + props.textId);
	const textContainerId = "textContainer" + props.textId;
	const [load, setLoad] = useState(false);
	const [show, setShow] = useState(true);
	const [quillWidth, setQuillWidth] = useState(300);
	const [browserSize, setBrowserSize] = useState({
		width: $(window).width(),
		height: $(window).height(),
	});
	if (props.show !== undefined) {
	}
	const modules = {
		toolbar: [
			[{ size: ["small", false, "large", "huge"] }],
			["bold", "italic", "underline", "strike"],
			[{ color: [] }, { background: [] }],
			[{ align: [] }],
			[{ list: "ordered" }, { list: "bullet" }],
		],
	};
	let placeholder = "Write something...";
	if (props.placeholder != undefined) placeholder = props.placeholder;

	const formats = [
		"bold",
		"italic",
		"underline",
		"strike",
		"color",
		"background",
		"size",
		"list",
		"align",
	];

	$(`#${textContainerId}`).hover(() => {
		$(`#${textAnchorId}`).css("color", "grey");
		$(`#delete${textAnchorId}`).css("visibility", "visible");
	});
	$(`#${textAnchorId}`).hover(() => {
		$(`#${textAnchorId}`).css("color", "grey");
		$(`#delete${textAnchorId}`).css("visibility", "visible");
	});
	$(`#${textContainerId}`).mouseout(() => {
		$(`#${textAnchorId}`).css("color", "transparent");
		$(`#delete${textAnchorId}`).css("visibility", "hidden");
	});
	$(`.ql-editor`).hover(() => {
		$(`#${textAnchorId}`).css("color", "grey");
		$(`#delete${textAnchorId}`).css("visibility", "visible");
	});
	$(`.ql-editor`).mouseout(() => {
		$(`#${textAnchorId}`).css("color", "transparent");
		$(`#delete${textAnchorId}`).css("visibility", "hidden");
	});

	const { quill, quillRef } = useQuill({
		theme,
		modules,
		formats,
		placeholder,
	});
	useEffect(() => {
		if (quill) {
			quill.on("text-change", (delta, oldDelta, source) => {
				setQuillWidth("fit-content");
			});
		}
	}, [quill]);
	useEffect(() => {
		setLoad(!load);
	}, []);
	if (show) {
		return (
			<div className="position-relative" style={{ width: "fit-content" }}>
				<div style={{ width: "fit-content" }}>
					<Draggable handle=".anchorText" bounds={{ right: browserSize.width }}>
						<div>
							<div
								className="delete"
								id={"delete" + textAnchorId}
								onClick={() => setShow(false)}
							>
								X
							</div>

							<div className="anchorText" id={textAnchorId}>
								Drag here
							</div>
							<div
								style={{
									width: quillWidth,
									height: quillWidth,
								}}
								id={textContainerId}
							>
								<div spellCheck={false} ref={quillRef} />
							</div>
						</div>
					</Draggable>
				</div>
			</div>
		);
	} else {
		return <></>;
	}
});
