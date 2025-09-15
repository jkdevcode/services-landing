import Hero from '@/components/Hero'
import PurposeSection from '@/components/PurposeSection'
import FeaturesSection from '@/components/FeaturesSection'
import ServicesSection from '@/components/ServicesSection'
import DefaultLayout from "@/layouts/default";

function index() {
  return (
    <>
      <DefaultLayout>
        <Hero />
        <PurposeSection />
        <FeaturesSection />
        <ServicesSection />
      </DefaultLayout>
    </>
  )
}

export default index

