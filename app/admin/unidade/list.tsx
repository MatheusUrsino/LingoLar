// ./curso/list.tsx
import { List, Datagrid, TextField, ReferenceField } from "react-admin";

export const UnitList: React.FC = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="description" />
      <ReferenceField source="courseId" reference="cursos"/>
      <TextField source="order" />
    </Datagrid>
  </List>
);
