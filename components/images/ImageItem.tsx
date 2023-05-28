import { saveAs } from "file-saver";
import React, { FC, useCallback } from "react";
import Image from "next/image";
import imageLoader from "@/imageLoader";
import { AiOutlineCloudDownload } from "react-icons/ai";

interface ImageItemProps {
	id: number;
	imageUrl: string;
	genre: string;
	creator: string;
	createdAt: string;
	isDownloaded: boolean;
}

const ImageItem: FC<ImageItemProps> = ({
	id,
	imageUrl,
	genre,
	creator,
	createdAt,
	isDownloaded,
}) => {


	const dateOfCreation = new Date(createdAt).toLocaleDateString();

	const redirectToDownload = useCallback(() => {
		// Perform the download logic here
		fetch(imageUrl) // Fetch the image URL
			.then((response) => response.blob()) // Convert the response to a Blob
			.then((blob) => {
				saveAs(blob, "image.jpg"); // Save the Blob as a file using FileSaver.js
			})
			.catch((error) => {
				console.error("Error downloading image:", error);
			});
	}, [imageUrl]);

	

	return (
		<div
			className={`${id % 2 === 0 ? 'row-span-2 ' : 'row-span-1 ' } group relative border border-slate-700  rounded-md flex flex-col items-start justify-center cursor-pointer transition duration-400`}
		>
			<Image
				quality={100}
				width={100}
				height={100}
				src={imageUrl}
				blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADA..."
				placeholder="blur"
				unoptimized={true}
				loader={imageLoader}
				loading="lazy"
				className={`w-full h-full rounded-md `}
				alt="Image"
			/>

			<div className="group-hover:bg-gradient-to-t from-slate-900 w-full h-full rounded-md absolute transition duration-400 flex flex-col items-start justify-between px-3 py-2">
				<p className="opacity-0 group-hover:opacity-100 text-white font-bold text-sm transition duration-300">
					{genre}
				</p>
				<div className="w-full opacity-0 group-hover:opacity-100 flex justify-between items-center transition duration-400">
					<div className="flex items-start flex-col">
						<p className="text-md text-white truncate transition">{creator}</p>
						<p className="text-sm text-neutral-500 transition">
							{dateOfCreation}
						</p>
					</div>
					<AiOutlineCloudDownload
						className="hover:opacity-70 cursor-pointer"
						size={25}
						color="#fff"
						onClick={redirectToDownload}
					/>
				</div>
			</div>
		</div>
	);
};

export default ImageItem;
