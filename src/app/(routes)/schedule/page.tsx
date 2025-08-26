
"use client";
import React, { Suspense, lazy } from "react";
const ScheduleList = lazy(() => import("@/components/ScheduleList"));
import Loading from "@/components/Loading";
import { useDashboard } from "@/context/DashboardContext";

export default function ScheduleMatchesPage() {
  const { data, loading, error } = useDashboard();
  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-white">Scheduled Matches</h1>
      {loading ? (
        <Loading />
      ) : error ? (
        <div className="text-red-500">Error loading schedule.</div>
      ) : (
        <Suspense fallback={<Loading />}>
          <ScheduleList items={data?.schedule || []} />
        </Suspense>
      )}
    </div>
  );
}
