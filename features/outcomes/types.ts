export type FinancialImpactState =
  | "potential"
  | "expected"
  | "pending"
  | "realized"
  | "recovered";

export interface FinancialImpact {
  missionId: string;
  state: FinancialImpactState;
  amount: number | null;
  currency: string | null;
  evidence: unknown[];
  recordedAt: string | null;
}