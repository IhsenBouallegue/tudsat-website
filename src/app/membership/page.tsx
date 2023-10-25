import { MembershipForm } from "@/components/membership-form";

export default function page() {
  return (
    <section className="mx-auto max-w-[30rem] gap-6 flex flex-col pt-16">
      <h1 className="text-4xl font-bold">Membership</h1>
      <p>
        You’ve decided you want to join us? Awesome, we’re happy to hear that!
        Just fill out our online application form and you’re ready to go.
      </p>
      <MembershipForm />
    </section>
  );
}
