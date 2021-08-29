import React from 'react';
import { PeopleList} from '../PeopleList';


const people = [{
    name: 'John',
    age: 25,
    hairColor: 'brown',
  },
  {
    name: 'Helga',
    age: 30,
    hairColor: 'blond',
  },
  {
    name: 'Ola',
    age: 31,
    hairColor: 'black',
  }];
  
  export const PeopleListPage = () => (
    <>
    <h1> The People List Page</h1>
    <PeopleList people={people}/>
    </>
)