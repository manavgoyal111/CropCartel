import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const MyAccount = () => {
	const router = useRouter();

	useEffect(() => {
		if (!localStorage.getItem("token")) {
			router.push("/");
		}
	}, [router.query]);

	return (
		<div>
			<Head>
				<title>My Account | SareeWear</title>
			</Head>
			MyAccount
		</div>
	);
};

export default MyAccount;
