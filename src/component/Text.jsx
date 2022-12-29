import { React, useState, memo, useEffect, useContext } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.bubble.css";
import Draggable from "react-draggable";
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
	const [disableQuill, setDisableQuill] = useState(false);
	const [browserSize, setBrowserSize] = useState({
		width: $(window).width(),
		height: $(window).height(),
	});
	const reviewMode = props.reviewMode;
	let textStyle = { width: "fit-content" };
	if (props.left) {
		textStyle = { ...{ left: props.left }, ...textStyle };
	}
	if (props.top) {
		textStyle = { ...{ top: props.top }, ...textStyle };
	}
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
	const { quill, quillRef } = useQuill({
		theme,
		modules,
		formats,
		placeholder,
	});
	if (!reviewMode) {
		$(`#${textContainerId}`).on("mouseenter", () => {
			$(`#${textAnchorId}`).css("color", "grey");
			$(`#delete${textAnchorId}`).css("visibility", "visible");
		});

		$(`#${textAnchorId}`).on("mouseenter", () => {
			$(`#${textAnchorId}`).css("color", "grey");
			$(`#delete${textAnchorId}`).css("visibility", "visible");
		});
		$(`.ql-editor`).on("mouseenter", () => {
			$(`#${textAnchorId}`).css("color", "grey");
			$(`#delete${textAnchorId}`).css("visibility", "visible");
		});
		if (disableQuill) {
			quill.disable();
			quill.enable();
			setDisableQuill(false);
		}
	} else {
		$(`#${textContainerId}`).off("mouseenter");
		$(`#${textAnchorId}`).off("mouseenter");
		$(`#${textContainerId}`).off("mouseenter");
		$(`.ql-editor`).off("mouseenter");
		quill.disable();
	}
	useEffect(() => {
		if (quill) {
			quill.on("text-change", (delta, oldDelta, source) => {
				setQuillWidth("fit-content");
			});
		}
	}, [quill]);
	useEffect(() => {
		setLoad(!load);
		$(`#${textContainerId}`).on("mouseout", () => {
			$(`#${textAnchorId}`).css("color", "transparent");
			$(`#delete${textAnchorId}`).css("visibility", "hidden");
		});
		$(`.ql-editor`).on("mouseout", () => {
			$(`#${textAnchorId}`).css("color", "transparent");
			$(`#delete${textAnchorId}`).css("visibility", "hidden");
		});
	}, []);
	useEffect(() => {
		setDisableQuill(reviewMode);
	}, [reviewMode]);
	if (show) {
		return (
			<div className="position-absolute" style={textStyle}>
				<div style={{ width: "fit-content" }}>
					<Draggable
						handle=".anchorText"
						bounds={{ right: browserSize.width }}
						disabled={reviewMode}
					>
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
									height: "fit-content",
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
