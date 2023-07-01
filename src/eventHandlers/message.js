import {gameLoop} from '../helpers/gameLoop.js';
import {getUsers} from '../helpers/fetch.js';
import {updateHypeTrain} from '../helpers/updateHypeTrain.js';
import {FATED_USER_ID} from '../helpers/consts.js';

export const handleMessageEvent = async (event, sessionData) => {
  const {userId, msgId, text, tags} = event.data;

  if(!sessionData.users[userId]) {
    const users = await getUsers(sessionData, [userId], []);
    if(users?.length) {
      const [user] = users;
      sessionData.users[userId] = user;
    }
  }

  const isMod = tags?.mod === '1';
  const isStreamer = userId === sessionData.streamer.id;
  const isDev = userId === FATED_USER_ID;
  if(isMod || isStreamer || isDev) {
    handleAdminMessage(text, sessionData);
  }
}

/*
ADMIN WIDGET COMMANDS
---------------
** HYPE TRAIN **

!chooChoo
- forces a hype train to run 
*/

const handleAdminMessage = (message, sessionData) => {
  const words = message.trim().split(' ');

  switch(words[0].toLowerCase()) {
    case('!choochoo'):
      updateHypeTrain(sessionData, true);
      break;
    default:
      break;
  }
};
