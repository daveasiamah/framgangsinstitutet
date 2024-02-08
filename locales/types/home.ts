import { string } from "yup";
import { MetaData } from "./meta";
import { ReactNode } from "react";

type FeatureData = {
  id: number;
  imageUrl: string;
  title: string;
  desc: string;
};

type ExpertiseData = {
  id: number;
  imageUrl: string;
  titleBlack: string;
  titleBlue: string;
  subtitle: string;
  subtitletwo?: string;
  lists: { id: number; name: string }[];
  isImageLeft: boolean;
};

type StartSellingList = {
  id: number;
  list: string;
};

type CheckifiedUnivList = {
  id: number;
  list: string;
};

type BenefitData = {
  id: number;
  imageUrl: string;
  title: string;
  subtitle: string;
};

type TestimonyData = {
  id: number;
  imageUrl: string;
  name: string;
  job: string;
  message: string;
};

type ContactForm = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
  button: string;
};

export type HomeData = {
  metaData: MetaData;

  heroBlackTitle: string;
  heroBlueTitle: string;
  heroSubtitle: string;
  heroButton: string;
  heroJoinText: string;
  heroInteractiveText: string;
  heroOutstandingText: string;

  knowledgeText: string;

  platformBlackTitle: string;
  platformBlueTitle: string;
  platformSubtitle: string;
  featureData: FeatureData[];
  expertiseData: ExpertiseData[];

  startSellingBlackTittle: string;
  startSellingBlueTittle: string;
  startSellingSubtitle: string;
  startSellingList: StartSellingList[];
  startSellingButton: string;

  checkifiedUnivTitle: string;
  checkifiedUnivListTDesc: string;
  checkifiedUnivList: CheckifiedUnivList[];
  checkifiedUnivButton: string;

  benefitBlackTitle: string;
  benefitBlueTitle: string;
  benefitData: BenefitData[];

  testimonyBlackTitle: string;
  testimonyBlueTitle: string;
  testimonyData: TestimonyData[];

  contactBlackTitle: string;
  contactBlueTitle: string;
  contactSubtitle: string;
  contactForm: ContactForm;
};

export type SignInData = {
  title: string;
  email: string;
  password: string;
  rememberMe: string;
  forgotPassword: string;
  signInWith: string;
  noAccount: string;
};

export type SignUpData = {
  pageTitle: string;
  title: string;
  free: string;
  trial: string;
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  password: string;
  buttonSubmit: string;
  signUpWith: string;
  haveAccount: string;
  bySign: string;
  privacy: string;
  terms: string;
  and: string;
  passwarning: string;
};

export type forgotpass = {
  title: string;
  free: string,
  email:string;
  password:string;
  rememberMe:string;
  forgotPassword:string;
  signInWith: string;
  noAccount: string;
};

export type otppassworddata = {
  pageTitle: string;
  title: string;
  free: string;
  email: string;
  trial: string;
  placeholder:string,
  buttonContinue: string;
  norecivedcode: string;
  resendcode: string;
  codeexpires: string;
};

export type NewpassData = {
  pageTitle: string;
  title: string;
  free: string;
  trial: string;
  fullname: string;
  password: string;
  confirmpassword: string;
  buttonreset: string;
  signUpWith: string;
};