import Head from "next/head";

const Terms = () => {
	return (
		<>
			<Head>
				<title>Terms and Conditions | CropCartel</title>
				<meta name="description" content="Terms and Conditions of the CropCartel website" />
			</Head>

			<div className="bg-gray-100 min-h-screen py-12">
				<div className="container mx-auto p-4 sm:p-8">
					<h2 className="text-4xl font-bold mb-6">Welcome to CropCartel</h2>
					<p>
						These terms of service outline the rules and regulations for the use of CropCartel
						Website.
					</p>
					<p>CropCartel Website is located at:</p>
					<address className="mb-4">
						India
						<br />
					</address>
					<p className="py-4 font-bold">
						By accessing this website, we assume you accept these terms of service in full. Do not
						continue to use CropCartel Website if you do not accept all of the terms of service
						stated on this page.
					</p>
					<p>
						The following terminology applies to these Terms of Service, Privacy Statement, and
						Disclaimer Notice and any or all Agreements: &quot;Client,&quot; &quot;You,&quot; and
						&quot;Your&quot; refer to you, the person accessing this website and accepting the
						Company&apos;s terms of service. &quot;The Company,&quot; &quot;Ourselves,&quot;
						&quot;We,&quot; &quot;Our,&quot; and &quot;Us&quot; refer to our Company. &quot;Party,&quot;
						&quot;Parties,&quot; or &quot;Us,&quot; refer to both the Client and ourselves or either
						the Client or ourselves. All terms refer to the offer, acceptance, and consideration
						of payment necessary to undertake the process of our assistance to the Client in the
						most appropriate manner, whether by formal meetings of a fixed duration or any other
						means, for the express purpose of meeting the Client&apos;s needs in respect of the
						provision of the Company&apos;s stated services/products, in accordance with and subject
						to, prevailing law of India. Any use of the above terminology or other words in the
						singular, plural, capitalization, and/or he/she or they, are taken as interchangeable
						and therefore as referring to the same.
					</p>
					<h2 className="text-2xl font-semibold my-4">Cookies</h2>
					<p>
						We employ the use of cookies. By using CropCartel website, you consent to the use of
						cookies in accordance with CropCartel Website&apos;s privacy policy.
					</p>
					<p>
						Most of the modern-day interactive websites use cookies to enable us to retrieve user
						details for each visit. Cookies are used in some areas of our site to enable the
						functionality of this area and ease of use for those people visiting. Some of our
						affiliate/advertising partners may also use cookies.
					</p>
					<h2 className="text-2xl font-semibold my-4">License</h2>
					<p>
						Unless otherwise stated, CropCartel Website and/or its licensors own the intellectual
						property rights for all material on CropCartel Website. All intellectual property
						rights are reserved. You may view and/or print pages from cropcartel.com for your own
						personal use subject to restrictions set in these terms of service.
					</p>
					<p>You must not:</p>
					<ol className="py-4 list-decimal list-inside">
						<li>Republish material from cropcartel.com</li>
						<li>Sell, rent, or sub-license material from cropcartel.com</li>
						<li>Reproduce, duplicate, or copy material from cropcartel.com</li>
					</ol>
					<p>Redistribute content from CropCartel Website (unless content is specifically made for redistribution).</p>
				</div>
			</div>
		</>
	);
};

export default Terms;
