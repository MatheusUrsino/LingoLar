// ./curso/list.tsx
import {
  SimpleForm,
  TextInput,
  Create,
  required,
  ReferenceInput,
  NumberInput,
} from "react-admin";

export const LessonCreate: React.FC = () => (
  <Create>
    <SimpleForm>
      <TextInput source="id" validate={[required()]} label="ID" />

      <TextInput source="title" validate={[required()]} label="Title" />

      <ReferenceInput source="unitId" reference="unidades" />
      <NumberInput source="order" validate={[required()]} label="ordem" />
    </SimpleForm>
  </Create>
);
