import { ParsingError, PropertyParser } from 'bookish-potato-dto';
import { Redirect } from '@/app/_config/types/redirect.type';

class RedirectsParser implements PropertyParser<readonly Redirect[]> {
  parse(value: unknown): readonly Redirect[] {
    if (typeof value !== 'string') {
      throw new ParsingError('Invalid redirects configuration');
    }

    return value.split(',').map(redirect => {
      const [from, to] = redirect.split(':');
      return {
        from,
        to,
        statusCode: 301, // TODO: Make this configurable
      };
    });
  }
}

export const redirectsParser = new RedirectsParser();
