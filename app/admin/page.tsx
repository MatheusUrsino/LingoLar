
import { isAdmin } from "@/lib/admin";
import { redirect } from "next/navigation";
import dynamic from "next/dynamic"

const App = dynamic(() => import("./app"));

const AdminPage = async () => {

  if(!isAdmin) {
    redirect("/")
  }


  return (
      <App />
  )
}

export default AdminPage
