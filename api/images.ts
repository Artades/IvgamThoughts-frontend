import axios from "@/core/axios";
import { ImageItemProps } from "./dto/image.dto";


export const getAll = async (): Promise<ImageItemProps[]> => {
	return (await axios.get("/images")).data;
};

export const getImageById = async (id: number): Promise<ImageItemProps> => {
	return (await axios.get(`images/${id}`)).data;
};
