import {
  CustomProperty,
  ParsingError,
  PropertyData,
  PropertyParser,
  PropertyParsers,
} from 'bookish-potato-dto';

type StringToArrayOptions = PropertyData<string[]> & {
  /**
   * The splitter symbol to use when splitting the string.
   */
  readonly splitter?: string;
};

class StringToArrayParser implements PropertyParser<string[]> {
  constructor(private readonly splitter: string) {}

  parse(value: unknown): string[] {
    if (typeof value !== 'string') {
      throw new ParsingError(`Value is not a string!`);
    }

    return value.split(this.splitter);
  }
}

export function StringToArrayOfStrings(data?: StringToArrayOptions) {
  return CustomProperty<string[]>({
    parser: PropertyParsers.CACHE_PARSER(
      'StringToArrayOfStrings:' + data?.splitter,
      () => new StringToArrayParser(data?.splitter ?? ','),
    ),
    ...data,
  });
}
