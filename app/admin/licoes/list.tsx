// ./curso/list.tsx
import { List, Datagrid, TextField, ReferenceField, NumberField } from "react-admin";

export const LessonList: React.FC = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="description" />
      <ReferenceField source="unitId" reference="unidades"/>
      <NumberField source="order" />
    </Datagrid>
  </List>
);
