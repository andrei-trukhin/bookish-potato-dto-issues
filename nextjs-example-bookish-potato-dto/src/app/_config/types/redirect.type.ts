export interface Redirect {
  /**
   * The path to redirect from.
   */
  readonly from: string;
  /**
   * The path to redirect to.
   */
  readonly to: string;
  readonly statusCode: number;
}
