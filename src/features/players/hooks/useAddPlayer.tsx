import { useEffect, useRef, useState } from 'react';

import { capitalizeFirst, validate } from '@utils';
import { PlayerName, PlayerNameSchema } from '../types';

export const useAddPlayer = ({
  initialName = '',
  onSuccess,
}: {
  initialName?: string;
  onSuccess?: (name: string) => void;
} = {}) => {
  const [name, setName] = useState<PlayerName>(initialName);
  const [errors, setErrors] = useState<string[] | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  // Change handler
  const handleNameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    setName(capitalizeFirst(value));
  };

  // Submit handler
  const handleSubmitPlayer = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const validation = validate(name, PlayerNameSchema);

    if (validation.success) {
      resetErrors();
      onSuccess?.(validation.data);
    } else {
      const { formErrors } = validation.error.flatten();
      setErrors(formErrors);
    }
  };

  // Reset errors
  const resetErrors = () => {
    if (errors?.length) {
      setErrors(null);
    }
  };

  // Focus on input
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return {
    playerName: name,
    playerInputRef: inputRef,
    playerErrors: errors,
    handleNameChange,
    handleSubmitPlayer,
  };
};
