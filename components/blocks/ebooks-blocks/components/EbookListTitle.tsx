interface EbookListTitleIProps {
  blackText: string
  blueText: string
}
export default function CoursePageTitle({
  blackText,
  blueText,
}: EbookListTitleIProps) {
  return (
    <h1 className="leading-[2rem] font-extrabold text-[25px] text-center md:text-left md:text-[40px] mb-4 md:leading-[3rem]">
      <p className="font-jakarta">
        {blackText}{" "}
        <span className="font-extrabold font-jakarta text-[#225AEA]">
          {blueText}
        </span>
      </p>
    </h1>
  )
}
