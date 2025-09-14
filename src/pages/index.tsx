import Hero from '@/components/Hero'
import PurposeSection from '@/components/PurposeSection'
import DefaultLayout from "@/layouts/default";

function index() {
  return (
    <>
      <DefaultLayout>
        <Hero />
        <PurposeSection />
      </DefaultLayout>
    </>
  )
}

export default index

