/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-3 grid-rows-6">
        <div className="col-span-3">
          <h2 className="text-center font-light text-2xl my-5">About Me</h2>
          <p className="text-sm text-center p-10 font-light">
            Hello there! I'm an aspiring web developer with a boundless ambition
            to learn and grow in the field. While I may lack experience, my
            determination to become a respected and skilled web developer is
            unwavering. My journey into web development is fueled by a genuine
            passion for coding and a strong desire to create captivating online
            experiences. I understand that the road ahead is challenging, with
            ever-evolving technologies, but I'm ready to embrace the learning
            curve. I see every obstacle as an opportunity for growth and am
            committed to acquiring the necessary skills and staying updated with
            the latest trends. My ambition and dedication are my driving forces,
            propelling me towards my goal of becoming an accomplished web
            developer. In summary, as a newcomer in web development, my ambition
            and eagerness to learn are my strengths. I'm determined to make my
            mark and am excited about the journey ahead.
          </p>
        </div>
        <div className="col-span-3 row-span-3 col-start-1 row-start-4 bg-red-600">
          Projects
        </div>
        <div className="row-span-2 col-start-1 row-start-2 bg-lime-700">
          Resume
        </div>
        <div className="col-span-2 row-span-2 col-start-2 row-start-2 bg-blue-400">
          Skills
        </div>
      </div>
    </div>
  );
}
