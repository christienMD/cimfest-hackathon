'use client';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Link } from 'react-router-dom';

export function UserProfile() {
  const [isOpen, setIsOpen] = useState(false);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  const menuItems = [
    {
      label: 'Profile',
      href: `/artist-profile`,
      disabled: false,
    },
    { label: 'Dashboard', href: '#', disabled: true },
    { label: 'Post a Request', href: '#', disabled: false },
    { label: 'Refer a Friend', href: '#', disabled: false },
    {
      label: 'Settings',
      href: `/profile/settings`,
      disabled: false,
    },
    { label: 'Billing and payments', href: '#', disabled: true },
    { label: 'Help & support', href: '#', disabled: false },
  ];

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <button className="relative w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center rounded-full text-sm font-semibold text-white hover:bg-[#411294]/20 focus:outline-none focus:ring-2 focus:ring-[#411294] focus:ring-offset-2 focus:ring-offset-[#23213] transition-all">
          <Avatar className="w-[38px] h-[38px]">
            <AvatarImage src={''} alt="Profile" referrerPolicy="no-referrer" />
            <AvatarFallback className="bg-gradient-to-r from-[#411294] to-[#9C64FF] text-white">
              {getInitials('Njinda Salome')}
            </AvatarFallback>
          </Avatar>
          <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-[#23213] bg-green-500" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 bg-[#D4BBFF] border border-[#411294]/20"
        align="end"
        forceMount
      >
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium text-gray-900 leading-none">
              Njinda Salome
            </p>
            <p className="text-xs leading-none text-gray-600">
              njindasalome@gmail.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-[#411294]/20" />
        <DropdownMenuGroup>
          {menuItems.map((item) => (
            <DropdownMenuItem
              key={item.label}
              className="hover:bg-[#411294]/20 hover:text-gray-900 focus:bg-[#411294]/20 focus:text-gray-900 group"
              disabled={item.disabled}
            >
              <Link
                to={item.href}
                className={`${
                  item.disabled
                    ? 'cursor-text text-gray-500'
                    : item.label === 'Refer a Friend'
                    ? 'text-[#411294] cursor-pointer font-medium group-hover:text-gray-900'
                    : 'cursor-pointer text-gray-900'
                } w-full`}
                onClick={(e) => {
                  if (item.disabled) {
                    e.preventDefault();
                  }
                }}
              >
                {item.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="bg-[#411294]/20" />
        <DropdownMenuItem className="hover:bg-[#411294]/20 hover:text-gray-900 focus:bg-[#411294]/20 focus:text-gray-900">
          <button className="w-full text-left cursor-pointer text-gray-900">
            Logout
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
