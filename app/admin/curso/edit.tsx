// ./curso/list.tsx
import { SimpleForm, TextInput, Edit, required } from "react-admin";

export const CourseEdit: React.FC = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" validate={[required()]} label="Id" />
      <TextInput source="title" validate={[required()]} label="Title" />
      <TextInput source="imageSrc" validate={[required()]} label="Image" />
    </SimpleForm>
  </Edit>
);
