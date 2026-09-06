export type IntelligenceBoundary =
  | "reasoning"
  | "opportunity_discovery"
  | "evaluation"
  | "model_routing"
  | "memory"
  | "skill_acquisition"
  | "verification"
  | "learning"
  | "replanning";

export interface IntelligenceRequest {
  missionId: string;
  boundary: IntelligenceBoundary;
  input: unknown;
  context: unknown;
}