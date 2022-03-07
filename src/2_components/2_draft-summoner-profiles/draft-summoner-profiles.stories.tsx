import React from 'react';
import { ResourceProvider } from '../../1_hooks';
import { Client, isChampionIdValid } from '../../common/league';
import { DraftSummonerProfile } from '../1_draft-summoner-profile';
import { DraftSummonerProfiles, DraftSummonerProfilesProps } from './draft-summoner-profiles';

export default {
    title: '2 Components / 2 Draft Summoner Profiles',
    component: DraftSummonerProfiles
};

const Template = (args: DraftSummonerProfilesProps) => (
    <ResourceProvider>
        <div style={{ width: 284 }}>
            <DraftSummonerProfiles {...args} />
        </div>
    </ResourceProvider>
);

export const Default: {
    args: DraftSummonerProfilesProps
} = Template.bind({})

Default.args = {
    profiles: [
        createProfile('Spirax', Client.Role.Top),
        createProfile('Walterx', Client.Role.Jungle, Client.ChampionId.Ekko),
        createProfile('Bivod4', Client.Role.Middle),
        createProfile('Talkmebb', Client.Role.Bottom, Client.ChampionId.Aatrox),
        createProfile('Fourioseven', Client.Role.Support, Client.ChampionId.Swain),
    ]
}

function createProfile(
    summonerName: string,
    role: Client.Role,
    championId?: Client.ChampionId
): DraftSummonerProfile {
    const gamesPlayed = random(100, 400);
    const roleGamesPlayed = random(50, gamesPlayed);
    const profile: DraftSummonerProfile = {
        summonerName,

        winrate: random(450, 600) / 10.2,
        gamesPlayed: gamesPlayed,

        tier: Client.Tier.Gold,
        division: Client.Division.III,

        role,
        roleProfile: {
            winrate: random(450, 600) / 10.2,
            gamesPlayed: roleGamesPlayed,
            kda: random(10, 100) / 10.5
        }
    };
    if (isChampionIdValid(championId)) {
        profile.championId = championId;
        profile.championProfile = {
            winrate: random(450, 600) / 10.2,
            gamesPlayed: random(20, roleGamesPlayed),
            kda: random(10, 60) / 10.5
        }
    }
    return profile;
}

function random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}