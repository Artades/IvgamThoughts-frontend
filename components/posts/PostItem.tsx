import { PostItemProps } from "@/api/dto/post.dto";
import { getColorByTheme } from "@/utils/getColorByTheme";
import { shortenBody } from "@/utils/shortenBody";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { IoEllipsisHorizontalCircleOutline } from "react-icons/io5";

const PostItem: FC<PostItemProps> = ({ title, body, theme, id }) => {
	const color = getColorByTheme(theme);

	const router = useRouter();
	const shortenedBody = shortenBody(body, 30);
	const shortenedTitle = shortenBody(title, 14);



	return (
		<div
			onClick={() => router.push(`/home/thoughts/${id}`)}
			className={`px-5 py-7 lg:py-12 bg-zinc-800 rounded-lg flex flex-col items-start hover:scale-[1.02] hover:drop-shadow-xl cursor-pointer transition hover:shadow-lg hover:opacity-80`}
		>
			<div
				className={`h-4 w-4 rounded-full`}
				style={{ backgroundColor: color }}
			></div>

			<h2 className="text-xl text-white my-3 font-bold lg:text-2xl">
				{shortenedTitle}
			</h2>
			<p className="text-md text-neutral-300 lg:text-lg">{shortenedBody}</p>

			<div className="flex items-center mt-10 hover:opacity-50">
				<p style={{ color }} className="mr-2 text-lg ">
					Read More
				</p>
				<IoEllipsisHorizontalCircleOutline size={20} color={color} />
			</div>
		</div>
	);
};

export default PostItem;
