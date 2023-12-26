"use client";
import Link from "next/link";
import { getLocalStorage, setLocalStorage } from "../utils/Helper";
import { useEffect, useState } from "react";
export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(0);
  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);
    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);
  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied";

    window.gtag("consent", "update", {
      analytics_storage: newValue,
    });

    setLocalStorage("cookie_consent", cookieConsent);
    console.log("Cookie Consent: ", cookieConsent);
  }, [cookieConsent]);
  return (
    <div className={`${cookieConsent != null ? "hidden" : "flex"} fixed w-full bottom-2 left-56 max-w-sm  bg-slate-50 px-4 py-2 shadow-md transition-all duration-500 ease-in-out`}>
      <div className={`flex flex-col px-0 ltr:lg:pl-10 rtl:lg:pr-10`}>
        <div className="w-full flex justify-between items-center">
          <p
            className="text-md md:text-lg font-semibold m-0"
            style={{ color: "rgb(89, 79, 253)" }}
          >
            Your Cookie Preferences
          </p>
        </div>
        <div className="flex flex-col gap-2 items-stretch ltr:lg:pr-10 rtl:lg:pl-10">
          <div className="flex-1">
            <p
              className="my-1 text-xs md:text-sm"
              style={{ color: "rgb(0, 0, 0)" }}
            >
              By clicking “Accept all,” you agree to the storing of cookies on
              your device for functional, analytics, and advertising purposes.
            </p>
            <div className="flex text-center text-[9px] mt-2 gap-2">
              <span className="ltr:mr-4 ltr:last:mr-0 rtl:ml-4 rtl:last:ml-0">
                <Link
                  href="https://www.termsfeed.com/live/7dd5b916-11dd-4c0c-a1bd-cafb07faf7ac"
                  target="_blank"
                  className="no-underline cursor-pointer shrink-0"
                  style={{
                    color: "rgb(89, 79, 253)",
                    borderBottom: "1px solid rgb(89, 79, 253)",
                  }}
                >
                  Privacy policy
                </Link>
              </span>
              <span className="ltr:mr-4 ltr:last:mr-0 rtl:ml-4 rtl:last:ml-0">
                <Link
                  href="/cookie_policy"
                  className="no-underline cursor-pointer shrink-0"
                  style={{
                    color: "rgb(89, 79, 253)",
                    borderBottom: "1px solid rgb(89, 79, 253)",
                  }}
                >
                  Cookie policy
                </Link>
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-around mt-4 lg:mt-0 ltr:lg:pl-14 rtl:lg:pr-14">
            <div className="flex-1 gap-2  items-center flex my-0">
              <button
                onClick={() => setCookieConsent(0)}
                className="flex-1 lg:flex-none ltr:mr-2 rtl:ml-2 flex justify-center items-center text-center cursor-pointer px-2 md:px-4 py-2 border border-transparent text-xs leading-4 font-black"
                style={{
                  backgroundColor: "rgba(89, 79, 253, 0.2)",
                  color: "rgb(89, 79, 253)",
                  borderRadius: "0.375rem",
                }}
              >
                <span>Custom permissions</span>
              </button>
              <button
                onClick={() => setCookieConsent(1)}
                className="flex-1 lg:flex-none flex justify-center items-center text-center cursor-pointer px-2 md:px-4 py-2 border border-transparent text-xs leading-4 font-black"
                style={{
                  backgroundColor: "rgb(89, 79, 253)",
                  color: "rgb(255, 255, 255)",
                  borderRadius: "0.375rem",
                }}
              >
                <span>Accept all</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
