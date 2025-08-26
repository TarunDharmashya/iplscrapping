"use client";
import React, { Suspense, lazy, useState } from "react";
import { useDashboard } from "@/context/DashboardContext";
import Loading from "./Loading";
const MatchCard = lazy(() => import("./MatchCard"));
const Teams = lazy(() => import("./Teams"));
const PointsTable = lazy(() => import("./PointsTable"));
const ScheduleList = lazy(() => import("./ScheduleList"));

const tabs = [
  { key: "live", label: "Live / Upcoming" },
  { key: "points", label: "Points Table" },
  { key: "schedule", label: "Scheduled Matches" },
];

function Home() {
  const { data, loading, error } = useDashboard();
  const [activeTab, setActiveTab] = useState("live");

  if (loading) return <Loading />;
  if (error) return <div className="text-red-500">Error loading dashboard data.</div>;

  return (
    <div className="mt-8">
      <nav className="bg-blue-900 rounded-xl shadow flex items-center gap-8 px-6 py-4 mb-10 sm:gap-4">
        {tabs.map(tab => (
          <button
            key={tab.key}
            className={`text-sm sm:text-lg font-semibold px-1 sm:px-4 py-1 sm:py-2 rounded transition focus:outline-none ${activeTab === tab.key ? "bg-white text-blue-900" : "text-blue-200 hover:text-white"}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </nav>
      <Suspense fallback={<Loading />}>
        {activeTab === "live" && (
          <>
            <div className="flex flex-wrap gap-2 justify-center">
              {data?.liveOrUpcoming?.length ? (
                data.liveOrUpcoming.map((match) => (
                  <MatchCard key={match.matchId} match={match} />
                ))
              ) : (
                <div className="text-gray-400">No live/upcoming matches.</div>
              )}
            </div>
            <div className="w-full mt-8">
              <Teams teams={data?.teams || []} />
            </div>
          </>
        )}
        {activeTab === "points" && (
          <PointsTable rows={data?.points || []} />
        )}
        {activeTab === "schedule" && (
          <ScheduleList items={data?.schedule || []} />
        )}
      </Suspense>
    </div>
  );
}

export default Home;