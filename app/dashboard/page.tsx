"use client"
import {signIn, signOut, useSession} from "next-auth/react";
import { redirect } from "next/navigation";


export default function Page() {
  const {data :session} =  useSession();
  console.log(session?.user);
  if(!session)return redirect('/login')
  return  (
    <div className="min-h-screen flex bg-gray-100">

      {/* Main Content */}
      <main className="flex-1 p-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome to your Dashboard</h1>
          <p className="text-gray-500 mt-2">Here you can manage your account, view analytics, and update settings.</p>
        </header>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-2">Quick Stats</h2>
            <p className="text-2xl font-bold text-blue-600">--</p>
            <span className="text-gray-400">Coming soon</span>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-2">Recent Activity</h2>
            <ul className="text-gray-500 text-sm space-y-1">
              <li>No recent activity.</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-2">Notifications</h2>
            <ul className="text-gray-500 text-sm space-y-1">
              <li>No new notifications.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}