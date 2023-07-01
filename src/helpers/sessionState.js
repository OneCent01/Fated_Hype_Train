export const initHypeTrainData = (startedAt=null) => ({
  events: {},
  users: {},
  images: {},
  startedAt,
  isRunning: false,
  level: 0,
  total: 0,
  goal: 0, 
});

export const initSessionData = () => {
  const state = {
    streamer: {
      id: null,
      username: null,
      token: null,
    },
    users: {},
    events: [],
    hypeTrain: initHypeTrainData(),
  };

  return state;
};


export const resetHypeTrainData = (sessionData, startedAt) => {
  sessionData.hypeTrain = initHypeTrainData(startedAt);
};