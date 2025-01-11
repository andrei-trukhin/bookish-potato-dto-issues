import { parseObject } from 'bookish-potato-dto';
import { CommonConfiguration } from '@/app/_config/common.configuration';

/**
 * The application configuration.
 * Declares the configuration options for the application.
 */
class _AppConfiguration extends CommonConfiguration {}

/**
 * The application configuration.
 */
export type AppConfiguration = InstanceType<typeof _AppConfiguration>;

/**
 * The instance of the application configuration.
 */
export const appConfiguration: AppConfiguration = parseObject(
  _AppConfiguration,
  process.env,
);
