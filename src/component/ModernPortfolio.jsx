import { React, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";

import Avatar from "./Avatar";
import Text from "./Text";
import Image from "./Image";
import ImageWithBlock from "./ImageWithBlock";
import Project1 from "./Project1";
import BlankPage from "./BlankPage";
import Gallery from "./Gallery";

export default function ModernPortfolio() {
	const [child, setChild] = useState([{ name: "", id: 10 }]);
	console.log(child);
	return (
		<>
			<Navbar fixed="top" bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#">S1mple Portfolio</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link
							href="#text"
							onClick={() =>
								setChild((prev) => [
									...prev,
									{ name: "text", id: child[child.length - 1].id + 1 },
								])
							}
						>
							Add Text
						</Nav.Link>
						<Nav.Link
							href="#image"
							onClick={() =>
								setChild((prev) => [
									...prev,
									{ name: "image", id: child[child.length - 1].id + 1 },
								])
							}
						>
							Add Image
						</Nav.Link>
						<Nav.Link
							href="#imageblock"
							onClick={() =>
								setChild((prev) => [
									...prev,
									{
										name: "imageWithBlock",
										id: child[child.length - 1].id + 1,
									},
								])
							}
						>
							Add Image with Block
						</Nav.Link>
						<Nav.Link
							href="#project"
							onClick={() =>
								setChild((prev) => [
									...prev,
									{ name: "project", id: child[child.length - 1].id + 1 },
								])
							}
						>
							Add Project
						</Nav.Link>
						<Nav.Link
							href="#gallery"
							onClick={() =>
								setChild((prev) => [
									...prev,
									{ name: "gallery", id: child[child.length - 1].id + 1 },
								])
							}
						>
							Add Gallery
						</Nav.Link>
						<Nav.Link
							href="#blank"
							onClick={() =>
								setChild((prev) => [
									...prev,
									{ name: "blankPage", id: child[child.length - 1].id + 1 },
								])
							}
						>
							Add Blank Page
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>

			<Container className="pt-5 ">
				<Row className="pb-5">
					<Col>
						<Avatar />
					</Col>
					<Col>
						<Text textId={1} placeholder={"Introduce about you"} />
					</Col>
				</Row>
				<Row className="pb-5">
					<Col>
						<Text textId={2} placeholder={"About you"} />
					</Col>
					<Col>
						<ImageWithBlock imageWithBlockId={1} />
					</Col>
				</Row>
				<Row className="pb-5">
					<Col>
						<ImageWithBlock imageWithBlockId={2} />
					</Col>
					<Col>
						<Text textId={3} placeholder={"Work experience"} />
					</Col>
				</Row>
				<Project1 projectId={1} />
				<Gallery galleryId={1} />
				{child.map((value) => {
					switch (value.name) {
						case "text":
							return <Text textId={value.id} key={"textFromAr" + value.id} />;
						case "image":
							return (
								<Image imageId={value.id} key={"imageFromAr" + value.id} />
							);
						case "imageWithBlock":
							return (
								<ImageWithBlock
									imageWithBlockId={value.id}
									key={"imageWithBlockFromAr" + value.id}
								/>
							);
						case "project":
							return (
								<Project1
									projectId={value.id}
									key={"project1FromAr" + value.id}
								/>
							);
						case "gallery":
							return (
								<Gallery
									galleryId={value.id}
									key={"galleryFromAr" + value.id}
								/>
							);
						case "blankPage":
							return (
								<BlankPage
									blankPageId={value.id}
									key={"blankPageFromAr" + value.id}
								/>
							);
					}
				})}
			</Container>
		</>
	);
}
