import { DefaultPipe } from './default.pipe';

describe('DefaultPipe', () => {
  it('create an instance', () => {
    const pipe = new DefaultPipe();
    expect(pipe).toBeTruthy();
  });

  it ('Should return title with the first letter uppercase', () => {
    const pipe = new DefaultPipe ();
    expect (pipe.transform ('ngModule')).toBe ('NgModule')
  })
});
