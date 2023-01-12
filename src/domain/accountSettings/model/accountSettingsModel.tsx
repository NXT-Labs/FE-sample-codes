import { navbarModel } from "../../../ui/navbar/model/navbarModel";
import { profileMenuModel } from "../../../ui/profileMenu/model/profileMenuModel";

export interface accountSettingsModel {
  app?: profileMenuModel | navbarModel;
  signInRoute?: string;
  signUpRoute?: string;
  profileTabs?: {
    label: string;
    route: string
  }[]
}

