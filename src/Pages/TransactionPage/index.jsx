import { Box, Grid, Input, TextField, Typography } from "@mui/material";
import TopBarCashier from "../../Components/TopBarCashier";
import axiosInstance from "../../config/api";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";
import _ from "lodash";

export default function TransactionPage({ products }) {
    const navigate = useNavigate();
    const userSelector = useSelector((state) => state.auth);
    const [details, setDetails] = useState([]);
    const [carts, setCarts] = useState([]);
    const [change, setChange] = useState(0);

    const getCarts = async () => {
        try {
            const res = await axiosInstance.get(
                `/cart/get-cart/${userSelector.id}`
            );

            setCarts(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const totalCartValue = carts.reduce((accumualtor, cart) => {
        return parseInt(accumualtor) + parseInt(cart.product.product_price);
    }, 0);

    const createTransaction = async () => {
        try {
            for (let i = 0; i < carts.length; i++) {
                await axiosInstance.post("/transaction/add-new-transaction", {
                    users_id: userSelector.id,
                    transaction_total_price: totalCartValue,
                    transaction_status: "PENDING",
                    cart_quantity: carts[i].cart_quantity,
                    products_id: carts[i].product.id,
                });
                navigate("/transaction");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const calculateChange = (inputValue) => {
        let changes = 0;

        changes = totalCartValue - parseInt(inputValue);

        setChange(changes);
    };

    useEffect(() => {
        if (userSelector.id) {
            getCarts();
        }
    }, [userSelector.id]);

    const fetchTransactionItems = async () => {
        try {
            const res = await axiosInstance.get(
                `/transaction/get-details/${userSelector.id}`
            );
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (userSelector.id) {
            fetchTransactionItems();
        }
    }, [userSelector.id]);

    return (
        <div>
            <TopBarCashier />

            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Box
                        flex
                        flexDirection="row"
                        gap={1}
                        flexWrap="wrap"
                        border="1px solid red"
                        // width="fit-content"
                    >
                        {carts.map((value, index) => {
                            console.log(carts);
                            return (
                                <ProductCard
                                    key={value.id}
                                    product_id={value.id}
                                    product_name={value.product.product_name}
                                    product_image={value.product.product_image}
                                    product_description={
                                        value.product.product_description
                                    }
                                    product_price={value.product.product_price}
                                />
                            );
                        })}
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography>{totalCartValue.toLocaleString()}</Typography>
                    <TextField
                        onChange={(e) => calculateChange(e.target.value)}
                    />
                    <Typography>Change: {change}</Typography>
                </Grid>
            </Grid>
            <button onClick={createTransaction}>asdf</button>
        </div>
    );
}
