import { Match } from "@/lib/scrape/types";
import dayjs from "dayjs";

export default function ScheduleList({ items }: { items: Match[] }) {
  const sorted = [...items].sort((a, b) => {
    const dateA = dayjs(a.date).valueOf();
    const dateB = dayjs(b.date).valueOf();
    if (dateA !== dateB) return dateA - dateB;

    const timeA = dayjs(a.time, ["hh:mm A", "HH:mm"]).valueOf();
    const timeB = dayjs(b.time, ["hh:mm A", "HH:mm"]).valueOf();
    return timeA - timeB;
  });

  const grouped: { [date: string]: Match[] } = {};
  sorted.forEach(m => {
    const dayKey = dayjs(m.date).format("ddd, MMM DD YYYY");
    if (!grouped[dayKey]) grouped[dayKey] = [];
    grouped[dayKey].push(m);
  });

  return (
    <div className="max-w-3xl mx-auto">
      {Object.entries(grouped).map(([day, matches]) => (
        <div key={day} className="mb-3">
          <div className="bg-blue-900 text-white font-bold rounded-t-xl px-6 py-3 text-base tracking-wide uppercase">
            {day}
          </div>
          <ul>
            {matches.map(m => (
              <li key={m.matchId} className="bg-[#181818] border border-gray-700 rounded-b-xl px-6 py-5">
                <div className="flex items-center gap-4 mb-2">
                  <img src={`./TeamsLogo/${m.team1}.png`} alt={m.team1Name} className="h-9 w-9 rounded-full border border-gray-400" />
                  <span className="font-extrabold text-xl text-white truncate sm:truncate-none">{m.team1Name}</span>
                  <span className="text-gray-300 font-bold text-lg mx-2">vs</span>
                  <img src={`./TeamsLogo/${m.team2}.png`} alt={m.team2Name} className="h-9 w-9 rounded-full border border-gray-400" />
                  <span className="font-extrabold text-xl text-white truncate sm:truncate-none">{m.team2Name}</span>
                </div>
                <div className="text-lg text-gray-200 font-medium">
                  {m.time} — <span className="font-normal">{m.venue}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}