import PageHero from "../components/PageHero";

export default function Certifications() {
  return (
    <>
      <PageHero
        title="Certifications & Accreditation"
        description="Our certifications reflect Wanher Farms’ commitment to quality, food safety, regulatory compliance, and trusted agricultural practices across Pakistan."
        backgroundImage="/test/e4.jpeg"
      />

      <section className="px-6 md:px-12 lg:px-24 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold mb-8">
            Certifications & Accreditation
          </h1>

          <p className=" leading-relaxed mb-6">
            Wanher Farms (Pvt.) Ltd. operates in compliance with national
            standards and regulatory requirements applicable to agricultural and
            food products in Pakistan.
          </p>

          <ul className="list-disc list-inside  space-y-3 mb-6">
            <li>
              Registered with the Securities & Exchange Commission of Pakistan
              (SECP)
            </li>
            <li>
              Certified by Pakistan Standards and Quality Control Authority
              (PSQCA)
            </li>
            <li>Halal Certified by Halal Pakistan</li>
            <li>
              Compliance with food safety, hygiene, and quality regulations
            </li>
          </ul>

          <p className="">
            These certifications demonstrate our commitment to quality
            assurance, regulatory compliance, and consumer trust across domestic
            and export markets.
          </p>
        </div>
      </section>
    </>
  );
}
