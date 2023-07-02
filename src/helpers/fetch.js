import {APPLICATION_ID, PROXY_URL} from '../keys.js';

const getRequestHeaders = (token) => new Headers({
  "Authorization": `Bearer ${token}`,
  "Client-Id": APPLICATION_ID,
});

export const twitchFetch = async (url, token) => {
  const res = await fetch(url, {headers: getRequestHeaders(token)});
  return res?.json() || {};
};

export const getUsersColors = async (users) => {
  if(!users.length) {
    return [];
  }
  const usersMap = users.reduce((userMap, user) => {
    userMap[user.id] = user;

    return userMap;
  }, {});

  const userIds = Object.keys(usersMap).map(id => `user_id=${id}`).join('&');
  const res = await twitchFetch(
    `https://api.twitch.tv/helix/chat/color?${userIds}`
  );

  return res?.data?.map(userColor => ({
    ...(usersMap[userColor.user_id] || {}),
    ...userColor,
  })) || [];
};

export const getHypeTrainEvents = (sessionData) => twitchFetch(
  `https://api.twitch.tv/helix/hypetrain/events?broadcaster_id=${sessionData.streamer.id}&first=100`
);

export const getUsers = async (sessionData, ids, usernames=[]) => {
  const getByIds = Boolean(ids?.length);

  const existingUsers = new Set();
  const newUserIds = new Set();
  const newUsernames = new Set();

  ids.forEach(id => {
    const user = sessionData.users[id];
    if(user) {
      existingUsers.add(user);
    } else {
      newUserIds.add(id);
    }
  });

  const usernameToIdMap = {};

  Object.entries(sessionData.users).forEach(([userId, user]) => {
    usernameToIdMap[user.display_name] = userId;
  });

  usernames.forEach(username => {
    const userId = usernameToIdMap[username];
    const user = sessionData.users[userId];
    if(user) {
      existingUsers.add(user);
    } else {
      newUsernames.add(username);
    }
  });

  const userIds = [...newUserIds].map(id => `id=${id}`).join('&');
  const userNames = [...newUsernames].map(username => `login=${username}`).join('&');

  const urls = [];

  userIds?.length && urls.push(`https://api.twitch.tv/helix/users?${userIds}`);
  userNames?.length && urls.push(`https://api.twitch.tv/helix/users?${userNames}`);

  const responses = await Promise.all(urls.map(twitchFetch));
  const fetchedUsers = [];
  responses.forEach(res => {
    if(res?.data?.length) {
      res?.data.forEach(user => fetchedUsers.push(user))
    }
  });

  const usersWithChatColor = await getUsersColors(fetchedUsers);

  usersWithChatColor.forEach(user => {
    sessionData.users[user.id] = user;
  });

  return [
    ...existingUsers,
    ...usersWithChatColor,
  ];
};

export const getStreamerToken = (id) => fetch(
  `${PROXY_URL}/https://get-fated-tts-token.pennney.workers.dev?id=${id}`
);

export const loadStreamerToken = async (sessionData) => {
  const res = await getStreamerToken(sessionData.streamer.id);
  const token = await res.text();
  if(token) {
    sessionData.streamer.token = token;
    return true;
  }
  return false;
}
