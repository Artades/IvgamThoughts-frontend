import { NextPage } from "next";
import * as Api from "@/api";
import React from "react";
import { useQuery } from "react-query";
import Header from "@/components/Header";
import MetaHead from "@/meta/MetaHead";
import Posts from "@/components/posts/Posts";
import { PostItemProps } from "../../../api/dto/post.dto";
import Footer from "@/components/Footer";
import { ClipLoader } from "react-spinners";

interface Props {
	items: PostItemProps[];
}

const Thoughts: NextPage<Props> = () => {
	const {
		data: itemsData,
		isLoading,
		error,
	} = useQuery("posts", Api.posts.getAll);

	if (isLoading) {
		return (
			<div className="w-full h-[100vh] flex items-center justify-center">
				<ClipLoader color={"skyblue"} size={100} />
			</div>
		);
	}

	if (error) {
		console.log(error);
		return <div>Error occurred while fetching posts.</div>;
	}

	return (
		<>
			<MetaHead title="Thoughts" />
			<div className="container py-5">
				<Header />
				
				<Posts items={itemsData || []} />
				<Footer />
			</div>
		</>
	);
};

export default Thoughts;
