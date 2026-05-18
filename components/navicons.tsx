"use client";

import * as React from "react";
import { Bell, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { UserButton } from '@clerk/nextjs'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from '@/components/ui/dropdown-menu'; // Fixed import path to match standard shadcn structure

export function NavIcons() {
  const [cartCount] = useState(3);
  const [notificationCount] = useState(5);

  return (
    <div className="flex items-center gap-2">
      {/* Notifications Button */}
      <Button 
        variant="ghost" 
        size="icon" 
        className="relative text-muted-foreground hover:text-foreground"
        aria-label="View notifications"
      >
        <Bell className="h-5 w-5" />
        {notificationCount > 0 && (
          <Badge 
            variant="destructive" 
            className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center rounded-full p-0 text-[10px] font-bold animate-in fade-in zoom-in"
          >
            {notificationCount}
          </Badge>
        )}
      </Button>

      {/* Cart Dropdown Menu */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative text-muted-foreground hover:text-foreground"
            aria-label="View shopping cart"
          >
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <Badge 
                className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center rounded-full p-0 text-[10px] font-bold bg-primary text-primary-foreground animate-in fade-in zoom-in"
              >
                {cartCount}
              </Badge>
            )}
          </Button>
        </DropdownMenuTrigger>
        
        {/* Positioning props implemented below */}
        <DropdownMenuContent 
          side="top"           // Forces the container to open upwards
          align="end"          // Aligns the right edge of the card to the right edge of the button
          sideOffset={12}      // Adds clean pixel padding between button and menu
          className="w-56"     // Gives the box a standard, readable fixed width
        >
          <div className="p-4 text-sm font-medium border-b">Shopping Cart</div>
          <p className="p-4 text-xs text-muted-foreground">Your cart has {cartCount} items.</p>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Profile Button */}
      <div className="flex h-10 w-10 items-center justify-center">
        <UserButton />
      </div>
    </div>
  );
}
