
import React, { FC, useState, useEffect } from "react";


const GetHello = () => {
	const [showGreeting, setShowGreeting] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setShowGreeting(true);
		}, 400);
	}, []);

	return (
		<p
			className={`text-white text-xl lg:text-2xl font-bold transition duration-500 ${
				!showGreeting
					? "opacity-0 translate-y-[150px]"
					: "opacity-100 translate-y-0"
			}`}
		>
			Hello, {"  "}
			<span className="text-blue-500"> Reader 👋 </span>
		</p>
	);
};

export default GetHello;
