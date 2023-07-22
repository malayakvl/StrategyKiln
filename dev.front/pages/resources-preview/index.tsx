import React, { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  StrengthsIcon,
  ThreatsIcon,
  WeaknessesIcon,
  OpportunitiesIcon,
  ArrowUp,
  ArrowDown,
  BorderLeft,
  BorderRight,
  ButtonDownload,
  ButtonColor,
  StrengthsInfo,
  WeaknessesInfo,
  ThreatsInfo,
  OpportunitiesInfo,
  Threats2Opportunities,
  Weaknesses2Strengths,
  SwotIcon,
  Company,
} from "../../components/SwotElements/index";
import { colorDataSelector } from "../../redux/customerData/selectors";
import { fileNameSelector } from "../../redux/layouts/selectors";
import {
  showModalStrengthsAction,
  showModalWeaknessesAction,
  showModalThreatsAction,
  showModalOpportunitiesAction,
  showModalWeaknesses2StrengthsAction,
  showModalThreats2OpportunitiesAction,
} from "../../redux/customerData";
import WeaknessesStrengthsModal from "../../components/resourceForms/modals/weaknesses2strengths";
import OpportunitiesModal from "../../components/resourceForms/modals/opportunities";
import ThreatsModal from "../../components/resourceForms/modals/threats";
import WeaknessesModal from "../../components/resourceForms/modals/weaknesses";
import StrengthsModal from "../../components/resourceForms/modals/strengths";
import ThreatsOpportunitiesModal from "../../components/resourceForms/modals/threats2opportunities";
import { ModalColors } from "../../components/_common";
import { useTranslations } from "next-intl";

