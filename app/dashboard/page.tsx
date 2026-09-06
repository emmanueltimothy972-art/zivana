import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { AgentWorkspace } from "../../components/dashboard/agent-workspace";

export const metadata = {
  title: "Workspace",
};

export default function DashboardPage() {
  return <DashboardContent />;
}

async function DashboardContent() {
  const { userId, orgId } = await auth();

  if (!userId) {
    redirect("/sign-in?redirect_url=/dashboard");
  }

  return <AgentWorkspace organizationReady={Boolean(orgId)} />;
}