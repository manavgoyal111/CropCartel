import Link from 'next/link';

const CustomError = ({ statusCode }) => {
	return (
		<div className="container mx-auto text-center mt-20">
			<h1 className="text-6xl font-bold mb-8">
				{statusCode ? `Error ${statusCode}` : 'An error occurred'}
			</h1>

			<p className="text-lg mb-8">
				{statusCode
					? 'Sorry, something went wrong.'
					: 'Sorry, we encountered an error.'}
			</p>

			<Link href="/">
				<a className="text-blue-500 hover:underline">Go back to the homepage</a>
			</Link>
		</div>
	);
};

CustomError.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default CustomError;
