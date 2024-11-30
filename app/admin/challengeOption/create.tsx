// ./curso/list.tsx
import {
  SimpleForm,
  TextInput,
  Create,
  required,
  ReferenceInput,
  BooleanInput,
} from "react-admin";

export const ChallengeOptionCreate: React.FC = () => (
  <Create>
    <SimpleForm>
      <TextInput source="text" validate={[required()]} label="Texto" />
      <BooleanInput
       source="correct"
       label="Opção correta"
      />
      <ReferenceInput source="challengeId" reference="desafios" />
      <TextInput source="imageSrc"  label="URL da imagem" />
      <TextInput source="audioSrc" label="URL do Audio" />
    </SimpleForm>
  </Create>
);
