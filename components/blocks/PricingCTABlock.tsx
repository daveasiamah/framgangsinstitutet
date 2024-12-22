import React from "react"

export function PricingCTAButtonBlock({
  openModal,
}: {
  openModal: () => void
}) {
  return (
    <div className="w-50 flex items-center justify-center my-5">
      <button
        onClick={openModal}
        className="text-[#fff] bg-[#225AEA] text-[14px] w-50 flex items-center justify-center font-jakarta font-bold w-[194px] h-[36px] rounded-[7px] shadow-inner button-shadow"
        style={{
          boxShadow: `
        inset 11px 1px 19.4px 0px rgba(255, 255, 255, 0.3), 
        inset -4px 0px 5.8px 0px rgba(255, 255, 255, 0.25)`,
          borderRadius: "7px",
        }}
      >
        Köp för 999,00 kr
      </button>
    </div>
  )
}
