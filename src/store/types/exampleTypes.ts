// This file exports the types used in the `example` feature of the Redux store.

export interface ExampleState {
  exampleData: string;
}

export const SET_EXAMPLE_DATA = "SET_EXAMPLE_DATA";

interface SetExampleDataAction {
  type: typeof SET_EXAMPLE_DATA;
  payload: string;
}

export type ExampleActionTypes = SetExampleDataAction;