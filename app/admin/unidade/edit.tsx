// ./curso/list.tsx
import {
  SimpleForm,
  TextInput,
  Edit,
  required,
  ReferenceInput,
  NumberInput,
} from "react-admin";

export const UnitEdit: React.FC = () => (
  <Edit>
    <SimpleForm>
      <NumberInput source="id" validate={[required()]} label="Id" />
      <TextInput source="title" validate={[required()]} label="Title" />
      <TextInput
        source="description"
        validate={[required()]}
        label="Descrição"
      />
      <ReferenceInput source="courseId" reference="cursos" />
      <NumberInput source="order" validate={[required()]} label="order" />
    </SimpleForm>
  </Edit>
);
