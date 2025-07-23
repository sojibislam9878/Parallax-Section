import { Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Welcome from './Pages/Welcome';

import PopularPlugin from './Pages/PopularPlugin';
import Demo from './Pages/Demo/Demo';
import ProVsFree from './Pages/ProVsFree';
import { usePremiumInEditor } from '../../../bpl-tools/hooks';

const App = () => {
  const { isPremium } = usePremiumInEditor("ssbUtils", "ssbPremiumChecker");

  return (
    <>
      <Toaster position="bottom-center" />
      <Routes>
        <Route path="/welcome" element={<Welcome isPremium={isPremium} />} />
        <Route path="/most-popular" element={<PopularPlugin isPremium={isPremium} />} />
        <Route path="/demo" element={<Demo isPremium={isPremium} upgradeLink='https://bplugins.com/products/b-slider/#pricing' />} />
        {!isPremium && <Route path="/free-vs-pro" element={<ProVsFree isPremium={isPremium} />} />}

        {/* When no routes match, it will redirect to this route path. Note that it should be registered above. */}
        <Route path="*" element={<Navigate to="/welcome" replace />} />
      </Routes>
    </>
  )
}

export default App;