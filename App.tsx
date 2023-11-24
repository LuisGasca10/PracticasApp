import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTab } from './src/routes/BottomTab';
import { DrawerNav } from './src/routes/Drawer';

export default function App() {
  return (

    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>

  );
}

