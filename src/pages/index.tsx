import Hero from '@/components/Hero'
import PurposeSection from '@/components/PurposeSection'
import FeaturesSection from '@/components/FeaturesSection'
import ServicesSection from '@/components/ServicesSection'
/* import Footer from '@/components/Footer' */
import DefaultLayout from "@/layouts/default";

function index() {
  return (
    <>
      <DefaultLayout>
        <Hero />
        <PurposeSection />
        <FeaturesSection />
        <ServicesSection />
        {/* <Footer /> */}
      </DefaultLayout>

    </>
  )
}

export default index

