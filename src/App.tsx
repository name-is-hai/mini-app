import type { FC } from 'react';
import { Routes, Route } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { ROUTER_URLS } from './routes';
import { NextUIProvider } from '@nextui-org/react';

import Home from "./pages/index";

const App: FC = function () {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <Routes>
        <Route path={ROUTER_URLS.HOME} element={<Home />} />
      </Routes>
    </NextUIProvider>
  );
}

export default App
