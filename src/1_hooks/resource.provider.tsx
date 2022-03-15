import React, { createContext, useCallback, useContext, useMemo } from 'react';
import { Client, getChampionName, getRoleName, getTierDivisionName } from '../common/league';

interface ResourceContext {
    getChampionImage(championId: Client.ChampionId): string;
    getChampionName(championId: Client.ChampionId): string;
    getRoleName(role: Client.Role): string;
    getTierDivisionName(tier: Client.Tier, division: Client.Division): string;
}

const ResourceContext = createContext<ResourceContext>(undefined);

export const useResource = (): ResourceContext => {
    return useContext(ResourceContext);
};

export const ResourceProvider: React.FC = ({
    children
}) => {

    const getChampionImage = useCallback((championId: Client.ChampionId) => {
        // TODO: This function should return the champion image url based on the passed championId
        // e.g. for Annie it's the following: https://cdn.zargg.workers.dev/champion/1.png
        return `https://cdn.zargg.workers.dev/champion/${championId}.png`
    }, []);

    const context = useMemo<ResourceContext>(() => ({
        getChampionImage,
        getChampionName,
        getRoleName,
        getTierDivisionName
    }), []);

    return (
        <ResourceContext.Provider value={context}>
            {children}
        </ResourceContext.Provider>
    );
}