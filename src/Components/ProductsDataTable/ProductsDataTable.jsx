import React, { useState, useEffect } from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "../MUI/Title";
import axios from "axios";

function formatCurrency(price) {
    const formattedPrice = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    }).format(price);
    return formattedPrice;
}

export default function ProductsData() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const getProductData = async () => {
        try {
            const res = await axios.get(
                `http://localhost:5000/product/?_limit=20&_page=1&_sortBy=id&_sortDir=ASC&minPrice=0&maxPrice=&minStock=0&maxStock=&selectedCategory=&searchProduct=`
            );
            console.log(res.data.result.rows);
            setProducts(res.data.result.rows);
        } catch (error) {
            console.log(error);
        }
    };

    const getCategories = async () => {
        try {
            const res = await axios.get(
                `http://localhost:5000/product/category/`
            );
            console.log(res.data.result);
            setCategories(res.data.result);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProductData();
        getCategories();
    }, []);

    return (
        <React.Fragment>
            <Title>Lucy Sky's Products</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Product ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Stock</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell align="center">{row.id}</TableCell>
                            <TableCell>{row.product_name}</TableCell>
                            <TableCell>{row.product_description}</TableCell>
                            <TableCell>
                                {formatCurrency(row.product_price)}
                            </TableCell>
                            <TableCell>{row.product_stock}</TableCell>
                            <TableCell align="center">
                                {categories.find(
                                    (category) =>
                                        category.id ===
                                        row.products_categories_id
                                )?.product_category || "Category Not Found"}
                            </TableCell>
                            <TableCell>
                                <span
                                    style={{
                                        color:
                                            row.products_statuses_id === 1
                                                ? "green"
                                                : row.products_statuses_id === 2
                                                ? "red"
                                                : "black",
                                    }}
                                >
                                    {row.products_statuses_id === 1
                                        ? "Active"
                                        : row.products_statuses_id === 2
                                        ? "Deactive"
                                        : ""}
                                </span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Link
                color="primary"
                href="http://localhost:3000/admin/users/edit"
                sx={{ mt: 3 }}
            >
                Edit Products Data
            </Link>
        </React.Fragment>
    );
}
