import Head from "next/head";
import Image from "next/image";

const Home = () => {
	return (
		<>
			<Head>
				<title>CropCartel - Harvest the Best, Delivered Fresh!</title>
				<meta
					name="description"
					content="CropCartel - Wear the Saree."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="flex justify-center w-auto">
				<Image
					src="/home.jpg"
					alt="Home"
					height={600}
					width={1500}
				/>
			</div>

			<section className="text-gray-600 body-font">
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
						<h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
							Harvest the Best, Delivered Fresh! with CropCartel
						</h1>
						<p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
							Explore a world of farm-fresh goodness brought directly to your doorstep.
						</p>
						<p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
							Discover a wide variety of fruits, vegetables, and more, cultivated with
							care by local farmers. Join us in celebrating the bounty of the
							harvest.
						</p>
					</div>
					<div className="flex flex-wrap -m-4">
						<div className="xl:w-1/3 md:w-1/2 p-4">
							<div className="border border-gray-200 p-6 rounded-lg">
								<div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-6 h-6"
										viewBox="0 0 24 24"
									>
										<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
									</svg>
								</div>
								<h2 className="text-lg text-gray-900 font-medium title-font mb-2">
									Fresh from the Fields
								</h2>
								<p className="leading-relaxed text-base">
									Our farmers take pride in delivering the freshest produce from their
									fields straight to your home. Taste the difference with CropCartel.
								</p>
							</div>
						</div>
						<div className="xl:w-1/3 md:w-1/2 p-4">
							<div className="border border-gray-200 p-6 rounded-lg">
								<div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-6 h-6"
										viewBox="0 0 24 24"
									>
										<circle cx="6" cy="6" r="3"></circle>
										<circle cx="6" cy="18" r="3"></circle>
										<path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
									</svg>
								</div>
								<h2 className="text-lg text-gray-900 font-medium title-font mb-2">
									Quality Assurance
								</h2>
								<p className="leading-relaxed text-base">
									We ensure that every product you receive meets our strict quality
									standards. Your satisfaction is our top priority.
								</p>
							</div>
						</div>
						<div className="xl:w-1/3 md:w-1/2 p-4">
							<div className="border border-gray-200 p-6 rounded-lg">
								<div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-6 h-6"
										viewBox="0 0 24 24"
									>
										<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
										<circle cx="12" cy="7" r="4"></circle>
									</svg>
								</div>
								<h2 className="text-lg text-gray-900 font-medium title-font mb-2">
									Sustainable Farming
								</h2>
								<p className="leading-relaxed text-base">
									We support sustainable farming practices that respect the
									environment. Your choice makes a positive impact on our planet.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
