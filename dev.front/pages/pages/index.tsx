import React, { useState, useRef, useEffect } from "react";
import { SketchPicker } from "react-color";
import { useSelector } from "react-redux";
import { strengthsDataSelector } from "../../redux/customerData/selectors";
import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations();
  const [showPicker, setShowPicker] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#fff");
  const [open, setOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);
  const nodeDropdown = useRef<HTMLDivElement>(null);
  const stepStrengthData: any = useSelector(strengthsDataSelector);

  const handleChangeComplete = (color: any) => {
    setSelectedColor(color.hex);
  };

  const handleClick = (e: any) => {
    if (node?.current?.contains(e.target)) {
      // inside colorpicker click
      setOpen(false);
      return;
    }
    if (nodeDropdown?.current?.contains(e.target)) {
      // inside dropdown click
      setShowPicker(false);
      return;
    }
    // outside click
    setShowPicker(false);
    setOpen(false);
  };

  const setDropdownData = (opt: string) => {
    console.log(opt);
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const renderStrengthData = (data: any) => {
    return <>{data}</>;
  };

  return (
    <div className="container">
      <div className="slogan">
        Here’s your SWOT Analysis slide, you can go back and edit it or just
        click on “Download” button and the Slide will be downloaded as pdf or
        ppt file on your pc
      </div>
      <div className="swot-block">
        <div className="swot-1-bordered">
          <div className="swot-1">
            <h2 className="h-1">{t("cap_1")}</h2>
            <div className="info">
              <>
                {Object.keys(stepStrengthData)?.map((item: any) => (
                  <p key={item}>{renderStrengthData(stepStrengthData[item])}</p>
                ))}
              </>
              {/*<p>Brand is synonymous with value</p>*/}
              {/*<p>Durable goods supply chain</p>*/}
              {/*<p>Personalization</p>*/}
              {/*Current Prime subscriber base of 150MM members in the US alone*/}
            </div>
            <div className="position-relative">
              <div className="arrow-up"></div>
              <div className="red-block">
                <p>Amazon brand is not synonymous with high quality food</p>
                Distribution network is optimized for durable goods not
                perishables like food
              </div>
            </div>
            <h2 className="second h-2">Weaknesses</h2>
            <div className="info">
              Many strengths become weaknesses vs. Walmart in this space, who
              also prossesses supply chain superiority and has 4,000 physical
              locations
            </div>
          </div>
        </div>
        <div className="swotspacing"></div>
        <div className="swot-2-bordered">
          <div className="swot-2">
            <h2 className="h-3">Threats</h2>
            <div className="info">
              <p>
                Walmart has entered online grocery with <span>“InHome”</span>{" "}
                delivery, an attractive pricing plan, and is{" "}
                <span>gaining share</span> rapidly
              </p>
            </div>
            <div className="position-relative">
              <div className="red-block-second">
                Amazon can only win in grocery deliver with a large scale
                effort, seeking to achieve online delivery market share of 30%
                by year two in order to be competitive vs. WMT and other
              </div>
              <div className="arrow-down"></div>
            </div>
            <h2 className="second h-4">Opportunities</h2>
            <div className="info">
              Online grocery is a <span>$100Bn</span> sector growing at a +15%{" "}
              <span>CAGR</span> over 5 yers
              <p>
                Acquiring a current grocery chain, such a{" "}
                <span>Whole Foods</span>, would provide
                <span>distribution</span> and brand image gains for{" "}
                <span>quality</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
      <div className="row buttons-block">
        <div className="col-12 col-lg-4 order-1">
          <button className="btn orange-button">Go Back and Edit</button>
        </div>
        <div className="col-12 col-lg-4 order-3">
          <div className="dropdown position-relative">
            <div ref={nodeDropdown} style={{ display: "inline" }}>
              <button
                className="btn red-button dropdown-toggle"
                onClick={() => setOpen(!open)}
              >
                Download as
              </button>
              {open && (
                <ul className="dropdown-menu">
                  <li>
                    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                    <span
                      className="dropdown-item"
                      onClick={() => setDropdownData("pdf")}
                    >
                      PDF
                    </span>
                  </li>
                  <li>
                    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                    <span
                      className="dropdown-item"
                      onClick={() => setDropdownData("ppt")}
                    >
                      PPT
                    </span>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 order-2 float-left">
          <div ref={node} style={{ display: "inline" }}>
            <button
              className="btn orange-button"
              onClick={() => setShowPicker(!showPicker)}
            >
              Change Colors
            </button>
            {showPicker && (
              <div className="picker-block position-relative">
                <SketchPicker
                  className={`site-picker`}
                  onChangeComplete={handleChangeComplete}
                  color={selectedColor}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
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
