import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import axiosInstance from "../../config/api";

export default function MultiActionAreaCard() {
    const getAllProducts = async () => {
        try {
            const res = await axiosInstance.get(`/product/`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {getAllProducts.map(({ link, path }) => (
                            <a
                                key={link}
                                href={path}
                                className="block text-white hover:text-red-800"
                            >
                                {link}
                            </a>
                        ))}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Add To Cart
                </Button>
            </CardActions>
        </Card>
    );
}
