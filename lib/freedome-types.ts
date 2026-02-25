export interface GeneratedContent {
  headline: string;
  primaryText: string;
  callToAction?: string;
  suggestedPlatform?: string;
}

export interface ABVariant {
  id: string;
  type: string;
  headline: string;
  primaryText: string;
  callToAction: string;
  visualPrompt: string;
  rationale: string;
}

export interface MetaTargeting {
  interests: string[];
  behaviors: string[];
  demographics: string[];
  locations: string[];
}

export interface AnalysisResult {
  productName: string;
  detectedAudience: string;
  metaTargeting: MetaTargeting;
  variants: ABVariant[];
}

export interface MetaConfig {
  dailyBudget: number;
  startDate: string;
  optimizationGoal: "CONVERSIONS" | "CLICKS" | "IMPRESSIONS";
}

export interface MetaCredentials {
  accessToken: string;
  adAccountId: string;
  pageId: string;
}
