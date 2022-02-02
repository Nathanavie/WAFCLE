import React, { ReactElement } from 'react';
import HelpIcon from '@mui/icons-material/Help';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import Button from '@mui/material/Button';

interface HeaderProps {
  openInfoModal: (state: boolean) => void;
  openStatsModal: (state: boolean) => void;
  openHintModal: (state: boolean) => void;
  guesses: string[];
}

const Header = ({
  openInfoModal,
  openStatsModal,
  openHintModal,
  guesses,
}: HeaderProps): ReactElement => (
  <header className="headerContainer">
    <section className="helpSection">
      <HelpIcon onClick={() => openInfoModal(true)} />
      {guesses.length > 2 && (
        <Button
          variant="contained"
          className="hintButton"
          type="button"
          onClick={() => openHintModal(true)}
          endIcon={<LightbulbIcon />}
        >
          Hint
        </Button>
      )}
    </section>
    <h1>
      <span id="wafc">#WAFC</span>LE
    </h1>
    <section className="statsSection">
      <ShowChartIcon onClick={() => openStatsModal(true)} />
    </section>
  </header>
);
export default Header;
