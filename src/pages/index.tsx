import Head from "../../node_modules/next/head";

import React from "react";
import { ExperienceBar } from "../components/experience-bar/ExperienceBar";

export default function Home() {
  return (
    <><Head>

      <link rel="preconnect" href="https://fonts.googleapis.com" />

      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Rajdhani:wght@400;500;600;700&display=swap" rel="stylesheet" />

    </Head><div className="container">
        <ExperienceBar />
      </div></>
  )
}
