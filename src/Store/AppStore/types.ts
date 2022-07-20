export enum Types {
  CAUSE_ERROR = "CAUSE_ERROR",
  CLEAR_ERROR = "CLEAR_ERROR",
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
