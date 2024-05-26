"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRecoilState } from "recoil" 
import { ThemeState } from "@/recoilState" 

export default function ThemeSelectButton() {
  const [position, setPosition] = React.useState("bottom");
  const [themeSelect, setThemeSelect] = useRecoilState(ThemeState);

  const ThemeChange = (value: string) => {
    // Set the theme based on the selected value
    setThemeSelect(value);
    console.log(`Theme changed to: ${value}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Theme</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Select Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="dark" onClick={() => ThemeChange('dark')}>Dark</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="light" onClick={() => ThemeChange('light')}>Light</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="pink" onClick={() => ThemeChange('pink')}>Pink</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
