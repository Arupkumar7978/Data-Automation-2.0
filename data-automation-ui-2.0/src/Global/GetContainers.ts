import { Components } from './Components';
import { GenericComponentType } from './gobalTypes';

export const GetContainers = (
  currentScreen: keyof GenericComponentType
) => Components[currentScreen];
