import { buildParams } from './utils';

describe('buildParams', () => {
  it('returns the original string when there is no data passed', () => {
    expect(buildParams('https://someurl.dev', undefined)).toEqual('https://someurl.dev');
  });

  // it('buildParamss just first names', () => {
  //   expect(buildParams('Joseph', undefined)).toEqual('Joseph');
  // });

  // it('buildParamss first and last names', () => {
  //   expect(buildParams('Joseph', undefined, 'Publique')).toEqual('Joseph Publique');
  // });

  // it('buildParamss first, middle and last names', () => {
  //   expect(buildParams('Joseph', 'Quincy', 'Publique')).toEqual(
  //     'Joseph Quincy Publique'
  //   );
  // });
});
