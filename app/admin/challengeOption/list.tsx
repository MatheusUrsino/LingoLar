// ./curso/list.tsx
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  NumberField,
  BooleanField,
} from "react-admin";

export const ChallengeOptionList: React.FC = () => (
  <List>
    <Datagrid rowClick="edit">
      <NumberField source="id" />
      <TextField source="text" />
      <BooleanField source="correct"/>
     
      <ReferenceField source="challengeId" reference="desafios" />
      <TextField source="imageSrc"/>
      <TextField source="audioSrc"/>
    </Datagrid>
  </List>
);
