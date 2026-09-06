export type ExecutionCapability =
  | "browser"
  | "computer"
  | "api"
  | "external_tool"
  | "isolated_session";

export type ApprovalState = "not_required" | "pending" | "approved" | "rejected";

export interface ExecutionRequest {
  missionId: string;
  capability: ExecutionCapability;
  authorization: ApprovalState;
  idempotencyKey: string;
  retryPolicy: unknown;
  verificationPlan: unknown;
}