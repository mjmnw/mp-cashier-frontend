import * as React from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
// import { useState, useEffect } from "react";
// import axiosInstance from "../../config/api";

export default function UsersEditCard() {
    // const [userData, setUserData] = useState([]);

    // const getUserData = async () => {
    //     try {
    //         const users = await axiosInstance.get(
    //             `http://localhost:5000/admin/user/`
    //         );
    //         console.log(users.data.result);
    //         setUserData(users.data.result);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // useEffect(() => {
    //     getUserData();
    // }, []);

    return (
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <div>
                <TextField
                    label="Username"
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: "25ch" }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start"></InputAdornment>
                        ),
                    }}
                />
                <TextField
                    label="Full Name"
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: "35ch" }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start"></InputAdornment>
                        ),
                    }}
                />
                <TextField
                    label="Email"
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: "35ch" }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start"></InputAdornment>
                        ),
                    }}
                />
                <TextField
                    label="Birthdate"
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: "25ch" }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start"></InputAdornment>
                        ),
                    }}
                />
                <TextField
                    label="Phone Number"
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: "35ch" }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start"></InputAdornment>
                        ),
                    }}
                />
                <TextField
                    label="Address"
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: "35ch" }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start"></InputAdornment>
                        ),
                    }}
                />
                <FormControl sx={{ m: 1, width: "50ch" }}>
                    <InputLabel htmlFor="outlined-adornment-amount">
                        Salary
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        startAdornment={
                            <InputAdornment position="start">Rp</InputAdornment>
                        }
                        label="Amount"
                    />
                </FormControl>
                <div className="p-2">
                    <Box sx={{ maxWidth: 120, borderColor: "grey.500" }}>
                        <FormControl fullWidth>
                            <InputLabel
                                id="demo-simple-select-label"
                                sx={{ fontSize: "13px", padding: "4px" }}
                            >
                                Gender
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Gender"
                            >
                                <MenuItem value={10}>Male</MenuItem>
                                <MenuItem value={20}>Female</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
            </div>
            <div className="pt-20 flex gap-80 pl-2">
                <Box sx={{ minWidth: 120, borderColor: "grey.500" }}>
                    <FormControl fullWidth>
                        <InputLabel
                            id="demo-simple-select-label"
                            sx={{ fontSize: "13px", padding: "4px" }}
                        >
                            Status
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Status"
                        >
                            <MenuItem value={10}>Active</MenuItem>
                            <MenuItem value={20}>Deactive</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ minWidth: 120, borderColor: "grey.500" }}>
                    <FormControl fullWidth>
                        <InputLabel
                            id="demo-simple-select-label"
                            sx={{ fontSize: "13px", padding: "4px" }}
                        >
                            Role
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Role"
                        >
                            <MenuItem value={10}>Admin</MenuItem>
                            <MenuItem value={20}>Cashier</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Button
                    variant="contained"
                    sx={{ marginLeft: "80px" }}
                    endIcon={<SendIcon />}
                >
                    Apply Changes
                </Button>
            </div>
        </Box>
    );
}
