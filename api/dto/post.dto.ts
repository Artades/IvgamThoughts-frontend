import React from "react";

export interface PostItemProps {
    id: number;
	title: string;
	body: React.ReactNode;
    theme: string;
    createdAt: string;
}
