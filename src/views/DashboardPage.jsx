import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Media from 'react-media';

// Redux
import { operationsOperation } from '../redux/operations';
import { statisticsOperations } from '../redux/statistics';
import { categoriesOperation } from '../redux/category';

import Header from '../components/Header/Header';

// Adaptive layout
import MobileMainContainer from '../components/MainContainer/MobileMainContainer';
import DesktopMainContainer from '../components/MainContainer/DesktopMainContainer';

const DashboardPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoriesOperation.getCategories());
    dispatch(statisticsOperations.fetchBalance());
    dispatch(operationsOperation.getOperations());
  }, [dispatch]);

  return (
    <>
      <Header />

      <div>
        <Media
          queries={{
            small: '(max-width: 767px)',
            medium: '(min-width: 767px)',
          }}
        >
          {matches => (
            <Fragment>
              {matches.small && <MobileMainContainer />}

              {matches.medium && (
                <>
                  <Redirect to="/dashboard/home" />
                  <DesktopMainContainer />
                </>
              )}
            </Fragment>
          )}
        </Media>
      </div>
    </>
  );
};

export default DashboardPage;
