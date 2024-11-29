// ./curso/list.tsx
import { SimpleForm, TextInput, Edit, required, ReferenceInput, NumberInput } from "react-admin";

export const LessonEdit: React.FC = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="title" validate={[required()]} label="Title"/>
      
      <ReferenceInput 
      source="unitId"
      reference="unidades"/>
      <NumberInput 
      source="order"
      validate={[required()]} 
      label="ordem"/>
    </SimpleForm>
  </Edit>
);
