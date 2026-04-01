import { useState } from "react";
import { useAuthStore } from "../app/store/authStore";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const { login, loading, error } = useAuthStore();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        await login(email, password);
        navigate("/dashboard");
    };

    return (
        <div>
            <h2>Login</h2>

            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
             <input
             type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button onClick={handleLogin} disabled={loading}>
                {loading? "Loading...": "Login"}
            </button>

            {error && <p>{error}</p>}
        </div>
    )
}

export default LoginPage;
