import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabHome: {
            screens: {
              TabHomeScreen: 'home',
            },
          },
          TabSettings: {
            screens: {
              TabSettingsScreen: 'settings',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
