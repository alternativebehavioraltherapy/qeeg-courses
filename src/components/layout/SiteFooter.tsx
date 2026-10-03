import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border bg-ink text-accent-fg">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <img
            src="/images/logo-qeeg.png"
            alt="qEEG Courses"
            className="mb-5 h-10 w-auto object-contain object-left"
          />
          <p className="font-display text-2xl">Stay close to new modules</p>
          <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-accent-fg/70">
            About three hours of processed content are planned each month.
            Course questions go to {site.instructor.name} at{" "}
            <a
              href={`mailto:${site.contact.supportEmail}`}
              className="text-accent-fg underline-offset-4 hover:underline"
            >
              {site.contact.supportEmail}
            </a>
            .
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent-fg/50">
              Explore
            </p>
            <ul className="mt-4 grid gap-2 text-sm">
              <li>
                <Link to="/courses" className="text-accent-fg/85 no-underline hover:text-accent-fg">
                  Course catalog
                </Link>
              </li>
              <li>
                <Link to="/clips" className="text-accent-fg/85 no-underline hover:text-accent-fg">
                  Course Clips
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-accent-fg/85 no-underline hover:text-accent-fg">
                  Mission & instructor
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-accent-fg/85 no-underline hover:text-accent-fg">
                  Contact & FAQ
                </Link>
              </li>
              <li>
                <a
                  href={site.sales.memberLoginUrl}
                  className="text-accent-fg/85 no-underline hover:text-accent-fg"
                >
                  Take me to my courses
                </a>
              </li>
              <li>
                <a
                  href={site.sales.starterBundle}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-fg/85 no-underline hover:text-accent-fg"
                >
                  Early starter bundle
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent-fg/50">
              Clinic
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-accent-fg/85">
              <li>
                <a
                  href={site.clinic.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline hover:text-accent-fg"
                >
                  {site.clinic.name}
                </a>
              </li>
              <li>
                {site.clinic.address}
                <br />
                {site.clinic.city}, {site.clinic.region} {site.clinic.postal}
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent-fg/50">
              Contact
            </p>
            <ul className="mt-4 grid gap-2 text-sm">
              <li>
                <a href={site.contact.phoneHref} className="text-accent-fg/85 no-underline hover:text-accent-fg">
                  {site.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.contact.supportEmail}`}
                  className="text-accent-fg/85 no-underline hover:text-accent-fg"
                >
                  {site.contact.supportEmail}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.contact.officeEmail}`}
                  className="text-accent-fg/85 no-underline hover:text-accent-fg"
                >
                  {site.contact.officeEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-accent-fg/50 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {year} {site.legalName}. All workshop and clinic photographs are
            the property of the owner.
          </p>
          <p>
            Purchases are completed on secure systeme.io checkout pages — this
            site does not process payments.
          </p>
        </div>
      </div>
    </footer>
  );
}
