import React, { ReactElement } from 'react';
import Countdown from 'react-countdown';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShareIcon from '@mui/icons-material/Share';
import CloseIcon from '@mui/icons-material/Close';
import { GameStats } from '../../utils/localStorage';
import { tomorrow } from '../../utils/wordUtils';
import { shareStatus } from '../../utils/share';
import StatBar from '../Stats/StatBar';
import Histogram from '../Stats/Histogram';

interface StatsModalProps {
  isOpen: boolean;
  handleClose: () => void;
  guesses: string[];
  gameStats: GameStats | null;
  isGameLost: boolean;
  isGameWon: boolean;
  handleShare: () => void;
}

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: '#ffffff',
  width: 400,
  bgcolor: '#0f172a',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const StatsModal = ({
  isOpen,
  handleClose,
  guesses,
  gameStats,
  isGameLost,
  isGameWon,
  handleShare,
}: StatsModalProps): ReactElement => {
  if (gameStats && gameStats.totalGames <= 0) {
    <Modal open={isOpen} onClose={handleClose}>
      <Box sx={style}>
        <header className="modalHeader">
          <h2>Statistics</h2>
          <CloseIcon role="button" onClick={handleClose} />
        </header>
        <Typography>
          <StatBar gameStats={gameStats} />
        </Typography>
      </Box>
    </Modal>;
  }
  return (
    <Modal className="modal" open={isOpen} onClose={handleClose}>
      <Box sx={style}>
        <header className="modalHeader">
          <h3>Statistics</h3>
          <CloseIcon role="button" onClick={handleClose} />
        </header>
        <Typography>
          <StatBar gameStats={gameStats} />
          <h4>Guess Distribution</h4>
          <Histogram gameStats={gameStats} />
        </Typography>
        {(isGameLost || isGameWon) && (
          <section className="modalFooter">
            <section className="newWord">
              <h5>NEXT WAFCLE</h5>
              <Countdown className="countdown" date={tomorrow} daysInHours />
            </section>
            <Button
              type="button"
              onClick={() => {
                shareStatus(guesses, isGameLost, handleShare);
              }}
              endIcon={<ShareIcon />}
            >
              Share
            </Button>
          </section>
        )}
      </Box>
    </Modal>
  );
};
export default StatsModal;
