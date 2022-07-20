export enum Types {
  SHOW_MODAL = "SHOW_MODAL",
  CLOSE_MODAL = "CLOSE_MODAL",
}

export type State = {
  list: string;
  isShow: boolean;
};

export type Payload = {
  list?: string;
  isShow: boolean;
};

export type Action = {
  type: Types.SHOW_MODAL | Types.CLOSE_MODAL;
  payload: Payload;
};
