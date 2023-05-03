import { User } from "@/api/dto/auth.dto";
import React, { FC, useState, useEffect } from "react";
import * as Api from "@/api";

const TypingEffect: FC<{ text: string }> = ({ text }) => {
	const [typing, setTyping] = useState(true);
	const [index, setIndex] = useState(0);
	

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (index === text.length - 1) {
				setTyping(false);
			}
			setIndex((prevIndex) => prevIndex + 1);
		}, 100);

		return () => clearTimeout(timeout);
	}, [index, text.length]);

	return (
		<p className="text-sky-700 text-2xl font-bold my-4 relative drop-shadow-md transition">
			{text.slice(0, index)}
			{typing && (
				<span className="absolute right-5 top-0 bottom-0 my-auto h-2 w-2 rounded-full bg-sky-700 animate-ping"></span>
			)}
		</p>
	);
};

const GetHello = () => {
	const [userData, setUserData] = useState<User | null>(null);
	const emojis = ["🌵", "⛅", "🥛", "🌻", "🌞", "🌄"];
	const emojiItem = emojis[Math.floor(Math.random() * emojis.length)] as string;

	useEffect(() => {
		const getUserData = async () => {
			const response = await Api.auth.getMe();
			setUserData(response);
		};
		getUserData();
	}, []);

	const text = `What's up, ${userData?.fullName} ${emojiItem}
 `;  
	return <>{userData && <TypingEffect text={text} />}</>;
};

export default GetHello;
