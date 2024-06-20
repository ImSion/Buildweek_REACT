import { Link } from "react-router-dom";

export default function ButtonExperience({setOpenModal, setExperience, profile, experienceArray, profiles, setProfiles}) {
  return (
    <div className="flex gap-[20px]">
        <button onClick={() => setOpenModal(true)}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6">
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
                />
            </svg>
        </button>
        <button className="hidden" onClick={() => setOpenModal(true)} setExperience={setExperience} profile={profile} experienceArray={experienceArray} profiles={profiles} setProfiles={setProfiles}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                />
            </svg>
        </button>
    </div>
  )
}
