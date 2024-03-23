import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function SideNav() {
  const [isHover, setIsHover] = useState(false);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);
  const textRef4 = useRef(null);
  const textRef5 = useRef(null);
  const textRef6 = useRef(null);
  useEffect(() => {
    //TweenMax.to
    const box1 = textRef1.current;
    const box2 = textRef2.current;
    const box3 = textRef3.current;
    const box4 = textRef4.current;
    const box5 = textRef5.current;

    // Create a GSAP tween
    //const tl = gsap.timeline();

    // Define the animation
    //tl.from(box, { duration: 1, y: 100, opacity: 0, ease: "power4.out" });

    const tl = gsap.timeline({ paused: true });
    const t2 = gsap.timeline({ paused: true });
    const t3 = gsap.timeline({ paused: true });
    const t4 = gsap.timeline({ paused: true });
    const t5 = gsap.timeline({ paused: true });

    tl.from(box1, { duration: 1, x: -20, opacity: 0, ease: "power4.out" });
    t2.from(box2, { duration: 1, x: -20, opacity: 0, ease: "power4.out" });
    t3.from(box3, { duration: 1, x: -20, opacity: 0, ease: "power4.out" });
    t4.from(box4, { duration: 1, x: -20, opacity: 0, ease: "power4.out" });
    t5.from(box5, { duration: 1, x: -20, opacity: 0, ease: "power4.out" });

    if (isHover) {
      tl.play();
      t2.play();
      t3.play();
      t4.play();
      t5.play();
    } else {
      tl.reverse();
    }

    // Return a cleanup function to ensure animation is destroyed when component unmounts
    return () => {
      tl.kill(); // Kill the animation to prevent memory leaks
      //tl.to(box, { duration: 1, x: -100, opacity: 0, ease: 'power4.in' });
    };
  }, [isHover]);
  return (
    <>
      <div className="fixed top-0 bottom-0 left-0 flex flex-col p-2 z-10">
        <div className="flex-2">
          <h1
            className="text-white text-3xl font-semibold m-3"
            style={{ fontFamily: "Comic sans MS" }}
          >
            The <br /> SARUS
          </h1>
        </div>

        <br />
        <br />

        <div className="flex flex-col items-center flex-1">
          <div className="w-[35px] m-[20px]">
            <Link to={`login`} class="relative group">
              <svg
                class="w-6 h-6 fill-current text-white group-hover:text-gray-800 transition duration-300"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onMouseOver={() => {
                  setIsHover(true);
                }}
                onMouseOut={() => {
                  setIsHover(false);
                }}
              >
                <path
                  fill-rule="evenodd"
                  d="M6.03531778,18.739764 C7.62329979,20.146176 9.71193925,21 12,21 C14.2880608,21 16.3767002,20.146176 17.9646822,18.739764 C17.6719994,17.687349 15.5693823,17 12,17 C8.43061774,17 6.32800065,17.687349 6.03531778,18.739764 Z M4.60050358,17.1246475 C5.72595131,15.638064 8.37060189,15 12,15 C15.6293981,15 18.2740487,15.638064 19.3994964,17.1246475 C20.4086179,15.6703183 21,13.9042215 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,13.9042215 3.59138213,15.6703183 4.60050358,17.1246475 Z M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z M8,10 C8,7.75575936 9.57909957,6 12,6 C14.4141948,6 16,7.92157821 16,10.2 C16,13.479614 14.2180861,15 12,15 C9.76086382,15 8,13.4273743 8,10 Z M10,10 C10,12.2692568 10.8182108,13 12,13 C13.1777063,13 14,12.2983927 14,10.2 C14,8.95041736 13.2156568,8 12,8 C10.7337387,8 10,8.81582479 10,10 Z"
                />
              </svg>
              {isHover ? (
                <div
                  className="absolute bottom-0 left-10 flex w-[100px]"
                  ref={textRef1}
                  onMouseOver={() => {
                    setIsHover(true);
                  }}
                  onMouseOut={() => {
                    setIsHover(false);
                  }}
                >
                  <p className="text-gray-500 text-roboto text-[20px] font-semibold">
                    My Space
                  </p>
                </div>
              ) : null}
              {/*<p class="absolute hidden bg-white text-gray-800 text-center rounded-md border border-gray-300 p-2 bottom-10 left-1/2 transform -translate-x-1/2 group-hover:block transition duration-300">
                My Space
              </p>*/}
              {/*<span class="absolute hidden bg-white text-gray-800 text-center rounded-md border border-gray-300 p-2 bottom-10 left-1/2 transform -translate-x-1/2 group-hover:block transition duration-300">
                My Space
              </span>*/}
            </Link>
          </div>

          <div className="w-[35px] m-[20px]">
            <Link class="relative group inline-block" to={`/`}>
              <svg
                class="w-6 h-6 fill-current text-white group-hover:text-gray-800 transition duration-300"
                viewBox="0 0 15 15"
                xmlns="http://www.w3.org/2000/svg"
                onMouseOver={() => {
                  setIsHover(true);
                }}
                onMouseOut={() => {
                  setIsHover(false);
                }}
              >
                <path d="M7.8254 0.120372C7.63815 -0.0401239 7.36185 -0.0401239 7.1746 0.120372L0 6.27003V13.5C0 14.3284 0.671573 15 1.5 15H5.5C5.77614 15 6 14.7761 6 14.5V11.5C6 10.6716 6.67157 10 7.5 10C8.32843 10 9 10.6716 9 11.5V14.5C9 14.7761 9.22386 15 9.5 15H13.5C14.3284 15 15 14.3284 15 13.5V6.27003L7.8254 0.120372Z" />
              </svg>
              {/*<span class="absolute hidden bg-white text-gray-800 text-center rounded-md border border-gray-300 p-2 bottom-10 left-1/2 transform -translate-x-1/2 group-hover:block transition duration-300">
                Home
              </span>*/}
              {isHover ? (
                <div
                  className="absolute bottom-0 left-10 flex w-[100px]"
                  ref={textRef2}
                  onMouseOver={() => {
                    setIsHover(true);
                  }}
                  onMouseOut={() => {
                    setIsHover(false);
                  }}
                >
                  <p className="text-gray-500 text-roboto text-[20px] font-semibold">
                    Home
                  </p>
                </div>
              ) : null}
            </Link>
          </div>

          <div className="w-[35px] m-[20px]">
            <Link class="relative group inline-block" to={`/search`}>
              <svg
                class="w-6 h-6 fill-current text-white group-hover:text-gray-800 transition duration-300"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onMouseOver={() => {
                  setIsHover(true);
                }}
                onMouseOut={() => {
                  setIsHover(false);
                }}
              >
                <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
              </svg>
              {/*<span class="absolute hidden bg-white text-gray-800 text-center rounded-md border border-gray-300 p-2 bottom-10 left-1/2 transform -translate-x-1/2 group-hover:block transition duration-300">
                Search
              </span>*/}
              {isHover ? (
                <div
                  className="absolute bottom-0 left-10 flex w-[100px]"
                  ref={textRef3}
                  onMouseOver={() => {
                    setIsHover(true);
                  }}
                  onMouseOut={() => {
                    setIsHover(false);
                  }}
                >
                  <p className="text-gray-500 text-roboto text-[20px] font-semibold">
                    Search
                  </p>
                </div>
              ) : null}
            </Link>
          </div>

          <div className="w-[35px] m-[20px]">
            <Link className="relative group inline-block" to={`/new`}>
              <svg
                className="w-6 h-6 fill-current text-white group-hover:text-gray-800 transition duration-300"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                onMouseOver={() => {
                  setIsHover(true);
                }}
                onMouseOut={() => {
                  setIsHover(false);
                }}
              >
                <circle cx={20} cy={5} r={3} fill="#0000ff" />
                <path d="M9.99008 22.75C9.79008 22.75 9.63008 22.71 9.51008 22.66C9.11008 22.51 8.43008 22.02 8.43008 20.47V14.02H6.09008C4.75008 14.02 4.27008 13.39 4.10008 13.02C3.93008 12.64 3.78008 11.87 4.66008 10.86L12.2301 2.26001C13.2501 1.10001 14.0801 1.18001 14.4801 1.33001C14.8801 1.48001 15.5601 1.97001 15.5601 3.52001V9.97001H17.9001C19.2401 9.97001 19.7201 10.6 19.8901 10.97C20.0601 11.35 20.2101 12.12 19.3301 13.13L11.7601 21.73C11.0501 22.54 10.4301 22.75 9.99008 22.75ZM13.9301 2.74001C13.9001 2.78001 13.6901 2.88001 13.3601 3.26001L5.79008 11.86C5.51008 12.18 5.47008 12.38 5.47008 12.42C5.49008 12.43 5.67008 12.53 6.09008 12.53H9.18008C9.59008 12.53 9.93008 12.87 9.93008 13.28V20.48C9.93008 20.98 10.0201 21.2 10.0601 21.26C10.0901 21.22 10.3001 21.12 10.6301 20.74L18.2001 12.14C18.4801 11.82 18.5201 11.62 18.5201 11.58C18.5001 11.57 18.3201 11.47 17.9001 11.47H14.8101C14.4001 11.47 14.0601 11.13 14.0601 10.72V3.52001C14.0701 3.02001 13.9701 2.81001 13.9301 2.74001Z" />
              </svg>
              {/*<span className="absolute hidden bg-white text-gray-800 text-center rounded-md border border-gray-300 p-2 bottom-10 left-1/2 transform -translate-x-1/2 group-hover:block transition duration-300">
                New
              </span>*/}
              {isHover ? (
                <div
                  className="absolute bottom-0 left-10 flex w-[100px]"
                  ref={textRef4}
                  onMouseOver={() => {
                    setIsHover(true);
                  }}
                  onMouseOut={() => {
                    setIsHover(false);
                  }}
                >
                  <p className="text-gray-500 text-roboto text-[20px] font-semibold">
                    New
                  </p>
                </div>
              ) : null}
            </Link>
          </div>

          <div className="w-[35px] m-[20px]">
            <Link class="relative group" to={`/downloads`}>
              <svg
                class="w-6 h-6 fill-current text-white group-hover:text-gray-800 transition duration-300"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onMouseOver={() => {
                  setIsHover(true);
                }}
                onMouseOut={() => {
                  setIsHover(false);
                }}
              >
                <path d="M12 2a1 1 0 0 1 1 1v10.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 13.586V3a1 1 0 0 1 1-1zM5 17a1 1 0 0 1 1 1v2h12v-2a1 1 0 1 1 2 0v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z" />
              </svg>
              {/*<span class="absolute hidden bg-white text-gray-800 text-center rounded-md border border-gray-300 p-2 bottom-10 left-1/2 transform -translate-x-1/2 group-hover:block transition duration-300">
              Channels
            </span>*/}
              {/*<span class="absolute hidden bg-white text-gray-800 text-center rounded-md border border-gray-300 p-2 bottom-10 left-1/2 transform -translate-x-1/2 group-hover:block transition duration-300">
                Channels
              </span>*/}
              {isHover ? (
                <div
                  className="absolute bottom-0 left-10 flex w-[100px]"
                  ref={textRef5}
                  onMouseOver={() => {
                    setIsHover(true);
                  }}
                  onMouseOut={() => {
                    setIsHover(false);
                  }}
                >
                  <p className="text-gray-500 text-roboto text-[20px] font-semibold">
                    Channels
                  </p>
                </div>
              ) : null}
            </Link>
          </div>
        </div>
      </div>

      <div
        //className={`fixed top-0 left-0 h-[100vh] w-[70vw] bg-[#0f1014]  ${ /* bg-opacity-90 */
        //  isHover ? "block transition-all duration-300 ease-in-out" : "hidden"
        //}`}
        className={`fixed top-0 left-0 h-[100vh] w-[70vw] bg-[#0f1014] z-8  ${
          /* bg-opacity-90 */
          isHover ? "block" : "hidden"
        }`}
        //style={{
        //  width: isHover ? "100%" : "0",
        //  WebkitMaskImage:
        //    "linear-gradient(to left, transparent 0.9%, #16181f)",
        //}}
      ></div>
    </>
  );
}
