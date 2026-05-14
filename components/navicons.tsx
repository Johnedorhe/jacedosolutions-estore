"use client";

import * as React from "react";
import { Bell, ShoppingCart, User} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export function NavIcons() {
  const [cartCount] = useState(3);
  const [notificationCount] = useState(5);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
    if (!isCartOpen) {
      setIsProfileMenuOpen(false);
    }
  }
  
  const toggleProfileMenu = () => {
    setIsProfileMenuOpen((prev) => !prev);
    if (!isProfileMenuOpen) {
      setIsCartOpen(false)
    }
  }

  return (
    <div className="flex items-center gap-2">
      <Button 
        variant="ghost" 
        size="icon" 
        className="relative text-muted-foreground hover:text-foreground"
        aria-label="View notifications"
        onClick={toggleProfileMenu}
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

      {/* Cart Button */}
      <Button 
        variant="ghost" 
        size="icon" 
        className="relative text-muted-foreground hover:text-foreground"
        aria-label="View shopping cart"
        onClick={toggleCart}
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

      {/* Profile Button (Direct Link Row Style) */}
      <Button 
        variant="ghost" 
        size="icon" 
        className="text-muted-foreground hover:text-foreground"
        aria-label="View profile"
        onClick={toggleProfileMenu}
      >
        <User className="h-5 w-5" />
      </Button>
    </div>
  );
}
