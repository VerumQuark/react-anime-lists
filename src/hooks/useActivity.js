import React from 'react';

const useActivity = (activity, errorCallback) => {
  try {
    return new Promise((res) => res(activity));
  } catch (e) {
    return new Promise((res) => res(errorCallback)
  } finally {
  }
} 