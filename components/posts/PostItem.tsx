import { PostItemProps } from "@/api/dto/post.dto";
import { getColorByTheme } from "@/utils/getColorByTheme";
import { shortenBody } from "@/utils/shortenBody";
import { useRouter } from "next/router";
import React, { FC } from "react";



const PostItem: FC<PostItemProps> = ({ title, body, theme, id }) => {
	const color = getColorByTheme(theme);

	const router = useRouter();
	const shortenedBody = shortenBody(body, 30);
	const shortenedTitle = shortenBody(title,14);


	return (
		<div onClick={() => router.push(`/home/thoughts/${id}`)} className="px-5 py-7 lg:py-12 bg-zinc-800 shadow-md shadow-neutral-700 rounded-lg  flex flex-col items-start hover:scale-[1.05] cursor-pointer transition hover:shadow-lg hover:opacity-80">
			
				<div className={`h-3 w-3 rounded-full`} style={{backgroundColor: color}}></div>
			
			<h2 className="text-xl text-white my-3 font-bold lg:text-2xl">{shortenedTitle}</h2>
			<p className="text-md text-neutral-300 lg:text-lg">{shortenedBody}</p>
		</div>
	);
};

export default PostItem;
