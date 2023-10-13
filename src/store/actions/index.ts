// This file exports all the action creators used in the application.

import { ExampleAction, ExampleActionTypes } from "../types/exampleTypes";

export const exampleActionCreator = (): ExampleAction => {
  return {
    type: ExampleActionTypes.EXAMPLE_ACTION,
  };
};

// Add more action creators here as needed