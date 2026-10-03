import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/clips", label: "Course Clips" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link
          to="/"
          className="flex items-center gap-2.5 text-ink no-underline"
          onClick={() => setOpen(false)}
        >
          <img
            src="/images/logo-qeeg-ink.png"
            alt="qEEG Courses"
            className="h-9 w-auto max-w-[9.5rem] object-contain object-left sm:h-10 sm:max-w-[11rem]"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "text-sm font-medium text-muted no-underline transition-colors hover:text-ink",
                pathname === item.to && "text-ink",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm">
            <a href={site.sales.memberLoginUrl}>
              <span className="sm:hidden">My courses</span>
              <span className="hidden sm:inline">Take me to my courses</span>
            </a>
          </Button>
          <Button asChild variant="outline" size="sm" className="hidden md:inline-flex">
            <a href={site.sales.starterBundle} target="_blank" rel="noopener noreferrer">
              Early bundle
            </a>
          </Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-border bg-bg px-4 py-4 lg:hidden">
          <nav className="grid gap-1" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex min-h-11 items-center rounded-md px-3 text-base text-ink no-underline hover:bg-surface-2",
                  pathname === item.to && "bg-surface-2",
                )}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.sales.memberLoginUrl}
              className="mt-2 flex min-h-11 items-center justify-center rounded-md bg-accent px-3 font-medium text-accent-fg no-underline"
            >
              Take me to my courses
            </a>
            <a
              href={site.sales.starterBundle}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 items-center justify-center rounded-md border border-border-strong px-3 font-medium text-ink no-underline"
            >
              Early bundle
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
