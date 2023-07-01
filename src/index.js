import {
  ROOT_HTML_TEMPLATE, 
  KDAWG_USER_ID, 
  FATED_USER_ID,
  ZULII_USER_ID,
} from './helpers/consts.js';

document.body.innerHTML = ROOT_HTML_TEMPLATE;

import {handleMessageEvent} from './eventHandlers/message.js';
import {handleSubscriptionEvent} from './eventHandlers/sub.js';
import {handleTipEvent} from './eventHandlers/tip.js';
import {initSessionData} from './helpers/sessionState.js';
import {loadStreamerToken} from './helpers/fetch.js';
import {resizePage} from './helpers/utils.js';

const sessionData = initSessionData();

window.addEventListener('load', resizePage);
window.addEventListener('resize', resizePage);

window.addEventListener('onWidgetLoad', async event => {
  window.devicePixelRatio = 2;

  const {providerId, username} = event.detail.channel;
  // add streamer's ID to session data 
  const isDev = FATED_USER_ID === providerId;
  sessionData.streamer.username = isDev ? 'qZulli' : username;
  sessionData.streamer.id = isDev ? ZULII_USER_ID : providerId;

  // first get the streamer's access token and wait for it to load
  await loadStreamerToken(sessionData);
});

window.addEventListener('onEventReceived', event => {
  switch(event.detail.listener) {
    case('message'):
      handleMessageEvent(event.detail.event, sessionData);
      break;
    case('subscriber-latest'):
      handleSubscriptionEvent(event.detail.event, sessionData);
      break;
    case('tip-latest'):
    case('cheer-latest'):
      handleTipEvent(event.detail.event, sessionData);
      break;
  }
});
