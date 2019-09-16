import R6StatsAPIConfiguration from './types/R6StatsAPIConfiguration';
import StatsLookup from './types/StatsLookup';
import { GenericStatsResponse, OperatorStatsResponse, WeaponStatsResponse, WeaponCategoryStatsResponse, SeasonalStatsResponse } from './types/StatsResponse';
export default class R6StatsAPI {
    private $axios;
    private config;
    constructor(config: R6StatsAPIConfiguration);
    private call;
    playerStats(params: StatsLookup): Promise<GenericStatsResponse>;
    operatorStats(params: StatsLookup): Promise<OperatorStatsResponse>;
    seasonalStats(params: StatsLookup): Promise<SeasonalStatsResponse>;
    weaponStats(params: StatsLookup): Promise<WeaponStatsResponse>;
    weaponCategoryStats(params: StatsLookup): Promise<WeaponCategoryStatsResponse>;
    private _baseConfig;
}
