import { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Container, Box } from "@mui/material";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("https://fakestoreapi.com/auth/login", { username, password });
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      navigate("/products");
    } catch (error) {
      console.error("Erro ao fazer login", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField label="Usuário" value={username} onChange={(e) => setUsername(e.target.value)} />
        <TextField label="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button variant="contained" onClick={handleLogin}>Login</Button>
      </Box>
    </Container>
  );
};

export default LoginPage;
