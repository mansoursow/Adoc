// src/routes/AppRoutes.tsx
import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import MatrixPage from '../pages/Matrix/MatrixPage';

// Chemin corrigé avec le sous-dossier
import ControlProgramPage from '../pages/ControlProgram/ControlProgramPage';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <div className="p-8">Sélectionnez une option dans le menu.</div> },
      { path: "matrix", element: <MatrixPage /> },
      { path: "os/:osId/program", element: <ControlProgramPage /> }
    ]
  }
]);