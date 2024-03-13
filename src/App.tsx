import { Navigation } from './components/Navigation/Navigation';
import { AppRoutes } from './routes/Routes';

function App() {
  return (
    <div className='container'>
      <Navigation />
      <AppRoutes />
    </div>
  );
}

export default App;
