import Head from 'next/head'


import Button from '@/components/ui/Button'
import { useRouter } from 'next/router';
import MetaHead from '@/meta/MetaHead';



export default function Home() {
  const router = useRouter();
  return (
		<>
			<MetaHead title={"Welcome"} />
			<div className="container h-full flex items-center justify-center">
				<div className="flex items-center flex-col">
					<div className="p-10 border-2 border-dotted border-blue-400 shadow-md rounded-full  flex items-center justify-center mb-5 animate-pulselogo">
						<img src="../images/logo1.png" className="h-20 " alt="Logo" />
					</div>
					<h2 className="text-4xl text-white font-bold ">Ivgam Thoughts</h2>
					<p className="my-7 text-lg text-white opacity-60 text-center ">
						<b>Ivgam Thoughts</b> is a personal blog where Artyom shares his
						perspectives on various topics such as life, love, spirituality, and
						technology. Join him on his journey of self-discovery and
						intellectual exploration for thought-provoking insights.
					</p>
					<nav>
						<ul className="flex items-center justify-center ">
							<Button
								mx={3}
								label={"Login"}
								onClick={() => router.push("/login")}
							/>
							<Button
								mx={2}
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
