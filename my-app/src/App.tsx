
import { Paper } from '@mui/material';
import { HomePage } from './pages/home-page';
import { AppHeaderBar } from './shared/components';

function App() {

  return (
   <Paper>
      <AppHeaderBar />
      <HomePage />
   </Paper>
  );
}

export default App;
