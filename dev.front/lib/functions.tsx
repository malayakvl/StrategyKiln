import {
  setOpportunitiesAction,
  setOpportunitiesDisplayAction,
  setStrengthsAction,
  setStrengthsDisplayAction,
  setThreats2OpportunitiesAction,
  setThreats2OpportunitiesDisplayAction,
  setThreatsAction,
  setThreatsDisplayAction,
  setWeaknesses2StrengthAction,
  setWeaknesses2StrengthDisplayAction,
  setWeaknessesAction,
  setWeaknessesDisplayAction,
} from "../redux/customerData";
import { setCompanyAction } from "../redux/customerData/actions";

export function parseTranslation(option: any, field: string, locale: string) {
  if (!option) return;
  if (option.translations) {
    const findedOption = option.translations.find(
      (data: any) => Object.keys(data)[0] === locale
    );
    if (findedOption) {
      return findedOption[locale][field];
    } else {
      return option[field];
    }
  } else {
    return option[field];
  }
}

export function authHeader(email: string) {
  const token = Buffer.from(
    `${email}:c0P1JUlc-aKiH4qun-Cvapfn60-F7cG9NUM-knCw0x9e-6PWxPEjf-7mtEJZzC-q0mxxn0D`,
    "utf8"
  ).toString("base64");
  return { Authorization: `Bearer ${token}` };
}

export const toggleModalPopup = (element: any) => {
  // const body = document.querySelector('body');
  const modal = document.querySelector(element);
  (modal as any).classList.toggle("opacity-0");
  (modal as any).classList.toggle("pointer-events-none");
  (modal as any).classList.toggle("modal-active");
};

export const toggleModalConfirmation = () => {
  // const body = document.querySelector('body');
  const modal = document.querySelector(".modal-confirmation");
  (modal as any).classList.toggle("opacity-0");
  (modal as any).classList.toggle("pointer-events-none");
  (modal as any).classList.toggle("modal-active");
};

export const setupStorageData = (dispatch: any) => {
  // @ts-ignore
  if (localStorage.getItem("step2Data_company")) {
    dispatch(
      setCompanyAction(
        JSON.parse(localStorage.getItem("step2Data_company") || "{}")
      )
    );
  }
  if (localStorage.getItem("step2Data_strengthVisibility")) {
    // @ts-ignore
    dispatch(
      setStrengthsDisplayAction(
        JSON.parse(localStorage.getItem("step2Data_strengthVisibility") || "{}")
      )
    );
  }
  if (localStorage.getItem("step2Data_strength")) {
    // @ts-ignore
    dispatch(
      setStrengthsAction(
        JSON.parse(localStorage.getItem("step2Data_strength") || "{}")
      )
    );
  }
  if (localStorage.getItem("step2Data_weaknessesVisibility")) {
    // @ts-ignore
    dispatch(
      setWeaknessesDisplayAction(
        JSON.parse(
          localStorage.getItem("step2Data_weaknessesVisibility") || "{}"
        )
      )
    );
  }
  if (localStorage.getItem("step2Data_weaknesses")) {
    // @ts-ignore
    dispatch(
      setWeaknessesAction(
        JSON.parse(localStorage.getItem("step2Data_weaknesses") || "{}")
      )
    );
  }
  if (localStorage.getItem("step2Data_opportunitiesVisibility")) {
    // @ts-ignore
    dispatch(
      setOpportunitiesDisplayAction(
        JSON.parse(
          localStorage.getItem("step2Data_opportunitiesVisibility") || "{}"
        )
      )
    );
  }
  if (localStorage.getItem("step2Data_opportunities")) {
    // @ts-ignore
    dispatch(
      setOpportunitiesAction(
        JSON.parse(localStorage.getItem("step2Data_opportunities") || "{}")
      )
    );
  }
  if (localStorage.getItem("step2Data_threatsVisibility")) {
    // @ts-ignore
    dispatch(
      setThreatsDisplayAction(
        JSON.parse(localStorage.getItem("step2Data_threatsVisibility") || "{}")
      )
    );
  }
  if (localStorage.getItem("step2Data_threats")) {
    // @ts-ignore
    dispatch(
      setThreatsAction(
        JSON.parse(localStorage.getItem("step2Data_threats") || "{}")
      )
    );
  }
  if (localStorage.getItem("step2Data_threats2OpportunitiesVisibility")) {
    // @ts-ignore
    dispatch(
      setThreats2OpportunitiesDisplayAction(
        JSON.parse(
          localStorage.getItem("step2Data_threats2OpportunitiesVisibility") ||
            "{}"
        )
      )
    );
  }
  if (localStorage.getItem("step2Data_threats2Opportunities")) {
    // @ts-ignore
    dispatch(
      setThreats2OpportunitiesAction(
        JSON.parse(
          localStorage.getItem("step2Data_threats2Opportunities") || "{}"
        )
      )
    );
  }
  if (localStorage.getItem("step2Data_weaknesses2StrengthsVisibility")) {
    // @ts-ignore
    dispatch(
      setWeaknesses2StrengthDisplayAction(
        JSON.parse(
          localStorage.getItem("step2Data_weaknesses2StrengthsVisibility") ||
            "{}"
        )
      )
    );
  }
  if (localStorage.getItem("step2Data_weaknesses2Strengths")) {
    // @ts-ignore
    dispatch(
      setWeaknesses2StrengthAction(
        JSON.parse(
          localStorage.getItem("step2Data_weaknesses2Strengths") || "{}"
        )
      )
    );
  }
};

export const getWindowDimensions = () => {
  if (typeof window !== "undefined") {
    console.log(window);
    // const { innerWidth: width, innerHeight: height } = window;
    // return {
    //   width,
    //   height,
    // };
  }
};
