"use client";

import React, { useState } from "react";
import Heading from "@/components/common/Heading";
import InputBox from "@/components/InputBox";
import Labels from "@/components/common/Labels";
import SectionHeading from "@/components/common/SectionHeading";
import SectionSubHeading from "@/components/common/SectionSubHeading";
import DelegatePreferenceBox from "@/sections/DelegatePreferenceBox";
import DelegateExperienceBox from "@/sections/DelegateExperienceBox";
import Help from "@/components/common/Help";
import { ExternalFormState } from "@/types/form";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
const RegisterExternal = () => {
  const router = useRouter();

  const [form, setForm] = useState<ExternalFormState>({
    ParticipantName: "",
    ParticipantGender: "",
    ParticipantPhone: "",
    ParticipantEmail: "",
    ParticipantOrganizationName: "",
    ParticipantAccomodation: "",
    CommitteePreference1: "",
    Committee1AllotmentPreference1: "",
    Committee1AllotmentPreference2: "",
    Committee1AllotmentPreference3: "",
    CommitteePreference2: "",
    Committee2AllotmentPreference1: "",
    Committee2AllotmentPreference2: "",
    Committee2AllotmentPreference3: "",
    CommitteePreference3: "",
    Committee3AllotmentPreference1: "",
    Committee3AllotmentPreference2: "",
    Committee3AllotmentPreference3: "",
    MUNDelegateCount: "",
    MUNDelegateExperience: "",
    MUNExecutiveCount: "",
    MUNExecutiveExperience: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    for (let key in form) {
      if (form[key] === "") {
        toast.error(`Please fill out all the fields.`);
        return;
      }
    }
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/register/external`,
        form
      );
      toast.success(response.data.message);
      router.push("/");
    } catch (err: any) {
      toast.error(err.response.data.message);
    }
  };
  return (
    <>
      <main className="w-full h-full min-h-fit">
        <div className="--container w-[90%] h-full mx-auto mt-6 ">
          <Heading
            heading={"External Individual Registration"}
            subHeading="Fill out the form below if you are interested in participating at VITMUN'24."
          />
          <div className="--form w-[90%] mx-auto py-8 md:py-24 p-6 md:p-24 bg-white rounded-xl shadow-[0px_0px_20px_rgba(31,117,188,0.5)]  my-20">
            {/* <h1 className="text-2xl md:text-4xl font-medium font-cerealMed text-center">
              Round 1 Registrations have
              <span className="text-red-500">&nbsp;closed!</span>
            </h1>

            <h2 className="text-base md:text-2xl font-medium font-cerealMed text-center mt-6 w-full md:w-[50%] mx-auto">
              Stay tuned on our socials, to get updates on
              <span className="text-blue-500">
                &nbsp;Round 2 registrations&nbsp;
              </span>
              and VITMUN.
            </h2>
            <div className="flex justify-center gap-8 mt-8">
              <Link href="https://www.instagram.com/vitmunsoc/">
                <Image
                  src="/insta.svg"
                  alt="instagram"
                  width={50}
                  height={50}
                  className="w-6 md:w-8 aspect-square"
                />
              </Link>
              <Link href="https://www.linkedin.com/company/munsocvit/">
                <Image
                  src="/linkedin.svg"
                  alt="linkedin"
                  width={50}
                  height={50}
                  className="w-6 md:w-8 aspect-square"
                />
              </Link>
              <Link href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://medium.com/vitmunsoc&ved=2ahUKEwj-yOLpg4iFAxUBxTgGHXlsCp0Qjjh6BAgqEAE&usg=AOvVaw1A-jFkMjwUMc31nin20O4v">
                <Image
                  src="/social.svg"
                  alt="Medium"
                  width={50}
                  height={50}
                  className="w-6 md:w-8 aspect-square"
                />
              </Link>
            </div> */}
            <form action="" onSubmit={handleSubmit}>
              <div className="--participants-info w-full flex  justify-between flex-wrap mb-12">
                <InputBox
                  name="participant_name"
                  placeholder="Name"
                  label="Participant Name"
                  id="ParticipantName"
                  onChange={handleChange}
                />
                <div className="flex flex-col gap-2 w-full md:w-[42%] mb-8">
                  <label
                    htmlFor={"gender"}
                    className="text-base md:text-lg font-cereal"
                  >
                    Gender
                  </label>
                  <select
                    id="ParticipantGender"
                    onChange={handleChange}
                    name="gender"
                    className="w-full outline-none border-2 border-[#00000050] rounded-lg px-4 py-2 bg-white text-sm md:text-base"
                  >
                    <option value="" selected disabled>
                      Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <InputBox
                  id="ParticipantPhone"
                  onChange={handleChange}
                  name="contact_number"
                  placeholder="Whatsapp Number"
                  label="Contact Number"
                />
                <InputBox
                  name="email"
                  placeholder="Email"
                  label="Email - ID"
                  id="ParticipantEmail"
                  onChange={handleChange}
                />
                <InputBox
                  id="ParticipantOrganizationName"
                  onChange={handleChange}
                  name="organization"
                  placeholder="Organization"
                  label="Organization Name"
                />
                <div className="flex flex-col gap-2 w-full md:w-[42%] mb-8">
                  <label
                    htmlFor={"accomodation"}
                    className="text-base md:text-lg font-cereal"
                  >
                    Accomodation
                  </label>
                  <select
                    id="ParticipantAccomodation"
                    onChange={handleChange}
                    name="accomodation"
                    className="w-full outline-none border-2 border-[#00000050] rounded-lg px-4 py-2 bg-white text-sm md:text-base"
                  >
                    <option value="" selected disabled>
                      Yes / No
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>
              <div className="--delegate-preference mb-12">
                <div className="flex gap-1 md:gap-4 flex-col md:flex-row">
                  <SectionHeading heading="Delegate Preference" />

                  <a
                    href="https://docs.google.com/spreadsheets/d/1Li_euF7cmIb-GDwbUkA7NpRPcodf4x7OLDlM8I3l8IU/edit?usp=sharing"
                    target="_blank"
                  >
                    <Labels label="COUNTRY MATRIX" />
                  </a>
                </div>
                <SectionSubHeading heading="Registration fee per delegate is Rs. 1900 (inclusive of GST). Payment link will be mailed once allotment is confirmed" />
                <DelegatePreferenceBox id={1} onChange={handleChange} />
                <DelegatePreferenceBox id={2} onChange={handleChange} />
                <DelegatePreferenceBox id={3} onChange={handleChange} />
              </div>
              <div className="--delegate-experience">
                <div className="mb-6">
                  <SectionHeading heading="Experience" />
                </div>
                <DelegateExperienceBox
                  id={1}
                  onChange={handleChange}
                  boxType="Delegate"
                />
                <DelegateExperienceBox
                  id={2}
                  onChange={handleChange}
                  boxType="Executive"
                />
              </div>
              <div className="w-full flex justify-center">
                <button
                  type="submit"
                  className="bg-[#1f75bc] rounded-lg px-4 py-2 text-white font-cerealMed text-base md:text-xl shadow-[0px_0px_20px_rgba(31,117,188,0.5)]"
                >
                  PRESENT AND VOTING
                </button>
              </div>
            </form>
          </div>
          <Help />
        </div>
      </main>
    </>
  );
};

export default RegisterExternal;
