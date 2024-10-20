import { UserRound } from 'lucide-react';

import { Form, FormGroup, Input } from '@components/ui/form';
import { useAddPlayer } from '../hooks/useAddPlayer';
import { cn } from '@utils';

type AddPlayerProps = {
  label: string;
  name: string;
  onSuccess?: (playerName: string) => void;
};

export const AddPlayer = ({
  label,
  name,
  onSuccess,
}: AddPlayerProps) => {
  const {
    playerName,
    playerInputRef,
    playerErrors,
    handleNameChange,
    handleSubmitPlayer,
  } = useAddPlayer({ initialName: name, onSuccess });

  return (
    <Form id="add-player-form" onSubmit={handleSubmitPlayer}>
      <FormGroup
        styles={{
          groupStyles: 'text-white',
          labelStyles: 'text-[18px]',
          errorStyles: 'text-white',
        }}
        id="add-player"
        label={label}
        labelIcon={<UserRound className="icon-md" />}
        error={playerErrors?.[0]}
      >
        <Input
          className={cn('p-[20px]', 'text-[16px] text-white')}
          ref={playerInputRef}
          name="player"
          value={playerName}
          onChange={handleNameChange}
        />
      </FormGroup>
    </Form>
  );
};
