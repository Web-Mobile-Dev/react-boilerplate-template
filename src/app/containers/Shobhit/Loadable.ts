/**
 *
 * Asynchronously loads the component for Shobhit
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Shobhit = lazyLoad(
  () => import('./index'),
  module => module.Shobhit,
);
