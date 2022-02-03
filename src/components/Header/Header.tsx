import React, { ReactElement } from 'react';
import HelpIcon from '@mui/icons-material/Help';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import Button from '@mui/material/Button';

interface HeaderProps {
  openInfoModal: (state: boolean) => void;
  openStatsModal: (state: boolean) => void;
  openHintModal: (state: boolean) => void;
}

const Header = ({
  openInfoModal,
  openStatsModal,
  openHintModal,
}: HeaderProps): ReactElement => (
  <header className="headerContainer">
    <section className="helpSection">
      <HelpIcon
        onClick={() => openInfoModal(true)}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === ' ' || e.key === 'Enter') {
            openHintModal(true);
          }
        }}
      />
      <Button
        variant="contained"
        className="hintButton"
        type="button"
        onClick={() => openHintModal(true)}
        endIcon={<LightbulbIcon />}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === ' ' || e.key === 'Enter') {
            openHintModal(true);
          }
        }}
      >
        Hint
      </Button>
    </section>
    <h1>
      <span id="wafc">#WAFC</span>LE
    </h1>
    <section className="statsSection">
      <ShowChartIcon
        onClick={() => openStatsModal(true)}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === ' ' || e.key === 'Enter') {
            openStatsModal(true);
          }
        }}
      />
    </section>
  </header>
);
export default Header;
