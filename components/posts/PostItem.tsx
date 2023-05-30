import { PostItemProps } from "@/api/dto/post.dto";
import { getColorByTheme } from "@/utils/getColorByTheme";
import { shortenBody } from "@/utils/shortenBody";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import { IoEllipsisHorizontalCircleOutline } from "react-icons/io5";

const PostItem: FC<PostItemProps> = ({ title, body, theme, id }) => {
	const [hovered, setHovered] = useState(false);

	const color = getColorByTheme(theme);

	const router = useRouter();
	const shortenedBody = shortenBody(body, 60);
	const shortenedTitle = shortenBody(title, 25);

	const handleMouseEnter = () => {
		setHovered(true);
	};

	const handleMouseLeave = () => {
		setHovered(false);
	};

	return (
		<div
			style={{
				transform: hovered ? "scale(0.97)" : "scale(1)",
				boxShadow: hovered ? `0 0 7px ${color}` : "none",
				// opacity: hovered ? 0.8 : 1,
			}}
			onClick={() => router.push(`/home/thoughts/${id}`)}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className={`px-5 py-7 lg:py-10    border border-neutral-700 rounded-xl flex flex-col items-start cursor-pointer transition duration-250`}
		>
			<div
				className={`h-3 w-3 rounded-full`}
				style={{ backgroundColor: color }}
			></div>

			<h2 className="text-xl  text-white my-4 font-extrabold lg:text-2xl">
				{shortenedTitle}
			</h2>
			<p className="text-sm lg:text-md text-neutral-400 ">{shortenedBody}</p>

			<div
				
				className="flex items-center mt-10 hover:opacity-50"
			>
				<p style={{ color }} className="mr-2 text-md lg:text-lg">
					Read
				</p>
				<IoEllipsisHorizontalCircleOutline size={20} color={color} />
			</div>
		</div>
	);
};

export default PostItem;
