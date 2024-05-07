import React from "react";
import "../stylesheets/aboutpage.css";

import PresentStatistic from "../components/Counter";
import Logolist from "../sections/Logolist";


import AboutContact from "../sections/AboutContact";

function AboutPage() {
  return (
    <>
      <div className="main-about sm:pt-44 md:p-0 lg:px-[120px] lg:pt-44 md:px-3 md:pt-36 pt-36 pb-2">
        <div className="header-sec   sm:w-full w-[95%] m-auto sm:m-0    sm:h-[60vh]">
          <h1 className="sm:text-5xl text-4xl text-center text-white font-bold mb-8">
            The main Vision and Mission of GrowSharp
          </h1>
          <div className="header-content w-full sm:flex lg:h-[50vh] md:h-[40vh] sm:h-[50vh]">
            <div className="left-header-about md:w-[50%] lg:w-[30%]  p-4 sm:w-[30%] w-full h-full ">
              <img
                className="w-full h-full bg-center bg-cover "
                src="https://www.rawatschoolbhankrota.com/public/img/uploads/media/1663308400.png"
                alt="mission-vision"
              />
            </div>
            <div className="right-header-about sm:w-[70%] h-full flex item-center sm:px-5 justify-center flex-col ">
              <p className="sm:text-xl text-2xl font-semibold mb-4 text-[#fff017]">
                GrowSharp emphasizing the commitment to helping students find
                their ideal career
              </p>
              <p className="text-white sm:text-base text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                minus, rem similique deleniti error culpa accusantium quo
                voluptatibus, delectus esse itaque quis quos reiciendis a, quasi
                quaerat. Asperiores, est eum? Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Architecto praesentium laborum
                sint perferendis aperiam esse quod et molestiae commodi atque a
                ullam doloremque, possimus aliquid adipisci, assumenda,
                repudiandae suscipit quos? Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Atque eos quos quo voluptatum
                minima esse temporibus hic consectetur, facilis dolorum
                repudiandae amet sapiente sit praesentium aut voluptatem. Aut,
                fugiat iure.
              </p>
            </div>
          </div>
        </div>

        <div className="state-sec w-full h-max my-16">
          <PresentStatistic />

          <div className="state-content  w-[95%]  m-auto sm:my-16 my-[11%] sm:w-full sm:h-[50vh]  sm:flex">
            <div className="sc-left sm:w-[40%] h-full  flex items-center justify-center">
              <img
                src="https://png.pngtree.com/png-vector/20231201/ourmid/pngtree-initial-medal-icon-featured-in-a-bicolor-icon-collection-for-achievements-png-image_10799576.png"
                alt="success"
              />
            </div>
            <div className="sc-right sm:w-[60%]  xl:h-max w-full h-full flex item-center justify-center flex-col pr-2 ">
              <h2 className="text-4xl font-bold flex gap-2  text-white">
                Our Success rate day to day increase
                <div className="xl:hidden hidden sm:block">
                  <lord-icon
                    src="https://cdn.lordicon.com/zsaomnmb.json"
                    trigger="hover"
                  ></lord-icon>{" "}
                </div>
              </h2>
              <p className="mt-5 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                itaque distinctio sit esse aliquam? In a reprehenderit
                perferendis praesentium? Repudiandae, harum corporis quas
                distinctio aperiam vero error veniam repellendus itaque! Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Repellat at
                aperiam eaque modi, reprehenderit, sapiente hic quam ducimus
                asperiores esse maiores! Aspernatur distinctio, iusto possimus
                sed similique perferendis aliquid illo? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Numquam non ducimus quaerat
                aut sunt, fugiat amet at rem vero, eum maxime beatae dolor,
                architecto illo? Obcaecati asperiores voluptatum laboriosam
                odio? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur autem inventore numquam modi, impedit illo eligendi
                officia quam incidunt consectetur aliquam exercitationem quia
                saepe molestiae vitae voluptate fugiat, necessitatibus beatae!
              </p>
            </div>
          </div>

          <Logolist />
          <div className="xl:top-50">
          <AboutContact/>
          </div>

          
        </div>
      </div>
    </>
  );
}

export default AboutPage;
