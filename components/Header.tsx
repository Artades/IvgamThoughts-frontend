import React from "react";
import * as Api from "@/api";

import Button from "@/components/ui/Button";
import toast from "react-hot-toast";
import {CiLogout} from 'react-icons/ci'
import { useRouter } from "next/router";

const Header = () => {
     const onClickLogout = () => {
				
					Api.auth.logout();
					location.href = "/";
			
            }
            const logOutToast = () => {
							toast((t) => (
								<div className="flex flex-col items-start">
									<span className="text-neutral-600 text-md ">
										Are you sure you want to{" "}
										<b className="text-blue-500">Log out</b>
                                        ?
									</span>
									<div className="w-full flex items-center justify-center ">
										<Button  label="Yes" onClick={onClickLogout} />

										<p className="text-md mx-2"> or </p>

										<Button  label="No" onClick={() => toast.dismiss(t.id)} />

									</div>
								</div>
							));
						};

						const router = useRouter();
						const {pathname} = router;
						
	return (
		<header className="w-full py-7 flex items-center justify-between mb-16">
			<img src="../images/logo1.png" alt="Logo" className="h-9" />
			<ul className="flex items-center  text-neutral-700 ">
				<li
					className={`${
						pathname === "/home/thoughts" ? "text-blue-500" : "text-neutral-600"
					}  text-md lg:text-lg mx-3 cursor-pointer hover:opacity-70`}
					onClick={() => router.push("/home/thoughts")}
				>
					Thoughts
				</li>
				|
				<li
					className={`${
						pathname === "/home/images" ? "text-blue-500" : "text-neutral-600"
					} text-md lg:text-lg mx-3 cursor-pointer hover:opacity-70`}
					onClick={() => router.push("/home/images")}
				>
					Images
				</li>
			</ul>
			<CiLogout
				onClick={logOutToast}
				className="hover:opacity-70 cursor-pointer"
				size={30}
				title="Log out"
				color={"#60AEEB"}
			/>
		</header>
	);
};

export default Header;
