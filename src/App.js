import "./App.css";
import loadingSvg from "./assets/loading.svg";

import { Card } from "./components/card/Card.tsx";
import { Button } from "./components/button/Button.tsx";
import { useRequest } from "./hooks/useRequest/UseRequest.ts";

function App() {
  const { response, error, loading, refetch } = useRequest(
    "https://fakestoreapi.com/products"
  );

  return (
    <div className="app">
      {!loading ? <Button onClick={refetch}>Refresh data</Button> : null}
      <div className="main-page">
        {loading ? <img src={loadingSvg} alt="loading" /> : null}
        {error ? `An error occurred: ${error.message}` : null}
        {!loading &&
          !error &&
          response.data?.map((item, index) => (
            <Card image={item?.image} title={item.title} key={index} />
          ))}
      </div>
    </div>
  );
}

export default App;
