import PageHero from "../components/PageHero";

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        description="Wanher Farms is committed to protecting your personal information and ensuring transparency in how data is collected, used, and safeguarded in accordance with applicable laws of Pakistan."
        backgroundImage="/test/e6.jpeg"
      />
      <section className="min-h-screen  px-6 md:px-12 lg:px-24 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold mb-8">
            Privacy Policy
          </h1>

          <p className=" leading-relaxed mb-6">
            Wanher Farms (Pvt.) Ltd. values your privacy and is committed to
            protecting the personal information of visitors, customers, and
            business partners. This Privacy Policy outlines how we collect, use,
            and safeguard information in accordance with applicable laws of
            Pakistan.
          </p>

          <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
          <p className="mb-6">
            We may collect personal information such as your name, email
            address, phone number, company details, and any other information
            voluntarily provided through contact forms, emails, or inquiries.
          </p>

          <h2 className="text-xl font-semibold mb-3">Use of Information</h2>
          <p className=" mb-6">
            The information collected is used solely for business communication,
            responding to inquiries, improving our services, and maintaining
            customer and supplier relationships.
          </p>

          <h2 className="text-xl font-semibold mb-3">Data Protection</h2>
          <p className=" mb-6">
            Wanher Farms implements reasonable technical and organizational
            measures to protect personal data from unauthorized access, misuse,
            loss, or disclosure.
          </p>

          <h2 className="text-xl font-semibold mb-3">Third-Party Disclosure</h2>
          <p className=" mb-6">
            We do not sell or share personal information with third parties
            except where required by law or for legitimate business purposes.
          </p>

          <h2 className="text-xl font-semibold mb-3">Policy Updates</h2>
          <p className="">
            This Privacy Policy may be updated periodically. Continued use of
            our website constitutes acceptance of any changes.
          </p>
        </div>
      </section>
    </>
  );
}
