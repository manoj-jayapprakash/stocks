import React, { Children, useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import Login from '../pages/Login';

type MiddlewareProps = {
  children: React.ReactNode;
};

export const Middleware = (props: MiddlewareProps) => {
  const [needLoginPage, setNeedLoginPage] = useState(false);
  useEffect(() => {
    if (window.localStorage.getItem('authToken')) setNeedLoginPage(true);
    else setNeedLoginPage(false);
  }, []);

  return (
    <div>
      {needLoginPage && <Route path="/login" element={<Login />} />}
      {!needLoginPage && <>{props.children}</>}
    </div>
  );
};
