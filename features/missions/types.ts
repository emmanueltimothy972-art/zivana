export const missionLifecycleStages = [
  "Objective",
  "Understand",
  "Discover",
  "Evaluate",
  "Plan",
  "Approve",
  "Execute",
  "Verify",
  "Measure",
  "Record",
  "Learn",
  "Replan",
] as const;

export type MissionLifecycleStage = (typeof missionLifecycleStages)[number];

export type MissionPriority = "low" | "normal" | "high" | "critical";

export type MissionExecutionState =
  | "draft"
  | "awaiting_approval"
  | "queued"
  | "running"
  | "paused"
  | "verifying"
  | "complete"
  | "failed";

export interface Mission {
  id: string;
  organizationId: string;
  objective: string;
  desiredOutcome: string;
  constraints: string[];
  priority: MissionPriority;
  budget: number | null;
  plan: unknown | null;
  steps: unknown[];
  opportunities: unknown[];
  capabilities: string[];
  workers: string[];
  approvals: unknown[];
  executionState: MissionExecutionState;
  evidence: unknown[];
  verification: unknown | null;
  financialImpact: unknown | null;
  result: unknown | null;
  memory: unknown[];
  replanning: unknown | null;
}