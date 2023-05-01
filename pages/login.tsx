import React, { useState } from "react";
import { setCookie } from "nookies";
import { LoginFormDTO } from "@/api/dto/auth.dto";
import * as Api from "@/api";
import { toast } from "react-hot-toast";
import Input from "@/components/ui/Input";
import { useRouter } from "next/router";
import MetaHead from "@/meta/MetaHead";
import Button from "@/components/ui/Button";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const onSubmit = async (values: LoginFormDTO) => {
		try {
			const { token } = await Api.auth.login(values);

			toast.success('You successfully Logged In')
			setCookie(null, "_token", token, {
				path: "/",
			});

			location.href = "/home/thoughts";
		} catch (err) {
			console.warn("LoginForm", err);
			toast.error("Error");
		}
	};
	const values = {email, password};
	const router = useRouter();
	
	return (
		<>
			<MetaHead title="Login" />
			<div className="relative h-full w-full bg-[url('../public/images/hero1.png')] bg-no-repeat bg-center bg-fixed bg-cover">
				<div className="bg-black w-full h-full lg:bg-opacity-50">
					<nav className="px-12 py-9 ">
						<img src="../images/logo1.png" alt="Logo" className="h-12 " />
					</nav>
					<div className="flex justify-center">
						<div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
							<h2 className="text-white text-4xl mb-8 font-semibold">
								Sign In
							</h2>
							<div className="flex flex-col gap-4">
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

							<Button my={4} label={"Log In"} onClick={() => onSubmit(values)} fullWidth />

							<p className="text-neutral-500 mt-12">
								First time using Ivgam Thoughts ?
								<br />
								<span
									onClick={() => {
										router.push("/register");
									}}
									className="text-white ml-1 hover:underline cursor-pointer"
								>
									Create an account
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}


