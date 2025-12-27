import { NumberFormatterPipe } from '../../../../../pipe/number-formatter/number-formatter-pipe';

const numberFormatter = new NumberFormatterPipe();
export const valueFormatter = function (value: any) {
  return numberFormatter.transform(value);
};
