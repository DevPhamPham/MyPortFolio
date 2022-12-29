import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Row } from "react-bootstrap";
import "../style/Modal.css";

export default function ModelBox() {
	const [lgShow, setLgShow] = useState(false);

	return (
		<>
			<div className="text-white" onClick={() => setLgShow(true)}>
				Tutorial
			</div>

			<Modal
				size="lg"
				show={lgShow}
				onHide={() => setLgShow(false)}
				aria-labelledby="example-modal-sizes-title-lg"
			>
				<Modal.Header closeButton>
					<Modal.Title id="example-modal-sizes-title-lg">
						Some quick tutorial to use this web well
					</Modal.Title>
				</Modal.Header>
				<Modal.Body id="modalBody">
					<Row>
						<b>Click the logo the return to homepage</b>
					</Row>
					<Row>
						<ul>
							<b>Add element: </b>Use icon at nav bar to add element respective
							is:
							<li>-Add text</li>
							<li>-Add image</li>
							<li>-Add image with black block behind</li>
							<li>-Add project</li>
							<li>-Add gallery</li>
							<li>-Add blank page</li>
						</ul>
					</Row>
					<Row>
						<b>Change image:</b>Double click to discard your image and click
						again to upload your image.
					</Row>
					<Row>
						<b>Delete image:</b>To delete image you must upload image first.
					</Row>
					<Row>
						<b>Edit text</b>Double click to text to edit text.
					</Row>
					<Row>
						<b>Download</b>
						<i className="text-black">
							{" "}
							You must in review mode to download your portfolio so
						</i>
						click the review mode button then click the download button.
					</Row>

					<div></div>
				</Modal.Body>
			</Modal>
		</>
	);
}
