// @flow

import type { Node } from 'react';
import { action } from '@storybook/addon-actions';
import { MdFavorite, MdPlayArrow, MdAccessAlarm } from 'react-icons/md';

import IconButton from './IconButton';

export const normal = (): Node => (
  <IconButton ariaLabel="favorite" onClick={action('click')}>
    <MdFavorite />
  </IconButton>
);

export const small = (): Node => (
  <IconButton ariaLabel="play" size="small" color="danger" onClick={action('click')}>
    <MdPlayArrow />
  </IconButton>
);

export const large = (): Node => (
  <IconButton ariaLabel="clock" size="large" color="secondary" onClick={action('click')}>
    <MdAccessAlarm />
  </IconButton>
);

export const loading = (): Node => (
  <IconButton loading={true} ariaLabel="favorite" onClick={action('click')}>
    <MdFavorite />
  </IconButton>
);

export default {
  component: IconButton,
  title: 'IconButton',
};
