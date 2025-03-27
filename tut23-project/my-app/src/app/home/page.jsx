"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);

  const extractTitleFromLink = (link) => {
    if (!link) return "No Title";
    const match = link.match(/amazon\.com\/([^\/]+)\/dp\//);
    if (match && match[1]) {
      return decodeURIComponent(match[1]).replace(/[-+]/g, " ");
    }
    return "No Title";
  };

  const fetchDeals = async () => {
    try {
      const response = await fetch("/amazon.json");
      const data = await response.json();
      const rawDeals = data?.category_results?.product_results || [];

      const formattedDeals = rawDeals.map((deal) => ({
        title: deal.title || extractTitleFromLink(deal.link),
        price: deal.price?.raw || "No Price Info",
        image: deal.thumbnail || "",
        url: deal.link || "#",
      }));

      setDeals(formattedDeals);
    } catch (error) {
      console.error("Error loading local deals:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDeals();
  }, []);

  return (
    <div className="min-h-screen bg-blue-100 p-4 sm:p-6">
      {/* Navigation */}
      <nav className="flex flex-col sm:flex-row justify-between items-center py-4 px-4 sm:px-6 bg-white rounded-xl shadow mb-6 gap-4">
        <div className="flex items-center space-x-3">
          <Image
            src="/Dealscape.png"
            alt="DealScape Logo"
            width={40}
            height={40}
            className="rounded-md"
          />
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
            DealScape
          </h1>
        </div>
        <Link
          href="/register"
          className="text-sm bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          Logout
        </Link>
      </nav>

      {/* Header */}
      <h2 className="text-xl sm:text-3xl font-medium text-center text-gray-800 mb-8">
        🔥🔥 Trending Products 🔥🔥
      </h2>

      {/* Deals */}
      {loading ? (
        <p className="text-center text-gray-700">Loading deals...</p>
      ) : deals.length === 0 ? (
        <p className="text-center text-gray-500">No deals found.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {deals.map((deal, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-4 rounded-lg shadow hover:shadow-md transition flex flex-col"
            >
              {deal.image && (
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="h-40 w-full object-contain rounded-md mb-4 bg-gray-50"
                />
              )}
              <h3 className="text-base font-medium text-gray-900 mb-1 line-clamp-2">
                {deal.title}
              </h3>
              <p className="text-lg font-bold text-green-600 mb-3">
                {deal.price}
              </p>
              {deal.url && (
                <a
                  href={deal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block text-sm bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
                >
                  View on Amazon
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
