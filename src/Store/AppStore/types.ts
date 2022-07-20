export enum Types {
  CAUSE_ERROR = "CAUSE_ERROR",
  CLEAR_ERROR = "CLEAR_ERROR",
}

export interface AError extends Error {
  name: string;
  message: string;
  code: number | string;
}

export type State = {
  error: string;
};

export type Payload = {
  error: string;
};

export type Action = {
  type: Types.CAUSE_ERROR | Types.CLEAR_ERROR;
  payload: Payload;
};
