// ./curso/list.tsx
import { SimpleForm, TextInput, Create, required, ReferenceInput, NumberInput } from "react-admin";

export const UnitCreate: React.FC = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" validate={[required()]} label="Title"/>
      <TextInput source="description" validate={[required()]} label="Descrição"/>
      <ReferenceInput 
      source="courseId"
      reference="cursos"/>
      <NumberInput 
      source="order"
      validate={[required()]} 
      label="ordem"/>
    </SimpleForm>
  </Create>
);
