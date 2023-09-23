import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

function UserTitle(props) {
    return (
        <Typography component="h2" variant="h10" color="primary" gutterBottom>
            {props.children}
        </Typography>
    );
}

UserTitle.propTypes = {
    children: PropTypes.node,
};

export default UserTitle;
