import { BrowserRouter, RouterProvider } from 'react-router-dom';

import { AppProvider } from '@AppProvider';
import { router } from '@routes';

const BASE_NAME =
  import.meta.env.MODE === 'production' ? '/tic-tac-toe' : '/';

function App() {
  return (
    <AppProvider>
      <BrowserRouter basename={BASE_NAME}>
        <RouterProvider router={router} />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
