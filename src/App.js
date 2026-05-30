import {
    Routes,
    Route
} from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Visitors from "./pages/Visitors";
import Appointments from "./pages/Appointments";
import Passes from "./pages/Passes";
import Logs from "./pages/Logs";
import Reports from "./pages/Reports";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

    return (

            <Routes>

                {/* PUBLIC */}

                <Route
                    path="/"
                    element={<Login />}
                />

                {/* DASHBOARD */}

                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />

                {/* VISITORS */}

                <Route
                    path="/visitors"
                    element={
                        <ProtectedRoute>
                            <Visitors />
                        </ProtectedRoute>
                    }
                />

                {/* APPOINTMENTS */}

                <Route
                    path="/appointments"
                    element={
                        <ProtectedRoute>
                            <Appointments />
                        </ProtectedRoute>
                    }
                />

                {/* PASSES */}

                <Route
                    path="/passes"
                    element={
                        <ProtectedRoute>
                            <Passes />
                        </ProtectedRoute>
                    }
                />

                {/* LOGS */}

                <Route
                    path="/logs"
                    element={
                        <ProtectedRoute>
                            <Logs />
                        </ProtectedRoute>
                    }
                />

                {/* REPORTS */}

                <Route
                    path="/reports"
                    element={
                        <ProtectedRoute>
                            <Reports />
                        </ProtectedRoute>
                    }
                />

            </Routes>

    );
}

export default App;