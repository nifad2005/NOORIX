"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Page() {
  const user = useSelector((state: any) => state.user);
  const [dashboardData, setDashboardData] = useState<any>([]);
  const { data: session } = useSession();
  if (!session) return redirect("/login");
  useEffect(() => {
    const fetchDashboardData = async () => {
      const response = await fetch("/api/dashboard");
      const data = await response.json();
      setDashboardData(data.data);
    };
    fetchDashboardData();
  }, []);
  console.log("Data -dashboard ", dashboardData);
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Main Content */}
      <main className="flex-1 p-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome to your Dashboard
          </h1>
          <p className="text-gray-500 mt-2">
            Here you can manage your account, view analytics, and update
            settings.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Activity Section  */}
        <section className="grid  grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white min-w-[400px] rounded-lg shadow p-6 flex flex-col gap-2">
            <div className="text-2xl font-semibold text-gray-800 text-center " >
              Users
            </div>
            <div className="flex gap-8">
              <div>
                <h2 className="text-xl  font-medium mb-2 ">Master </h2>
                <p className="text-2xl font-bold text-blue-600">--</p>
                <span className="text-gray-900 font-medium text-xl w-fit">
                  Total : {dashboardData.masters}
                </span>
              </div>
              <div>
                <h2 className="text-xl font-medium mb-2">Admins </h2>
                <p className="text-2xl font-bold text-blue-600">--</p>
                <span className="text-gray-900 font-medium text-xl w-fit">
                  Total : {dashboardData.admins}
                </span>
              </div>
              <div>
                <h2 className="text-xl font-medium mb-2">Users </h2>
                <p className="text-2xl font-bold text-blue-600">--</p>

                <span className="text-gray-900 font-medium text-xl  ">
                  Total : {dashboardData.users}
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* Users List  */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white w-fit rounded-lg shadow p-6 flex flex-col gap-2">
            <div className="text-2xl font-semibold text-gray-800 text-center">
              Activity
            </div>
            <div className="flex gap-8">
              <div>
                <h2 className="text-xl  font-medium mb-2 ">Experminets </h2>
                <p className="text-2xl font-bold text-blue-600">--</p>
                <span className="text-gray-900 font-medium text-xl">
                  Total : {dashboardData.experiments}
                </span>
              </div>
              <div>
                <h2 className="text-xl font-medium mb-2">Products </h2>
                <p className="text-2xl font-bold text-blue-600">--</p>
                <span className="text-gray-900 font-medium text-xl">
                  Total : {dashboardData.products}
                </span>
              </div>
              <div>
                <h2 className="text-xl font-medium mb-2">Experminets </h2>
                <p className="text-2xl font-bold text-blue-600">--</p>

                <span className="text-gray-900 font-medium text-xl  ">
                  Total : {dashboardData.gallery}
                </span>
              </div>
            </div>
          </div>
        </section>

        </div>
      </main>
    </div>
  );
}
