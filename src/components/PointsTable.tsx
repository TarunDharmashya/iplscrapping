import { PointsTableEntry } from "@/lib/scrape/types";

export default function PointsTable({ rows }: { rows: PointsTableEntry[] }) {
  return (
    <div className="overflow-x-auto bg-[#181818] rounded-xl shadow-lg p-4 border border-gray-700 max-w-5xl mx-auto">
      <table className="min-w-full text-sm text-gray-200">
        <thead className="border-b border-gray-600">
          <tr className="uppercase text-xs font-bold tracking-wider text-gray-300 bg-blue-900">
            <th className="p-3">POS</th>
            <th className="p-3">TEAM</th>
            <th className="p-3">M</th>
            <th className="p-3">W</th>
            <th className="p-3">L</th>
            <th className="p-3">NR</th>
            <th className="p-3">NRR</th>
            <th className="p-3">FOR</th>
            <th className="p-3">AGAINST</th>
            <th className="p-3">PTS</th>
            <th className="p-3">RECENT FORM</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r: PointsTableEntry, idx) => (
            <tr
              key={r.team}
              className="border-b border-gray-700 last:border-0 hover:bg-[#232323] transition-colors duration-150"
            >
              <td className="p-3 text-center font-semibold">{r.position}</td>
              <td className="p-3 font-semibold flex items-center gap-2">
                <img
                  src={`./TeamsLogo/${r.team}.png`}
                  alt={r.team}
                  className="h-7 w-7 rounded-full bg-white p-1 border border-gray-400"
                />
                <span className="ml-1">{r.team}</span>
              </td>
              <td className="p-3 text-center">{r.matches}</td>
              <td className="p-3 text-center">{r.wins}</td>
              <td className="p-3 text-center">{r.losses}</td>
              <td className="p-3 text-center">{r.nr.toFixed(2)}</td>
              <td className="p-3 text-center">{r.nrr.toFixed(2)}</td>
              <td className="p-3 text-center">{r.for}</td>
              <td className="p-3 text-center">{r.against}</td>
              <td className="p-3 text-center font-bold">{r.points}</td>
              <td className="p-3 text-center whitespace-nowrap">
                {r.recentForm.map((f, i) => (
                  <span
                    key={i}
                    className={`inline-block w-4 sm:w-6 text-center font-bold ${f === 'W' ? 'text-green-400' : 'text-red-400'}`}
                  >
                    {f}
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}