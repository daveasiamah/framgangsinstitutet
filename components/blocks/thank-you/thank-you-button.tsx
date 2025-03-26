export const ThankYouButton = () => {
  return (
    <button
      onClick={() =>
        window.open("https://form.jotform.com/checkifiedse/formulr")
      }
      className="
        bg-[#225AEA] 
        font-extrabold font-jakarta 
        flex mx-auto justify-center items-center 
        text-white 
        text-[14px] md:text-[1.256rem] lg:text-[1.5rem] 
        rounded-[12px] md:rounded-[20px]
        px-[24px] py-[14px]
        md:px-[36px] md:py-[18px]
      "
    >
      Skicka din ansökan idag!
    </button>
  )
}
