import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
import { useResource } from '../../1_hooks/resource.provider';
import { Card, Typography } from '../../common/core/components';
import { Client, isChampionIdValid, isRoleValid } from '../../common/league';

// https://v4.mui.com/styles/api/#examples-2
const useStyles = makeStyles(theme => ({
    root: {

    }
}));

export interface Profile {
    gamesPlayed: number;
    winrate: number;
    kda: number;
}

export interface DraftSummonerProfile {
    summonerName: string;
    gamesPlayed?: number;
    winrate?: number;

    tier?: Client.Tier;
    division?: Client.Division;

    role?: Client.Role;
    roleProfile?: Profile;

    championId?: Client.ChampionId;
    championProfile?: Profile;
}

export interface DraftSummonerProfileProps {
    profile: DraftSummonerProfile;
}

// TODO: Implement this component based on the Figma design. You should use the provided components: Card and Typography.
//       https://www.figma.com/file/0OzXZgcefj9s8aTHnACJld/Junior-React-Takehome?node-id=42%3A43
// Notes:
// - It has multiple states, each are represented as separate story in storybook
// - If winrate is >= 50, it's positive and displayed in our primary color
// - If gamesPlayed is > 0, the profile contains data

export const DraftSummonerProfile: React.FC<DraftSummonerProfileProps> = ({
    profile: {
        summonerName,
        winrate,
        gamesPlayed,

        tier,
        division,

        role,
        roleProfile,

        championId,
        championProfile
    }
}) => {
    const classes = useStyles();

    const {
        getChampionName,
        getChampionImage,
        getRoleName,
        getTierDivisionName
    } = useResource();

    const hasRole = isRoleValid(role);
    const hasChampion = isChampionIdValid(championId);

    return (
        <Card elevation='1' p={1}>
            <Typography
                variant='textMain' paragraph
                color='textSecondary'
                mt={2.5} mb={2.5}
            >
                Not implemented.
            </Typography>
        </Card>
    );
}