import React from 'react';
import { Box } from '@mui/system';
import './styles.scss';

interface Props {
    children: JSX.Element | JSX.Element[];
};

export const HomeContainer: React.FC<Props> = ({children}) => {

  return (
    <Box className='divHome'>
        {children}
    </Box>
  )
}
