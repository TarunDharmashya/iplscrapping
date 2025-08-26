import { Team } from "./types";
import staticTeams from "./Static/teamsList.json";

export function getTeams (): Team[] {
  return staticTeams;
}