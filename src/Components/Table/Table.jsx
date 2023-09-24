import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axiosInstance from "../../config/api";

export default function BasicTable() {
    const [users, setUsers] = useState([]);

    const getdataCashier = async () => {
        try {
            const res = await axiosInstance.get(
                `http://localhost:5000/admin/user/`
            );
            console.log(res.data.result);
            setUsers(res.data.result);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getdataCashier();
    });
    return (
        <div className="w-screen h-screen flex justify-center items-center justify-center">
            <div className="">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Username</TableCell>
                                <TableCell align="right">Fullname</TableCell>
                                <TableCell align="right">Email</TableCell>
                                <TableCell align="right">Phone</TableCell>
                                <TableCell align="right">User Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.username}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {row.fullname}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.email}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.phone_number}
                                    </TableCell>
                                    <TableCell align="right">
                                        <span
                                            style={{
                                                color:
                                                    row.users_statuses_id === 1
                                                        ? "green"
                                                        : row.users_statuses_id ===
                                                          2
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
                </TableContainer>
            </div>
        </div>
    );
}
