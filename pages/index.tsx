import Image from "next/image";
import Button from "@/components/ui/Button";
import { useRouter } from "next/router";
import MetaHead from "@/meta/MetaHead";
import imageLoader from "@/imageLoader";
import logoHome from "../public/images/logo1.png";

export default function Home() {
	const router = useRouter();
	return (
		<>
			<MetaHead title={"Welcome"} />
			<div className="container h-full flex items-center justify-center relative">
				<div className="flex items-center flex-col z-10">
					<div className="p-10 border-2 border-dotted border-blue-400 shadow-md rounded-full  flex items-center justify-center mb-5 animate-pulselogo">
						<Image
							src={logoHome}
							unoptimized
							loading="lazy"
							loader={imageLoader}
							quality={75}
							placeholder={"blur"}
							className="h-20 w-20 "
							alt="Logo"
						/>
					</div>
					<h2 className="text-4xl text-white font-bold ">Ivgam Blog</h2>
					<p className="my-7 text-md lg:text-lg text-white opacity-60 text-center max-w-2xl">
						Embark on an exciting journey of self-discovery and intellectual
						exploration with Ivgam Blog. Discover captivating perspectives on
						life and technology.
					</p>
					<nav>
						<ul className="flex items-center justify-center ">
							<Button
								label={"Read Blog"}
								onClick={() => router.push("/home/thoughts")}
							/>
						</ul>
					</nav>
				</div>
				<div
					className="absolute left-1/2 top-0 z-[-20] -translate-x-1/2 blur-3xl xl:-top-6"
					aria-hidden="true"
				>
					<div
						className="aspect-[1155/678] w-[22.1875rem] lg:w-[72.1875rem] bg-gradient-to-tr from-sky-600 to-blue-600 opacity-30"
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
					/>
				</div>
			</div>
		</>
	);
}