export default function ResourcesPreview() {
  const router = useRouter();
  const dispatch = useDispatch();
  const colorDataPalette = useSelector(colorDataSelector);
  const fileName = useSelector(fileNameSelector);
  const t = useTranslations();
  const node = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (fileName) {
      handleClick();
      router.push("resources/result");
    }
  }, [fileName, router]);

  const handleClick = () => {
    // @ts-ignore
    node.current.click();
  };

  return (
    <div className="container">
      <div className="slogan">{t("swot_preview_descr")}</div>
      <div className="swot-block">
        {/* =========================================Swot LOGO ===========================*/}
        <SwotIcon />

        {/* =========================================Swot 1 Block ===========================*/}
        <div className="row responsive-sm">
          <div
            className="col-50 col-block-first"
            style={{ position: "relative" }}
          >
            {/*Icon and border*/}
            <BorderLeft />
            <StrengthsIcon />
            <WeaknessesIcon />

            {/* ============================================================== STRENGTH BLOCK =======================*/}
            <div className="title title-new">
              <div
                style={{
                  // paddingLeft: "50px",
                  paddingTop: "33px",
                  position: "absolute",
                  left: "0",
                  top: "0",
                }}
                id="bl-1"
              >
                <h2
                  style={{
                    color: colorDataPalette.strengths_color,
                    paddingBottom: "10px",
                    position: "relative",
                  }}
                >
                  {t("Strengths")}
                  {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                  <span
                    className="cursor-pointer edit-resources"
                    onClick={() => dispatch(showModalStrengthsAction(true))}
                  ></span>
                </h2>
                {/*<StrengthsInfo />*/}
              </div>
              <div className="title-info">
                <StrengthsInfo />
              </div>
            </div>
            {/* ============================================================== WEAKNESESS TO STRENGTH ===============*/}
            <div className="content">
              <div className="relative" id="bl-2">
                <ArrowUp />
                <div
                  className="red-block red-block-left relative"
                  style={{
                    background: colorDataPalette.weaknesses2strengths_color,
                  }}
                >
                  <Weaknesses2Strengths />
                  {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                  <span
                    className="cursor-pointer edit-resources-white"
                    onClick={() =>
                      dispatch(showModalWeaknesses2StrengthsAction(true))
                    }
                  ></span>
                </div>
              </div>
            </div>
            {/* ============================================================== WEAKNESESS BLOCK =====================*/}
            <div className="footer footer-new">
              <div
                style={{
                  // paddingLeft: "50px",
                  display: "table-caption",
                }}
              >
                <h2
                  className="second"
                  style={{
                    color: colorDataPalette.weaknesses_color,
                    paddingBottom: "10px",
                    position: "relative",
                  }}
                >
                  {t("Weaknesses")}
                  {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                  <span
                    className="cursor-pointer edit-resources"
                    onClick={() => dispatch(showModalWeaknessesAction(true))}
                  ></span>
                  <span className="swot-icon-2-mobile">
                    <WeaknessesIcon />
                  </span>
                </h2>
              </div>
              <div className="footer-info footer-weaknesess">
                <WeaknessesInfo />
              </div>
            </div>
          </div>

          {/* =========================================Swot 2 Block ===========================*/}
          <div
            className="col-50 col-block-second"
            style={{ position: "relative" }}
          >
            <BorderRight />
            <ThreatsIcon />
            <OpportunitiesIcon />

            {/* ============================================================== THREATS BLOCK ========================*/}
            <div className="title title-new">
              <div
                style={{
                  // paddingLeft: "75px",
                  paddingTop: "33px",
                  position: "absolute",
                  left: "0",
                  top: "0",
                }}
                id="br-1"
              >
                <h2
                  style={{
                    color: colorDataPalette.threats_color,
                    paddingBottom: "10px",
                    position: "relative",
                  }}
                >
                  {t("Threats")}
                  {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                  <span
                    className="cursor-pointer edit-resources"
                    onClick={() => dispatch(showModalThreatsAction(true))}
                  ></span>
                </h2>
              </div>
              <div className="title-info threats">
                <ThreatsInfo />
              </div>
            </div>
            {/* ============================================================== THREATS TO OPPORTUNITIES =============*/}
            <div className="content">
              <div className="relative" id="bl-2">
                <ArrowDown />
                <div
                  className="red-block red-block-left relative"
                  style={{
                    background: colorDataPalette.threats2opportunities_color,
                  }}
                >
                  <Threats2Opportunities />
                  {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                  <span
                    className="cursor-pointer edit-resources-white"
                    onClick={() =>
                      dispatch(showModalThreats2OpportunitiesAction(true))
                    }
                  ></span>
                </div>
              </div>
            </div>
            {/* ============================================================== OPPORTUNITIES BLOCK ==================*/}
            <div className="footer footer-new">
              <div
                style={{
                  // paddingLeft: "75px",
                  // paddingBottom: "35px",
                  display: "table-caption",
                }}
              >
                <h2
                  className="second"
                  style={{
                    color: colorDataPalette.opportunities_color,
                    paddingBottom: "10px",

                    position: "relative",
                  }}
                >
                  {t("Opportunities")}
                  {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                  <span
                    className="cursor-pointer edit-resources"
                    onClick={() => dispatch(showModalOpportunitiesAction(true))}
                  ></span>
                  <span className="swot-icon-2-mobile second-mobile">
                    <OpportunitiesIcon />
                  </span>
                </h2>

                {/*<OpportunitiesInfo />*/}
              </div>
              <div className="footer-info footer-opportunities">
                <OpportunitiesInfo />
              </div>
            </div>
          </div>
        </div>

        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}

        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
        <a
          className="hidden"
          href={fileName ? fileName : "#"}
          target="_blank"
          rel="noreferrer"
          ref={node}
        />
        <div className="clearfix"></div>
      </div>
      <div className="clearfix"></div>
      {/* ===============================  Company block content =============================*/}
      <Company />
      <div className="clearfix"></div>
      {/* ===============================  Buttons block content =============================*/}

      {/* ===============================  Buttons block content =============================*/}
      <div className="swot-block-button">
        <div className="row buttons-block g-0">
          <div className="col-12 col-md-4 order-1">
            <button
              className="btn orange-button"
              onClick={() => router.push("/resources/weaknesses2strengths")}
            >
              {t("Go Back and Edit")}
            </button>
          </div>
          <div className="col-12 col-md-4 order-2">
            <ButtonDownload />
          </div>
          <div className="col-12 col-md-4 order-3">
            <ButtonColor />
          </div>
        </div>
      </div>
      <div className="clearfix"></div>

      <ModalColors />

      <StrengthsModal />
      <WeaknessesModal />
      <ThreatsModal />
      <OpportunitiesModal />
      <WeaknessesStrengthsModal />
      <ThreatsOpportunitiesModal />

      <div className="hidden" id="hiddenContainerDownload"></div>
    </div>
  );
}

export async function getServerSideProps() {
  const locale = "en";

  return {
    props: {
      locale,
      messages: {
        ...require(`../../messages/${locale}.json`),
      },
    },
  };
}
