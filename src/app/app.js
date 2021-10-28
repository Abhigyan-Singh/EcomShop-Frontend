import { HomeStory } from 'stories/pages/home.stories';
import { useCookies } from 'react-cookie';
import { useState, useEffect } from 'react';

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const { user } = cookies;
    if (user?.token) setIsAuthenticated(true);
    else setIsAuthenticated(false);
  }, [cookies]);

  const onLogout = () => {
    removeCookie('user');
    setIsAuthenticated(false);
  };

  return <HomeStory isAuthenticated={isAuthenticated} logout={onLogout} />;
};

export default App;
