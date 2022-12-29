import { React, useState, memo } from "react";
import { Row, Col } from "react-bootstrap";
import $ from "jquery";

import Image from "./Image";
import Text from "./Text";

export default memo(function Gallery(props) {
	const galleryId = "galleryId" + props.galleryId + "-";
	const [show, setShow] = useState(true);
	const reviewMode = props.reviewMode;

	$(galleryId).hover(() => {
		$(`#delete${galleryId}`).css("visibility", "visible");
		console.log("hover");
	});
	if (show) {
		return (
			<Row className="pb-5 position-relative" id={galleryId}>
				<div
					className="delete"
					id={"delete" + galleryId}
					onClick={() => setShow(false)}
				>
					X
				</div>
				<Col>
					<Row>
						<Col>
							<Image imageId={galleryId + 2} />
						</Col>
						<Col>
							<Image imageId={galleryId + 3} />
						</Col>
					</Row>

					<Row>
						<Col>
							<Image imageId={galleryId + 5} />
						</Col>
						<Col>
							<Image imageId={galleryId + 6} />
						</Col>
					</Row>
				</Col>
				<Col xs={2}>
					<Text
						textId={galleryId + 1}
						placeholder="Gallery description..."
						reviewMode={reviewMode}
					/>
				</Col>
			</Row>
		);
	}
});
