// ./curso/list.tsx
import {
  SimpleForm,
  TextInput,
  Edit,
  required,
  ReferenceInput,
<<<<<<< HEAD
  NumberInput,
  SelectInput,
  BooleanInput,
  FormDataConsumer,
=======
  BooleanInput,
>>>>>>> 55697f540eed3abfdd649bc60e8ad910f540a0b1
} from "react-admin";

export const ChallengeOptionEdit: React.FC = () => (
  <Edit>
    <SimpleForm>
      
      <TextInput source="text" validate={[required()]} label="texto" />
      <BooleanInput
       source="correct"
       label="Opção correta"
      />
      <ReferenceInput source="challengeId" reference="desafios" />
      <TextInput source="imageSrc"  label="URL da imagem" />
      <TextInput source="audioSrc" label="URL do Audio" />
    </SimpleForm>
  </Edit>
);
