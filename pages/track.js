import { useState } from "react";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Track = () => {
    const [orderId, setOrderId] = useState("");
    const [trackingResult, setTrackingResult] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`/api/trackorder?id=${orderId}`);
            const res = await response.json();
            setTrackingResult(res.data.deliveryStatus)
            if (res.success) {
                toast.success("Product Tracked!", {
                    position: "top-left",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setOrderId("")
            } else {
                toast.error(res.error, {
                    position: "top-left",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        } catch (error) {
            console.error("Error fetching tracking information:", error);
        }
    };

    return (
        <div className="min-h-screen">
            <Head>
                <meta
                    name="description"
                    content="CropCartel - Track any order information"
                />
                <title>Track | CropCartel</title>
            </Head>

            <ToastContainer
                position="top-left"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            <div className="container sm:m-auto p-10 md:w-10/12">
                <h1 className="text-3xl font-semibold mb-8">Track any Order</h1>

                <form onSubmit={handleSubmit} className="mb-4">
                    <label className="block mb-2">Enter Order ID:</label>
                    <input
                        type="text"
                        value={orderId}
                        onChange={(e) => setOrderId(e.target.value)}
                        className="border border-gray-300 rounded px-3 py-2 w-full"
                        required
                    />
                    <button
                        type="submit"
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
                    >
                        Track Order
                    </button>
                </form>

                {trackingResult && (
                    <div>
                        <h2 className="text-xl font-semibold mt-8">Tracking Result:</h2>
                        <p>{trackingResult}</p>
                    </div>
                )}

                <p className="mt-8">
                    Have questions, suggestions, or just want to connect? We would love to hear from you! Reach out to us via email at <a href="mailto:contact@CropCartel" className="text-blue-500">contact@CropCartel</a>.
                </p>
            </div>
        </div>
    );
};

export default Track;
