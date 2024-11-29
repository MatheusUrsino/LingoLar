// ./curso/list.tsx
<<<<<<< HEAD
import { courses } from "@/db/schema";
=======
>>>>>>> 55697f540eed3abfdd649bc60e8ad910f540a0b1
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
