"use client";
import React, { useState } from "react";
import { usePrefillZip } from "./usePrefillZip";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

export default function SearchHero() {
  const [zipCode, setZipCode] = useState("");
  const [zipCodeTouched, setZipCodeTouched] = useState(false);
  const [isZipReadOnly, setIsZipReadOnly] = useState(false);
  usePrefillZip(setZipCode, setIsZipReadOnly);
  const [name, setName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [address, setAddress] = useState("");
  const [addressTouched, setAddressTouched] = useState(false);
  const [comment, setComment] = useState("");
  const [phoneConsent, setPhoneConsent] = useState(false);
  const [privacyConsent, setPrivacyConsent] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const isValidZipCode = (value: string) => /^\d{5}$/.test(value.trim());
  const isValidName = (value: string) => value.trim().length >= 2;
  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const isValidPhone = (value: string) => /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value);
  const isValidAddress = (value: string) => value.trim().length >= 5;

  const handleSubmit = async () => {
    if (
      !isValidZipCode(zipCode) ||
      !isValidName(name) ||
      !isValidEmail(email) ||
      !isValidPhone(phone) ||
      !isValidAddress(address)
    ) {
      setZipCodeTouched(true);
      setNameTouched(true);
      setEmailTouched(true);
      setPhoneTouched(true);
      setAddressTouched(true);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "Service Unavailable Search",
          zipCode,
          name,
          email,
          phone,
          address,
          comment,
          phoneConsent,
          privacyConsent
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        // Reset form or redirect
      } else {
        const errorData = await response.json();
        setSubmitStatus("error");
        setErrorMessage(errorData.error || 'Unknown error');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-[var(--view-width)] mx-auto w-full">
      <div className="horizontal-padding">
        <div className="vertical-padding px-[20px]">
          <div className="flex flex-row gap-[56px] max-lg:flex-col">
            <div className="flex flex-1 flex-col gap-[14px]">
              <h1 className="h2 !text-white">Service may not be available in this area!</h1>
              <p className="p !text-white">
                Please provide your information so we can investigate further.
                <br /><br />
                Additionally, please doublecheck your zip code. If it is incorrect, go back and update it.
                <br /><br />
                Thank you.
              </p>
            </div>
            <div className="flex-1 rounded-[var(--radius)] z-10 bg-white px-[50px] pt-[70px] pb-[48px] h-fit">
              <FieldSet>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="zipcode">Zip code *</FieldLabel>
                    <Input
                      id="zipcode"
                      autoComplete="postal-code"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      onBlur={() => setZipCodeTouched(true)}
                      aria-invalid={zipCodeTouched && !isValidZipCode(zipCode)}
                      placeholder="12345"
                      disabled={isZipReadOnly}
                    />
                    {zipCodeTouched && !isValidZipCode(zipCode) && (
                      <FieldError>Enter a valid 5-digit zip code</FieldError>
                    )}
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="name">Name *</FieldLabel>
                    <Input
                      id="name"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onBlur={() => setNameTouched(true)}
                      aria-invalid={nameTouched && !isValidName(name)}
                      placeholder=""
                    />
                    {nameTouched && !isValidName(name) && (
                      <FieldError>Enter your name</FieldError>
                    )}
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="email">Email address *</FieldLabel>
                    <Input
                      id="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={() => setEmailTouched(true)}
                      aria-invalid={emailTouched && !isValidEmail(email)}
                      placeholder=""
                    />
                    {emailTouched && !isValidEmail(email) && (
                      <FieldError>Enter a valid email address</FieldError>
                    )}
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="phone">Phone number *</FieldLabel>
                    <Input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      onBlur={() => setPhoneTouched(true)}
                      aria-invalid={phoneTouched && !isValidPhone(phone)}
                      placeholder=""
                    />
                    {phoneTouched && !isValidPhone(phone) && (
                      <FieldError>Enter a valid phone number</FieldError>
                    )}
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="address">Street address</FieldLabel>
                    <Input
                      id="address"
                      autoComplete="street-address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      onBlur={() => setAddressTouched(true)}
                      aria-invalid={addressTouched && !isValidAddress(address)}
                      placeholder=""
                    />
                    {addressTouched && !isValidAddress(address) && (
                      <FieldError>Enter your address</FieldError>
                    )}
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="comment">Comment</FieldLabel>
                    <Textarea
                      id="comment"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder=""
                      rows={4}
                    />
                  </Field>

                  <Field orientation="horizontal">
                    <Switch
                      id="phone-consent"
                      checked={phoneConsent}
                      onCheckedChange={setPhoneConsent}
                    />
                    <FieldLabel htmlFor="phone-consent" className="!text-sm">
                      By providing my phone number, I agree to receive calls and
                      text messages from Doodie Duty, including for marketing
                      purposes. Messaging frequency varies and message and data
                      rate may apply. You may reply STOP to opt out of future
                      messages, or reply HELP for more information.
                    </FieldLabel>
                  </Field>

                  <Field orientation="horizontal">
                    <Switch
                      id="privacy-consent"
                      checked={privacyConsent}
                      onCheckedChange={setPrivacyConsent}
                    />
                    <FieldLabel htmlFor="privacy-consent">
                      By checking this box I agree to our Privacy Policy.
                    </FieldLabel>
                  </Field>

                  <Button
                    className="w-full bg-[var(--brandcolor-red)] hover:bg-black !text-white"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>

                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-50 text-green-700 rounded-md border border-green-200 mt-4">
                      Information sent successfully. We will contact you if service becomes available.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-50 text-red-700 rounded-md border border-red-200 mt-4">
                      {errorMessage || "An error occurred. Please try again."}
                    </div>
                  )}
                </FieldGroup>
              </FieldSet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
