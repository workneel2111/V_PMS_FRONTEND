import { useEffect, useState } from "react";

import MainLayout from "../layouts/MainLayout";

import {
    getLogs
} from "../services/logService";

function Logs() {

    const [logs, setLogs] =
        useState([]);

    /* =========================
       FETCH LOGS
    ========================= */

    const fetchLogs = async () => {

        try {

            const data =
                await getLogs();

            setLogs(data);

        } catch (error) {

            console.log(error);
        }
    };

    useEffect(() => {

        fetchLogs();

    }, []);

    return (
        <MainLayout>

            <h1
                style={{
                    marginBottom: "20px"
                }}
            >
                Check Logs
            </h1>

            <div
                style={{
                    display: "grid",
                    gap: "20px"
                }}
            >

                {logs.length > 0 ? (

                    logs.map((log) => (

                        <div
                            key={log._id}
                            style={cardStyle}
                        >

                            <h3>
                                👤 {
                                    log.visitor
                                        ?.fullName ||
                                    "Unknown Visitor"
                                }
                            </h3>

                            <p>
                                📌 Status:
                                {" "}
                                <strong>
                                    {
                                        log.status
                                    }
                                </strong>
                            </p>

                            <p>
                                🕒 Check-In:
                                {" "}
                                {
                                    log.checkInTime
                                        ? new Date(
                                            log.checkInTime
                                        ).toLocaleString()
                                        : "N/A"
                                }
                            </p>

                            <p>
                                🕓 Check-Out:
                                {" "}
                                {
                                    log.checkOutTime
                                        ? new Date(
                                            log.checkOutTime
                                        ).toLocaleString()
                                        : "Not Checked Out"
                                }
                            </p>

                            <p>
                                🎫 Pass ID:
                                {" "}
                                {
                                    log.pass?._id
                                }
                            </p>

                        </div>
                    ))

                ) : (

                    <p>
                        No Logs Found
                    </p>
                )}

            </div>

        </MainLayout>
    );
}

/* =========================
   STYLES
========================= */

const cardStyle = {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow:
        "0 0 10px rgba(0,0,0,0.1)"
};

export default Logs;