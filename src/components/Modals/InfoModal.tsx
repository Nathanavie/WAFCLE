import React, { ReactElement } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Square from '../Grid/Square/Square';

interface InfoModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#0f172a',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const InfoModal = ({ isOpen, handleClose }: InfoModalProps): ReactElement => (
  <Modal className="modal" open={isOpen} onClose={handleClose}>
    <Box sx={style}>
      <header className="modalHeader">
        <h2>How to Play</h2>
        <CloseIcon role="button" onClick={handleClose} />
      </header>
      <Typography>
        <p>
          Guess the word in 6 tries. After each guess, the color of the tiles
          will change to show how close your guess was to the word.
        </p>
        <p className="bold center large">
          Each guess must be a valid surname of a current Wigan Squad player
        </p>
        <section className="squareRow">
          <Square solutionLength={5} value="W" status="correct" />
          <Square status={null} solutionLength={5} value="E" />
          <Square status={null} solutionLength={5} value="A" />
          <Square status={null} solutionLength={5} value="R" />
          <Square status={null} solutionLength={5} value="Y" />
        </section>
        <p>The letter W is in the word and in the correct spot.</p>
        <section className="squareRow">
          <Square status={null} solutionLength={5} value="P" />
          <Square status={null} solutionLength={5} value="I" />
          <Square solutionLength={5} value="L" status="present" />
          <Square status={null} solutionLength={5} value="O" />
          <Square status={null} solutionLength={5} value="T" />
        </section>
        <p>The letter L is in the word but in the wrong spot.</p>
        <section className="squareRow">
          <Square status={null} solutionLength={5} value="V" />
          <Square status={null} solutionLength={5} value="A" />
          <Square status={null} solutionLength={5} value="G" />
          <Square solutionLength={5} value="U" status="absent" />
          <Square status={null} solutionLength={5} value="E" />
        </section>
        <p>The letter U is not in the word in any spot.</p>
      </Typography>
    </Box>
  </Modal>
);
export default InfoModal;
