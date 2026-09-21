import { createSignal } from 'solid-js';

const Roster = ({ mains, alts }: any) => {
    const [includeAlts, setIncludeAlts] = createSignal(false);

    return (
        <div>
            <label for="filteralts">
                <span class="mr-4">Incude alts</span>
                <input
                    type="checkbox"
                    checked={includeAlts()}
                    id="filteralts"
                    onChange={(e) => {
                        setIncludeAlts(e.currentTarget.checked)
                    }}
                />
            </label>

            <table>
                <thead>
                    <tr>
                        <th>Character</th>
                        <th>Race</th>
                        <th>Class</th>
                        <th>Level</th>
                        <th>Player</th>
                        <th>Main?</th>
                    </tr>
                </thead>
                {mains.map(({ player, character }: any) => (
                    <tr>
                        <td class={`fg-${character.wowclass.css}`}>{character.name}</td>
                        <td class={`fg-${character.wowclass.css}`}>{character.race}</td>
                        <td class={`fg-${character.wowclass.css}`}>{character.wowclass.name}</td>
                        <td class={`fg-${character.wowclass.css}`}>{character.level}</td>
                        <td class={`fg-${player.rank.toLowerCase()}`}>{player.player}</td>
                        <td class={`fg-${player.rank.toLowerCase()}`}>Main</td>
                    </tr>
                    // <CharacterCard character={character} player={player} />
                ))}
                {includeAlts() && alts.map(({ player, character }: any) => (
                    <tr>
                        <td class={`fg-${character.wowclass.css}`}>{character.name}</td>
                        <td class={`fg-${character.wowclass.css}`}>{character.race}</td>
                        <td class={`fg-${character.wowclass.css}`}>{character.wowclass.name}</td>
                        <td class={`fg-${character.wowclass.css}`}>{character.level}</td>
                        <td class={`fg-${player.rank.toLowerCase()}`}>{player.player}</td>
                        <td class={`fg-${player.rank.toLowerCase()}`}>Alt</td>
                    </tr>
                    // <CharacterCard character={character} player={player} />
                ))}
            </table>
        </div>
    )
}

export default Roster;