import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";

function preventDefault(event) {
    event.preventDefault();
}

export default function Deposits() {


    return (
        <React.Fragment>
            <Title>Profits</Title>
            <Typography component="p" variant="h10" paddingBottom={5}>
                $3,024.00
            </Typography>
            <Title>Transactions Count</Title>
            <Typography component="p" variant="h10" paddingBottom={5}>
                2.304 Transactions
            </Typography>
            <div>
                <Link color="primary" href="#" onClick={preventDefault}>
                    Get All Transactions Details
                </Link>
            </div>
        </React.Fragment>
    );
}
