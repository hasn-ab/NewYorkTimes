import {RouteProp} from '@react-navigation/native';
export type RootStackParamList = {
  Home: undefined;
  Article: {url: string; title: string};
};
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type ArticleScreenRouteProp = RouteProp<RootStackParamList, 'Article'>;
