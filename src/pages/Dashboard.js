import {
    useEffect,
    useState
} from "react";

import MainLayout from "../layouts/MainLayout";

import {
    getDashboardStats
} from "../services/dashboardService";

function Dashboard() {

    const [stats, setStats] =
        useState({});

    useEffect(() => {

        const fetchStats =
            async () => {

                try {

                    const data =
                        await getDashboardStats();

                    setStats(data);

                } catch (error) {

                    console.log(error);
                }
            };

        fetchStats();

    }, []);

    return (

        <MainLayout>

            <h1>
                Dashboard
            </h1>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fit,minmax(220px,1fr))",
                    gap: "20px",
                    marginTop: "20px"
                }}
            >

                <div style={cardStyle}>
                    <h3>
                        Visitors
                    </h3>
                    <h1>
                        {
                            stats.totalVisitors
                        }
                    </h1>
                </div>

                <div style={cardStyle}>
                    <h3>
                        Appointments
                    </h3>
                    <h1>
                        {
                            stats.totalAppointments
                        }
                    </h1>
                </div>

                <div style={cardStyle}>
                    <h3>
                        Approved
                    </h3>
                    <h1>
                        {
                            stats.approvedAppointments
                        }
                    </h1>
                </div>

                <div style={cardStyle}>
                    <h3>
                        Passes
                    </h3>
                    <h1>
                        {
                            stats.totalPasses
                        }
                    </h1>
                </div>

                <div style={cardStyle}>
                    <h3>
                        Logs
                    </h3>
                    <h1>
                        {
                            stats.totalLogs
                        }
                    </h1>
                </div>

            </div>

        </MainLayout>
    );
}

const cardStyle = {
    background: "white",
    padding: "25px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow:
        "0 0 10px rgba(0,0,0,0.1)"
};

export default Dashboard;