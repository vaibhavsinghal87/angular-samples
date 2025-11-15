/**
 * Navigation Bar Interfaces and Types
 * Defines the structure and configuration for the navbar component
 */

/**
 * Navigation Menu Item Interface
 * Represents a single menu item in the navigation bar
 */
export interface INavMenuItem {
  /**
   * Unique identifier for the menu item
   */
  id: string;

  /**
   * Display label for the menu item
   */
  label: string;

  /**
   * URL or route path for navigation
   */
  url?: string;

  /**
   * Icon name (Material Icons)
   */
  icon?: string;

  /**
   * Whether the menu item is active/selected
   */
  isActive?: boolean;

  /**
   * Whether the menu item is disabled
   */
  isDisabled?: boolean;

  /**
   * Submenu items (for dropdown menus)
   */
  children?: INavMenuItem[];
}

/**
 * Navigation Bar Configuration Interface
 * Defines the overall configuration for the navbar
 */
export interface INavBarConfig {
  /**
   * Primary navigation menu items
   */
  menu: INavMenuItem[];
}
