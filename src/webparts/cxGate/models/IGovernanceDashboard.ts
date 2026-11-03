export interface IProject {
  id: string;
  name: string;
  region: string;
  businessArea: string;
  projectType: string;
  status: string;
  currentStage: string;
  isGated: boolean;
  isInAssessment: boolean;
  isSelfCheck: boolean;
  isOnHold: boolean;
  isStopped: boolean;
  registeredDate: string;
  gateDate: string | null;
}

export interface IGateJourneyItem {
  stage: string;
  count: number;
  percentage?: number;
}

export interface IStageTrendItem {
  year: number;
  stage: string;
  count: number;
}

export interface IPortfolioFilters {
  region: string;
  businessArea: string;
  projectType: string;
}

export interface IGovernanceDashboardData {
  metadata: {
    title: string;
    mode: string;
    notice: string;
    lastUpdated: string;
  };
  filters: {
    regions: string[];
    businessAreas: string[];
    projectTypes: string[];
  };
  reportingPeriods: {
    years: number[];
    defaultShowBy: string;
    defaultYear: string;
  };
  projects: IProject[];
  gateJourney: IGateJourneyItem[];
  currentStageOrder: string[];
  projectStageTrend: IStageTrendItem[];
}