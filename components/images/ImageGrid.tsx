import { ImageItemProps } from "@/api/dto/image.dto";
import React, { FC, useEffect, useState } from "react";
import ImageItem from "./ImageItem";
import {BsGridFill} from "react-icons/bs";
import {FaSquare} from 'react-icons/fa';

interface ImagesProps {
	items: ImageItemProps[];
}

const ImageGrid: FC<ImagesProps> = ({ items }) => {
	const [showImages, setShowImages] = useState(false);
	const [sorting, setSorting] = useState("grid");

	useEffect(() => {
		const timer = setTimeout(() => setShowImages(true), 0);
		return () => clearTimeout(timer);
	}, []);
	return (
		<>
			<div className="flex items-center justify-between ">
				<p className="text-lg my-7 text-neutral-500 ">Today&apos;s images:</p>
				<div className="flex items-center">
					<BsGridFill
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
						className="hover:opacity-70 cursor-pointer ml-1"
						size={25}
						color={sorting === "column" ? "#60AEEB" : "#335"}
					/>
				</div>
			</div>
			<div
				className={` ${
					sorting === "grid"
						? "grid grid-cols-2 lg:grid-cols-2 mb-10 gap-5"
						: "flex flex-col gap-5"
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
							
						/>
					);
				})}
			</div>
		</>
	);
};

export default ImageGrid;
