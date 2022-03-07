import React from 'react';
import { ResourceProvider } from '../../1_hooks';
import { Client } from '../../common/league';
import { DraftSummonerProfile, DraftSummonerProfileProps } from './draft-summoner-profile';

export default {
    title: '2 Components / 1 Draft Summoner Profile',
    component: DraftSummonerProfile
};


const Template = (args: DraftSummonerProfileProps) => (
    <ResourceProvider>
        <div style={{ width: 268 }}>
            <DraftSummonerProfile {...args} />
        </div>
    </ResourceProvider>
);


export const NoDataNoRoleNoChampion: {
    args: DraftSummonerProfileProps
} = Template.bind({});

NoDataNoRoleNoChampion.args = {
    profile: {
        summonerName: 'Spirax'
    }
};


export const NoDataRoleNoChampion: {
    args: DraftSummonerProfileProps
} = Template.bind({});

NoDataRoleNoChampion.args = {
    profile: {
        summonerName: 'Spirax',
        role: Client.Role.Jungle,
    }
};


export const NoDataRoleChampion: {
    args: DraftSummonerProfileProps
} = Template.bind({});

NoDataRoleChampion.args = {
    profile: {
        summonerName: 'Spirax',
        role: Client.Role.Jungle,
        championId: Client.ChampionId.Ekko
    }
};


export const DataNoRoleNoChampion: {
    args: DraftSummonerProfileProps
} = Template.bind({});

DataNoRoleNoChampion.args = {
    profile: {
        summonerName: 'Spirax',

        winrate: 50.1,
        gamesPlayed: 221,

        tier: Client.Tier.Gold,
        division: Client.Division.III
    }
};

export const DataRoleNoChampion: {
    args: DraftSummonerProfileProps
} = Template.bind({});

DataRoleNoChampion.args = {
    profile: {
        summonerName: 'Spirax',

        winrate: 50.1,
        gamesPlayed: 221,

        tier: Client.Tier.Gold,
        division: Client.Division.III,

        role: Client.Role.Jungle,
        roleProfile: {
            winrate: 43.2,
            gamesPlayed: 47,
            kda: 2.4
        }
    }
};

export const DataRoleChampion: {
    args: DraftSummonerProfileProps
} = Template.bind({});

DataRoleChampion.args = {
    profile: {
        summonerName: 'Spirax',

        winrate: 50.1,
        gamesPlayed: 221,

        tier: Client.Tier.Gold,
        division: Client.Division.III,

        role: Client.Role.Jungle,
        roleProfile: {
            winrate: 43.2,
            gamesPlayed: 47,
            kda: 2.4
        },

        championId: Client.ChampionId.Ekko,
        championProfile: {
            winrate: 51.2,
            gamesPlayed: 12,
            kda: 2.3
        }
    }
};