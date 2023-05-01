
import axios from "@/core/axios";
import { PostItemProps } from "./dto/post.dto";


export const getAll = async (): Promise<PostItemProps[]> => {
	return (await axios.get("/posts")).data;
};

export const getPostById = async (id:number):Promise<PostItemProps> => {
	return (await axios.get(`posts/${id}`)).data;
}




