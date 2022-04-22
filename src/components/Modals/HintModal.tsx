import React, { ReactElement } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { solutionInfo } from '../../utils/wordUtils';
import gameSettings from '../../constants/gameSettings';

interface HintModalProps {
  isOpen: boolean;
  handleClose: () => void;
  numberOfGuesses: number;
}

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const HintModal = ({
  isOpen,
  handleClose,
  numberOfGuesses,
}: HintModalProps): ReactElement => (
  <Modal className="modal hintModal" open={isOpen} onClose={handleClose}>
    <Box sx={style}>
      <header className="modalHeader">
        <h2>Need a hint?</h2>
        <CloseIcon role="button" onClick={handleClose} />
      </header>
      <Typography>
        <p>
          Here is a hint to help you get the right answer before you run out of
          guesses!
        </p>
        <h3>Position</h3>
        <p>{solutionInfo.position}</p>
        <h3>Which squad are they in?</h3>
        <p>{solutionInfo.team}</p>
        {numberOfGuesses > 1 ? (
          <>
            <h3>First name</h3>
            <p>{solutionInfo.firstName}</p>
          </>
        ) : null}
        <p>
          They last played for {gameSettings.Team} in the
          <span className="bold"> {solutionInfo.mostRecentYear} </span> season
        </p>
        {numberOfGuesses < 1 ? (
          <p className="tiny">
            <em>
              Make at least 2 guesses and get the first name of the player!
            </em>
          </p>
        ) : null}
      </Typography>
    </Box>
  </Modal>
);
export default HintModal;
