import {updateHypeTrain} from '../helpers/updateHypeTrain.js';

export const handleSubscriptionEvent = (event, sessionData) => {
  sessionData.events.push({...event, date: Date.now()});
  updateHypeTrain(sessionData);
}