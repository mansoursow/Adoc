// src/routes/AppRoutes.tsx
import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import MatrixPage from '../pages/Matrix/MatrixPage';
import NormesAuditPage from '../pages/NormesAudit/NormesAuditPage';
import DashboardPage from '../pages/Dashboard/DashboardPage';
import ControlProgramPage from '../pages/ControlProgram/ControlProgramPage';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <DashboardPage /> }, // ✅ IMPORTANT
      { path: "matrix", element: <MatrixPage /> },
      { path: "os/:osId/program", element: <ControlProgramPage /> },
      { path: "normes-audit", element: <NormesAuditPage /> }
    ]
  }
]);
