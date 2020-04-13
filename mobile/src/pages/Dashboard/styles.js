import styled from 'styled-components/native';
// import { Platform } from 'react-native';
// import { Animated } from 'react-native';

// import { getStatusBarHeight } from 'react-native-iphone-x-helper';
// import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

export const Container = styled.View`
  flex: 1;
  padding: 20px 20px;
  background: #fff;
`;

export const Header = styled.View`
  height: 138px;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  height: 68px;
  width: 68px;
  border-radius: 34px;
  background: #eee;
`;

export const NameContainer = styled.View`
  flex: 1;
  margin: 0 12px;
`;

export const Welcome = styled.Text`
  font-size: 12px;
  color: #666666;
`;

export const Name = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #444;
`;

export const Body = styled.View`
  margin: 0 0px;
`;

export const TabContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  flex: 1;
  font-size: 22px;
  color: #444;
  font-weight: bold;
`;

export const TabBar = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  position: relative;
`;

// export const Overlay = styled(Animated.View)`
//   position: absolute;
//   /* height: 10%;
//   width: 50%; */
//   background: #7d40e7;
//   bottom: 0;
//   left: 0;
// `;

export const Tab = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex: 1;
  /* margin-right: 5px; */
`;

export const TabText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  padding: 5px 0;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
})``;
