# Visitor Pass Management System - Frontend

## Overview

The frontend of the Visitor Pass Management System is developed using React.js. It provides an interactive user interface for managing visitors, appointments, passes, logs, reports, and analytics.

The application supports role-based access for Admin, Security Staff, Employees, and Visitors.

---

## Features

### Authentication

* User Login
* JWT Token Storage
* Protected Routes
* Logout Functionality

### Visitor Management

* Register New Visitors
* View Visitor Details
* Search Visitors

### Appointment Management

* Create Appointments
* Assign Visitors to Hosts
* Approve/Reject Appointments
* View Appointment History

### Pass Management

* Generate Visitor Passes
* Display QR Codes
* Download PDF Visitor Passes

### Check-In / Check-Out

* Visitor Entry Management
* Visitor Exit Management
* View Check Logs

### Dashboard

* Total Visitors
* Total Appointments
* Total Passes
* Total Logs
* Analytics Overview

### Reports

* Export Visitors Report
* Export Appointments Report
* Export Passes Report
* Export Logs Report

---

## Technology Stack

* React.js
* React Router DOM
* Axios
* HTML5
* CSS3
* JavaScript (ES6)

---

## Installation

### Clone Repository

git clone <repository-url>

### Navigate to Frontend

cd frontend

### Install Dependencies

npm install

### Start Development Server

npm start

Application will run on:

http://localhost:3000

---

## Environment Variables

Create a .env file inside frontend folder:

REACT_APP_API_URL=https://v-pms-backend.onrender.com/api

For Production:

REACT_APP_API_URL=https://your-render-backend-url.onrender.com/api

---

## Project Structure

frontend

├── public

├── src

│   ├── components

│   ├── layouts

│   ├── pages

│   ├── services

│   ├── App.js

│   └── index.js

├── package.json

└── README.md

---

## User Roles

### Admin

* Dashboard
* Visitors
* Appointments
* Passes
* Logs
* Reports

### Security

* Passes
* Check-In
* Check-Out
* Logs

### Employee

* Appointments
* Visitor Approval

### Visitor

* View Pass

---

## Deployment

### Netlify

Base Directory:

frontend

Build Command:

npm run build

Publish Directory:

build

---

## Developed By

Neel Patel

B.Tech Computer Science Engineering
