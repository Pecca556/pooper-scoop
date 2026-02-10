"use client";
import React, { useState } from "react";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

interface Friend {
  id: string;
  name: string;
  email: string;
  nameTouched: boolean;
  emailTouched: boolean;
}

export default function ReferAFriendHero() {
  const [name, setName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Friends state
  const [friends, setFriends] = useState<Friend[]>([
    {
      id: "1",
      name: "",
      email: "",
      nameTouched: false,
      emailTouched: false,
    },
  ]);

  // Two words, each at least 2 letters
  const isValidName = (value: string) =>
    /^[A-Za-z]{2,}\s[A-Za-z]{2,}$/.test(value.trim());

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const addFriend = () => {
    const newFriend: Friend = {
      id: Date.now().toString(),
      name: "",
      email: "",
      nameTouched: false,
      emailTouched: false,
    };
    setFriends([...friends, newFriend]);
  };

  const removeFriend = (id: string) => {
    if (friends.length > 1) {
      setFriends(friends.filter((friend) => friend.id !== id));
    }
  };

  const updateFriend = (id: string, field: keyof Friend, value: any) => {
    setFriends(
      friends.map((friend) =>
        friend.id === id ? { ...friend, [field]: value } : friend
      )
    );
  };

  const handleSubmit = async () => {
    // Validate all fields
    setNameTouched(true);
    setTouched(true);
    const updatedFriends = friends.map((f) => ({
      ...f,
      nameTouched: true,
      emailTouched: true,
    }));
    setFriends(updatedFriends);

    const isReferrerValid = isValidName(name) && isValidEmail(email);
    const areFriendsValid = updatedFriends.every(
      (f) => isValidName(f.name) && isValidEmail(f.email)
    );

    if (!isReferrerValid || !areFriendsValid) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/refer-friend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          referrerName: name,
          referrerEmail: email,
          friends: friends.map((f) => ({ name: f.name, email: f.email })),
          newsletter,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit referral");
      }

      setSubmitStatus("success");
      // Reset form
      setName("");
      setNameTouched(false);
      setEmail("");
      setTouched(false);
      setNewsletter(false);
      setFriends([
        {
          id: Date.now().toString(),
          name: "",
          email: "",
          nameTouched: false,
          emailTouched: false,
        },
      ]);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-[var(--view-width)] mx-auto w-full relative z-1">
      <div className="flex flex-row gap-[56px] max-lg:flex-col">
        <div className="flex flex-1 flex-col gap-[14px]">
          <h1 className="h2 !text-white">Refer a Friend</h1>
          <p className="p !text-white">
            Enter contact information for your friends and family with dogs.
            We'll invite them to join Doodie Duty.
          </p>{" "}
          <p className="subheader !font-[600] !text-white">
            As a Thank You, you'll receive a $25 credit when they sign up online
            and they will get $25 off their 1st month.
          </p>{" "}
          <p className="p !text-white">
            Enter contact information for your friends and family with dogs.
            We'll invite them to join Doodie Duty.
          </p>
          <img
            src="/images/avif/mascottes/refer-a-friend.avif"
            alt="dogs"
            className="w-[400px]"
          />
        </div>
        <div className="flex-1 rounded-[var(--radius)] bg-white px-[50px] pt-[70px] pb-[48px] h-fit">
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Your Name: *</FieldLabel>
                <Input
                  id="name"
                  autoComplete="off"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={() => setNameTouched(true)}
                  aria-invalid={nameTouched && !isValidName(name)}
                  placeholder="Enter Your Name Here"
                  disabled={isSubmitting}
                />
                {nameTouched && !isValidName(name) && (
                  <FieldError>Enter your first and last name</FieldError>
                )}
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Your Email *</FieldLabel>
                <Input
                  id="email"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setTouched(true)}
                  aria-invalid={touched && !isValidEmail(email)}
                  placeholder="example@email.com"
                  disabled={isSubmitting}
                />
                {touched && !isValidEmail(email) && (
                  <FieldError>Enter a valid address</FieldError>
                )}
              </Field>

              {/* Dynamic Friends Section */}
              {friends.map((friend, index) => (
                <div key={friend.id} className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="h5">
                      Please enter your friend's contact info:
                    </h4>
                    {friends.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeFriend(friend.id)}
                        className="text-gray-500 hover:text-black transition-colors text-xl font-bold leading-none"
                        aria-label="Remove friend"
                        disabled={isSubmitting}
                      >
                        ×
                      </button>
                    )}
                  </div>

                  <FieldGroup>
                    <Field>
                      <FieldLabel htmlFor={`friend-name-${friend.id}`}>
                        Their Name: *
                      </FieldLabel>
                      <Input
                        id={`friend-name-${friend.id}`}
                        autoComplete="off"
                        value={friend.name}
                        onChange={(e) =>
                          updateFriend(friend.id, "name", e.target.value)
                        }
                        onBlur={() =>
                          updateFriend(friend.id, "nameTouched", true)
                        }
                        aria-invalid={
                          friend.nameTouched && !isValidName(friend.name)
                        }
                        placeholder="Enter Friend's Name Here"
                        disabled={isSubmitting}
                      />
                      {friend.nameTouched && !isValidName(friend.name) && (
                        <FieldError>Enter first and last name</FieldError>
                      )}
                    </Field>
                    <Field>
                      <FieldLabel htmlFor={`friend-email-${friend.id}`}>
                        Their Email: *
                      </FieldLabel>
                      <Input
                        id={`friend-email-${friend.id}`}
                        autoComplete="off"
                        value={friend.email}
                        onChange={(e) =>
                          updateFriend(friend.id, "email", e.target.value)
                        }
                        onBlur={() =>
                          updateFriend(friend.id, "emailTouched", true)
                        }
                        aria-invalid={
                          friend.emailTouched && !isValidEmail(friend.email)
                        }
                        placeholder="example@email.com"
                        disabled={isSubmitting}
                      />
                      {friend.emailTouched && !isValidEmail(friend.email) && (
                        <FieldError>Enter a valid email address</FieldError>
                      )}
                    </Field>
                  </FieldGroup>
                </div>
              ))}

              {/* Add Friend Button */}
              <Button
                type="button"
                onClick={addFriend}
                variant="outline"
                className="w-fit border-2 border-black hover:bg-gray-100"
                disabled={isSubmitting}
              >
                + Add Friend
              </Button>

              <Field orientation="horizontal">
                <Switch
                  id="newsletter"
                  checked={newsletter}
                  onCheckedChange={setNewsletter}
                  disabled={isSubmitting}
                />
                <FieldLabel htmlFor="newsletter">
                  Subscribe to the newsletter
                </FieldLabel>
              </Field>

              <Button
                className="w-full bg-[var(--brandcolor-red)] hover:bg-black !text-white"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </Button>

              {submitStatus === "success" && (
                <div className="p-4 bg-green-50 text-green-700 rounded-md border border-green-200">
                  Referral sent successfully! Thank you.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 text-red-700 rounded-md border border-red-200">
                  {errorMessage || "Failed to send referral. Please try again."}
                </div>
              )}
            </FieldGroup>
          </FieldSet>
        </div>
      </div>{" "}
    </div>
  );
}
