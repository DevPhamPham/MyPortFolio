import { React, useState, createContext } from "react";
import ReactDOM from "react-dom/client";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import $ from "jquery";


import textIcon from "../images/icon/add-text.png";
import imageIcon from "../images/icon/add-image.png";
import imageWithBlockIcon from "../images/icon/image-with-block.png";
import galleryIcon from "../images/icon/gallery.png";
import projectIcon from "../images/icon/project.png";
import blankIcon from "../images/icon/add-blank.png";

import "../style/ModernPortfolio.css";

import Avatar from "./Avatar";
import Text from "./Text";
import Image from "./Image";
import ImageWithBlock from "./ImageWithBlock";
import Project1 from "./Project1";
import BlankPage from "./BlankPage";
import Gallery from "./Gallery";
import ModalBox from "./Modal";
import ThreeScene from "../threejs/main";


const ReviewContext = createContext();
function downloadBlob(blob, filename) {
	const objectUrl = URL.createObjectURL(blob);

	const link = document.createElement("a");
	link.href = objectUrl;
	link.download = filename;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);

	setTimeout(() => URL.revokeObjectURL(objectUrl), 5000);
}

export default function ModernPortfolio() {
	const [child, setChild] = useState([{ name: "", id: 10 }]);
	const [reviewMode, setReviewMode] = useState(false);
	const [homepage, setHomePage] = useState(true);
	localStorage.setItem("loadThree",true)
	if(homepage) {
		return <>
		<div className="experience">
		  <canvas className="experience-canvas">
			<ThreeScene  />
		  </canvas>
		</div>
		<button onClick={()=> setHomePage(false)} id="chuyentrang">Create Your Portfolio</button>
	  </>
	} else {
		return <ReviewContext.Provider value={reviewMode}>
		<Container>
			<div className="pt-4">
				{!reviewMode ? (
					<Navbar fixed="top" bg="dark" variant="dark">
						<Container>
							<Navbar.Brand href="#" onClick={()=> setHomePage(true)}>S1mple Portfolio</Navbar.Brand>
							<Nav className="me-auto">
								<Nav.Item>
									<a href="#anchorBot">
										<img
											src={textIcon}
											width={30}
											onClick={() =>
												setChild((prev) => [
													...prev,
													{
														name: "text",
														id: child[child.length - 1].id + 1,
													},
												])
											}
											alt=""
										/>
									</a>
								</Nav.Item>
								<Nav.Item>
									<a href="#anchorBot">
										<img
											src={imageIcon}
											width={35}
											onClick={() =>
												setChild((prev) => [
													...prev,
													{
														name: "image",
														id: child[child.length - 1].id + 1,
													},
												])
											}
											alt=""
										/>
									</a>
								</Nav.Item>
								<Nav.Item>
									<a href="#anchorBot">
										<img
											src={imageWithBlockIcon}
											width={35}
											onClick={() =>
												setChild((prev) => [
													...prev,
													{
														name: "imageWithBlock",
														id: child[child.length - 1].id + 1,
													},
												])
											}
											alt=""
										/>
									</a>
								</Nav.Item>
								<Nav.Item>
									<a href="#anchorBot">
										<img
											src={projectIcon}
											width={40}
											onClick={() =>
												setChild((prev) => [
													...prev,
													{
														name: "project",
														id: child[child.length - 1].id + 1,
													},
												])
											}
											alt=""
										/>
									</a>
								</Nav.Item>
								<Nav.Item>
									<a href="#anchorBot">
										<img
											src={galleryIcon}
											width={35}
											onClick={() =>
												setChild((prev) => [
													...prev,
													{
														name: "gallery",
														id: child[child.length - 1].id + 1,
													},
												])
											}
											alt=""
										/>
									</a>
								</Nav.Item>
								<Nav.Item>
									<a href="#anchorBot">
										<img
											src={blankIcon}
											width={35}
											onClick={() =>
												setChild((prev) => [
													...prev,
													{
														name: "blankPage",
														id: child[child.length - 1].id + 1,
													},
												])
											}
											alt=""
										/>
									</a>
								</Nav.Item>
							</Nav>
							<Nav className="justify-content-end" activeKey="/home">
								<Nav.Item>
									<ModalBox />
								</Nav.Item>
								<Nav.Item
									className="text-white"
									onClick={() => {
										setReviewMode(true);
										if (!reviewMode) {
											$("#portfolio1").css(
												"transform",
												"scale(0.7, 0.7) translate(5%, -20%)"
											);
											$("input").prop("disabled", true);
										}
									}}
									id="reviewButton"
								>
									Preview
								</Nav.Item>
							</Nav>
						</Container>
					</Navbar>
				) : (
					<>
						<div
							className="closeReview"
							onClick={() => {
								setReviewMode(false);
								$("#portfolio1").css(
									"transform",
									"scale(1, 1) translate(0, 0)"
								);
								$("input").prop("disabled", false);
							}}
						>
							Close
						</div>
						<div
							className="download"
							onClick={() => {
								setReviewMode(false);
								$("#portfolio1").css(
									"transform",
									"scale(1, 1) translate(0, 0)"
								);
								$(".download").css("display", "none");
								$(".closeReview").css("display", "none");

								$("input").prop("disabled", false);
								const blob = new Blob([document.documentElement.innerHTML], {
									type: "application/html",
								});
								downloadBlob(blob, `MyPortfolio.html`);
								$(".download").css("display", "block");
								$(".closeReview").css("display", "block");
							}}
						>
							Download
						</div>
					</>
				)}
				<Container className="pt-5" id="portfolio1">
					<Row className="pb-5">
						<Col>
							<Avatar reviewMode={reviewMode} />
						</Col>
						<Col>
							<Text
								textId={1}
								placeholder={"Introduce about you"}
								reviewMode={reviewMode}
							/>
						</Col>
					</Row>
					<Row className="pb-5">
						<Col>
							<Text
								textId={2}
								placeholder={"About you"}
								reviewMode={reviewMode}
							/>
						</Col>
						<Col>
							<ImageWithBlock imageWithBlockId={1} reviewMode={reviewMode} />
						</Col>
					</Row>
					<Row className="pb-5">
						<Col>
							<ImageWithBlock imageWithBlockId={2} reviewMode={reviewMode} />
						</Col>
						<Col>
							<Text
								textId={3}
								placeholder={"Work experience"}
								reviewMode={reviewMode}
							/>
						</Col>
					</Row>
					<Project1 projectId={1} reviewMode={reviewMode} />
					<Gallery galleryId={1} reviewMode={reviewMode} />
					{child.map((value) => {
						switch (value.name) {
							case "text":
								return (
									<Text
										reviewMode={reviewMode}
										textId={value.id}
										key={"textFromAr" + value.id}
									/>
								);
							case "image":
								return (
									<Image
										reviewMode={reviewMode}
										imageId={value.id}
										key={"imageFromAr" + value.id}
									/>
								);
							case "imageWithBlock":
								return (
									<ImageWithBlock
										imageWithBlockId={value.id}
										key={"imageWithBlockFromAr" + value.id}
										reviewMode={reviewMode}
									/>
								);
							case "project":
								return (
									<Project1
										projectId={value.id}
										key={"project1FromAr" + value.id}
										reviewMode={reviewMode}
									/>
								);
							case "gallery":
								return (
									<Gallery
										galleryId={value.id}
										key={"galleryFromAr" + value.id}
										reviewMode={reviewMode}
									/>
								);
							case "blankPage":
								return (
									<BlankPage
										blankPageId={value.id}
										key={"blankPageFromAr" + value.id}
										reviewMode={reviewMode}
									/>
								);
						}
					})}
					<div id="anchorBot"></div>
				</Container>
			</div>
		</Container>
	</ReviewContext.Provider>
	}
}
