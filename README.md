# Gym Point

## **Project Overview**
The Gym Class Scheduling and Membership Management System is a web application designed to streamline gym operations. It features role-based access for Admins, Trainers, and Trainees, enabling efficient management of trainers, class schedules, and bookings. The system enforces business rules such as daily schedule limits and maximum class sizes while providing a seamless user experience with authentication, mobile responsiveness, and error handling.

---

## **Live Links**
- **Frontend**: [Deployed Frontend Link](https://gympoint.vercel.app/)
- **Backend**: [Deployed Backend Link](https://gympoint.onrender.com/)

---

## **Technology Stack**
### **Frontend**
- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Authentication**: JWT
- **Programming Language**: JavaScript

### **Backend**
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JWT
- **Programming Language**: JavaScript

---

## **Features**
### **Admin**
- Manage trainers (add, update, delete).
- Schedule classes (enforce rules: max 5 schedules/day, max 10 trainees/class).
- Assign trainers to classes.

### **Trainer**
- View assigned class schedules (date, time, trainees).

### **Trainee**
- Register and manage their profiles.
- Book available class schedules (max 10 trainees/class).

---

## **API Documentation**
### **Authentication**
#### **POST /user/login**
- **Request Body**:
  ```json
  {
    "email": "johndoe@gmail.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
    {
        "name": "John Doe",
        "email": "johndoe@gmail.com",
        "token": "your-jwt-token"
    }
  ```

#### **POST /user/register**
- **Request Body**:
  ```json
  {
    "fullName": "John Doe",
    "email": "johndoe@gmail.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "name": "John Doe",
    "email": "johndoe@gmail.com",
    "token":"your-jwt-token"
  }
  ```

### **Trainer Management (Admin Only)**
#### **GET /trainers**
- Fetch all trainers.
  
#### **GET /trainers/:userId**
- Fetch single trainers.

#### **PATCH /trainers/create/:userId**
- **Request Body**:
  ```json
  {
    "specialization": "Specialization"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "Trainer create successfully"
  }
  ```

#### **PATCH /trainers/remove/:userId**
- **Request Body**:
- no need body
  
- **Response**:
  ```json
  {
    "success": true,
    "message": "Trainer remove successfully"
  }
  ```

### **Schedule (Admin Only)**
#### **GET /schedule**
- Fetch all schedules

#### **GET /schedule/:id**
- Fetch single schedule

#### **POST /schedule**
- **Request Body**:
  ```json
  {
    "date": "2024-12-02",
    "time": "10:00 AM",
    "class": "classId",
    "triner":"tainerId",
    "trainees":["traineesId"] // optional
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "Scheduled create successfully"
  }
  ```
  
#### **PUT /schedules/:id**
- Update a schedule.

#### **DELETE /schedules/:id**
- Delete a schedule.

---