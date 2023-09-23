import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import UsersData from "./users";

export default function UserDataPage() {
    return (
        <>
            <Grid item xs={12}>
                <Paper
                    sx={{
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <UsersData />
                </Paper>
            </Grid>
        </>
    );
}
