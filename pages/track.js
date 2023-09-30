import Head from "next/head";

const Track = () => {
    return (
        <div className="min-h-screen">
            <Head>
                <meta
                    name="description"
                    content="CropCartel - Track information"
                />
                <title>Track | CropCartel</title>
            </Head>

            <div className="container sm:m-auto p-10 md:w-10/12">
                <h1 className="text-3xl font-semibold mb-4">Track CropCartel</h1>
                <p className="mb-4">
                    Have questions, suggestions, or just want to connect? We would love to hear from you! Reach out to us via email at <a href="mailto:contact@CropCartel" className="text-blue-500">contact@CropCartel</a>.
                </p>
            </div>
        </div>
    );
};

export default Track;
