// ./curso/list.tsx
import { courses } from "@/db/schema";
import {
  SimpleForm,
  TextInput,
  Create,
  required,
  ReferenceInput,
  NumberInput,
  SelectInput,
} from "react-admin";

export const ChallengeCreate: React.FC = () => (
  <Create>
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
  </Create>
);
