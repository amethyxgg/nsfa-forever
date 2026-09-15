import GuildRank from "./GuildRank";

interface RosterEntry {
    player: string;
    characters?: any[];
    rank: GuildRank;
}

// AmethyxGG
import AmethriaVioletweave from "./characters/amethria_violetweave";
// Chris
// Luke
// Gaz

const roster: RosterEntry[] = []

roster.push({
    player: "Amethyx (Dani)",
    characters: [
        AmethriaVioletweave
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
