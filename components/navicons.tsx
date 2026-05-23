"use client";

import * as React from "react";
import { Bell, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { UserButton } from '@clerk/nextjs'

export function NavIcons({ onCartClick, cartCount }: { onCartClick: () => void; cartCount: number }) {
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

      {/* Cart Button triggers sheet */}
      <Button 
        variant="ghost" 
        size="icon" 
        className="relative text-muted-foreground hover:text-foreground"
        aria-label="View shopping cart"
        onClick={onCartClick}
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

      {/* Profile Button */}
      <div className="flex h-10 w-10 items-center justify-center">
        <UserButton />
      </div>
    </div>
  );
}
