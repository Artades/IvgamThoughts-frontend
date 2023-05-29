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
		<p
			className={`text-white text-2xl font-bold transition duration-500 ${
				!userData?.fullName ? "opacity-0 translate-y-[150px]" : "opacity-100 translate-y-0"
			}`}
		>
			Hello, {"  "}

			<span className="text-blue-500">    {userData?.fullName} 👋 </span>
		</p>
	);
};

export default GetHello;
