import * as t from "../Types";

const intialState = {
  loading: false,
  fontSize: "small", //small, large todo: change to exact values
  fontFamily: "proxima", //Tisa Pro, Georgia, Avenir, Proxima Nova
  spacing: "small", //small, medium, large todo: change to exact values
  bg: "bg-light-bg", //bg-light-bg, bg-yellow-bg, bg-dark-bg
};

const settings = (prevState = intialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case t.LOAD_SETTINGS:
      return {
        ...prevState,
        loading: true,
      };
    case t.EDIT_SETTINGS:
      return {
        ...prevState,
        ...action.payLoad,
      };
    default: {
      return { ...prevState };
    }
  }
};

export default settings;
