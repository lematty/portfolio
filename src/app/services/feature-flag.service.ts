export class FeatureFlagService {
  featuerFlags = {
    homePage: false,
    contactMap: false,
  };

  getFeatureFlag(flag: string): boolean {
    return this.featuerFlags[flag];
  }
}
