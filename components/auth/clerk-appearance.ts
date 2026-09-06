export const clerkAppearance = {
  layout: {
    logoImageUrl: "/logo.svg",
    logoLinkUrl: "/",
    socialButtonsPlacement: "top" as const,
    socialButtonsVariant: "blockButton" as const,
  },
  variables: {
    colorPrimary: "#D5F16D",
    colorForeground: "#F5F7F3",
    colorMutedForeground: "#91A097",
    colorBackground: "#111915",
    colorInput: "#19221D",
    colorInputForeground: "#F5F7F3",
    colorNeutral: "#344139",
    colorDanger: "#F18E8E",
    fontFamily: "Arial, Helvetica, sans-serif",
    borderRadius: "14px",
  },
  elements: {
    rootBox: "w-full",
    cardBox:
      "!w-full !max-w-[440px] !overflow-hidden !rounded-[24px] !border !border-white/10 !bg-[#111915] !shadow-[0_28px_90px_rgba(0,0,0,0.35)]",
    card: "!bg-transparent !shadow-none",
    headerTitle: "!text-[#F5F7F3] !text-2xl !font-semibold !tracking-[-0.04em]",
    headerSubtitle: "!text-[#91A097] !text-sm",
    socialButtonsBlockButton:
      "!border-white/10 !bg-[#19221D] !text-[#F5F7F3] hover:!bg-[#243129]",
    socialButtonsBlockButtonText: "!text-[#F5F7F3] !font-medium",
    dividerLine: "!bg-white/10",
    dividerText: "!text-[#91A097]",
    formFieldLabel: "!text-[#C8D2CA] !text-sm",
    formFieldInput:
      "!border-white/10 !bg-[#19221D] !text-[#F5F7F3] focus:!border-[#D5F16D]",
    formButtonPrimary:
      "!bg-[#D5F16D] !text-[#17211C] !font-semibold hover:!bg-[#E1FA8C]",
    footerActionText: "!text-[#91A097]",
    footerActionLink: "!text-[#D5F16D] hover:!text-[#E1FA8C]",
    identityPreviewEditButton: "!text-[#D5F16D]",
    alert: "!border-white/10 !bg-[#19221D]",
    alertText: "!text-[#F5F7F3]",
    otpCodeFieldInput:
      "!border-white/10 !bg-[#19221D] !text-[#F5F7F3] focus:!border-[#D5F16D]",
  },
} as const;