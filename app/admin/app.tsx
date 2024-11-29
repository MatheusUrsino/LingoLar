"use client";

import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import { CourseList } from "./curso/list";
import { CourseCreate } from "./curso/create";
import { CourseEdit } from "./curso/edit";
import { UnitList } from "./unidade/list";
import { UnitCreate } from "./unidade/create";
import { UnitEdit } from "./unidade/edit";
import { LessonList } from "./licoes/list";
import { LessonCreate } from "./licoes/create";
import { LessonEdit } from "./licoes/edit";
import { ChallengeList } from "./desafio/list";
import { ChallengeCreate } from "./desafio/create";
import { ChallengeEdit } from "./desafio/edit";
import { ChallengeOptionList } from "./challengeOption/list";
import { ChallengeOptionEdit } from "./challengeOption/edit";
import { ChallengeOptionCreate } from "./challengeOption/create";


const dataProvider = simpleRestProvider("/api");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource 
    name="cursos"
    list={CourseList}
    create={CourseCreate}
    edit={CourseEdit}
    recordRepresentation="title" />
       <Resource 
    name="unidades"
    list={UnitList}
    create={UnitCreate}
    edit={UnitEdit}
    recordRepresentation="title" />
   
    <Resource 
    name="licoes"
    list={LessonList}
    create={LessonCreate}
    edit={LessonEdit}
    recordRepresentation="title" />

<Resource 
    name="desafios"
    list={ChallengeList}
    create={ChallengeCreate}
    edit={ChallengeEdit}
    recordRepresentation="question" />
   

   <Resource 
    name="challengeOptions"
    list={ChallengeOptionList}
    create={ChallengeOptionCreate}
    edit={ChallengeOptionEdit}
    recordRepresentation="text" 
    options={{ label: "Opções do desafio"}}
    />

   
  </Admin>
);

export default App;

