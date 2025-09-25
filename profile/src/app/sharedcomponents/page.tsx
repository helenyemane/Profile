// "use client";
// import { useState } from "react";
// import { useRouter, usePathname } from "next/navigation";
// import { RiSidebarFoldLine } from "react-icons/ri";
// import { HiSquares2X2 } from "react-icons/hi2";
// import { LuClock3, LuClipboardList, LuUser, LuLogOut } from "react-icons/lu";
// interface SidebarItemProps {
//   icon: React.ReactNode;
//   label: string;
//   isOpen: boolean;
//   active?: boolean;
//   path?: string;
//   onClick?: () => void;
// }
// const SidebarItem = ({ icon, label, isOpen, active, onClick }: SidebarItemProps) => {
//   return (
//     <div
//       className={`flex items-center gap-6 px-2 rounded-2xl cursor-pointer transition-colors
//       ${active ? "bg-active-gradient text-teal-900 font-semibold" : "hover:bg-teal-800"}`}
//       onClick={onClick}
//     >
//       <div className="flex justify-center w-8">{icon}</div>
//       <span
//         className={`text-md transition-opacity duration-150 whitespace-nowrap
//           ${isOpen ? "opacity-100" : "opacity-0 hidden"}`}
//       >
//         {label}
//       </span>
//     </div>
//   );
// };
// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const router = useRouter();
//   const pathname = usePathname();
//   const handleNavigation = (path: string) => {
//     router.push(path);
//   };
//   const handleLogout = () => {
//     localStorage.removeItem("authToken");
//     router.push("/login");
//   };
//   return (
//     <div
//       className={`h-screen rounded-4xl bg-teal-900 text-white flex flex-col justify-between transition-all duration-300
//       ${isOpen ? "w-56 py-6 px-4" : "w-16 px-2 py-6"}`}
//     >
//       {/* Top section */}
//       <div>
//         <div className="flex justify-between mb-20">
//           <button
//             className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-teal-800 transition"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <RiSidebarFoldLine size={40} />
//           </button>
//           <div
//             className={`transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
//           >
//             <div
//               className={`w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-teal-900 font-bold text-lg
//               ${isOpen ? "" : "hidden"}`}
//             >
//               Logo
//             </div>
//           </div>
//         </div>
//         {/* Menu Items */}
//         <nav className="flex flex-col gap-10">
//           <SidebarItem
//             icon={<HiSquares2X2 size={40} />}
//             label="Dashboard"
//             isOpen={isOpen}
//             active={pathname === "/editprofile" || pathname === "/"}
//             path="/editprofile"
//             onClick={() => handleNavigation("editprofile")}
//           />
//           <SidebarItem
//             icon={<LuClock3 size={40} />}
//             label="Task Tracking"
//             isOpen={isOpen}
//             active={pathname === "/task-tracking"}
//             path="/task-tracking"
//             onClick={() => handleNavigation("/task-tracking")}
//           />
//           <SidebarItem
//             icon={<LuClipboardList size={40} />}
//             label="Tasks"
//             isOpen={isOpen}
//             active={pathname === "/tasks"}
//             path="/tasks"
//             onClick={() => handleNavigation("/tasks")}
//           />
//           <SidebarItem
//             icon={<LuUser size={40} />}
//             label="Profile"
//             isOpen={isOpen}
//             active={pathname === "/profile"}
//             path="/profile"
//             onClick={() => handleNavigation("/profile")}
//           />
//         </nav>
//       </div>
//       {/* Bottom Logout */}
//       <div className="mb-4">
//         <SidebarItem
//           icon={<LuLogOut size={70} />}
//           label="Logout"
//           isOpen={isOpen}
//           active={pathname === "/login"}
//           onClick={handleLogout}
//         />
//       </div>
//     </div>
//   );
// };
// export default Sidebar;



"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { RiSidebarFoldLine } from "react-icons/ri";
import { HiSquares2X2 } from "react-icons/hi2";
import { LuClock3, LuClipboardList, LuUser, LuLogOut } from "react-icons/lu";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  isOpen: boolean;
  active?: boolean;
  path?: string;
  onClick?: () => void;
}

const SidebarItem = ({ icon, label, isOpen, active, onClick }: SidebarItemProps) => {
  return (
    <div
      className={`flex items-center gap-6 px-2 rounded-2xl cursor-pointer transition-colors
      ${active ? "bg-active-gradient text-teal-900 font-semibold" : "hover:bg-teal-800"}`}
      onClick={onClick}
    >
      <div className="flex justify-center w-8">{icon}</div>
      <span
        className={`text-md transition-opacity duration-150 whitespace-nowrap
          ${isOpen ? "opacity-100" : "opacity-0 hidden"}`}
      >
        {label}
      </span>
    </div>
  );
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("Token"); // Remove both, just in case
    router.push("/login");
  };

  return (
    <div
      className={`h-screen rounded-4xl bg-teal-900 text-white flex flex-col justify-between transition-all duration-300
      ${isOpen ? "w-56 py-6 px-4" : "w-16 px-2 py-6"}`}
    >
      {/* Top section */}
      <div>
        <div className="flex justify-between mb-20">
          <button
            className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-teal-800 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            <RiSidebarFoldLine size={40} />
          </button>
          <div
            className={`transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
          >
            <div
              className={`w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-teal-900 font-bold text-lg
              ${isOpen ? "" : "hidden"}`}
            >
              Logo
            </div>
          </div>
        </div>
        {/* Menu Items */}
        <nav className="flex flex-col gap-10">
          <SidebarItem
            icon={<HiSquares2X2 size={40} />}
            label="Dashboard"
            isOpen={isOpen}
            active={pathname === "/editprofile" || pathname === "/"}
            path="/editprofile"
            onClick={() => handleNavigation("/editprofile")}
          />
          <SidebarItem
            icon={<LuClock3 size={40} />}
            label="Task Tracking"
            isOpen={isOpen}
            active={pathname === "/task-tracking"}
            path="/task-tracking"
            onClick={() => handleNavigation("/task-tracking")}
          />
          <SidebarItem
            icon={<LuClipboardList size={40} />}
            label="Tasks"
            isOpen={isOpen}
            active={pathname === "/tasks"}
            path="/tasks"
            onClick={() => handleNavigation("/tasks")}
          />
          <SidebarItem
            icon={<LuUser size={40} />}
            label="Profile"
            isOpen={isOpen}
            active={pathname === "/profile"}
            path="/profile"
            onClick={() => handleNavigation("/profile")}
          />
        </nav>
      </div>
      {/* Bottom Logout */}
      <div className="mb-4">
        <SidebarItem
          icon={<LuLogOut size={40} />}
          label="Logout"
          isOpen={isOpen}
          active={pathname === "/login"}
          onClick={handleLogout}
        />
      </div>
    </div>
  );
};

export default Sidebar;