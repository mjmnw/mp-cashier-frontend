import React, { useState, useEffect } from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "../MUI/Title";
import axiosInstance from "../../config/api";

function formatCurrency(price) {
    const formattedPrice = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    }).format(price);
    return formattedPrice;
}

function formatDate(birthdate) {
    const inputDate = new Date(birthdate);

    if (isNaN(inputDate.getTime())) {
        return "Invalid Date";
    }

    const year = inputDate.getFullYear();
    const month = String(inputDate.getMonth() + 1).padStart(2, "0");
    const day = String(inputDate.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
}

export default function UsersData() {
    const [userData, setUserData] = useState([]);

    const getUserData = async () => {
        try {
            const users = await axiosInstance.get(
                `http://localhost:5000/admin/user/`
            );
            console.log(users.data.result);
            setUserData(users.data.result);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUserData();
    }, []);

    return (
        <React.Fragment>
            <Title>Lucy Sky's Users</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>User ID</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Full Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Birthdate</TableCell>
                        <TableCell>Phone Number</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Gender</TableCell>
                        <TableCell>Salary</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {userData.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell align="center">{row.id}</TableCell>
                            <TableCell>{row.username}</TableCell>
                            <TableCell>{row.fullname}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>{formatDate(row.birthdate)}</TableCell>
                            <TableCell>{row.phone_number}</TableCell>
                            <TableCell>{row.address}</TableCell>
                            <TableCell>{row.gender}</TableCell>
                            <TableCell>{formatCurrency(row.salary)}</TableCell>
                            <TableCell>
                                {" "}
                                {row.users_roles_id === 1
                                    ? "Admin"
                                    : row.users_roles_id === 2
                                    ? "Cashier"
                                    : ""}
                            </TableCell>
                            <TableCell>
                                <span
                                    style={{
                                        color:
                                            row.users_statuses_id === 1
                                                ? "green"
                                                : row.users_statuses_id === 2
                                                ? "red"
                                                : "black",
                                    }}
                                >
                                    {row.users_statuses_id === 1
                                        ? "Active"
                                        : row.users_statuses_id === 2
                                        ? "Deactive"
                                        : ""}
                                </span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Link color="primary" href="http://localhost:3000/admin/users/edit" sx={{ mt: 3 }}>
                Edit User Data
            </Link>
        </React.Fragment>
    );
}