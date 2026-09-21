import GuildRank from "./GuildRank";
import { Characters } from "./characters";

interface RosterEntry {
    player: string;
    characters?: any[];
    rank: GuildRank;
}

// Chris
// Bella (Luke)
// Gaz

const roster: RosterEntry[] = []

roster.push({
    player: "Amethyx (Dani)",
    characters: [
        Characters.Amethyx.AmethyxVioletshade,

        Characters.Amethyx.AmethriLilacbolt,
        Characters.Amethyx.AmethriaLongcleave,
        Characters.Amethyx.AmethriaVioletblast,
        Characters.Amethyx.AmethystShatterbow,
        Characters.Amethyx.AmethystVioletblade,
        Characters.Amethyx.AmethyxVioletguard,
        Characters.Amethyx.AmethyxVioletlight,
        Characters.Amethyx.AmethyxVioletweave,
    ],
    rank: GuildRank.Officer
})

roster.push({
    player: "Fightmilk (Chris)",
    rank: GuildRank.Officer
})

roster.push({
    player: "Bella (Luke)",
    rank: GuildRank.Officer
})

roster.push({
    player: "Gaz",
    rank: GuildRank.Member
})

export default roster;
