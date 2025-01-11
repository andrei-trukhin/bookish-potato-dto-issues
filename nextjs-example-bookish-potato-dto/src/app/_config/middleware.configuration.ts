import { CustomProperty, parseObject } from 'bookish-potato-dto';
import { StringToArrayOfStrings } from '@/app/_custom-decorators';
import { CommonConfiguration } from '@/app/_config/common.configuration';
import { Redirect } from '@/app/_config/types/redirect.type';
import { redirectsParser } from '@/app/_config/parsers/redirects.parser';

class _MiddlewareConfiguration extends CommonConfiguration {
  /**
   * The private routes that require authentication.
   * Configure the routes using a comma-separated list of strings.
   * Example: `profile,settings`.
   */
  @StringToArrayOfStrings({
    mapFrom: 'NEXT_PRIVATE_ROUTES',
    defaultValue: ['/admin', '/dashboard'],
    useDefaultValueOnParseError: true,
  })
  public readonly privateRoutes!: readonly string[];

  /**
   * The redirects-configuration.
   * Configure the redirects using a comma-separated list of strings in the format `from:to`.
   * Example: `old-page:new-page`.
   */
  @CustomProperty({
    mapFrom: 'NEXT_REDIRECTS',
    parser: redirectsParser,
    defaultValue: [],
    useDefaultValueOnParseError: true,
  })
  public readonly redirects!: readonly Redirect[];
}

export type MiddlewareConfiguration = InstanceType<
  typeof _MiddlewareConfiguration
>;

export const middlewareConfiguration: MiddlewareConfiguration = parseObject(
  _MiddlewareConfiguration,
  process.env,
);
