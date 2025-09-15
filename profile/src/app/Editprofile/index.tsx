import { Camera } from 'lucide-react';
import Image from 'next/image';

export default function EditProfile() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#fcf6f7] font-[Quicksand,Arial,sans-serif]">
      {/* Header */}
      <div className="w-full max-w-4xl mx-auto mt-12">
        <h1 className="text-4xl font-semibold text-[#00353D] mb-2">Edit Profile</h1>
        <div className="w-full h-[6px] bg-[#8bb2b5] rounded" />
      </div>

      {/* Edit Profile Card */}
      <div className="flex flex-col items-center mt-12 w-full">
        {/* Profile Picture */}
        <div className="relative mb-8 flex flex-col items-center">
          <div className="w-[180px] h-[180px] rounded-full border-4 border-[#C3A041] flex items-center justify-center overflow-hidden bg-white mx-auto">
            <Image
              src="/profile.jpg"
              alt="Profile Picture"
              width={180}
              height={180}
              className="object-contain"
            />
          </div>
          {/* Camera icon for editing photo */}
          <button className="absolute bottom-1 right-6 w-10 h-10 bg-white border-2 border-[#8bb2b5] rounded-full flex items-center justify-center shadow-[4px_4px_10px_rgba(0,0,0,0.10)] hover:bg-[#f3fbfd] mb-12 ">
            <Camera className="w-6 h-6 text-[#03363d]" />
          </button>
          {/* Organization Name */}
          <div className="mt-5 text-3xl font-semibold text-[#00353D] tracking-wide ">ICRC</div>
        </div>

        {/* Form Card */}
        <div className="w-[500px] bg-[#f3fbfd] rounded-2xl shadow-[12px_12px_32px_rgba(0,0,0,0.15)] p-10 flex flex-col gap-8 -mt-6">
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xl text-[#00353D] font-medium">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="email"
                className="w-full h-12 px-5 text-lg bg-transparent border-2 border-[#C3A041] rounded-full outline-none focus:ring-2 focus:ring-[#C3A041] placeholder-[504E4E] font-medium"
                autoComplete="off"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-xl text-[#00353D] font-medium">Change Password:</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="password"
                className="w-full h-12 px-5 text-lg bg-transparent border-2 border-[#C3A041] rounded-full outline-none focus:ring-2 focus:ring-[#C3A041] placeholder-[504E4E] font-medium"
                autoComplete="new-password"
              />
            </div>
            {/* Buttons */}
            <div className="flex items-center gap-50 justify-center mt-6">
              <button
                type="button"
                className="px-6 py-1 border-2 border-[#03363d] text-[#03363d] rounded-full text-lg font-medium shadow hover:bg-[#f3fbfd] transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-8 py-1 bg-[#03363d] text-white rounded-full text-lg font-medium shadow-[4px_4px_10px_rgba(0,0,0,0.10)] hover:bg-[#065a60] transition"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}