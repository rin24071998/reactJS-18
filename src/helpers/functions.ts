import { routesInfo, subMenu } from '@constants/pages';
import { ISubMenu, IUrlInfo } from '@interfaces/routes';

/**
 * Returns the parent menu key based on the current path.
 *
 * @param currentPath - The current URL path for which to find the parent menu key.
 * @returns The key of the parent menu that contains the current path.
 *          Returns an empty string if no matching parent menu is found.
 */
export const getDefaultOpenKeys = (currentPath: string): string => {
  // Find the submenu that some the current path in its children array.
  const matchingMenuItem: ISubMenu | undefined = subMenu.find((item) =>
    item.children.some((el) => currentPath.startsWith(el))
  );

  // Return the parent key of the matching submenu, or an empty string if no match is found.
  return matchingMenuItem?.parent || '';
};

/**
 * Retrieves information about a route based on the current path.
 *
 * @param currentPath - The current URL path for which to find route information.
 * @returns An object containing route information if a matching path is found.
 *          Returns undefined if no matching route is found.
 */
export const getInfoUrlByCurrentPath = (
  currentPath: string
): IUrlInfo | undefined => {
  // Find the route information object that matches the current path name.
  return routesInfo?.find((item) => currentPath.startsWith(item.pathName));
};
