'use strict';

import PushNotificationIOS from "@react-native-community/push-notification-ios";
import { AppState } from 'react-native';

module.exports = {
  state: AppState,
  component: PushNotificationIOS
};

