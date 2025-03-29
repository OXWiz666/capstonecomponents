import React from "react";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { User, Menu, Settings, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

interface HeaderProps {
  logo?: string;
  navigationLinks?: Array<{
    label: string;
    href: string;
    subItems?: Array<{ label: string; href: string; description?: string }>;
  }>;
  onLoginClick?: () => void;
  isLoggedIn?: boolean;
  userName?: string;
}

const Header = ({
  logo = "/vite.svg",
  navigationLinks = [
    { label: "Home", href: "/" },
    {
      label: "Services",
      href: "/services",
      subItems: [
        {
          label: "Appointments",
          href: "/appointments",
          description: "Schedule your visit to the health center",
        },
        {
          label: "Medical Records",
          href: "/services/records",
          description: "Access your health records securely",
        },
        {
          label: "Vaccinations",
          href: "/services/vaccinations",
          description: "View vaccination schedules and availability",
        },
      ],
    },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  onLoginClick,
  isLoggedIn: isLoggedInProp,
  userName: userNameProp,
}: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  // Use auth context if available, otherwise use props
  const isLoggedIn = user !== null || isLoggedInProp;
  const userName = user?.user_metadata?.full_name || userNameProp || "User";

  const handleLoginClick = () => {
    if (onLoginClick) {
      onLoginClick();
    } else {
      navigate("/login");
    }
  };

  const handleLogout = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <header className="w-full h-20 bg-white border-b border-gray-200 shadow-sm fixed top-0 left-0 z-50">
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Barangay Calumpang Health Center"
            className="h-10 w-auto"
          />
          <span className="ml-2 font-semibold text-lg hidden sm:inline">
            Calumpang Health Center
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {navigationLinks.map((link, index) => {
                // If the link has subitems, render a dropdown
                if (link.subItems && link.subItems.length > 0) {
                  return (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuTrigger>
                        {link.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px]">
                          {link.subItems.map((subItem, subIndex) => (
                            <NavigationMenuLink
                              key={subIndex}
                              href={subItem.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">
                                {subItem.label}
                              </div>
                              {subItem.description && (
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {subItem.description}
                                </p>
                              )}
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  );
                }

                // Otherwise render a simple link
                return (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      href={link.href}
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Login Button or User Profile */}
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <div className="hidden md:block">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <User size={16} />
                    <span>{userName}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate("/profile")}>
                    <div className="flex items-center w-full">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Profile Settings</span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a
                      href="/appointments"
                      className="flex items-center w-full"
                    >
                      <span>My Appointments</span>
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <div className="flex items-center w-full">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="hidden md:flex gap-2">
              <Button
                onClick={handleLoginClick}
                className="flex items-center gap-2"
                variant="outline"
              >
                <User size={16} />
                <span>Login</span>
              </Button>
              <Button
                onClick={() => navigate("/register")}
                className="flex items-center gap-2"
                variant="default"
              >
                <span>Register</span>
              </Button>
            </div>
          )}

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-200 shadow-md">
          <nav className="container mx-auto py-4 px-4">
            <ul className="space-y-4">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="block py-2 text-gray-800 hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                  {link.subItems && link.subItems.length > 0 && (
                    <ul className="pl-4 mt-2 space-y-2 border-l-2 border-gray-200">
                      {link.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a
                            href={subItem.href}
                            className="block py-1 text-gray-600 hover:text-primary text-sm"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              {isLoggedIn ? (
                <>
                  <li>
                    <Button
                      onClick={() => {
                        navigate("/profile");
                        setMobileMenuOpen(false);
                      }}
                      variant="ghost"
                      className="w-full justify-start py-2 text-gray-800 hover:text-primary flex items-center"
                    >
                      <Settings className="mr-2 h-4 w-4" />
                      Profile Settings
                    </Button>
                  </li>
                  <li>
                    <a
                      href="/appointments"
                      className="block py-2 text-gray-800 hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      My Appointments
                    </a>
                  </li>
                  <li>
                    <Button
                      onClick={handleLogout}
                      className="w-full mt-2 flex items-center justify-center gap-2"
                      variant="outline"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </Button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Button
                      onClick={() => {
                        handleLoginClick();
                        setMobileMenuOpen(false);
                      }}
                      className="w-full mt-2 flex items-center justify-center gap-2"
                      variant="outline"
                    >
                      <User size={16} />
                      <span>Login</span>
                    </Button>
                  </li>
                  <li>
                    <Button
                      onClick={() => {
                        navigate("/register");
                        setMobileMenuOpen(false);
                      }}
                      className="w-full mt-2 flex items-center justify-center gap-2"
                      variant="default"
                    >
                      <span>Register</span>
                    </Button>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
