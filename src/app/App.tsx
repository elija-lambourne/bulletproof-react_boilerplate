import { AppRouter } from '@app/router.tsx';
import { AppProvider } from '@app/provider.tsx';
import "./routes/root.css";


function App() {

  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}

export default App;
