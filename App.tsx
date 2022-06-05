import { StatusBar } from 'expo-status-bar';
import { RecoilRoot } from 'recoil';

import Search from './screens/Search';

export default function App() {
  return (
    <RecoilRoot>
      <StatusBar style="auto" />
      <Search />
    </RecoilRoot>
  );
}