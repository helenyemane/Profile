"use client";

import Image from "next/image";
import { useState, useMemo, useEffect } from "react";
import Sidebar from "../sharedcomponents/page";
import useFetchUsers from "../hooks/useFetchUsers";

function formatDate(isoString: string | undefined) {
  if (!isoString) return "N/A";
  const date = new Date(isoString);
  return date.toLocaleDateString("en-US", {
    year: "numeric", month: "2-digit", day: "2-digit"
  });
}

const USERS_PER_PAGE = 12;

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { users, loading, error } = useFetchUsers();

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const filteredUsers = useMemo(() => {
    return users.filter(
      (user) =>
        user.org_name &&
        user.org_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);

  const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE);
  const startIndex = (currentPage - 1) * USERS_PER_PAGE;
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + USERS_PER_PAGE);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const resolveImageUrl = (logoPath: string | null | undefined): string | null => {
    if (!logoPath || logoPath === "null") return null;
    if (logoPath.startsWith("http")) return logoPath;
    return logoPath.startsWith("/") ? logoPath : `/${logoPath}`;
  };

  return (
    <div className="flex min-h-screen mt-5 bg-[#fcf6f7] font-[Quicksand,Arial,sans-serif]">
      <Sidebar />
      <div className="flex-1">
        {/* ✅ Slight downward shift: added pt-6 */}
        <main className="pt-8">
          <div className="flex items-center justify-center max-w-4xl mx-auto mb-6 px-4">
            <div className="w-full max-w-2xl">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search organizations by name"
                  className="w-full h-10 px-10 text-sm rounded-full border border-[#8bb2b5] bg-white text-[#00353D] outline-none focus:ring-2 focus:ring-[#8bb2b5] placeholder-[#00353D]/50 font-medium"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8bb2b5]">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center items-center min-h-[200px]">Loading...</div>
          ) : error ? (
            <div className="flex justify-center items-center text-red-500 min-h-[200px]">{error}</div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
                {paginatedUsers.map((user) => (
                  <div
                    key={user.id}
                    className="w-full max-w-[230px] h-[200px] rounded-2xl overflow-hidden bg-white flex flex-col items-center shadow-[0_4px_12px_rgba(0,0,0,0.12)]"
                  >
                    <div className="bg-[#00353D] w-full h-24 relative flex justify-center">
                      <div
                        className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-md"
                        style={{
                          position: "absolute",
                          bottom: "-32px",
                          left: "50%",
                          transform: "translateX(-50%)",
                        }}
                      >
                        {resolveImageUrl(user.logo_image) ? (
                          <Image
                            src={resolveImageUrl(user.logo_image)!}
                            alt="Org Logo"
                            width={80}
                            height={80}
                            className="w-full h-full object-cover rounded-full"
                          />
                        ) : (
                          <span className="text-gray-400 text-xl">?</span>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col items-center pt-6 pb-3 px-3 text-center w-full">
                      <div className="text-[15px] font-semibold text-[#00353D] mb-1 line-clamp-1">
                        {user.org_name || "-"}
                      </div>
                      <div className="text-[#00353D] text-[13px] mb-1">
                        {formatDate(user.created_at)}
                      </div>
                      <div className="text-[#00353D] text-[13px] line-clamp-1 px-1">
                        {user.email}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-4 mt-8 mb-10">
                  <button
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-lg ${
                      currentPage === 1
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-[#00353D] text-white hover:bg-[#002a30]"
                    }`}
                  >
                    Previous
                  </button>
                  <span className="text-[#00353D] font-medium">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-lg ${
                      currentPage === totalPages
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-[#00353D] text-white hover:bg-[#002a30]"
                    }`}
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
}