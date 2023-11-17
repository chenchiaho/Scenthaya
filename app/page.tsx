// import SEO from "@/components/SEO"
import TabFilters from '@/components/TabFilters';

const Home = async ({ params }: { params: { id: string } }) => {
  return (
    <>
      <div className='container'>
        <div className='max-w-screen-sm py-16 space-y-5'>
          <h2 className='text-2xl font-semibold sm:text-3xl lg:text-4xl'>
            Man collection
          </h2>
          <p className='text-sm text-gray-500 sm:text-base lg'>
            We not only help you design exceptional products, but also make it
            easy for you to share your designs with more like-minded people.
          </p>
        </div>

        <hr className='border-slate-200 dark:border-slate-700' />

        <main>
          <TabFilters />
        </main>
      </div>

      {/* <SEO
                // seoData={apiGlobal.data.attributes.Seo}
                ogType="website"
            /> */}
    </>
  );
};

export default Home;
