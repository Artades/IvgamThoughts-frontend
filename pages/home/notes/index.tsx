import MetaHead from "@/meta/MetaHead";
import React from "react";
import { ClockLoader } from "react-spinners";

const Notes = () => {
	return (
		<>
			<MetaHead title={"Notes"} />
			<div className="h-[100vh] w-full flex flex-col items-center justify-center">
				<h1 className="text-3xl text-white font-bold ">
					Developing Mode 👨‍💻
				</h1>
				<p className="text-lg text-neutral-500 font-bold my-10">
					Wait for updates . . .
				</p>
				<ClockLoader color="lightblue" size={120} />
			</div>
		</>
	);
};

export default Notes;
