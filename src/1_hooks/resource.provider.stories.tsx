import React from 'react';
import { Client, isChampionIdValid, isRoleValid } from '../common/league';
import { ResourceProvider, useResource } from './resource.provider';

interface StoryComponentProps {
    championId?: Client.ChampionId;
    role?: Client.Role;
    tier?: Client.Tier;
    division?: Client.Division;
}

const StoryComponent: React.FC<StoryComponentProps> = ({
    championId,
    role,
    tier,
    division
}) => {
    const {
        getChampionImage,
        getChampionName,
        getRoleName,
        getTierDivisionName
    } = useResource();

    if (isChampionIdValid(championId)) {
        return (
            <>
                <img
                    src={getChampionImage(championId)}
                    alt={getChampionName(championId)}
                />
            </>
        );
    }

    if (isRoleValid(role)) {
        return (
            <>
                {getRoleName(role)}
            </>
        );
    }

    return (
        <>
            {getTierDivisionName(tier, division)}
        </>
    )
}

export default {
    title: '1 Hooks / Resource Provider',
    component: StoryComponent
};


const Template = (args: StoryComponentProps) => (
    <ResourceProvider>
        <StoryComponent {...args} />
    </ResourceProvider>
);


export const Champion: {
    args: StoryComponentProps
} = Template.bind({});

Champion.args = {
    championId: Client.ChampionId.Annie
};


export const Role: {
    args: StoryComponentProps
} = Template.bind({});

Role.args = {
    role: Client.Role.Middle
};


export const TierDivision: {
    args: StoryComponentProps
} = Template.bind({});

TierDivision.args = {
    tier: Client.Tier.Diamond,
    division: Client.Division.III
};