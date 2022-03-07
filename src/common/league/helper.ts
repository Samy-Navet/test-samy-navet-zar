import championIdToName from './champion-id-to-name.json';
import { ChampionId, Division, Role, Tier } from './client';

export function getRoleName(role: Role): string {
    switch (role) {
        case Role.Top:
            return 'Top';
        case Role.Jungle:
            return 'Jungle';
        case Role.Middle:
            return 'Middle';
        case Role.Bottom:
            return 'Bottom';
        case Role.Support:
            return 'Support';
        default:
            return `Unknown role: ${role}`;
    }
}

export function getTierName(tier: Tier): string {
    switch (tier) {
        case Tier.Unranked: return 'Unranked';
        case Tier.Iron: return 'Iron';
        case Tier.Bronze: return 'Bronze';
        case Tier.Silver: return 'Silver';
        case Tier.Gold: return 'Gold';
        case Tier.Platinum: return 'Platinum';
        case Tier.Diamond: return 'Diamond';
        case Tier.Master: return 'Master';
        case Tier.Grandmaster: return 'Grandmaster';
        case Tier.Challenger: return 'Challenger';
        default: return getTierName(Tier.Unranked);
    }
}

export function getTierDivisionName(tier: Tier, division: Division): string {
    switch (tier) {
        case Tier.Iron:
        case Tier.Bronze:
        case Tier.Silver:
        case Tier.Gold:
        case Tier.Platinum:
        case Tier.Diamond:
            return `${getTierName(tier)} ${division || ''}`.trim();
        case Tier.Master:
        case Tier.Grandmaster:
        case Tier.Challenger:
            return getTierName(tier);
        case Tier.Unranked:
        default:
            return getTierName(Tier.Unranked);
    }
}

export function getChampionName(championId: ChampionId): string {
    const name = championIdToName['' + championId];
    if (!name?.length) {
        return `unk: ${championId}`;
    }
    return name;
}

export function isChampionIdValid(championId: ChampionId): boolean {
    return !isNaN(championId) && championId > 0;
}

export function isRoleValid(role: Role): boolean {
    return role?.length > 0;
}