// ./curso/list.tsx
<<<<<<< HEAD
import { courses } from "@/db/schema";
=======
>>>>>>> 55697f540eed3abfdd649bc60e8ad910f540a0b1
import {
  SimpleForm,
  TextInput,
  Edit,
  required,
  ReferenceInput,
  NumberInput,
  SelectInput,
} from "react-admin";

export const ChallengeEdit: React.FC = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="question" validate={[required()]} label="Question" />

      <SelectInput
        source="type"
        choices={[
          {
            id: "SELECT",
            name: "SELECT",
          },
          {
            id: "ASSIST",
            name: "ASSIST",
          },
        ]}
        validate={[required()]}
      />

      <ReferenceInput source="lessonId" reference="licoes" />
      <NumberInput source="order" validate={[required()]} label="ordem" />
    </SimpleForm>
  </Edit>
);
