import { template } from './utils';

describe('template', () => {
  it('returns the original string when there is no data passed', () => {
    expect(template('some text', undefined)).toEqual('some text');
  });

  // it('templates just first names', () => {
  //   expect(template('Joseph', undefined)).toEqual('Joseph');
  // });

  // it('templates first and last names', () => {
  //   expect(template('Joseph', undefined, 'Publique')).toEqual('Joseph Publique');
  // });

  // it('templates first, middle and last names', () => {
  //   expect(template('Joseph', 'Quincy', 'Publique')).toEqual(
  //     'Joseph Quincy Publique'
  //   );
  // });
});
