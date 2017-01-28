import {RootController} from '../src/components/root/root.component';

test('adds 1 + 2 to equal 3', () => {
  var root = new RootController();
  expect(root.sum(1, 2)).toBe(3);
  // expect(root.sum(1, 2)).toBe(3);
});