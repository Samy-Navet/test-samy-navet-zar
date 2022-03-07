import { GraphQLError } from 'graphql';
import React from 'react';
import { ResourceProvider } from '../1_hooks';
import { Client, isChampionIdValid, isRoleValid } from '../common/league';
import { ParticipantProfiles, ParticipantProfilesProps } from './participant-profiles';
import { PARTICIPANT_PROFILES_QUERY } from './participant-profiles.graphql-queries';
import { ParticipantProfile } from './participant-profiles.graphql-types';

const PARTICIPANTS = [
    { summonerName: 'Spirax', role: Client.Role.Top, },
    { summonerName: 'Walterx', role: Client.Role.Jungle, championId: Client.ChampionId.Ekko },
    { summonerName: 'Bivod4', role: Client.Role.Middle },
    { summonerName: 'Talkmebb', role: Client.Role.Bottom, championId: Client.ChampionId.Aatrox },
    { summonerName: 'Fourioseven', role: Client.Role.Support, championId: Client.ChampionId.Swain }
];


export default {
    title: '3 GraphQL / Participant Profiles',
    component: ParticipantProfiles
};


const Template = (args: ParticipantProfilesProps) => (
    <ResourceProvider>
        <div style={{ width: 284 }}>
            <ParticipantProfiles {...args} />
        </div>
    </ResourceProvider>
);


export const Resolved: {
    args: ParticipantProfilesProps,
    parameters: any
} = Template.bind({})

Resolved.args = {
    platformId: 'EUW1',
    queueId: 'RS5',
    participants: PARTICIPANTS
};
Resolved.parameters = {
    apolloClient: {
        mocks: [
            {
                request: {
                    query: PARTICIPANT_PROFILES_QUERY,
                    variables: {
                        input: {
                            ...Resolved.args
                        }
                    }
                },
                result: {
                    data: {
                        getParticipantProfiles: PARTICIPANTS.map(x => createProfile(x.summonerName, x.role, x.championId))
                    },
                }
            },
        ],
    }
};


export const Loading: {
    args: ParticipantProfilesProps,
    parameters: any
} = Template.bind({})

Loading.args = {
    ...Resolved.args
};
Loading.parameters = {
    apolloClient: {
        mocks: [
            {
                request: {
                    query: PARTICIPANT_PROFILES_QUERY,
                    variables: {
                        input: {
                            ...Loading.args
                        }
                    }
                },
                result: {
                    data: {
                        getParticipantProfiles: PARTICIPANTS.map(x => createProfile(x.summonerName, x.role, x.championId))
                    }
                },
                delay: 100000000000000
            },
        ],
    }
}


export const Error: {
    args: ParticipantProfilesProps,
    parameters: any
} = Template.bind({})

Error.args = {
    ...Resolved.args
};
Error.parameters = {
    apolloClient: {
        mocks: [
            {
                request: {
                    query: PARTICIPANT_PROFILES_QUERY,
                    variables: {
                        input: {
                            ...Error.args
                        }
                    }
                },
                error: new GraphQLError('An error occurred.', {})
            },
        ],
    }
}


function createProfile(
    summonerName: string,
    role: Client.Role,
    championId?: Client.ChampionId
): ParticipantProfile {
    const gamesPlayed = random(100, 400);
    const roleGamesPlayed = random(50, gamesPlayed);
    const profile: ParticipantProfile = {
        summonerName,
        queueProfile: {
            winrate: random(450, 600) / 10.2,
            gamesPlayed: gamesPlayed,
            rank: {
                tier: Client.Tier.Gold,
                division: Client.Division.III
            }
        },
        roleProfile: null,
        championProfile: null
    };
    if (isRoleValid(role)) {
        profile.roleProfile = {
            winrate: random(450, 600) / 10.2,
            gamesPlayed: roleGamesPlayed,
            kda: random(10, 100) / 10.5
        }
    }
    if (isChampionIdValid(championId)) {
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