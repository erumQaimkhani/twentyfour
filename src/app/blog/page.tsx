import React from "react";
import Head from "next/head";

const EcommerceBlog: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>E-commerce Insights</title>
        <meta name="description" content="Latest trends and tips in e-commerce." />
      </Head>

      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">E-commerce Insights</h1>
        <p className="text-lg text-gray-600">Stay updated with the latest trends and tips in e-commerce.</p>
      </header>

      <main>
        <article className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600">1. The Rise of Mobile Shopping</h2>
          <p className="text-gray-700">
            With the increasing use of smartphones, mobile shopping has become a key focus for e-commerce businesses.
          </p>
        </article>

        <article className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600">2. Importance of Personalized Experiences</h2>
          <p className="text-gray-700">
            Customers expect tailored recommendations and offers, making personalization a vital strategy.
          </p>
        </article>

        <article className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600">3. Social Commerce is Growing</h2>
          <p className="text-gray-700">
            Platforms like Instagram and TikTok are transforming into shopping hubs, leveraging social engagement.
          </p>
        </article>

        <article className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600">4. Sustainability Matters</h2>
          <p className="text-gray-700">
            Eco-friendly practices are influencing customer choices, prompting businesses to adopt sustainable solutions.
          </p>
        </article>

        <article className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600">5. The Role of AI in E-commerce</h2>
          <p className="text-gray-700">
            Artificial Intelligence enhances customer experiences through chatbots, product recommendations, and more.
          </p>
        </article>

        <article className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600">6. Subscription Models on the Rise</h2>
          <p className="text-gray-700">
            Businesses are increasingly adopting subscription-based models for recurring revenue.
          </p>
        </article>

        <article className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600">7. Voice Commerce is Here</h2>
          <p className="text-gray-700">
            Voice assistants like Alexa and Google Assistant are enabling a new way of shopping online.
          </p>
        </article>

        <article className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600">8. Faster Delivery Expectations</h2>
          <p className="text-gray-700">
            Same-day and next-day delivery options are becoming the standard for competitive e-commerce brands.
          </p>
        </article>

        <article className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600">9. Global Expansion Simplified</h2>
          <p className="text-gray-700">
            Advances in logistics and technology are enabling businesses to sell internationally with ease.
          </p>
        </article>

        <article className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600">10. Data Privacy is a Priority</h2>
          <p className="text-gray-700">
            With regulations like GDPR, businesses must ensure transparent and secure handling of customer data.
          </p>
        </article>
      </main>

      <footer className="text-center mt-8">
        <p className="text-gray-600">&copy; 2024 E-commerce Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default EcommerceBlog;
