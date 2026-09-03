import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ProjectPage from './components/project-page';
import ChemicalERP from './components/chemicalERP';
import NexusIndia from './components/nexusIndia';
import BeyondSixSenses from './components/beyondSixSenses';
import SmartTailoring from './components/smartTailoring';
import CAJNK from './components/cajnk';
import CivikExperiences from './components/civikExperiences';
import LPC from './components/lpc';
import Vaachi from './components/vaachi';
import Marigold from './components/marigold';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>

          {/* Home / Project Page */}
          <Route path="/" element={<ProjectPage />} />

          {/* Featured Projects */}
          <Route
            path="/featured-projects/chemical-erp"
            element={<ChemicalERP />}
          />

          <Route
            path="/featured-projects/nexus-india"
            element={<NexusIndia />}
          />

          <Route
            path="/featured-projects/beyond-six-senses"
            element={<BeyondSixSenses />}
          />

          <Route
            path="/featured-projects/smart-tailoring"
            element={<SmartTailoring />}
          />

          {/* Projects */}
          <Route
            path="/projects/cajnk"
            element={<CAJNK />}
          />

          <Route
            path="/projects/civik-experiences"
            element={<CivikExperiences />}
          />

          <Route
            path="/projects/lpc"
            element={<LPC />}
          />

          <Route
            path="/projects/vaachi"
            element={<Vaachi />}
          />

          <Route
            path="/projects/marigold"
            element={<Marigold />}
          />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;