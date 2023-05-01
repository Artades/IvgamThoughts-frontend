import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import * as Api from "@/api";
import { PostItemProps } from "@/api/dto/post.dto";
import { PuffLoader } from "react-spinners";
import Button from "@/components/ui/Button";
import MetaHead from "@/meta/MetaHead";
import { Color, getColorByTheme } from "@/utils/getColorByTheme";


const ThoughtPage = () => {
	// const [themeColor, setThemeColor] = useState<Color>();
	const router = useRouter();
	const [postData, setPostData] = useState<PostItemProps | null>(null);

	const { thought: thoughtId } = router.query;

	useEffect(() => {
		async function getPostData() {
			if (thoughtId) {
				const post = await Api.posts.getPostById(Number(thoughtId));
				setPostData(post);
			}
		}
		getPostData();
	}, [thoughtId]);

	
		
			const color = getColorByTheme(String(postData?.theme));

			
		


	if (!thoughtId || !postData) {
		return (
			<div className="flex h-[100vh] w-full items-center justify-center">
				<PuffLoader color="lightblue" size={100}/>
			</div>
		);
	}
	
	
	return (
		<>
			<MetaHead title={postData?.title} />
			<div className="container">
				<div className="py-10 flex flex-col items-start">
					<Button secondary onClick={() => router.back()} label="Back" />
					<div className="flex items-center my-20">
						<div className={`h-5 w-5 rounded-full  mr-4`} style={{backgroundColor: color}}/>
						<p className="text-2xl text-neutral-500">{postData?.theme}</p>
					</div>

					<h2 className="text-4xl lg:text-6xl text-white  font-bold mb-10">
						{postData?.title}
					</h2>
					<p className="text-lg lg:text-xl text-neutral-300 leading-8">{postData?.body}</p>
				</div>
			</div>
		</>
	);
};

export default ThoughtPage;
