/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function Hero() {
  return (
    <div className="text-center md:mx-5 mx-10">
      <h1 className="font-bold md:text-7xl text-5xl mt-20">
        All space happenings at one place.
      </h1>
      <p className="my-5 text-2xl text-gray-500">to know more</p>
      <div className="space-x-5 my-10">
        <Link href="/login">
          <button className="border text-gray-500  px-4 py-1 rounded-md">
            Login
          </button>
        </Link>
        <Link href="/signup">
          <button className="border text-gray-500 px-4 py-1 rounded-md">
            Signup
          </button>
        </Link>
      </div>
      <p className="my-10 text-gray-400 text-sm">for accessing the dashboard click on login button in the login interface</p>
      <div className="md:w-2/3 w-auto md:mx-auto">
        <p className="text-gray-600 text-justify">
          In the ever-evolving realm of space exploration, a dynamic tapestry of
          launches, capsules, and historic milestones continues to unfold. As
          nations and private entities propel humanity beyond Earth's
          boundaries, each rocket launch becomes a testament to human ingenuity.
          Capsules, meticulously designed for crewed and uncrewed missions,
          ferry astronauts or payloads to destinations that were once only the
          stuff of dreams. The annals of space history are marked by triumphs
          like the moon landing and the assembly of international space
          stations, showcasing collaborative endeavors that transcend
          geopolitical boundaries. With every mission, cutting-edge technologies
          are employed to deliver scientific payloads, unraveling the mysteries
          of our universe. The cosmos becomes a canvas for discovery, with
          satellites, telescopes, and probes unlocking the secrets of distant
          galaxies. The ongoing saga of space exploration not only propels
          scientific understanding but also fuels aspirations for a future where
          humanity's reach extends far beyond the confines of our home planet.
        </p>
      </div>
    </div>
  );
}
