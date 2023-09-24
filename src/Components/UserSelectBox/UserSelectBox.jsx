import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axiosInstance from "../../config/api";

export default function SelectUser() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState("");

    const getUsers = async () => {
        try {
            const res = await axiosInstance.get(
                "http://localhost:5000/admin/user/"
            );
            setUsers(res.data.result);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    const handleUserChange = (event) => {
        setSelectedUser(event.target.value);
    };

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-simple-select-autowidth-label">
                    Select User
                </InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={selectedUser}
                    onChange={handleUserChange}
                    autoWidth
                    label="Full Name"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {users.map((user) => (
                        <MenuItem key={user.id} value={user.id}>
                            {user.fullname}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
