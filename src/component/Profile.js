import { useState, useEffect } from "react";
import { SiGithub, SiLinkedin, SiGoogle } from "react-icons/si";

const Profile = () => {
    const [userInfo, setuserInfo] = useState(null); // Initialize as null

    useEffect(() => {
        fetchGitApi();
    }, []);

    async function fetchGitApi() {
        const data = await fetch("https://api.github.com/users/neelmani0");
        const json = await data.json();
        setuserInfo(json);
    }
 
    return (
        <div>
          <div className="w-full h-auto mt-5 p-14 text-black mb-2 font-Poppins sm:p-4 ">
            
            {userInfo ? ( // Check if userInfo is available
                <>
                 <div className="ml-[563px]">
                    <img
                        className="rounded-full w-[150px] h-[150px] border-none align-middle"
                        src={userInfo.avatar_url}
                        alt={userInfo.name} // Add alt text for accessibility
                    />
                    <h2 className="ml-4">Name: {userInfo.name}</h2>
                    <h2 className="ml-4">Location: {userInfo.location}</h2>
                </div>
                </>
                
            ) : (
                <p>Loading...</p> // Show a loading message while data is being fetched
            )}
             </div>
            <div className="w-full h-auto mt-5 p-14 text-black mb-2 font-Poppins sm:p-4 text-center ">
                <h1 className="font-bold text text-4xl">
                    Some important information about project
                </h1>
                <br />
                <ul className="flex flex-col gap-6 text-base md:text-sm sm:gap-3 sm:text-xs">
                    <li className="font-bold text-2xl md:text-lg sm:text-base">
                        😎 Key Features
                    </li>
                    <li>❥ Shimmer UI for Better UserExperience</li>
                    <li>❥ Search Feature </li>
                    <li>❥ Cart Feature</li>
                    <li>❥ Checking network connection</li>
                    <li>❥ Forms to contact</li>
                    <li>❥ Single page application</li>
                    <li>
                    ❥ Implemented Lazy Loading or OnDemand Loading on This
                        Router
                    </li>
                </ul>
            </div>

            <div className="bg-slate-900 text-white p-4 rounded-sm">
                <p className="pb-4 text-lg font-normal text-slate-300 text-center">
                    ReactJs | JavaScript | Redux | Parcel | HTML5 | CSS3 |
                    Tailwind CSS | Front End Developer
                </p>
                <div className="text-[2em] text-center w-full flex items-center justify-center mt-2">
                    <a
                        href="https://github.com/neelmani0"
                        className="mb-2 pr-4 hover:scale-105"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="bg-[#333] icon--i">
                            <SiGithub className="m-auto" />
                        </i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/neel-mani-2114591b2/"
                        className="mb-2 pr-4 hover:scale-105"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="bg-[#0e76a8] icon--i">
                            <SiLinkedin className="m-auto" />
                        </i>
                    </a>
                    <a
                        href="mailto:neelmanibcet@gmail.com"
                        className="mb-2 hover:scale-105"
                    >
                        <i className="bg-[#ea4335] icon--i">
                            <SiGoogle className="m-auto" />
                        </i>{" "}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Profile;
