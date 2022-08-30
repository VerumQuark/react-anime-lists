import { TouchEvent, TouchEventHandler, useState } from "react";

function logger(message: string) {
  return console.log(`//= useSwipe =// - ${message}`);
}

type onSwipeArgs = {
  onSwipe?: Function;
  onSwipeLeft?: Function;
  onSwipeRight?: Function;
};

type ReturnValue = [
  TouchEventHandler,
  TouchEventHandler,
  TouchEventHandler,
  number,
  boolean
];
let isLeftSwipe = false;

export default function useSwipe({
  onSwipeLeft,
  onSwipeRight,
  onSwipe,
}: onSwipeArgs): ReturnValue {
  const [touch, setTouch] = useState<[number | null, number | null]>([
    null,
    null,
  ]); // [startValue, currentMoveValue]

  function touchStartHandler(evt: TouchEvent) {

    const touchStart = evt.touches[0].clientX;

    setTouch([touchStart, null]);
  }

  function touchMoveHandler(evt: TouchEvent) {
    if (touch[0]) {

      const touchCurrent = evt.touches[0].clientX;
      setTouch((t) => [t[0], touchCurrent]);
      console.log(touch);
      touch[1] && touch[1] - touch[0] > 0
        ? (isLeftSwipe = true)
        : (isLeftSwipe = false);
    }
  }

  function touchEndHandler(evt: TouchEvent) {

    const touchEnd = evt.changedTouches[0].clientX;

    if (onSwipeLeft && touch[0] && touchEnd - touch[0] < -80) {
      onSwipeLeft();
    }

    if (onSwipeRight && touch[0] && touchEnd - touch[0] > 80) {
      onSwipeRight();
    }

    if (onSwipe && touch[0] && Math.abs(touchEnd - touch[0]) > 80) {
      onSwipe();
    }

    setTouch([null, null]);
  }

  const xMove = touch[0] && touch[1] && touch[1] ? touch[1] - touch[0] : 0;

  return [
    touchStartHandler,
    touchEndHandler,
    touchMoveHandler,
    xMove,
    isLeftSwipe,
  ];
}
