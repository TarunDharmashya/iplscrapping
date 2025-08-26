
"use client";
import React, { Suspense, lazy } from "react";
import Loading from "@/components/Loading";
import { useDashboard } from "@/context/DashboardContext";
const PointsTable = lazy(() => import("@/components/PointsTable"));

export default function PointsTablePage() {
  const { data, loading, error } = useDashboard();
  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-white">Points Table</h1>
      {loading ? (
        <Loading />
      ) : error ? (
        <div className="text-red-500">Error loading points table.</div>
      ) : (
        <Suspense fallback={<Loading />}>
          <PointsTable rows={data?.points || []} />
        </Suspense>
      )}
    </div>
  );
}
