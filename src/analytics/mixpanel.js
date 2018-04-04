import { BaseAnalytics } from './base';

const Mixpanel = require('react-native-mixpanel');

const YOUR_PROJECT_TOKEN = '8c520c93d98f9abb4311e9921ada7bb2';

export class MixPanelAnalytics extends BaseAnalytics {
  /**
   * start the analytics service
   * @param {string} env
   */
  start(env) {
    //console.log('MixPanelAnalytics: start')
    if (env === 'production') {
    }
    Mixpanel.sharedInstanceWithToken(YOUR_PROJECT_TOKEN);
  }

  /**
   * send the event
   * @param {string} name
   * @param {any} data
   */
  event(name, data) {
    //console.log('name',data)
    if (data) {
      Mixpanel.trackWithProperties(name, data);    
    } else {
      Mixpanel.track(name,);
    }
  }
}
