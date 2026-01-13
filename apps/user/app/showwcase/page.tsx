"use client";

import Profile from "./components/profile";
import ProductGrid, { totalPages } from "./components/productGrid";
import PaginationControl from "./components/pagination";
import { useState, useRef } from "react";

export default function ShowwcasePage() {
  const [page, setPage] = useState(1);
  const topRef = useRef<HTMLDivElement>(null);

  const handlePageChange = (nextPage: number) => {
    setPage(nextPage);

    topRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="w-full min-h-screen flex flex-col gap-8">
      <div ref={topRef} />
      <Profile />


      <div className="flex-1">
        <div className="mt-10 w-full mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <ProductGrid page={page} />
        </div>
      </div>

      <div className="py-10">
        <PaginationControl
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
