import { User } from "@/api/dto/auth.dto";
import React, { FC, useState, useEffect } from "react";
import * as Api from "@/api";



const GetHello = () => {
	const [userData, setUserData] = useState<User | null>(null);

	useEffect(() => {
		const getUserData = async () => {
			const response = await Api.auth.getMe();
			setUserData(response);
		};
		getUserData();
	}, []);

	return (
		<p className="text-white text-2xl font-bold my-4">
			What&apos;s up,
			<span className="text-blue-500 font-bold ">
				{" "}
				{userData?.fullName} 👋{" "}
			</span>
		</p>
	);
};

export default GetHello;
