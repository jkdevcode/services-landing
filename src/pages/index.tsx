import Hero from '@/components/Hero'
import PurposeSection from '@/components/PurposeSection'
import FeaturesSection from '@/components/FeaturesSection'
import DefaultLayout from "@/layouts/default";

function index() {
  return (
    <>
      <DefaultLayout>
        <Hero />
        <PurposeSection />
        <FeaturesSection />
      </DefaultLayout>
    </>
  )
}

export default index

