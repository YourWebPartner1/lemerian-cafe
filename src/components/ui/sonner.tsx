// src/components/ui/sonner.tsx
import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";

type ToastItem = {
  id: string;
  content: React.ReactNode;
  duration: number;
};

const ToastContext = createContext<{ push: (content: React.ReactNode, duration?: number) => void } | null>(null);

export const useSimpleToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useSimpleToast must be used within a Toaster");
  return ctx;
};

export const SimpleToasterProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const push = useCallback((content: React.ReactNode, duration = 3500) => {
    const id = Math.random().toString(36).slice(2, 9);
    setToasts((s) => [...s, { id, content, duration }]);
    setTimeout(() => setToasts((s) => s.filter((t) => t.id !== id)), duration);
  }, []);

  return (
    <ToastContext.Provider value={{ push }}>
      {children}
      {createPortal(
        <div aria-live="polite" className="fixed right-4 top-4 z-50 flex flex-col gap-3">
          {toasts.map((t) => (
            <div
              key={t.id}
              className="max-w-xs rounded-lg px-4 py-2 shadow-lg bg-white/95 text-black border"
              role="status"
            >
              {t.content}
            </div>
          ))}
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
};

/** Module-level global push so you can call `toast(...)` from anywhere */
let _globalPush: ((c: React.ReactNode, d?: number) => void) | null = null;
export const registerGlobalPush = (fn: (c: React.ReactNode, d?: number) => void) => {
  _globalPush = fn;
};
export const toast = (content: React.ReactNode, duration?: number) => {
  if (_globalPush) _globalPush(content, duration);
  else {
    // fallback: console or alert in dev so you know it ran
    if (typeof content === "string") console.info("[toast]", content);
    else console.info("[toast] non-string content");
  }
};

/** The Toaster component to render in App.tsx
 *  Usage:
 *    <Toaster />  // place in App
 *    import { toast } from "@/components/ui/sonner"; toast("hello");
 */
const Toaster: React.FC = () => {
  return (
    <SimpleToasterProvider>
      <RegisterPush />
    </SimpleToasterProvider>
  );
};

const RegisterPush: React.FC = () => {
  const ctx = useContext(ToastContext);
  useEffect(() => {
    if (ctx) registerGlobalPush(ctx.push);
    return () => registerGlobalPush(() => {});
  }, [ctx]);
  return null;
};

export default Toaster;
