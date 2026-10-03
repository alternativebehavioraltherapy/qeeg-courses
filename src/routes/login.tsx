import { createFileRoute, Link } from "@tanstack/react-router";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/login")({
  head: () =>
    pageHead({
      title: "Sign in",
      description: "Sign in to the qEEG Courses site account.",
      path: "/login",
    }),
  component: Login,
});

function Login() {
  return (
    <main className="grid min-h-dvh place-items-center bg-bg px-6">
      <div className="w-full max-w-sm">
        <Link to="/" className="text-sm text-muted no-underline hover:text-ink">
          Back to the site
        </Link>
        <h1 className="mt-6 font-display text-3xl text-ink">Sign in</h1>
        <p className="mt-2 text-sm text-muted">
          Site account only. Course membership lives on the systeme.io member
          area after purchase.
        </p>
        <div className="mt-6 grid gap-3">
          {authEnabled ? (
            GROK_PROVIDERS.map((p) => (
              <Button
                key={p.providerId}
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => signIn(p.providerId, { callbackURL: "/" })}
              >
                Continue with {p.label}
              </Button>
            ))
          ) : (
            <p className="text-sm text-muted">Sign-in is disabled.</p>
          )}
        </div>
      </div>
    </main>
  );
}
