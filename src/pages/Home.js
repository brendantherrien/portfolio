import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import AboutMe from '../partials/AboutMe';
import Skillset from '../partials/Skillset';
import Projects from '../partials/Projects';
import Cta from '../partials/Cta';
import Footer from '../partials/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <AboutMe />
        {/* <Skillset /> */}
        <Projects />
        <Cta />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;