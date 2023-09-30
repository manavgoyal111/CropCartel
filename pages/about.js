import Head from "next/head";

const About = () => {
	return <div className="min-h-screen">
		<Head>
			<meta
				name="description"
				content="CropCartel - About information"
			/>
			<title>About | CropCartel</title>
		</Head>

		<div className="container sm:m-auto p-10 md:w-10/12">
			<h1 className="text-3xl font-semibold mb-8">About Us</h1>
			<p className="mb-8">
				CropCartel is more than just an online marketplace; it is a community-driven initiative to bridge the gap between farmers and consumers. We believe in the power of locally sourced, fresh produce and aim to make it easily accessible to everyone. Our platform connects you directly with local farmers, ensuring that you get the finest quality products while supporting the livelihoods of these hardworking individuals.
			</p>
			<p className="mb-8">
				Whether you are a farmer looking to expand your reach or a consumer seeking nutritious and delicious farm-fresh goods, CropCartel is here to serve you. We are committed to sustainability, transparency, and fostering relationships that benefit all parties involved. Join us in this journey to transform the way we think about food and agriculture.
			</p>
			<p className="mb-8">
				Have questions, suggestions, or just want to say hello? We would love to hear from you! Reach out to us via email at <a href="mailto:contact@CropCartel" className="text-blue-500">contact@CropCartel</a>.
			</p>
		</div>
	</div>;
};

export default About;
