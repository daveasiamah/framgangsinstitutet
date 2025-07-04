export const ThankYouButton = () => {
  return (
    <button
      onClick={() =>
        window.open("https://form.jotform.com/checkifiedse/formulr")
      }
      className="
        bg-[#225AEA] 
        font-semibold font-jakarta 
        flex mx-auto justify-center items-center 
        text-white 
        text-[12px] md:text-[1rem] 
        rounded-[8px] md:rounded-[14px]
        px-[24px] py-[14px]
        md:px-[24px] md:py-[16px]
      "
    >
      Skicka din ansökan idag!
    </button>
  )
}
