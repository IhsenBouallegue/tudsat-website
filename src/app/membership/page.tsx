import { MembershipForm } from "@/components/membership-form/membership-form";

export default function page() {
  return (
    <section className="mx-auto max-w-screen-lg gap-6 flex flex-col pt-16">
      <h1 className="text-4xl font-bold">Membership</h1>
      <p>
        You’ve decided you want to join us? Awesome, we’re happy to hear that!
        Just fill out our online application form and you’re ready to go.
      </p>
      {/* <MembershipForm /> */}
      <div>
        <iframe
          src="https://easyverein.com/public/TUDSaT/applicationform/1979?iframe=True"
          style={{
            border: "none",
            width: "100%",
            minHeight: "1000px",
            height: "max-content",
          }}
        />
        <br />
        <small>
          <a
            href="https://easyverein.com"
            style={{ textDecoration: "none", color: "#878787" }}
            title="Vereinsverwaltungssoftware easyVerein"
          >
            Association management via easyVerein
          </a>
        </small>
      </div>
    </section>
  );
}
