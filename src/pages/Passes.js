import { useEffect, useState } from "react";

import MainLayout from "../layouts/MainLayout";

import {
    getPasses
} from "../services/passService";

function Passes() {

    const [passes, setPasses] =
        useState([]);

    /* =========================
       FETCH PASSES
    ========================= */

    const fetchPasses = async () => {

        try {

            const data =
                await getPasses();

            setPasses(data);

        } catch (error) {

            console.log(error);
        }
    };

    useEffect(() => {

        fetchPasses();

    }, []);

    return (
        <MainLayout>

            <h1
                style={{
                    marginBottom: "20px"
                }}
            >
                Visitor Passes
            </h1>

            <div
                style={{
                    display: "grid",
                    gap: "20px"
                }}
            >

                {passes.length > 0 ? (

                    passes.map((pass) => (

                        <div
                            key={pass._id}
                            style={cardStyle}
                        >

                            <h3>
                                👤 {
                                    pass.visitor
                                        ?.fullName ||
                                    "Unknown Visitor"
                                }
                            </h3>

                            <p>
                                🆔 Pass ID:
                                {" "}
                                {pass._id}
                            </p>

                            <p>
                                📅 Valid Till:
                                {" "}
                                {
                                    new Date(
                                        pass.validTill
                                    ).toLocaleString()
                                }
                            </p>

                            {/* QR CODE */}

                            {pass.qrCode && (

                                <>
                                    <img
                                        src={pass.qrCode}
                                        alt="QR Code"
                                        width="200"
                                        style={{
                                            marginTop:
                                                "10px"
                                        }}
                                    />

                                    <br />
                                    <br />

                                    {/* PDF DOWNLOAD */}

                                    <a
                                        href={`http://localhost:5000/api/passes/pdf/${pass._id}`}
                                        target="_blank"
                                        rel="noreferrer"
                                    >

                                        <button
                                            style={
                                                downloadBtn
                                            }
                                        >
                                            Download PDF
                                        </button>

                                    </a>

                                </>
                            )}

                        </div>
                    ))

                ) : (

                    <p>
                        No Passes Found
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

const downloadBtn = {
    padding: "10px 15px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
};

export default Passes;