import { ImageItemProps } from "@/api/dto/image.dto";
import React, { FC, useEffect, useState } from "react";
import ImageItem from "./ImageItem";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { FaSquare } from "react-icons/fa";
import { PuffLoader } from "react-spinners";
import { AiOutlineInfoCircle } from "react-icons/ai";
import toast from "react-hot-toast";

interface ImagesProps {
	items: ImageItemProps[];
}

const ImageGrid: FC<ImagesProps> = ({ items }) => {
	const [menuShowed, setMenuShowed] = useState(false);
	const [showImages, setShowImages] = useState(false);
	const [sorting, setSorting] = useState("grid");
	
	const getMessage = (() => {
		const examples = [
			"Hello! Click this button to see a piece of advice.",
			"Double-click on the selected image to open it.",
			"Some images are not available for download, so please follow the previous advice.",
			"Thank you!",
		];

		let currentIndex = 0;

		return () => {
			const message = examples[currentIndex];
			currentIndex = (currentIndex + 1) % examples.length; 
			return message;
		};
	})();


	useEffect(() => {
		const timer = setTimeout(() => setShowImages(true), 0);
		return () => clearTimeout(timer);
	}, []);
	if (!items) {
		return (
			<div className="flex h-[100vh] w-full items-center justify-center">
				<PuffLoader color={"skyblue"} size={100} />
			</div>
		);
	}

	return (
		<>
			<div className="flex items-center justify-between ">
				<p className="text-lg my-7 text-neutral-500 ">Popular images:</p>
				<div className="flex items-center">
					<BsFillGrid1X2Fill
						onClick={() => {
							setSorting("grid");
						}}
						className="hover:opacity-70 cursor-pointer"
						size={25}
						color={sorting === "grid" ? "#60AEEB" : "#335"}
					/>
					<FaSquare
						onClick={() => {
							setSorting("column");
						}}
						className="hover:opacity-70 cursor-pointer  mx-2"
						size={25}
						color={sorting === "column" ? "#60AEEB" : "#335"}
					/>
					<AiOutlineInfoCircle
						onClick={() => {
							const message = getMessage();
							return toast(message, {
								icon: "👏",
							});
						}}
						className="hover:opacity-70 cursor-pointer"
						size={25}
						color={menuShowed ? "#80AEEB" : "#60Aeeb"}
					/>
				</div>
			</div>
			<div
				className={`grid ${
					sorting === "grid"
						? " grid-cols-2 lg:grid-cols-3  mb-10 gap-2"
						: "grid cols-1 gap-2"
				}  ${
					showImages
						? "opacity-100 translate-y-[0px]"
						: "opacity-10 translate-y-[150px]"
				} transition duration-300`}
			>
				{items.map((image: ImageItemProps) => {
					return (
						<ImageItem
							key={image.id}
							imageUrl={image.imageUrl}
							genre={image.genre}
							isDownloaded={image.isDownloaded}
							creator={image.creator}
							createdAt={image.createdAt}
							id={image.id}
						/>
					);
				})}
			</div>
		</>
	);
};

export default ImageGrid;
