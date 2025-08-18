import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '@radix-ui/react-navigation-menu'
import React from 'react'

const Navbar = () => {
  return (
    <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem>
                <NavigationMenuTrigger>Home</NavigationMenuTrigger>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Navbar