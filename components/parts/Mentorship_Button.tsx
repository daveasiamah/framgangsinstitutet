import Link from "next/link"

type ButtonSize = "small" | "medium" | "large"
type ButtonVariant = "primary" | "secondary" | "outline" | "success" | "danger"

interface ReusableButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
  disabled?: boolean
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}

const MentorshipButton = ({
  text = "Starta din resa idag",
  disabled = false,
  variant = "primary",
  size = "medium",
  className = "mt-5",
}: ReusableButtonProps) => {
  // Size configurations
  const sizeClasses: Record<ButtonSize, string> = {
    small:
      "w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] h-[32px] sm:h-[35px] md:h-[38px] lg:h-[41px] text-xs sm:text-sm md:text-sm lg:text-base px-4 py-2",
    medium:
      "w-[184px] sm:w-[200px] md:w-[220px] lg:w-[240px] h-[39px] sm:h-[42px] md:h-[45px] lg:h-[48px] text-xs sm:text-sm md:text-base lg:text-lg px-6 py-3",
    large:
      "w-[220px] sm:w-[240px] md:w-[260px] lg:w-[280px] h-[45px] sm:h-[48px] md:h-[52px] lg:h-[56px] text-sm sm:text-base md:text-lg lg:text-xl px-8 py-4",
  }

  // Variant configurations
  const variantClasses = {
    primary: "bg-[#225AEA] text-white hover:bg-[#1e52d1] active:bg-[#1a47b8]",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 active:bg-gray-800",
    outline:
      "bg-transparent text-[#225AEA] border-2 border-[#225AEA] hover:bg-[#225AEA] hover:text-white",
    success: "bg-green-600 text-white hover:bg-green-700 active:bg-green-800",
    danger: "bg-red-600 text-white hover:bg-red-700 active:bg-red-800",
  }

  // Box shadow styles
  const boxShadowStyle =
    variant === "primary"
      ? {
          boxShadow: `
            inset 11px 1px 19.4px 0px rgba(255, 255, 255, 0.3), 
            inset -4px 0px 5.8px 0px rgba(255, 255, 255, 0.25)
        `,
        }
      : {}

  const baseClasses =
    "font-semibold text-center font-jakarta tracking-[0] leading-none whitespace-nowrap rounded-[7px] shadow-inner transition-all duration-200 ease-in-out transform flex items-center justify-center"

  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed hover:scale-100 active:scale-100"
    : ""

  const combinedClasses = `
        ${baseClasses}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${disabledClasses}
        ${className}
    `.trim()

  return (
    <Link
      href="https://checkout.revolut.com/payment-link/d3eb03dc-e14d-4695-a085-a01903b02e54"
      target="_blank"
      rel="noopener noreferrer"
      className={combinedClasses}
      style={boxShadowStyle}
    >
      {text}
    </Link>
  )
}

export default MentorshipButton
