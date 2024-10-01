import React, { useState, useEffect } from "react";
import './dashboard.css';
import { useDispatch, useSelector } from 'react-redux';
 import { fetchData, getUsers } from "../redux/dbslice.js"; 
 import { getBookings, setLoading, addBookings } from "../redux/dbslice"; 

 const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState("overview");

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="admin-dashboard">
            {/* Sidebar navigation */}
            <aside className="sidebar">
                <h2>Admin Panel</h2>
                <ul className="sidebar-nav">
                    <li
                        className={activeTab === "overview" ? "active" : ""}
                        onClick={() => handleTabClick("overview")}
                    >
                        Overview
                    </li>
                    <li
                        className={activeTab === "manage-users" ? "active" : ""}
                        onClick={() => handleTabClick("manage-users")
}

                    >
                        Manage Users
                    </li>
                    <li
                        className={activeTab === "manage-content" ? "active" : ""}
                        onClick={() => handleTabClick("manage-content")}

                    >
                        Manage Content
                    </li>
                    <li
                        className={activeTab === "reports" ? "active" : ""}
                        onClick={() => handleTabClick("reports")}
                    >
                        View Reports
                    </li>
                    <li
                        className={activeTab === "reservations" ? "active" : ""}
                        onClick={() => handleTabClick("reservations")
}

                    >
                        Reservations
                    </li>
                    <li
                        className={activeTab === "reserve" ? "active" : ""}
                        onClick={() => handleTabClick("reserve")}
                    >
                        Reserve
                    </li>
                </ul>
            </aside>

            {/* Main content area */}
            <main className="main-content">
                <header className="admin-header">
                    <h1>Welcome, Admin</h1>
                </header>

                <section className="content-section">
                    {/* Render tab content dynamically based on activeTab */}
                    {activeTab === "overview" && (
                        <div className="dashboard-overview"
>

                            <h2>Overview</h2>
                            <p>Here's a summary of the admin activities.</p>
                        </div>
                    )}
                    {activeTab === "manage-users" && (
                        <div className="manage-users">
                            <h2>Manage Users</h2>
                            <p>Here, you can view, edit, or remove users from the system.</p>
                        </div>
                    )}
                    {activeTab === "manage-content" && (
                        <div className="manage-content">
                            <h2>Manage Content</h2>
                            <p>Manage the website content, add or remove sections.</p>
                        </div>
                    )}
                    {activeTab === "reports" && (
                        <div className="view-reports">
                            <h2>View Reports</h2>
                            <p>View system reports and performance statistics.</p>
                        </div>
                    )}
                    {activeTab === "reservations" && (
                        <div className="view-reservations">
                            <h2>Reservations</h2>
                            <p>View and manage all reservations made by users.</p>
                        </div>
                    )}
                    {activeTab === "reserve" && (
                        <div className="reserve-form">
                            <h2>Make a Reservation</h2>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" name="name" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="date">Date</label>
                                    <input type="date" id="date" name="date" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="time">Time</label>
                                    <input type="time" id="time" name="time" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="guests">Number of Guests</label>
                                    <input type="number" id="guests" name="guests" required />
                                </div>
                                <button type="submit" className="reserve-btn">
                                    Submit Reservation
                                </button>
                            </form>
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
};

export default AdminDashboard;