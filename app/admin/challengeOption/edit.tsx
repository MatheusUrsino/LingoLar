// ./curso/list.tsx
import {
  SimpleForm,
  TextInput,
  Edit,
  required,
  ReferenceInput,
  NumberInput,
  SelectInput,
  BooleanInput,
  FormDataConsumer,
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
