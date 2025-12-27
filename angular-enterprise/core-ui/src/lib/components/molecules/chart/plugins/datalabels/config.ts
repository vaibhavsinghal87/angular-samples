import { valueFormatter } from './formatter';

export const DATALABELS_PLUGIN_CONFIG = {
  color: '#000000',
  anchor: 'end' as const,
  align: 'top' as const,
  font: {
    size: 10,
    weight: 'bold' as const,
  },
  formatter: valueFormatter,
};
