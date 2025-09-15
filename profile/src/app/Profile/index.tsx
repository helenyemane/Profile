import { User, Mail, Award, Edit2 } from 'lucide-react';
import Image from 'next/image';

export default function App() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#fcf6f7] font-[Quicksand,Arial,sans-serif]">
      {/* Profile Header */}
      <div className="w-full max-w-4xl mx-auto mt-12">
        <h1 className="text-4xl font-semibold text-[#00353D] mb-2">Profile</h1>
        <div className="w-full h-[6px] bg-[#8bb2b5] rounded" />
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center mt-12 w-full">
        {/* Profile Picture */}
        <div className="relative mb-8">
          <div className="w-[180px] h-[180px] rounded-full border-4 border-[#C3A041] flex items-center justify-center overflow-hidden bg-white mx-auto">
            <Image
              src="/profile.jpg"
              alt="Profile Picture"
              width={140}
              height={140}
              className="object-contain"
            />
          </div>
          <button className="absolute bottom-2 right-5 w-9 h-9 bg-white border border-[#C3A041] rounded-full flex items-center justify-center shadow hover:bg-[#f3fbfd]">
            <Edit2 className="w-5 h-5 text-[#C3A041]" />
          </button>
        </div>

        {/* Profile Information Card */}
        <div className="w-[620px] bg-[#f3fbfd] rounded-2xl shadow-[12px_12px_32px_rgba(0,0,0,0.15)] p-10 flex flex-col gap-8">
          {/* Organization Name */}
          <div className="flex items-center gap-5">
            <User className="w-10 h-10 text-[#C3A041] mb-4" />
            <div>
              <p className="text-2xl text-[#00353D] font-medium">Organization name:</p>
              <p className="text-2xl text-[#00353D] font-semibold">ICRC</p>
            </div>
          </div>
          {/* Email */}
          <div className="flex items-center gap-5">
            <Mail className="w-8 h-8 text-[#C3A041] mt-4" />
            <div>
              <p className="text-2xl text-[#00353D] font-medium">Email</p>
              <p className="text-2xl text-[#00353D] font-semibold">nai_nairobi@icrc.org.com</p>
            </div>
          </div>
          {/* Achievements */}
          <div className="flex items-center gap-5">
            <Award className="w-10 h-10 text-[#C3A041] mb-4" />
            <div>
              <p className="text-2xl text-[#03363d] font-medium">Achievements</p>
              <p className="text-2xl text-[#00353D] font-semibold">3 Tasks Completed</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}