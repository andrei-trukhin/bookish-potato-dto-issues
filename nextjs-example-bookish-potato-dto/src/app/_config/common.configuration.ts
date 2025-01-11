import { StringProperty } from 'bookish-potato-dto';

/**
 * The common configuration. Do not initialize this class directly,
 * use the instance `commonConfiguration` instead.
 * This class describes the common configuration of the application,
 * that is shared by {@link MiddlewareConfiguration} and {@link AppConfiguration}.
 */
export class CommonConfiguration {
  @StringProperty({
    mapFrom: 'NEXT_APP_NAME',
    defaultValue: 'Bookish Potato Next.js Example',
  })
  public readonly appName!: string;
}
