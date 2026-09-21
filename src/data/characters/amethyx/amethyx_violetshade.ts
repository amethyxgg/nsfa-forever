import type { Character } from "../../../wow-forever-data/types/Character";
import { Mage } from "../../../wow-forever-data/data/classes/mage";
import { Race } from "../../../wow-forever-data/enum/Race";

export const AmethyxVioletshade: Character = {
    name: "Amethyx Violetshade", // "Amethyx Violetweave",
    wowclass: Mage,
    race: Race.Troll,
    level: 1,
    ruleset: "normal",
    professions: {
        tailoring: {
            skill: 1,
            cap: 300
        },
        enchanting: {
            skill: 1,
            cap: 300
        }
    }
};

export default AmethyxVioletshade;