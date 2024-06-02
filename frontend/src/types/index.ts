import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  ForgotPassword: undefined;
  Signup: undefined;
  SetUsername: undefined;
  Main: undefined;
  ProfileDetails: undefined;
  Chat: undefined;
  PostCreation: undefined;
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
