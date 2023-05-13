import Image from 'next/image';


import Button from '@/components/ui/Button'
import { useRouter } from 'next/router';
import MetaHead from '@/meta/MetaHead';
import imageLoader from '@/imageLoader';
import logoHome from "../public/images/logo1.png"



export default function Home() {
  const router = useRouter();
  return (
		<>
			<MetaHead title={"Welcome"} />
			<div className="container h-full flex items-center justify-center">
				<div className="flex items-center flex-col">
					<div className="p-10 border-2 border-dotted border-blue-400 shadow-md rounded-full  flex items-center justify-center mb-5 animate-pulselogo">
						<Image src={logoHome} unoptimized loading='lazy' loader={imageLoader} quality={100} placeholder={"blur"} className="h-20 w-20 " alt="Logo" />
					</div>
					<h2 className="text-4xl text-white font-bold ">Ivgam Thoughts</h2>
					<p className="my-7 text-lg text-white opacity-60 text-center ">
						<b>Ivgam Thoughts</b> is a personal blog where Artyom shares his
						perspectives on various topics such as life, love, spirituality, and
						technology. Join him on his journey of self-discovery and
						intellectual exploration for thought-provoking insights.
					</p>
					<nav>
						<ul className="flex items-center justify-center gap-2">
							<Button
								
								label={"Login"}
								onClick={() => router.push("/login")}
							/>
							<Button
								
								label={"Sign Up"}
								secondary
								onClick={() => router.push("/register")}
							/>
						</ul>
					</nav>
				</div>
			</div>
		</>
	);
}
