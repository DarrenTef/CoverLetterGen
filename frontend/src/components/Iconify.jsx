import { Icon } from '@iconify/react';
import React from 'react';

const Iconify = ({ icon, ...other }) => {
  return <Icon icon={icon} {...other} />;
};

export default Iconify;
