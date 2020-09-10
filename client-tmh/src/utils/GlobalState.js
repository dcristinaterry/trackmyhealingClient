import React, { createContext, useReducer, useContext } from 'react'

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
    switch (action.type) {
        case "setUser":
            // console.log("setting user GS:  ", action.type, "state", state)
            return {
                ...state,
                currentUser: action.user,
                // loading: false
            };
        case "LOADING":
            console.log("setting object to true")
            return {
                ...state,
                loading: action.loading,
            };

        default:
            return state;
    }
};


const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
      currentUser: {
        id: "",
        firstName: "",
        lastName: "",
      },
      loading:false,
    });
  
    return <Provider value={[state, dispatch]} {...props} />;
  };
  
  const useStoreContext = () => {
    return useContext(StoreContext);
  };
  
  export { StoreProvider, useStoreContext };