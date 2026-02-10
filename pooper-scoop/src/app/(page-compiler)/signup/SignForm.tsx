"use client";
import React, { useState } from "react";
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";
import { CustomSlider } from "@/components/ui/custom-slider";
import { usePrefillZip } from "@/app/sections/search-sections/usePrefillZip";

export default function SignForm() {
    const [zipCode, setZipCode] = useState("");
    const [isZipReadOnly, setIsZipReadOnly] = useState(false);
    const [zipTouched, setZipTouched] = useState(false);
    usePrefillZip(setZipCode, setIsZipReadOnly);

    const [couponCode, setCouponCode] = useState("");
    const [numberOfDogs, setNumberOfDogs] = useState(1);
    const [frequency, setFrequency] = useState(2);
    const [phone, setPhone] = useState("");
    const [phoneTouched, setPhoneTouched] = useState(false);
    const [phoneConsent, setPhoneConsent] = useState(false);
    const [privacyConsent, setPrivacyConsent] = useState(false);
    const [privacyTouched, setPrivacyTouched] = useState(false);

    const frequencyLabels: { [key: number]: string } = {
        1: "Once A Month",
        2: "Bi Weekly",
        3: "Once A Week",
        4: "Two Times A Week",
    };

    const [email, setEmail] = useState("");
    const [emailTouched, setEmailTouched] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    const isValidPhone = (value: string) => /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value);
    const isValidZip = (value: string) => /^\d{5}$/.test(value);

    const handleSubmit = async () => {
        const isZipValid = isValidZip(zipCode);
        const isEmailValid = isValidEmail(email);
        const isPhoneValid = isValidPhone(phone);
        const isPrivacyValid = privacyConsent;

        if (!isZipValid || !isEmailValid || !isPhoneValid || !isPrivacyValid) {
            setZipTouched(true);
            setEmailTouched(true);
            setPhoneTouched(true);
            setPrivacyTouched(true);
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
                    formType: "Signup Quote",
                    zipCode,
                    couponCode,
                    numberOfDogs,
                    frequency: frequencyLabels[frequency],
                    phone,
                    email,
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
            <div className="">
                <div className=" md:px-[20px]">
                    <div className="flex flex-row gap-[56px] max-lg:flex-col">
                        <div className="flex-1 rounded-[var(--radius)] z-10 bg-white px-[50px] pt-[70px] pb-[48px] h-fit max-sm:px-5">
                            <div className="flex flex-col gap-2 mb-8 text-center">
                                <h2 className="h3">Get an Instant Quote</h2>
                                <p className="text-lg font-bold text-[var(--brandcolor-red)]">
                                    Claim Your FREE Cleanup!
                                </p>
                            </div>

                            <FieldSet>
                                <FieldGroup>
                                    <div className="grid grid-cols-2 gap-4">
                                        <Field>
                                            <FieldLabel htmlFor="zipcode">Zip Code</FieldLabel>
                                            <Input
                                                id="zipcode"
                                                value={zipCode}
                                                onChange={(e) => setZipCode(e.target.value)}
                                                onBlur={() => setZipTouched(true)}
                                                placeholder="99001"
                                                disabled={isZipReadOnly}
                                                aria-invalid={zipTouched && !isValidZip(zipCode)}
                                            />
                                            {zipTouched && !isValidZip(zipCode) && (
                                                <FieldError>Enter a valid 5-digit zip code</FieldError>
                                            )}
                                        </Field>
                                        <Field>
                                            <FieldLabel htmlFor="coupon">Coupon Code</FieldLabel>
                                            <Input
                                                id="coupon"
                                                value={couponCode}
                                                onChange={(e) => setCouponCode(e.target.value)}
                                                placeholder=""
                                            />
                                        </Field>
                                    </div>

                                    <Field>
                                        <FieldLabel htmlFor="dogs">Number Of Dogs: {numberOfDogs}</FieldLabel>
                                        <CustomSlider
                                            defaultValue={[1]}
                                            max={5}
                                            min={1}
                                            step={1}
                                            value={[numberOfDogs]}
                                            onValueChange={(vals) => setNumberOfDogs(vals[0])}
                                            thumbImage="/images/home-page/pin.svg"
                                            className="py-4"
                                        />
                                        <div className="flex justify-between text-xs text-gray-500 px-1">
                                            <span>1</span>
                                            <span>2</span>
                                            <span>3</span>
                                            <span>4</span>
                                            <span>5</span>
                                        </div>
                                    </Field>

                                    <Field>
                                        <FieldLabel>Cleanup Frequency: {frequencyLabels[frequency]}</FieldLabel>
                                        <CustomSlider
                                            defaultValue={[2]}
                                            max={4}
                                            min={1}
                                            step={1}
                                            value={[frequency]}
                                            onValueChange={(vals) => setFrequency(vals[0])}
                                            thumbImage="/images/home-page/pin.svg"
                                            className="py-4"
                                        />
                                        <div className="flex justify-between text-xs text-gray-500 px-1">
                                            <span>1x/mo</span>
                                            <span>Bi-Wkly</span>
                                            <span>1x/wk</span>
                                            <span>2x/wk</span>
                                        </div>
                                    </Field>

                                    <Field>
                                        <FieldLabel htmlFor="email">Email Address*</FieldLabel>
                                        <Input
                                            id="email"
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            onBlur={() => setEmailTouched(true)}
                                            placeholder=""
                                            aria-invalid={emailTouched && !isValidEmail(email)}
                                        />
                                        {emailTouched && !isValidEmail(email) && (
                                            <FieldError>Enter a valid email address</FieldError>
                                        )}
                                    </Field>

                                    <Field>
                                        <FieldLabel htmlFor="phone">Cell Phone Number*</FieldLabel>
                                        <Input
                                            id="phone"
                                            type="tel"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            onBlur={() => setPhoneTouched(true)}
                                            placeholder=""
                                            aria-invalid={phoneTouched && !isValidPhone(phone)}
                                        />
                                        {phoneTouched && !isValidPhone(phone) && (
                                            <FieldError>Enter a valid phone number</FieldError>
                                        )}
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
                                    {privacyTouched && !privacyConsent && (
                                        <FieldError className="mt-1">You must agree to the Privacy Policy</FieldError>
                                    )}

                                    <Button
                                        className="w-full bg-[var(--brandcolor-red)] hover:bg-black !text-white"
                                        onClick={handleSubmit}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? "Submitting..." : "Submit"}
                                    </Button>

                                    {submitStatus === "success" && (
                                        <div className="p-4 bg-green-50 text-green-700 rounded-md border border-green-200 mt-4">
                                            Quote request sent successfully!
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
