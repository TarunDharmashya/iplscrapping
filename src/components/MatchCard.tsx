import { Match } from "@/lib/scrape/types";
import dayjs from "dayjs";

export default function MatchCard({ match }: { match: Match | null }) {
  if (!match) return <div className="p-4 border rounded">No match info.</div>;
  const { team1, team1Name, team2, team2Name, venue, date, time, status } = match;
  return (
    <div className="p-6 rounded-lg border border-gray-600 bg-[#181818] shadow-lg flex flex-col gap-4 min-w-[280px] max-w-[320px]">
      <div className="flex flex-row items-center justify-center w-full gap-10">
        <div className="flex flex-col items-center">
          <img src={`./TeamsLogo/${team1}.png`} alt={team1Name} className="h-16 w-16 mb-2" />
          <div className="font-bold text-lg text-center text-white mt-0" style={{ height: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{team1Name}</div>
        </div>
        <div className="flex flex-col items-center">
          <img src={`./TeamsLogo/versus.png`} alt={"versus"} className="h-16 w-16 mb-2 opacity-80" />
          <div className="font-semibold text-lg text-center text-gray-300 mt-0 display-none sm:flex" style={{ height: '2.5rem', alignItems: 'center', justifyContent: 'center' }}>v/s</div>
        </div>
        <div className="flex flex-col items-center">
          <img src={`./TeamsLogo/${team2}.png`} alt={team2Name} className="h-16 w-16 mb-2" />
          <div className="font-bold text-lg text-center text-white mt-0" style={{ height: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{team2Name}</div>
        </div>
      </div>
      <div className="text-base font-medium text-left w-full text-gray-200 mt-4">
        {dayjs(date).format("DD MMM YY")} {time}
      </div>
      <div className="text-base font-medium text-left w-full text-gray-200">
        {venue}
      </div>
      <div className="text-base font-bold uppercase  tracking-wide text-center text-blue-700 mt-2 letter-spacing-wider">
        {status ? status : "UPCOMING"}
      </div>
    </div>
  );
}