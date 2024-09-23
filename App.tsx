import React from 'react';
import {SafeAreaView} from 'react-native';
// import {HelloWorldScreen} from './src/presentation/screens/HelloWorldScreen';
// import {CounterScreen} from './src/presentation/screens/CounterScreen';
import {PaperProvider} from 'react-native-paper';
// import {CounterM3Screen} from './src/presentation/screens/CounterM3Screen';
import IonicIcon from 'react-native-vector-icons/Ionicons';
// import {Homework1Screen} from './src/presentation/components/homework1/Homework1Screen';
// import {Homework2Screen} from './src/presentation/components/homework2/Homework2Screen';
// import {Homework3Screen} from './src/presentation/components/homework3/Homework3Screen';
// import {Homework4Screen} from './src/presentation/components/homework4/Homework4Screen';
// import {Homework5Screen} from './src/presentation/components/homework5/Homework5Screen';
// import {Homework6Screen} from './src/presentation/components/homework6/Homework6Screen';
// import {Homework7Screen} from './src/presentation/components/homework7/Homework7Screen';
// import {Homework8Screen} from './src/presentation/components/homework8/Homework8Screen';
// import {Homework9Screen} from './src/presentation/components/homework9/Homework9Screen';
import {Homework10Screen} from './src/presentation/components/homework10/Homework10Screen';

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: props => <IonicIcon {...props} />,
      }}>
      <SafeAreaView style={{flex: 1}}>
        {/* <HelloWorldScreen /> */}
        {/* <CounterScreen /> */}
        {/* <CounterM3Screen /> */}
        {/* <Homework1Screen /> */}
        {/* <Homework2Screen /> */}
        {/* <Homework3Screen /> */}
        {/* <Homework4Screen /> */}
        {/* <Homework5Screen /> */}
        {/* <Homework6Screen /> */}
        {/* <Homework7Screen /> */}
        {/* <Homework8Screen /> */}
        {/* <Homework9Screen /> */}
        <Homework10Screen />
      </SafeAreaView>
    </PaperProvider>
  );
};
