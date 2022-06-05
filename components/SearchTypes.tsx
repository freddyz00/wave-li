import React, { useState } from 'react'
import styled from 'styled-components/native'

const SearchTypes = () => {
  const [activeSearchHeading, setActiveSearchHeading] = useState<string>("Events")

  return (
    <Container>
      <SearchHeading active={activeSearchHeading === "Events"}>Events</SearchHeading>
      <SearchHeading active={activeSearchHeading === "People"}>People</SearchHeading>
      <SearchHeading active={activeSearchHeading === "Groups"}>Groups</SearchHeading>
    </Container>
  )
}

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 0;
`

interface HeadingProps {
  active?: boolean
}

const SearchHeading = styled.Text<HeadingProps>`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => (props.active ? "black" : "gray")};
  text-decoration: ${(props) => (props.active ? "underline" : "none")};
`

export default SearchTypes