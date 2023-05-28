import { PostItemProps } from "@/api/dto/post.dto";
import React, { useState, FC, useEffect } from "react";
import { PuffLoader } from "react-spinners";
import PostItem from "./PostItem";

interface PostsProps {
  items: PostItemProps[];

}

const Posts: FC<PostsProps> = ({ items}) => {
  const [showPosts, setShowPosts] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPosts(true), 0);
    return () => clearTimeout(timer);
  }, []);
	if (typeof items === null) {
		return (
			<div className="flex h-[100vh] w-full items-center justify-center">
				<PuffLoader color={"skyblue"} size={100} />
			</div>
		);
	}
  return (
		<>
			<p className="text-lg my-7 text-neutral-500 ">Today&apos;s thoughts:</p>
			<div
				className={`grid grid-cols-1 lg:grid-cols-2 mb-10 gap-3 ${
					showPosts
						? "opacity-100 translate-y-[0px]"
						: "opacity-10 translate-y-[150px]"
				} transition duration-300`}
			>
				{
				
				items.map((post: PostItemProps) => {
					return (
						<PostItem
							key={post.id}
							title={post.title}
							body={post.body}
							theme={post.theme}
							createdAt={post.createdAt}
							id={post.id}
						/>
					);
				})}
			</div>
		</>
	);
};

export default Posts;
