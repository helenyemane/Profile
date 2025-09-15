import Image from 'next/image';

const organizations = [
  { name: "ICRC", logo: "/icrc-logo.png" },
  { name: "ICRC", logo: "/icrc-logo.png" },
  { name: "ICRC", logo: "/icrc-logo.png" },
  { name: "ICRC", logo: "/icrc-logo.png" },
  { name: "ICRC", logo: "/icrc-logo.png" },
  { name: "ICRC", logo: "/icrc-logo.png" }
];

export default function OrganizationsPage() {
  return (
    <main className="flex-1 pt-10 bg-[#fcf6f7] min-h-screen font-[Quicksand,Arial,sans-serif] ml-[400px]">
      {}
      <div className="flex items-center justify-between max-w-5xl mx-auto mb-8 ml-24">
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search organizations by name"
              className="w-[995px] h-12 px-12 rounded-full border border-[#8bb2b5] bg-white text-[#00353D] outline-none focus:ring-2 focus:ring-[#8bb2b5] placeholder-[#00353D]/50 font-medium"
              style={{ fontSize: "1.08rem" }}
            />
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#8bb2b5]">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
          </div>
        </div>
        {}
      </div>

      {}
      <div className="grid grid-cols-3 gap-x-12 gap-y-20 max-w-5xl mx-auto ml-24">
        {organizations.map((org, idx) => (
          <div
            key={idx}
            className="w-[280px] h-[200px] rounded-2xl overflow-hidden bg-white flex flex-col items-center shadow-[0_8px_24px_rgba(0,0,0,0.13)]"
          >
            {}
            <div className="bg-[#00353D] w-full relative flex justify-center pt-17 pb-2 rounded-t-2xl rounded-b-2xl">
              {}
              <div
                className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow"
                style={{ position: "absolute", left: "50%", top: "60%", transform: "translate(-50%, 0)" }}
              >
                <Image src={org.logo} alt="Org Logo" width={48} height={48} />
              </div>
            </div>
            {}
            <div className="flex flex-col items-center py-11 px-4 w-full">
              <div className="text-base font-semibold text-xl text-[#00353D] mb-2">{org.name}</div>
              <button className=" text-2xl border border-[#00353D] text-[#00353D] rounded-md px-5 py-1 text-base font-medium hover:bg-[#f3fbfd] transition">
                View Detail
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}