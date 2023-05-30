import React, { useState } from "react";
import * as Api from "@/api";
import { setCookie } from "nookies";
import { RegisterFormDTO } from "@/api/dto/auth.dto";
import toast from "react-hot-toast";
import Input from "@/components/ui/Input";
import { useRouter } from "next/router";
import MetaHead from "@/meta/MetaHead";
import Button from "@/components/ui/Button";
import imageLoader from "@/imageLoader";
import Image from "next/image";
import logo from "../public/images/logo1.png";



export default function Register() {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onSubmit = async (values: RegisterFormDTO) => {
		try {
			if (values.password.trim().length >= 8) {
				const { token } = await Api.auth.register(values);

				toast.success("Congratulations!");

				setCookie(null, "_token", token, {
					path: "/",
				});

				location.href = "/home/thoughts";
			}
			else {
				toast.error("Your password has to be longer then 8 symbols");
				return;
			}
		} catch (err) {
			console.warn(err);

			toast.error("Something went wrong...");
		}
	};
    const values = {fullName, email, password};
	const router = useRouter();
	return (
		<>
			<MetaHead title="Register" />
			<div className="relative h-full w-full bg-[url('../public/images/ocean.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
				<div className="bg-black w-full h-full lg:bg-opacity-50">
					<nav className="px-12 py-9 ">
						<Image
							src={logo}
							unoptimized
							loading="lazy"
							loader={imageLoader}
							quality={100}
							placeholder={"blur"}
							className="h-12 w-12"
							alt="Logo"
						/>
					</nav>
					<div className="flex justify-center">
						<div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
							<h2 className="text-white text-4xl mb-8 font-semibold">
								Sign Up
							</h2>
							<div className="flex flex-col gap-4">
								<Input
									id="fullname"
									label="Name"
									onChange={(e: any) => {
										setFullName(e.target.value);
									}}
									type="text"
									value={fullName}
								/>
								<Input
									id="email"
									label="Email"
									onChange={(e: any) => {
										setEmail(e.target.value);
									}}
									type="email"
									value={email}
								/>

								<Input
									id="password"
									label="Password"
									onChange={(e: any) => {
										setPassword(e.target.value);
									}}
									type="password"
									value={password}
								/>
							</div>
							<Button
								
								label={"Sign Up"}
								onClick={() => onSubmit(values)}
								fullWidth
							/>

							<p className="text-neutral-500 mt-12">
								Already have an account?
								<span
									onClick={() => {
										router.push("/login");
									}}
									className="text-white ml-1 hover:underline cursor-pointer"
								>
									Log In
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
