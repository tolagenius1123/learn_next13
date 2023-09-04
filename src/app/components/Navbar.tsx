import Link from "next/link";

const Navbar = () => {
	return (
		<div>
			<Link href="/">Home</Link>
			<Link href="/about">About</Link>
			<Link href="/about/:id">About with Id</Link>
			<Link href="/about/history">About with history</Link>
			<Link href="/about/us">About with us</Link>
			<Link href="/listofposts">Posts</Link>
		</div>
	);
};

export default Navbar;
