import { PostItemProps } from "@/api/dto/post.dto";
import React, { useState, FC, useEffect } from "react";
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

  return (
		<div className={`grid grid-cols-2 my-10 gap-5 ${showPosts ? 'opacity-100 translate-y-[0px]': 'opacity-10 translate-y-[150px]'} transition duration-300`}>
			{items.map((post: PostItemProps) => {
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
	);
};

export default Posts;
