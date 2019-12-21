// @flow

import * as React from 'react';
import { InputField, Stack, Button } from '@tbergq/components';

type Props = {|
  +isSubmitting: boolean,
|};

export default function ExerciseForm(props: Props) {
  return (
    <Stack>
      <Stack flex={true}>
        <InputField name="name" label="Name *" />
        <InputField name="muscleGroups" label="Muscle groups" placeholder="Ex (Upper back, Lats)" />
      </Stack>
      <Stack flex={true}>
        <InputField name="description" label="Description" />
        <InputField name="videoUrl" label="Video url" />
      </Stack>
      <Stack flex={true} justify="end">
        <Button loading={props.isSubmitting} submit={true}>
          Save
        </Button>
      </Stack>
    </Stack>
  );
}
