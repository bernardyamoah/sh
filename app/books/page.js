import { listDocuments } from './../../appwrite.js';

export async function getServerSideProps() {
  try {
    const data = await listDocuments();
    return {
      props: {
        data: data || [],
      },
    };
  } catch (error) {
    console.log('Error retrieving documents:', error);
    return {
      props: {
        data: [],
      },
    };
  }
}

export default function Page({ data }) {
  return (
    <>
      <section>
        {data.map(document => (
          <div key={document.$id} className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {document.Title}
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                Created At: {document.$createdAt}
              </p>
              {/* Add additional properties here */}
            </div>
            <div className="p-6 pt-0">
              <button
                className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
