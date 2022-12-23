import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { zUsername } from 'lib/zod/formHelpers';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { z } from 'zod';

import { useApeSnackbar } from '../../hooks';
import { Box, Button, TextField, Text, Form, Flex } from '../../ui';
import { normalizeError } from '../../utils/reporting';
import { QUERY_KEY_PROFILE_BY_ADDRESS } from 'pages/JoinCirclePage/queries';

import { QUERY_KEY_MAIN_HEADER } from './getMainHeaderData';
import { updateProfileNameMutation } from './mutations';

const userNameSchema = z.object({ name: zUsername });
type UserNameFormSchema = z.infer<typeof userNameSchema>;

export const CreateUserNameForm = ({ address }: { address?: string }) => {
  const { showError } = useApeSnackbar();
  const [loading, setLoading] = useState<boolean>(false);
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<UserNameFormSchema>({
    resolver: zodResolver(userNameSchema),
    reValidateMode: 'onChange',
    mode: 'onChange',
    defaultValues: {
      name: '',
    },
  });

  const profileNameMutation = useMutation(updateProfileNameMutation, {
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: async () => {
      queryClient.invalidateQueries(QUERY_KEY_MAIN_HEADER);
      queryClient.invalidateQueries(QUERY_KEY_PROFILE_BY_ADDRESS);
    },
    onError: err => {
      setLoading(false);
      const error = normalizeError(err);
      setError('name', {
        type: 'server',
        message: error.message,
      });
      showError(error.message);
    },
    onSettled: () => {
      setLoading(false);
    },
  });
  const onSubmit: SubmitHandler<UserNameFormSchema> = async data => {
    await profileNameMutation.mutate(data.name);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Text p as="p">
        Please set the name that will be displayed for this account in all
        circles.
      </Text>
      <Flex
        column
        css={{
          alignItems: 'flex-start',
          mt: '$lg',
          gap: '$md',
        }}
      >
        <Box>
          <Text variant="label" css={{ mb: '$xs' }}>
            Name
          </Text>
          <TextField
            placeholder="Name"
            fullWidth
            autoComplete="off"
            error={errors.name !== undefined}
            {...register(`name`)}
          />
          <Box>
            {errors.name && (
              <Text variant="formError" css={{ mt: '$sm', textAlign: 'left' }}>
                {errors.name.message}
              </Text>
            )}
          </Box>
        </Box>
        <Box css={{ mb: '$lg' }}>
          <Text variant="label" css={{ mb: '$xs' }}>
            Wallet Address
          </Text>
          <Text css={{ width: '100%', wordBreak: 'break-all' }}>
            {address}{' '}
          </Text>
        </Box>
      </Flex>
      <Box>
        <Button
          type="submit"
          color="primary"
          size="large"
          disabled={loading || !isValid}
        >
          Submit
        </Button>
      </Box>
    </Form>
  );
};