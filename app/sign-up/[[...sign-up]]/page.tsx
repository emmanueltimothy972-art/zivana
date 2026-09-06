import { SignUp } from "@clerk/nextjs";
import { clerkAppearance } from "../../../components/auth/clerk-appearance";

export const metadata = {
  title: "Create your account",
};

export default function SignUpPage() {
  return (
    <main className="min-h-screen bg-[#0B100D] px-4 py-10 text-[#F5F7F3] sm:px-6 sm:py-16">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl items-center gap-12 lg:grid-cols-[0.8fr_1fr]">
        <div className="hidden max-w-sm lg:block">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D5F16D]">
            Zivana / begin deliberately
          </p>
          <h1 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-[-0.07em]">
            Make space for your next move.
          </h1>
          <p className="mt-6 text-sm leading-6 text-[#91A097]">
            Create your account, then choose the organization context for your
            workspace.
          </p>
        </div>
        <div className="flex justify-center">
          <SignUp
            appearance={clerkAppearance}
            path="/sign-up"
            routing="path"
            signInUrl="/sign-in"
            fallbackRedirectUrl="/dashboard"
          />
        </div>
      </div>
    </main>
  );
}