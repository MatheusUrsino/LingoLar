// ./curso/list.tsx
import { List, Datagrid, TextField } from "react-admin";

export const CourseList: React.FC = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="imageSrc" />
    </Datagrid>
  </List>
);
