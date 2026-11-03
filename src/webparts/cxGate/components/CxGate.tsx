
import * as React from 'react';
import { HashRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import type { ICxGateProps } from './ICxGateProps';

import NavBar from './NavBar/NavBar';
import HeroBanner from './HeroBanner/HeroBanner';
import GovernanceDashboard from './GovernanceDashboard/GovernanceDashboard';

import teamCollaborateImage from '../assets/teamcollaboration.png';
import NewProject from './NewProject/NewProject';

interface IHomeProps {
  imageUrl: string;
}

const Home: React.FC<IHomeProps> = ({ imageUrl }) => {
  const navigate = useNavigate();

  return (
    <HeroBanner
      bgImageUrl={imageUrl}
      onRegisterProject={() => navigate('/register')}
      onOpenProject={() => navigate('/governance')}
    />
  );
};

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <GovernanceDashboard
      onHome={() => navigate('/')}
    />
  );
};

const RegisterProjectPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Register Project</h2>

      <button onClick={() => navigate('/')}>
        Back to Home
      </button>
    </div>
  );
};

export default class CxGate extends React.Component<ICxGateProps> {

  public render(): React.ReactElement<ICxGateProps> {

    return (
      <HashRouter>
        <NavBar />

        <Routes>

          <Route
            path="/"
            element={
              <Home imageUrl={teamCollaborateImage} />
            }
          />

          <Route
            path="/governance"
            element={<Dashboard />}
          />

          <Route path="/register" element={<NewProject onSubmit={(project) => {
  console.log('New project:', project);
}}  />} />

          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />

        </Routes>

      </HashRouter>
    );
  }
}
