import { createRoot } from 'react-dom/client';
import './admin.scss';
import AppContainer from './Index';

document.addEventListener('DOMContentLoaded', () => {
  const helpEl = document.getElementById('icbAdminHelpPage');
  createRoot(helpEl).render(<AppContainer />);
}); 