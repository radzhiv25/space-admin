/* eslint-disable react/jsx-key */
// pages/Capsules.js
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Footer from "../components/footer";

const Dashboard = () => {
  const [launches, setLaunches] = useState([]);
  const [rockets, setRockets] = useState([]);
  const [capsules, setCapsules] = useState([]);
  const [cores, setCores] = useState([]);
  const [dragons, setDragons] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch launches
        const launchesResponse = await axios.get(
          "https://api.spacexdata.com/v3/launches"
        );
        setLaunches(launchesResponse.data);

        // Fetch rockets
        const rocketsResponse = await axios.get(
          "https://api.spacexdata.com/v3/rockets"
        );
        setRockets(rocketsResponse.data);

        // Fetch capsules
        const capsulesResponse = await axios.get(
          "https://api.spacexdata.com/v3/capsules"
        );
        setCapsules(capsulesResponse.data);

        // Fetch cores
        const coreResponse = await axios.get(
          "https://api.spacexdata.com/v3/cores"
        );
        setCores(coreResponse.data);

        // Fetch dragons
        const dragonResponse = await axios.get(
          "https://api.spacexdata.com/v3/dragons"
        );
        setDragons(dragonResponse.data);

        // Fetch history
        const historyResponse = await axios.get(
          "https://api.spacexdata.com/v3/history"
        );
        setHistory(historyResponse.data);
      } catch (error) {
        console.error("Error fetching SpaceX data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    // <div className="p-5">
    //   <div className="flex items-center justify-between m-5">
    //     <h1 className="text-center text-gray-500 font-semibold">
    //       Dashboard Page
    //     </h1>
    //     <button>
    //       <Link href="/">logout</Link>
    //     </button>
    //   </div>
    //   <div className="m-5">
    //     <input type="text" value={capsules} className="p-2 border outline-none"/>
    //   </div>
    //   <ul className="grid md:grid-cols-5 grid-cols-2 gap-5 m-5">
    //     {capsules.map((capsule) => (
    //       <div key={capsule.capsule_serial} className="border rounded-md p-2 shadow-md">
    //         <p className="font-semibold border-b">Serial: {capsule.capsule_serial}</p>
    //         <p>ID: {capsule.capsule_id}</p>
    //         <p>Status: {capsule.status}</p>
    //         <p>Original Launch: {capsule.original_launch}</p>
    //         <p>Original Launch: {capsule.original_launch_unix}</p>
    //         <p className="font-medium">Mission: {capsule.missions.map((mission) => (
    //             <div className="border rounded-md my-1 font-normal">
    //             <p>Name: {mission.name}</p>
    //             <p>Flight: {mission.flight}</p>
    //             </div>
    //          ))}</p>
    //         <p>Landings: {capsule.landings}</p>
    //         <p>Type: {capsule.type}</p>
    //         <p>Reuse Count: {capsule.reuse_count}</p>
    //       </div>
    //     ))}
    //   </ul>
    // </div>
    <div className="m-5">
      <div className="flex items-center justify-between m-5">
        <h1 className="text-center text-gray-500 font-semibold">
          Dashboard Page
        </h1>
        <button>
          <Link href="/" className="hover:underline">logout</Link>
        </button>
      </div>
      <div className="m-5 my-10 space-y-5">
        <div className="space-y-2">
          <h2 className="font-semibold">SpaceX Launches</h2>
          <div className="grid md:grid-cols-5 grid-cols-2 gap-5 p-2 border rounded-md">
            {launches.map((launch) => (
              <div key={launch.flight_number} className="border rounded-md p-1">
                {launch.mission_name}
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="font-semibold">SpaceX Rockets</h2>
          <ul className="grid md:grid-cols-5 grid-cols-2 gap-5 p-2 border rounded-md">
            {rockets.map((rocket) => (
              <li key={rocket.rocket_id} className="border rounded-md p-1">
                {rocket.rocket_name}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="font-semibold">SpaceX Capsules</h2>
          <div className="grid md:grid-cols-5 grid-cols-2 gap-5 p-2 border rounded-md">
            {capsules.map((capsule) => (
              <div key={capsule.capsule_id} className="border rounded-md p-1">
                {capsule.capsule_serial}
                <p>ID: {capsule.capsule_id}</p>
                <p>Status: {capsule.status}</p>
                <p>Original Launch: {capsule.original_launch}</p>
                <p>Original Launch: {capsule.original_launch_unix}</p>
                <p className="font-medium">
                  Mission:{" "}
                  {capsule.missions.map((mission) => (
                    <div className="border rounded-md my-1 font-normal">
                      <p>Name: {mission.name}</p>
                      <p>Flight: {mission.flight}</p>
                    </div>
                  ))}
                </p>
                <p>Landings: {capsule.landings}</p>
                <p>Type: {capsule.type}</p>
                <p>Reuse Count: {capsule.reuse_count}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="font-semibold">SpaceX Cores</h2>
          <ul className="grid md:grid-cols-5 grid-cols-2 gap-5 p-2 border rounded-md">
            {cores.map((cores) => (
              <li className="border rounded-md p-1">{cores.core_serial}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="font-semibold">SpaceX Dragons</h2>
          <ul className="grid md:grid-cols-5 grid-cols-2 gap-5 p-2 border rounded-md">
            {dragons.map((dragon) => (
              <li key={dragon.id} className="border rounded-md p-1">
                {dragon.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="font-semibold">SpaceX History</h2>
          <ul className="grid md:grid-cols-5 grid-cols-2 gap-5 p-2 border rounded-md">
            {history.map((history) => (
              <li key={history.id} className="border rounded-md p-1">
                {history.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
