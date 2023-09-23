import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect() {
    const [age, setAge] = React.useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120, borderColor: 'grey.500'}}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" sx={{fontSize: "13px", padding: "4px"}}>By Name</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="By Name"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>A - Z</MenuItem>
                    <MenuItem value={20}>Z - A</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
