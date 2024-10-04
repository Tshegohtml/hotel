// AdminDashboard.js
import React, { useState } from "react";
import './dashboard.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataFirestore } from "../redux/AdminSlice";

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState("overview");
    const dispatch = useDispatch();

    const { data, loading, error } = useSelector((state) => state.admin);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        if (tabName === "reservations") {
            fetchDataFirestore(dispatch);  // Fetch booking data when "reservations" tab is clicked
        }
    };

    return (
        <div className="admin-dashboard">
            {/* Sidebar navigation */}
            <aside className="sidebar">
                <h2>Admin Panel</h2>
                <ul className="sidebar-nav">
                    <li
                        className={activeTab === "reservations" ? "active" : ""}
                        onClick={() => handleTabClick("reservations")}
                    >
                        Bookings
                    </li>
                    <li
                        className={activeTab === "overview" ? "active" : ""}
                        onClick={() => handleTabClick("overview")}
                    >
                        Overview
                    </li>
                </ul>
            </aside>

            {/* Main content area */}
            <main className="main-content">
                <header className="admin-header">
                    <h1>Welcome, Admin</h1>
                </header>

                <section className="content-section">
                    {activeTab === "overview" && (
                        <div className="dashboard-overview">
                            <h2>Overview</h2>
                            <p>Here's a summary of the admin activities.</p>
                        </div>
                    )}

                    {activeTab === "reservations" && (
                        loading ? (
                            <p>Loading...</p>
                        ) : error ? (
                            <p>Error loading bookings: {error}</p>
                        ) : data.length === 0 ? (
                            <p>No bookings available.</p>
                        ) : (
                            <div className="view-reservations">
                                <h2>Reservations</h2>
                                <table className="bookings-table">
                                    <thead>
                                        <tr>
                                            <th>Check-in</th>
                                            <th>Checkout</th>
                                            <th>Guest Name</th>
                                            <th>Email</th>
                                            <th>Room Type</th>
                                            <th>Guests</th>
                                            <th>Total Price</th>
                                            <th>Paid</th>
                                            <th>Transaction ID</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((booking, index) => (
                                            <tr key={index}>
                                                <td>{booking.checkin}</td>
                                                <td>{booking.checkout}</td>
                                                <td>{booking.firstName} {booking.lastName}</td>
                                                <td>{booking.email}</td>
                                                <td>{booking.roomType}</td>
                                                <td>{booking.guests}</td>
                                                <td>{booking.totalPrice}</td>
                                                <td>{booking.paid}</td>
                                                <td>{booking.transactionId}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )
                    )}
                </section>
            </main>
        </div>
    );
};

export default AdminDashboard;
