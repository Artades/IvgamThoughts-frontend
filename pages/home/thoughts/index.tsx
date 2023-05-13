import GetHello from "@/components/GetHello";
import { checkAuth } from "@/utils/checkAuth";
import { GetServerSidePropsContext, NextPage } from "next";
import * as Api from "@/api";
import React from "react";
import Header from "@/components/Header";
import MetaHead from "@/meta/MetaHead";
import Posts from "@/components/posts/Posts";
import { PostItemProps } from "../../../api/dto/post.dto";
import Footer from "@/components/Footer";

interface Props {
	items: PostItemProps[];
}


const Thoughts: NextPage<Props> = ({ items }) => {


	return (
		<>
			<MetaHead title="Home / Thoughts" />
			<div className="container py-5">
				<Header />
				<GetHello />
				<Posts   items={items} />
				<Footer />
			</div>
		</>
	);
};
export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
	const authProps = await checkAuth(ctx);

	if ("redirect" in authProps) {
		return authProps;
	}

	try {
		const items = await Api.posts.getAll();

		return {
			props: {
				items,
			},
		};
	} catch (err) {
		console.log(err);
		return {
			props: { items: [] },
		};
	}
};
export default Thoughts;
