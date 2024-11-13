import {
  Stepper,
  Step,
  StepContent,
  StepNavigation,
  StepButton,
  useStepper,
} from '@components/ui/stepper';
import { SlideIn } from '@components/ui/transition/SlideIn';
import { AddPlayer } from './AddPlayer';
import { PlayButton } from './PlayButton';

import { useDispatch, useSelector } from '@store';
import {
  addPlayerOne,
  addPlayerTwo,
  selectPlayers,
} from '../slices/playersSlice';
import { playGame } from '@features/game/slices/gameSlice';

type PlayersProps = {
  className?: string;
  resetStart: () => void;
};

export const PlayerSetup = ({
  className = '',
  resetStart,
}: PlayersProps) => {
  const { playerOne, playerTwo } = useSelector(selectPlayers);
  const { activeStep, handleNext, handlePrev } = useStepper();

  const dispatch = useDispatch();

  const handlePlayerOneSuccess = (playerName: string) => {
    if (playerOne.name !== playerName) {
      dispatch(addPlayerOne(playerName));
    }
    handleNext();
  };

  const handlePlayerTwoSuccess = (playerName: string) => {
    if (playerTwo.name !== playerName) {
      dispatch(addPlayerTwo(playerName));
    }
    dispatch(playGame());
  };

  return (
    <div className={className}>
      <Stepper activeStep={activeStep}>
        {/* Step: player 1 */}
        <Step>
          <SlideIn
            direction="bottom"
            offsetY={100}
            slideOnMount
            withFade
            transition={{
              duration: 500,
              timingFunction:
                'cubic-bezier(0.165, 0.84, 0.44, 1)',
            }}
          >
            <StepContent>
              <AddPlayer
                label="Player 1"
                name={playerOne.name}
                onSuccess={handlePlayerOneSuccess}
              />
            </StepContent>

            <StepNavigation className="-mx-[10px]">
              <StepButton
                name="Home"
                direction="prev"
                onClick={resetStart}
              />
              <StepButton
                name="Player 2"
                direction="next"
                form="add-player-form"
                type="submit"
              />
            </StepNavigation>
          </SlideIn>
        </Step>

        {/* Step: player 2 */}
        <Step>
          <SlideIn
            direction="bottom"
            offsetY={100}
            slideOnMount
            withFade
            transition={{
              duration: 500,
              timingFunction:
                'cubic-bezier(0.165, 0.84, 0.44, 1)',
            }}
          >
            <StepContent>
              <AddPlayer
                label="Player 2"
                name={playerTwo.name}
                onSuccess={handlePlayerTwoSuccess}
              />
              <PlayButton form="add-player-form" type="submit" />
            </StepContent>

            <StepNavigation className="-mx-[10px]">
              <StepButton
                name="Player 1"
                direction="prev"
                onClick={handlePrev}
              />
            </StepNavigation>
          </SlideIn>
        </Step>
      </Stepper>
    </div>
  );
};
