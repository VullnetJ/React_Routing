import React from 'react';
import { PeopleListItem } from './PeopleListItem';
import styled from 'styled-components';


const Wrapper = styled.div`
    border: 2px solid white;
    padding 30px;
`;
export const PeopleList = ({ people }) => (
        <Wrapper>
        {people.map(person => <PeopleListItem person={person}  key={person.name}/>)}
        </Wrapper>
);