import {AllLowerCasePipe, PascalCasePipe, splitWords, UpperSnakeCasePipe} from "src/app/utils/case.pipe";

describe('splitWords', () => {
  it('should split words separated with saces', function () {
    let words = splitWords('lorem ipsum dolor');
    expect(words).toEqual(['lorem', 'ipsum', 'dolor']);
  });

  it('should split words separated with dashes', function () {
    let words = splitWords('lorem-ipsum-dolor');
    expect(words).toEqual(['lorem', 'ipsum', 'dolor']);
  });

  it('should split words separated with uppercase', function () {
    let words = splitWords('LoremIpsumDolor');
    expect(words).toEqual(['Lorem', 'Ipsum', 'Dolor']);
  });

  it('should split words separated with multiple markers', function () {
    let words = splitWords('LoremIpsum dolor-sit Amet');
    expect(words).toEqual(['Lorem', 'Ipsum', 'dolor', 'sit', 'Amet']);
  });
});

describe('AllLowerCasePipe', () => {
  let pipe: AllLowerCasePipe;
  beforeEach(() => {
    pipe = new AllLowerCasePipe();
  });

  it('should create the expected lowercase string', function () {
    let value = pipe.transform('LoremIpsum dolor-sit');
    expect(value).toEqual('loremipsumdolorsit');
  });
});

describe('UpperSnakeCasePipe', () => {
  let pipe: UpperSnakeCasePipe;
  beforeEach(() => {
    pipe = new UpperSnakeCasePipe();
  });

  it('should create the expected UPPER_CASE string', function () {
    let value = pipe.transform('LoremIpsum dolor-sit');
    expect(value).toEqual('LOREM_IPSUM_DOLOR_SIT');
  });
});

describe('PascalCasePipe', () => {
  let pipe: PascalCasePipe;
  beforeEach(() => {
    pipe = new PascalCasePipe();
  });

  it('should create the expected PascalCase string', function () {
    let value = pipe.transform('LoremIpsum dolor-sit');
    expect(value).toEqual('LoremIpsumDolorSit');
  });
});
