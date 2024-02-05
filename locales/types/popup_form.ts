import { MetaData } from "./meta";

type Popform = {
  Current_password: string;
  New_password: string;
  Confirm_new_password: string;
  button: string;
};

type SupportData = {
  id: number;
  imageUrl: string;
  title: string;
  subtitle: string;
  action: string;
};

export type Popupform = {
  metaData: MetaData;

  contactBlackTitle: string;
  contactBlueTitle: string;
  contactSubtitle: string;

  formBlackTitle: string;
  formBlueTitle: string;
  formSubtitle: string;
  profileForm: Popform;

  supportData: SupportData[];
};
