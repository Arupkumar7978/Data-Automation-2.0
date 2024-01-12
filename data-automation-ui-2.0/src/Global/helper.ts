import { GenericComponentType } from './gobalTypes';
import { Components } from './Components';

export const isValidScreenName = (
  screenName: string
): screenName is keyof GenericComponentType =>
  screenName in Components;
