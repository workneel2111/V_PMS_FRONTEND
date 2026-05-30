import { Link, useNavigate }
from "react-router-dom";

function MainLayout({
    children
}) {

    const navigate =
        useNavigate();

    const user =
        JSON.parse(
            localStorage.getItem(
                "user"
            )
        );

    const handleLogout = () => {

        localStorage.removeItem(
            "token"
        );

        localStorage.removeItem(
            "user"
        );

        navigate("/");
    };

    return (

        <div
            style={{
                display: "flex",
                minHeight: "100vh"
            }}
        >

            {/* SIDEBAR */}

            <aside
                style={{
                    width: "250px",
                    background: "#111827",
                    color: "white",
                    padding: "20px"
                }}
            >

                <h2>
                    Visitor Pass
                </h2>

                <p>
                    {user?.name}
                </p>

                <p>
                    Role:
                    {" "}
                    {user?.role}
                </p>

                <nav
                    style={{
                        display: "flex",
                        flexDirection:
                            "column",
                        gap: "15px",
                        marginTop: "30px"
                    }}
                >

                    <Link
                        to="/dashboard"
                        style={linkStyle}
                    >
                        Dashboard
                    </Link>

                    <Link
                        to="/visitors"
                        style={linkStyle}
                    >
                        Visitors
                    </Link>

                    {/* EMPLOYEE */}

                    {user?.role ===
                        "employee" && (

                        <Link
                            to="/appointments"
                            style={linkStyle}
                        >
                            Appointments
                        </Link>

                    )}

                    {/* ADMIN */}

                    {user?.role ===
                        "admin" && (

                        <>
                            <Link
                                to="/appointments"
                                style={linkStyle}
                            >
                                Appointments
                            </Link>

                            <Link
                                to="/passes"
                                style={linkStyle}
                            >
                                Passes
                            </Link>

                            <Link
                                to="/logs"
                                style={linkStyle}
                            >
                                Logs
                            </Link>

                            <Link
                                to="/reports"
                                style={linkStyle}
                            >
                                Reports
                            </Link>
                        </>
                    )}

                    {/* SECURITY */}

                    {user?.role ===
                        "security" && (

                        <>
                            <Link
                                to="/passes"
                                style={linkStyle}
                            >
                                Passes
                            </Link>

                            <Link
                                to="/logs"
                                style={linkStyle}
                            >
                                Logs
                            </Link>
                        </>
                    )}

                    {/* VISITOR */}

                    {user?.role ===
                        "visitor" && (

                        <Link
                            to="/passes"
                            style={linkStyle}
                        >
                            My Pass
                        </Link>

                    )}

                </nav>

                <button
                    onClick={
                        handleLogout
                    }
                    style={{
                        marginTop:
                            "40px",
                        width: "100%",
                        padding:
                            "10px"
                    }}
                >
                    Logout
                </button>

            </aside>

            {/* MAIN */}

            <main
                style={{
                    flex: 1,
                    padding: "20px",
                    background:
                        "#f3f4f6"
                }}
            >
                {children}
            </main>

        </div>
    );
}

const linkStyle = {

    color: "white",

    textDecoration:
        "none",

    padding: "10px",

    background:
        "#1f2937",

    borderRadius:
        "5px"
};

export default MainLayout;