import { createContext, FC, useContext, useState } from "react";
import { confirmationFetch } from "../components/confirmationFetch";

export interface ContextValue {
  isLoading: boolean;
  confirm: () => void;
}

export const ConfirmationContext = createContext<ContextValue>({
  isLoading: false,
  confirm: () => {},
});

const ConfirmationProvider: FC = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const confirm = async () => {
    console.log("funktionen körs");
    setIsLoading(true);
    await confirmationFetch("api/confirm");
    setIsLoading(false);
  };

  return (
    <ConfirmationContext.Provider value={{ isLoading, confirm }}>
      {props.children}
    </ConfirmationContext.Provider>
  );
};

export default ConfirmationProvider;

export const useUser = () => useContext(ConfirmationContext);
