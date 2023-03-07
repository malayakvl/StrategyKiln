import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";

export default function Breadcrumb() {
  const router = useRouter();
  const stepName = router.query.pageNumber || "";

  const activeCompany = [
    "strengths",
    "weaknesses",
    "opportunities",
    "threats",
    "threats2opportunities",
    "weaknesses2strengths",
  ].includes(stepName as string);
  const activeStrengths = [
    "weaknesses",
    "opportunities",
    "threats",
    "threats2opportunities",
    "weaknesses2strengths",
  ].includes(stepName as string);
  const activeWeaknesses = [
    "opportunities",
    "threats",
    "threats2opportunities",
    "weaknesses2strengths",
  ].includes(stepName as string);
  const activeOpportunities = [
    "threats",
    "threats2opportunities",
    "weaknesses2strengths",
  ].includes(stepName as string);
  const activeThreats = [
    "threats2opportunities",
    "weaknesses2strengths",
  ].includes(stepName as string);
  const activeThreats2Opportunities = ["weaknesses2strengths"].includes(
    stepName as string
  );

  return (
    <nav className="flex justify-center" aria-label="Breadcrumb">
      <ul className="breadcrumb-custom">
        {activeCompany ? (
          <li className="active">
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus */}
            <i role="button" onClick={() => router.push("/resources/company")}>
              1
            </i>
            <Link legacyBehavior href="/resources/company">
              <a className="text-sm font-medium text-gray-700">
                <span>Company Info</span>
              </a>
            </Link>
          </li>
        ) : (
          <li className="active">
            <i>1</i>
            <a className="text-sm font-medium text-gray-700">
              <span>Company Info</span>
            </a>
          </li>
        )}
        {activeStrengths ? (
          <li className="active">
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus */}
            <i
              role="button"
              onClick={() => router.push("/resources/strengths")}
            >
              2
            </i>
            <Link legacyBehavior href="/resources/strengths">
              <a className="text-sm font-medium text-gray-700">
                <span>Strengths</span>
              </a>
            </Link>
          </li>
        ) : (
          <li className={(stepName as string) === "strengths" ? "active" : ""}>
            <i>2</i>
            <a className="text-sm font-medium text-gray-700">
              <span>Strengths</span>
            </a>
          </li>
        )}
        {activeWeaknesses ? (
          <li className="active">
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus */}
            <i
              role="button"
              onClick={() => router.push("/resources/weaknesses")}
            >
              3
            </i>
            <Link legacyBehavior href="/resources/weaknesses">
              <a className="text-sm font-medium text-gray-700">
                <span>Weaknesses</span>
              </a>
            </Link>
          </li>
        ) : (
          <li className={(stepName as string) === "weaknesses" ? "active" : ""}>
            <i>3</i>
            <a className="text-sm font-medium text-gray-700">
              <span>Weaknesses</span>
            </a>
          </li>
        )}
        {activeOpportunities ? (
          <li className="active">
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus */}
            <i
              role="button"
              onClick={() => router.push("/resources/opportunities")}
            >
              4
            </i>
            <Link legacyBehavior href="/resources/opportunities">
              <a className="text-sm font-medium text-gray-700">
                <span>Opportunities</span>
              </a>
            </Link>
          </li>
        ) : (
          <li
            className={(stepName as string) === "opportunities" ? "active" : ""}
          >
            <i>4</i>
            <a className="text-sm font-medium text-gray-700">
              <span>Opportunities</span>
            </a>
          </li>
        )}
        {activeThreats ? (
          <li className="active">
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus */}
            <i role="button" onClick={() => router.push("/resources/threats")}>
              5
            </i>
            <Link legacyBehavior href="/resources/threats">
              <a className="text-sm font-medium text-gray-700">
                <span>Threats</span>
              </a>
            </Link>
          </li>
        ) : (
          <li className={(stepName as string) === "threats" ? "active" : ""}>
            <i>5</i>
            <a className="text-sm font-medium text-gray-700">
              <span>Threats</span>
            </a>
          </li>
        )}
        {activeThreats2Opportunities ? (
          <li className="active">
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus */}
            <i
              role="button"
              onClick={() => router.push("/resources/threats2opportunities")}
            >
              6
            </i>
            <Link legacyBehavior href="/resources/threats2opportunities">
              <a className="text-sm font-medium text-gray-700">
                <span>Threats to Opportunities</span>
              </a>
            </Link>
          </li>
        ) : (
          <li
            className={
              (stepName as string) === "threats2opportunities" ? "active" : ""
            }
          >
            <i>6</i>
            <a className="text-sm font-medium text-gray-700">
              <span>Threats to Opportunities</span>
            </a>
          </li>
        )}
        <li
          className={
            (stepName as string) === "weaknesses2strengths" ? "active" : ""
          }
        >
          <i>7</i>
          <a className="text-sm font-medium text-gray-700">
            <span>Weaknesses to Strengths</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
