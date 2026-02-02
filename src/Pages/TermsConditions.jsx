import PageHero from "../components/PageHero";

export default function TermsConditions() {
  return (
    <>
      <PageHero
        title="Terms & Conditions"
        description="These terms govern the use of the Wanher Farms website and outline the rights, responsibilities, and obligations of all users."
        backgroundImage="/Home/c.png"
      />

      <section className=" px-6 md:px-12 lg:px-24 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold mb-8">
            Terms & Conditions
          </h1>

          <p className=" leading-relaxed mb-6">
            By accessing or using the Wanher Farms (Pvt.) Ltd. website, you
            agree to comply with the following terms and conditions. If you do
            not agree with any part of these terms, please refrain from using
            this website.
          </p>

          <h2 className="text-xl font-semibold mb-3">Website Use</h2>
          <p className=" mb-6">
            All content on this website is provided for general informational
            purposes only. Wanher Farms reserves the right to modify or
            discontinue any content without prior notice.
          </p>

          <h2 className="text-xl font-semibold mb-3">Intellectual Property</h2>
          <p className="mb-6">
            All materials, trademarks, logos, images, and content displayed on
            this website are the property of Wanher Farms (Pvt.) Ltd.
            Unauthorized use or reproduction is strictly prohibited.
          </p>

          <h2 className="text-xl font-semibold mb-3">
            Limitation of Liability
          </h2>
          <p className=" mb-6">
            Wanher Farms shall not be liable for any direct or indirect damages
            arising from the use or inability to use this website.
          </p>

          <h2 className="text-xl font-semibold mb-3">Governing Law</h2>
          <p className="">
            These terms and conditions shall be governed and interpreted in
            accordance with the laws of the Islamic Republic of Pakistan.
          </p>
        </div>
      </section>
    </>
  );
}
