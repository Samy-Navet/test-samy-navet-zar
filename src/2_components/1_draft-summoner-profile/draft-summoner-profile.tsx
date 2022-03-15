import makeStyles from '@material-ui/core/styles/makeStyles';
import React, { useMemo } from 'react';
import { useResource } from '../../1_hooks/resource.provider';
import { Card, Typography } from '../../common/core/components';
import { Client, isChampionIdValid, isRoleValid } from '../../common/league';

// https://v4.mui.com/styles/api/#examples-2
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    column: {
        marginRight: 'auto',
        alignSelf: 'flex-start',
    },
    image: {
        display: 'block',
        height: '70px',
        alignSelf: 'center',
        marginRight: '10px'
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

const noData = 'no data';

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

    const champion = useMemo(() => hasChampion ? getChampionName(championId) : noData, [championId, hasChampion]);
    const championImage = useMemo(() => getChampionImage(hasChampion ? championId : 0), [championId, hasChampion]);
    const roleName = useMemo(() => hasRole ? getRoleName(role) : null, [role, hasRole]);
    const tierDivisionName = useMemo(() => gamesPlayed > 0 ? getTierDivisionName(tier, division) : null, [gamesPlayed, tier, division])

    return (
        <Card elevation='1' style={{ borderRadius: '2px', margin: '8px auto', height: '80px', padding: '5px' }} p={1}>
            <div className={classes.root}>
                <img src={championImage} alt="" className={classes.image} style={!hasChampion ? { border: 'solid white 2px' } : {}} />
                <div className={classes.column}>
                    <Typography
                        color='textSecondary'
                        mt={0.5} mb={1}
                    >
                        {summonerName}
                    </Typography>
                    {gamesPlayed ? (
                        <div>
                            <Typography color='primary' mt={1} mb={1}>
                                {`${winrate.toFixed(1)}% wr`}
                            </Typography>
                            <Typography color='textSecondary' variant="textSmall" mt={1} mb={1}>
                                {tierDivisionName}
                            </Typography>
                            <Typography color='textTertiary' variant="textExtraSmall" mt={1} mb={1}>
                                {`${gamesPlayed} games`}
                            </Typography>
                        </div>
                    ) : NoData}
                </div>
                {hasRole && !hasChampion ? (
                    <div className={classes.column}>
                        <Typography color='textSecondary' mt={0.5} mb={1}>
                            {`as ${roleName}`}
                        </Typography>
                        {gamesPlayed ? <DetailsList winrate={roleProfile.winrate} kda={roleProfile.kda} gamesPlayed={roleProfile.gamesPlayed} /> : NoData}
                    </ div>
                ) : null}
                {hasChampion ? (
                    <div className={classes.column}>
                        <Typography color='textSecondary' mt={0.5} mb={1}>
                            {`on ${champion}`}
                        </Typography>
                        {gamesPlayed ? <DetailsList winrate={championProfile.winrate} kda={championProfile.kda} gamesPlayed={championProfile.gamesPlayed} /> : NoData}
                    </div>
                ) : null}
            </div>
        </Card>
    );
}


const DetailsList = ({ winrate, kda, gamesPlayed }: { winrate: number; kda: number; gamesPlayed: number }) => (
    <>
        <Typography color={winrate > 50 ? 'primary' : 'textPrimary'} mb={1}>
            {`${winrate.toFixed(1)}% wr`}
        </Typography>
        <Typography color={'textPrimary'} variant="textSmall" mb={1}>
            {`${kda.toFixed(1)} kda`}
        </Typography>
        <Typography color='textTertiary' variant="textExtraSmall" mb={1}>
            {`${gamesPlayed} games`}
        </Typography>
    </>
)

const NoData = (
    <Typography color='textSecondary' mb={1}>
        no data
    </Typography>
)