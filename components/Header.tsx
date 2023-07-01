import { CiLogout } from "react-icons/ci";
import { useRouter } from "next/router";

const Header = () => {
	const router = useRouter();
	const { pathname } = router;

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
				onClick={() => router.push("/")}
				className="hover:opacity-70 cursor-pointer"
				size={30}
				title="Log out"
				color={"#60AEEB"}
			/>
		</header>
	);
};

export default Header;
