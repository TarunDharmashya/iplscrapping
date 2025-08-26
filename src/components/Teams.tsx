import { Team } from "@/lib/scrape/types";
import React from "react";

interface TeamsProps {
  teams: Team[];
}

const Teams: React.FC<TeamsProps> = ({ teams }) => (
  <div className="max-w-5xl mx-auto mt-8">
    <table className="min-w-full bg-[#181818] rounded-xl shadow-lg text-white">
      <thead className="bg-blue-900 text-white uppercase text-sm font-bold">
        <tr>
          <th className="p-3">S.No</th>
          <th className="p-3">Team Logo</th>
          <th className="p-3">Team Code</th>
          <th className="p-3">Team Name</th>
        </tr>
      </thead>
      <tbody>
        {teams?.length && teams.map((team:Team, idx:number) => (
          <tr key={team.team} className="border-b border-gray-700 last:border-0">
            <td className="p-3 text-center font-semibold">{idx + 1}</td>
            <td className="p-3 text-center">
              <img
                src={`./TeamsLogo/${team.team}.png`}
                alt={team.teamName}
                className="h-10 w-10 rounded-full bg-white mx-auto border border-gray-400"
              />
            </td>
            <td className="p-3 text-center font-bold">{team.team}</td>
            <td className="p-3 text-center font-medium">{team.teamName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Teams;
