export enum Types {
  SHOW_MODAL = "SHOW_MODAL",
  CLOSE_MODAL = "CLOSE_MODAL",
  STOP_ANIMATION = "STOP_ANIMATION",
  START_ANIMATION = "START_ANIMATION",
}

export type State = {
  list: string;
  isShow: boolean;
  isAnimationPending: boolean;
  isClosing: boolean;
  modal: JSX.Element;
};

export type Payload = {
  list?: string;
  modal?: JSX.Element;
};

export type Action = {
  type:
    | Types.SHOW_MODAL
    | Types.CLOSE_MODAL
    | Types.START_ANIMATION
    | Types.STOP_ANIMATION;
  payload: Payload;
};
