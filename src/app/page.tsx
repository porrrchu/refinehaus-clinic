import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { BrandStatement } from '@/components/sections/BrandStatement';
import { ConcernCards } from '@/components/sections/ConcernCards';
import { ExpertiseSection } from '@/components/sections/ExpertiseSection';
import { TechnologySection } from '@/components/sections/TechnologySection';
import { DoctorSection } from '@/components/sections/DoctorSection';
import { ApproachTimeline } from '@/components/sections/ApproachTimeline';
import { ResultsSection } from '@/components/sections/ResultsSection';
import { KnowledgeSection } from '@/components/sections/KnowledgeSection';
import { ClinicExperience } from '@/components/sections/ClinicExperience';
import { LocationSection } from '@/components/sections/LocationSection';
import { FinalCTA } from '@/components/sections/FinalCTA';
import {
  SchemaMarkup,
  getMedicalClinicSchema,
  getPhysicianId,
  getPhysicianSchema,
  getWebPageSchema,
} from '@/components/seo/SchemaMarkup';
import { CLINIC } from '@/data/clinic';
import { DOCTORS } from '@/data/home';
import { clampSeoDescription, clampSeoTitle, getSocialMetadata } from '@/lib/seo';

// TODO(keyword map): lock the homepage's primary keyword, then tune title/description.
const TITLE = 'Refinehaus Clinic คลินิกความงามโคราช ดูแลโดยแพทย์';
const DESCRIPTION =
  'คลินิกเวชกรรมความงามในโคราช (นครราชสีมา) ยกกระชับ ดูแลผิว รักษาสิวและหลุมสิว และโปรแกรมดูแลน้ำหนักโดยแพทย์ วางแผนการรักษาเฉพาะบุคคลทุกเคส';

export const metadata: Metadata = {
  title: { absolute: clampSeoTitle(TITLE) },
  description: clampSeoDescription(DESCRIPTION),
  alternates: { canonical: '/' },
  ...getSocialMetadata({ title: TITLE, description: DESCRIPTION, path: '/' }),
};

export default function HomePage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          getMedicalClinicSchema({ physicianIds: DOCTORS.map((d) => getPhysicianId(d.slug)) }),
          getWebPageSchema({ name: TITLE, description: DESCRIPTION, url: CLINIC.website }),
          ...DOCTORS.map((d) =>
            getPhysicianSchema({
              slug: d.slug,
              name: d.name,
              jobTitle: d.role,
              specialty: d.roleEn,
              description: d.quote,
            })
          ),
        ]}
      />
      <Hero />
      <BrandStatement />
      <ConcernCards />
      <ExpertiseSection />
      <TechnologySection />
      <DoctorSection />
      <ApproachTimeline />
      <ResultsSection />
      <KnowledgeSection />
      <ClinicExperience />
      <LocationSection />
      <FinalCTA />
    </>
  );
}
