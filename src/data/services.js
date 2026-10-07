/**
 * ZAN Services Ecosystem Data Architecture
 * Based strictly on the authoritative source: references/zan-services.pdf
 * 
 * Provides structured models for:
 * 1. The 5 Core Service Pillars
 * 2. The 7 Project Journey Stages
 * 3. Slogan & Slogan Badges
 */

export const SERVICES_PILLARS = [
  {
    id: 'establishment',
    number: '01',
    key: 'establishment',
    categoryKey: 'licensing',
    iconName: 'Building2',
  },
  {
    id: 'market-study',
    number: '02',
    key: 'market',
    categoryKey: 'intelligence',
    iconName: 'TrendingUp',
  },
  {
    id: 'feasibility-study',
    number: '03',
    key: 'feasibility',
    categoryKey: 'financial',
    iconName: 'Calculator',
  },
  {
    id: 'business-plan',
    number: '04',
    key: 'businessPlan',
    categoryKey: 'operational',
    iconName: 'FileSpreadsheet',
  },
  {
    id: 'project-operations',
    number: '05',
    key: 'operations',
    categoryKey: 'execution',
    iconName: 'Layers',
  },
];

export const SERVICES_JOURNEY_STAGES = [
  {
    id: 'stage-establishment',
    number: '01',
    key: 'step1',
  },
  {
    id: 'stage-market',
    number: '02',
    key: 'step2',
  },
  {
    id: 'stage-feasibility',
    number: '03',
    key: 'step3',
  },
  {
    id: 'stage-plan',
    number: '04',
    key: 'step4',
  },
  {
    id: 'stage-prep',
    number: '05',
    key: 'step5',
  },
  {
    id: 'stage-operation',
    number: '06',
    key: 'step6',
  },
  {
    id: 'stage-expansion',
    number: '07',
    key: 'step7',
  },
];

export const SERVICES_HERO_HIGHLIGHTS = [
  {
    id: 'market-entry',
    key: 'marketEntry',
    iconName: 'ShieldCheck',
  },
  {
    id: 'integrated-planning',
    key: 'feasibilityPlan',
    iconName: 'CheckCircle2',
  },
  {
    id: 'turnkey-operations',
    key: 'operationsGrowth',
    iconName: 'BarChart3',
  },
];

// Backward-compatible alias if imported elsewhere
export const SERVICES_DATA = SERVICES_PILLARS;
