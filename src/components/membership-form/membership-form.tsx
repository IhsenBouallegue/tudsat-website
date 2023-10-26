"use client";

import isMobilePhone from "validator/es/lib/isMobilePhone";
import isBIC from "validator/es/lib/isBIC";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import DobCalendarField from "./dob-calendar-field";
import StudiesField from "./studies-field";
import NameFields from "./name-fields";
import { Checkbox } from "../ui/checkbox";
import SepaMandateCalendar from "./sepa-mandate-calendar";

export const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  birthday: z.date({ required_error: "A date of birth is required." }),
  studies: z.string(),
  streetAndHouseNumber: z.string(),
  zipCode: z.string(),
  city: z.string(),
  email: z.string().email(),
  phoneNumber: z.string().refine(isMobilePhone),
  iban: z.string(),
  bic: z.string().refine(isBIC),
  sepaMandate: z.date(),
  sepaMandateConesnt: z.boolean(),
  photoConsent: z.boolean(),
  consent: z.boolean(),
});

export function MembershipForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      birthday: new Date(),
      studies: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-14">
        <div className="space-y-6">
          <h2 className="text-2xl">Personal Data</h2>
          <NameFields form={form} />
          <DobCalendarField form={form} />
          <StudiesField form={form} />
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl">Contact Data</h2>
          <FormField
            control={form.control}
            name="streetAndHouseNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Street & House Nr.</FormLabel>
                <FormControl>
                  <Input placeholder="examplestr. 5" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="zipCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Zip Code</FormLabel>
                <FormControl>
                  <Input placeholder="12345" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="Darmstadt" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-Mail</FormLabel>
                <FormControl>
                  <Input placeholder="johndoe@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="+49 12345678" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl">Bank Details</h2>
          <FormField
            control={form.control}
            name="iban"
            render={({ field }) => (
              <FormItem>
                <FormLabel>IBAN</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bic"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl">Sepa Mandate</h2>
          <SepaMandateCalendar form={form} />
          <FormField
            control={form.control}
            name="sepaMandateConesnt"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-2 leading-none">
                  <FormLabel>Grant of SEPA Mandate</FormLabel>
                  <FormDescription>
                    I authorize TU Darmstadt Space Technology e.V.. (TUDSaT) to
                    collect payments from my account by direct debit. At the
                    same time, I instruct my credit institution to debit the
                    payments made by TU Darmstadt Space Technology e.V. (TUDSaT)
                    to my account by direct debit. Note: I can request a refund
                    of the debited amount within eight weeks, beginning with the
                    debit date. The conditions agreed with my credit institution
                    apply. <br />
                    <br />
                    The mandate issued is a basic direct debit. The unique
                    mandate reference number will be created by TUDSaT and
                    communicated with the first direct debit. The following data
                    results from the application: <br />
                    - Name of the debtor <br />
                    - Complete address of the debtor <br />
                    - IBAN account number of the payer <br />
                    - BIC of the debtor&rsquo;s bank <br />
                    <br />
                    The creditor identification number of TUDSaT is available to
                    members. Likewise the address. The payment is made via SEPA
                    direct debit.
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl">Consent</h2>
          <FormField
            control={form.control}
            name="photoConsent"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-2 leading-none">
                  <FormLabel>Consent to Photography</FormLabel>
                  <FormDescription>
                    Within the scope of my membership, video, audio and
                    photographic recordings are made in the everyday life of the
                    association. I agree that I can be seen on these pictures.
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="consent"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-2 leading-none">
                  <FormLabel>Declaration of consent</FormLabel>
                  <FormDescription>
                    I agree that my data will be deposited, processed and used
                    by &quot;TU Darmstadt Space Technology e.V.&quot; for the
                    purpose of fulfilling the contract within the scope of
                    membership. <br />
                    <br />
                    I have been informed that the personal data collected within
                    the scope of the aforementioned purposes will be collected,
                    processed, used and transmitted in compliance with the EU
                    General Data Protection Regulation. I have been informed of
                    my rights as a data subject. <br />
                    <br />
                    The declaration of consent is made on a voluntary basis. I
                    have been informed that I can revoke the declaration of
                    consent at any time by written notification for the future.
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
