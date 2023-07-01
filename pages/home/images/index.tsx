import Header from "@/components/Header";
import ImageGrid from "@/components/images/ImageGrid";
import MetaHead from "@/meta/MetaHead";

import { GetServerSidePropsContext, NextPage } from "next";
import * as Api from "@/api";
import React from "react";
import { ImageItemProps } from "@/api/dto/image.dto";

interface Props {
	items: ImageItemProps[];
}

const Images: NextPage<Props> = ({ items }) => {
	return (
		<>
			<MetaHead title={"Images"} />
			<div className="container py-5">
				<Header />
				<ImageGrid items={items} />
			</div>
		</>
	);
};
export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {


	try {
		const items = await Api.images.getAll();

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
export default Images;
