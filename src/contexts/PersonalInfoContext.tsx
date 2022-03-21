import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { PersonalData } from "../interfaces/interfaces";

export interface ContextValue {
  globalPersonalInfo: {
    email: string;
    name: string;
    phone: string;
    postnr: string;
    street: string;
  };
  setGlobalPersonalInfo: Dispatch<SetStateAction<PersonalData>>;
}

export const PersonalInfoContext = createContext<ContextValue>({
  globalPersonalInfo: {
    email: "",
    name: "",
    phone: "",
    postnr: "",
    street: "",
  },
  setGlobalPersonalInfo: () => {},
});

const PersonalInfoProvider: FC = (props) => {
  const [globalPersonalInfo, setGlobalPersonalInfo] = useState<PersonalData>({
    email: "",
    name: "",
    phone: "",
    postnr: "",
    street: "",
  });

  return (
    <PersonalInfoContext.Provider
      value={{ setGlobalPersonalInfo, globalPersonalInfo }}
    >
      {props.children}
    </PersonalInfoContext.Provider>
  );
};

export default PersonalInfoProvider;

export const usePersonalInfo = () => useContext(PersonalInfoContext);
