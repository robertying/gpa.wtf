import { createContext, useCallback, useState } from "react";
import { Snackbar } from "@material-ui/core";

const ToastContext = createContext<{
  text: string;
  duration: number;
  toggleToast: (text: string, duration?: number) => void;
}>({
  text: "",
  duration: 3000,
  toggleToast: () => {},
});

const ToastProvider: React.FC = ({ children }) => {
  const [toastText, setToastText] = useState("");
  const [toastDuration, setToastDuration] = useState(3000);

  const handleToast = useCallback((text: string, duration?: number) => {
    setToastText(text);
    setToastDuration(duration ?? 3000);
  }, []);

  return (
    <ToastContext.Provider
      value={{
        text: toastText,
        duration: toastDuration,
        toggleToast: handleToast,
      }}
    >
      {children}
      <Snackbar
        open={toastText ? true : false}
        autoHideDuration={toastDuration}
        message={toastText}
        onClose={() => handleToast("")}
      />
    </ToastContext.Provider>
  );
};

export { ToastContext, ToastProvider };
