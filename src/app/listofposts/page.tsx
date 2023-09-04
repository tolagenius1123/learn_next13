import Image from "next/image";
import React, { use } from "react";

const getPostData = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	return res.json();
};

const getUserData = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	return res.json();
};

const getDogData = async () => {
	const res = await fetch("https://dog.ceo/api/breeds/image/random", {
		cache: "no-store",
		// next: {
		// 	revalidate: 10,
		// },
	});
	return res.json();
};

const ListOfPosts = async () => {
	// const posts = await getPostData();
	const [posts, users, dog] = await Promise.all([
		getPostData(),
		getUserData(),
		getDogData(),
	]);

	return (
		<>
			<div>ListOfPosts</div>
			<Image src={dog.message} alt="dog_image" height={300} width={300} />
			<div>
				{posts.map((post: any) => {
					return <p key={post.id}>{post.title}</p>;
				})}
			</div>
			<div>
				{users.map((post: any) => {
					return <p key={post.id}>{post.username}</p>;
				})}
			</div>
		</>
	);
};

export default ListOfPosts;
