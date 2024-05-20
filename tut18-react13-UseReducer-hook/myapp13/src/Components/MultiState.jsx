import React, { act } from "react";
import { useReducer } from "react";
import { useEffect } from "react";
//types
const FETCH_init = "FETCH_init";
const FETCH_start = "FETCH_start";
const FETCH_error = "FETCH_error";

//Starting point
const initialState = {
  loading: true,
  date: null,
  error: null,
};

//data reducer
const dataReducer = (state, action) => {
  switch (action.type) {
    case FETCH_init:
      return { ...state, loading: true, error: null };

    case FETCH_start:
      return { ...state, loading: false, data: action.payload };

    case FETCH_error:
      return { ...state, loading: false, error: action.payload };
      break;

    default:
      return state;
  }
};

const MultiState = () => {
  //use reducer
  const [state, dispatch] = useReducer(dataReducer, initialState);

  //call api
  const datahandler = async () => {
    try {
      dispatch({ type: FETCH_start });
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const newData = await response.json;
      dispatch({ type: FETCH_init, payload: newData });
    } catch (error) {
      dispatch({ FETCH_error });
    }
  };
  useEffect(() => {
    datahandler();
  }, []);

  return (
    <div>
      {state.loading && <p>loading...</p>}
      {state.data && (
        <div>
          {state.data.map((item) => {
            return (
              <div>
                <h2>{item.name}</h2>
              </div>
            );
          })}
        </div>
      )}
      {state.error && <div>{alert(state.error)} </div>}
    </div>
  );
};

export default MultiState;
