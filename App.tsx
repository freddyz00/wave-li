import { StatusBar } from 'expo-status-bar';
import styled from "styled-components/native"
import BottomTabs from './components/BottomTabs';
import SearchResults from './components/SearchResults';
import Title from './components/Title';

export default function App() {
  return (
    <Container>

      <Wrapper>
        {/* Title */}
        <Title />
        {/* Search Results */}
        <SearchResults />
      </Wrapper>

      {/* Bottom Tabs */}
      <BottomTabs />
    
      <StatusBar style="auto" />
    </Container>

  );
}

const Container = styled.SafeAreaView`
  flex: 1;
`

const Wrapper = styled.View`
  padding: 0 25px;
  flex: 1
`