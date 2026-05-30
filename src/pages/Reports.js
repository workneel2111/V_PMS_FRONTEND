import MainLayout from "../layouts/MainLayout";

function Reports() {

    return (

        <MainLayout>

            <h1>
                Reports
            </h1>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px"
                }}
            >

                <a
                    href="http://localhost:5000/api/reports/visitors"
                >
                    <button>
                        Export Visitors
                    </button>
                </a>

                <a
                    href="http://localhost:5000/api/reports/appointments"
                >
                    <button>
                        Export Appointments
                    </button>
                </a>

                <a
                    href="http://localhost:5000/api/reports/passes"
                >
                    <button>
                        Export Passes
                    </button>
                </a>

                <a
                    href="http://localhost:5000/api/reports/logs"
                >
                    <button>
                        Export Logs
                    </button>
                </a>

            </div>

        </MainLayout>
    );
}

export default Reports;