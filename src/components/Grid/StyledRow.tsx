import React, { ReactElement } from 'react';

interface StyledRowProps {
  children: ReactElement;
}

const StyledRow = ({ children }: StyledRowProps): ReactElement => (
  <section className="styledRow">{children}</section>
);

export default StyledRow;
