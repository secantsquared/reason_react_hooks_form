// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Block from "bs-platform/lib/es6/block.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";

var initialState = /* record */[
  /* name */"",
  /* email */"",
  /* password */""
];

function reducer(state, action) {
  switch (action.tag | 0) {
    case /* HandleNameInput */0 :
        return /* record */[
                /* name */action[0],
                /* email */state[/* email */1],
                /* password */state[/* password */2]
              ];
    case /* HandleEmailInput */1 :
        return /* record */[
                /* name */state[/* name */0],
                /* email */action[0],
                /* password */state[/* password */2]
              ];
    case /* HandlePasswordInput */2 :
        return /* record */[
                /* name */state[/* name */0],
                /* email */state[/* email */1],
                /* password */action[0]
              ];
    
  }
}

function Form(Props) {
  var match = React.useReducer(reducer, initialState);
  var dispatch = match[1];
  var state = match[0];
  return React.createElement("div", undefined, React.createElement("form", {
                  onSubmit: (function ($$event) {
                      var $$event$1 = $$event;
                      $$event$1.preventDefault();
                      console.log(state);
                      return /* () */0;
                    })
                }, React.createElement("input", {
                      type: "text",
                      value: state[/* name */0],
                      onChange: (function ($$event) {
                          return Curry._1(dispatch, /* HandleNameInput */Block.__(0, [$$event.target.value]));
                        })
                    }), React.createElement("input", {
                      type: "email",
                      value: state[/* email */1],
                      onChange: (function ($$event) {
                          return Curry._1(dispatch, /* HandleEmailInput */Block.__(1, [$$event.target.value]));
                        })
                    }), React.createElement("input", {
                      type: "password",
                      value: state[/* password */2],
                      onChange: (function ($$event) {
                          return Curry._1(dispatch, /* HandlePasswordInput */Block.__(2, [$$event.target.value]));
                        })
                    }), React.createElement("input", {
                      type: "submit",
                      value: "ok"
                    })));
}

var make = Form;

export {
  initialState ,
  reducer ,
  make ,
  
}
/* react Not a pure module */