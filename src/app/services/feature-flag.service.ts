export class FeatureFlagService {
  featureFlags = {
    hasContactMap: false,
    hasHomePage: false,
    hasSkillsMill: false,
  };

  getFeatureFlag(flag: string): boolean {
    return this.featureFlags[flag];
  }
}
