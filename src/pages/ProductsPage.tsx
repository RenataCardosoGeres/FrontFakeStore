import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { Card, CardContent, CardMedia, Typography, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products", {
      headers: { Authorization: `Bearer ${token}` },
    }).then(response => {
      setProducts(response.data);
    }).catch(error => {
      console.error("Erro ao buscar produtos", error);
    });
  }, [token]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      <Button onClick={handleLogout}>Logout</Button>
      <Grid container spacing={2}>
        {products.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia component="img" height="140" image={product.image} />
              <CardContent>
                <Typography variant="h6">{product.title}</Typography>
                <Typography variant="body2">{product.price} USD</Typography>
                <Typography>{product.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductsPage;
