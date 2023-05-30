import { saveAs } from "file-saver";
import React, { FC, useCallback, useState } from "react";
import Image from "next/image";
import imageLoader from "@/imageLoader";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { MdOpenInNew } from "react-icons/md";

import toast from "react-hot-toast";


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
	const onClickDownload = useCallback(() => {
		fetch(imageUrl)
			.then((response) => response.blob())
			.then((blob) => {
				saveAs(blob, "image.jpg");
			})
			.catch((error) => {
				console.error("Error downloading image:", error);
				toast.error("This image isn't available to download, please try to open it and save.");
				
			});
	}, [imageUrl]);

	const onClickRedirectToWatch = useCallback(() => {
		const link = document.createElement("a");
		link.href = imageUrl;
		link.target = "_blank";
		link.download = `image-${id}.jpg`;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}, [id, imageUrl]);


	
	
	
	const onDoubleClickRedirectToWatch = useCallback(
		(event: React.MouseEvent<HTMLDivElement>) => {
			event.preventDefault();
			onClickRedirectToWatch();
		},
		[onClickRedirectToWatch]
	);

	return (
		<div
			onDoubleClick={onDoubleClickRedirectToWatch}
			
			className={`${
				id % 2 === 0 ? "row-span-2 " : "row-span-1  "
			} group relative max-h-[680px] rounded-xl flex flex-col items-start justify-center cursor-pointer transition duration-400`}
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
				className={`w-full h-full rounded-xl object-cover `}
				alt="Image"
			/>

			<div className="group-hover:bg-gradient-to-t from-slate-900 w-full h-full rounded-md absolute transition  duration-400 flex flex-col items-start justify-between px-3 py-2">
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
					<div className="flex items-center">
						<MdOpenInNew
							className="hidden lg:block hover:opacity-70 cursor-pointer ${} mr-2"
							size={22}
							color="#fff"
							onClick={onClickRedirectToWatch}
						/>
						<AiOutlineCloudDownload
							className="hover:opacity-70 cursor-pointer ${}"
							size={25}
							color="#fff"
							onClick={onClickDownload}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ImageItem;
