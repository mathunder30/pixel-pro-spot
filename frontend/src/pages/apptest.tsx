import { useEffect, useState } from "react";

const ApiTest = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://192.168.0.102:4000/api/user/") // coloque a mesma URL do Postman
      .then((res) => {
        if (!res.ok) throw new Error(`Erro: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log("Resposta da API:", data);
        setData(data);
      })
      .catch((err) => {
        console.error("Erro na requisição:", err);
        setError(err.message);
      });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Teste de API</h1>
      {error && <p style={{ color: "red" }}>Erro: {error}</p>}
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Carregando...</p>}
    </div>
  );
};

export default ApiTest;
