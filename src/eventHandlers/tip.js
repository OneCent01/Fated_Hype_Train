import {updateHypeTrain} from '../helpers/updateHypeTrain.js';

export const handleTipEvent = (event, sessionData) => {
  if((event.type === 'tip' && event.amount >= 1) || (event.type === 'cheer' && event.amount >= 100)) {
    sessionData.events.push({...event, date: Date.now()});
  }

  updateHypeTrain(sessionData);
}