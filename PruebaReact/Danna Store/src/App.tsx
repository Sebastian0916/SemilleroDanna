
import { QueryClient, QueryClientProvider } from "react-query";
import PaginaPrincipal from "./components/PaginaPrincipal";



const queryClient = new QueryClient

function App() {  
  return (
    <QueryClientProvider client={queryClient}>
     <PaginaPrincipal/>
    </QueryClientProvider>
   
  );
}

export default App;
