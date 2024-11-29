// ./curso/list.tsx
import { SimpleForm, TextInput, Create, required } from "react-admin";

export const CourseCreate: React.FC = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" validate={[required()]} label="Title"/>
      <TextInput source="imageSrc" validate={[required()]} label="Image"/>
    </SimpleForm>
  </Create>
);
