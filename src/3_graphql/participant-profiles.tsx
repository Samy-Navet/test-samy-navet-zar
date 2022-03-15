import { useQuery } from '@apollo/client';
import React, { useMemo } from 'react';
import { DraftSummonerProfiles } from '../2_components/2_draft-summoner-profiles';
import { Client } from '../common/league';
import { ParticipantProfilesQueryData, PARTICIPANT_PROFILES_QUERY } from './participant-profiles.graphql-queries';
import { GetParticipantProfilesInput } from './participant-profiles.graphql-types';

export interface Participant {
    summonerName: string;
    role?: Client.Role;
    championId?: Client.ChampionId;
}

export interface ParticipantProfilesProps {
    platformId: string;
    queueId: string;
    participants: Participant[]
}

export const ParticipantProfiles: React.FC<ParticipantProfilesProps> = ({
    platformId,
    queueId,
    participants
}) => {
    const input: GetParticipantProfilesInput = useMemo(() => {
        return {
            platformId,
            queueId,
            participants
        };
    }, [platformId, queueId, participants]);

    // TODO: Finish the GraphQL query PARTICIPANT_PROFILES_QUERY, based on the schema at `participant-profiles.graphql`
    // Bonus points:
    //  - Handle the loading state
    //  - Handle the error state
    // We don't provide a design nor guidelines about how to handle those two states.
    // You are free to handle and implement them based on what you believe works best for those state.
    const { loading, error, data } = useQuery<ParticipantProfilesQueryData>(PARTICIPANT_PROFILES_QUERY, {
        variables: {
            input
        }
    });
    console.debug(`ParticipantProfilesView_useQuery`, loading, error, data);

    return (
        <DraftSummonerProfiles profiles={participants.map(participant => {
            // TODO: Match the participant with one of the profiles from the response
            if (!loading && !error) {
                const profile = data?.getParticipantProfiles?.find(participantProfile => participantProfile.summonerName === participant.summonerName && participantProfile.queueProfile);
                if (profile) return {
                    summonerName: participant.summonerName,
                    winrate: profile?.queueProfile?.winrate,
                    gamesPlayed: profile?.queueProfile?.gamesPlayed,
                    tier: profile?.queueProfile?.rank?.tier,
                    division: profile?.queueProfile?.rank?.division,
                    role: participant?.role,
                    roleProfile: profile?.roleProfile,
                    championId: participant?.championId,
                    championProfile: profile?.championProfile
                }

            }
            return {
                summonerName: participant.summonerName,
                role: participant?.role,
                championId: participant?.championId,
            };
        })} />
    );
}