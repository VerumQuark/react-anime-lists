export enum Types {
  CAUSE_ERROR = "CAUSE_ERROR",
  CLEAR_ERROR = "CLEAR_ERROR",
  START_LOAD = "START_LOAD",
  END_LOAD = "END_LOAD",
}

export type State = {
  error: string | undefined;
  loading: boolean;
};

export type Payload = {
  error?: string;
  loading?: boolean;
};

export type Action = {
  type: Types.CAUSE_ERROR | Types.CLEAR_ERROR | Types.START_LOAD | Types.END_LOAD;
  payload?: Payload;
};
