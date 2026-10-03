import { site } from "@/data/site";
import { courses } from "@/data/courses";
import { faqs } from "@/data/faqs";

function Script({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: site.name,
        legalName: site.legalName,
        url: site.url,
        email: site.contact.supportEmail,
        telephone: site.contact.phone,
        founder: {
          "@type": "Person",
          name: site.instructor.name,
          jobTitle: `${site.instructor.credentials}, ${site.instructor.role}`,
          image: `${site.url}${site.instructor.photoSrc}`,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: site.clinic.address,
          addressLocality: site.clinic.city,
          addressRegion: site.clinic.region,
          postalCode: site.clinic.postal,
          addressCountry: site.clinic.country,
        },
      }}
    />
  );
}

export function CourseListJsonLd() {
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: courses.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Course",
            name: c.title,
            description: c.shortDesc,
            provider: {
              "@type": "EducationalOrganization",
              name: site.name,
              sameAs: site.url,
            },
            url: c.salesLink ?? `${site.url}/courses`,
          },
        })),
      }}
    />
  );
}

export function FaqJsonLd() {
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }}
    />
  );
}
