import Image from "next/image";
import App from "./Profile";
import EditProfile from "./Editprofile";
import OrganizationsPage from "./Organizations";

export default function Home() {
  return (
    <div >
      <App />
     <EditProfile />
       <OrganizationsPage />
    </div>
  );
}
