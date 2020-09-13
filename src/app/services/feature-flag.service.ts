import { Injectable } from '@angular/core';

@Injectable()
export class FeatureFlagService {
  FEATURE_FLAGS = {
    hasContactMap: false,
    hasSkillsMill: false,
  };

  getFeatureFlag(flag: string): boolean {
    return this.FEATURE_FLAGS[flag];
  }
}
