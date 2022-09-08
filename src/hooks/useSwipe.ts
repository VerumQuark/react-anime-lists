import { TouchEvent, TouchEventHandler, useState } from "react";

function logger(message: string) {
  return console.log(`//= useSwipe =// - ${message}`);
}

type onSwipeArgs = {
  onSwipe?: () => void;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  delta?: number;
  distance?: number;
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
  delta = 0,
  distance = 100,
}: onSwipeArgs): ReturnValue {
  const [touch, setTouch] = useState<[number | null, number | null]>([
    null,
    null,
  ]); // [startValue, currentMoveValue]

  const [preventMove, setPreventMove] = useState(true);

  function touchStartHandler(evt: TouchEvent) {
    const touchStart = evt.touches[0].clientX;

    setTouch([touchStart, null]);
  }

  function touchMoveHandler(evt: TouchEvent) {
    if (touch[0]) {
      if (Math.abs(evt.touches[0].clientX - touch[0]) > delta) {
        setPreventMove(false);
      }
      const touchCurrent = evt.touches[0].clientX;
      setTouch((t) => [t[0], touchCurrent]);
      touch[1] && touch[1] - touch[0] > 0
        ? (isLeftSwipe = true)
        : (isLeftSwipe = false);
    }
  }

  function touchEndHandler(evt: TouchEvent) {
    const touchEnd = evt.changedTouches[0].clientX;

    if (onSwipeLeft && touch[0] && touchEnd - touch[0] < -distance) {
      onSwipeLeft();
    }

    if (onSwipeRight && touch[0] && touchEnd - touch[0] > distance) {
      onSwipeRight();
    }

    if (onSwipe && touch[0] && Math.abs(touchEnd - touch[0]) > distance) {
      onSwipe();
    }

    setTouch([null, null]);
    setPreventMove(true);
  }

  const xMove =
    !preventMove && touch[0] && touch[1] && touch[1] ? touch[1] - touch[0] : 0;

  return [
    touchStartHandler,
    touchEndHandler,
    touchMoveHandler,
    xMove,
    isLeftSwipe,
  ];
}
