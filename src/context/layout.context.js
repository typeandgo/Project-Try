import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { LAYOUT_UPDATE_REQUEST, LAYOUT_UPDATE_SUCCESS, LAYOUT_UPDATE_FAILURE } from './layout.constant';
import layoutReducer, { initialState } from './layout.reducer';

const LayoutContext = createContext({
  state: initialState,
  dispatch: () => {
  },
  getUserInfo: () => {
  }
});

function LayoutProvider(props) {
  const { children } = props;

  const [state, dispatch] = useReducer(layoutReducer, initialState);

  const getUserInfo = async () => {
    try {
      dispatch({
        type: LAYOUT_UPDATE_REQUEST,
      });

      // const { data } = await FulfilmentPortalService.GetUserInfo();
      const data = {
        lang: 'TR',
        theme: 'default',
        ver: '1.0.0',
        title: 'Lorem Ipsum'
      };

      dispatch({
        type: LAYOUT_UPDATE_SUCCESS,
        payload: { data },
      });

    } catch (error) {

      dispatch({
        type: LAYOUT_UPDATE_FAILURE,
      });
    }
  };

  return (
    <LayoutContext.Provider value={{ state, dispatch, getUserInfo}}>
      { children }
    </LayoutContext.Provider>
  );
}

LayoutProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function withLayout(Component) {
  return function ComponentWithLayout({ ...props }) {
    return (
      <LayoutProvider>
        <LayoutContext.Consumer>
          { value => <Component {...props} {...value} /> }
        </LayoutContext.Consumer>
      </LayoutProvider>
    );
  };
}

export function useLayout() {
  return useContext(LayoutContext);
}
