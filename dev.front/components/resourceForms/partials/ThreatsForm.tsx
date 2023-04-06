import React, { useEffect, useState } from "react";
import { InputTextarea } from "../../_form";
import { useDispatch, useSelector } from "react-redux";
import { setThreatsDisplayAction } from "../../../redux/customerData";
import { threatsDisplayDataSelector } from "../../../redux/customerData/selectors";
import { useTranslations } from "next-intl";

interface Props {
  props: any;
  num: number;
  customError: any;
  counter: number;
  handleRemoveTextarea: (num: number, props: any) => void;
}

const ThreatsForm: React.FC<Props> = ({
  props,
  num,
  counter,
  customError,
  handleRemoveTextarea,
}) => {
  const [showResults, setShowResults] = useState<boolean>(false);
  const [dataError, setDataError] = useState<boolean>(customError);
  const dispatch = useDispatch();
  const t = useTranslations();
  const threatsDataSelector = useSelector(threatsDisplayDataSelector);

  const handleDataAdd = (data: any, index: number) => {
    if (data?.length) {
      setShowResults(!showResults);
      const tmpServiceList = threatsDataSelector;
      tmpServiceList[index] = !tmpServiceList[index];
      dispatch(setThreatsDisplayAction(tmpServiceList));
      localStorage.setItem(
        "step2Data_threatsVisibility",
        JSON.stringify(tmpServiceList)
      );
    } else {
      setDataError(true);
    }
  };

  useEffect(() => {
    setDataError(false);
  }, [props.values[`threats_${num}_description`]]);

  return (
    <div className="position-relative strengths-block-form">
      {threatsDataSelector[num] ? (
        <div className="textarea-data-value d-flex position-relative">
          <span className="float-start">
            {props.values[`threats_${num}_description`]}
          </span>
          <div className="d-inline float-end btns-block-content">
            <button
              className="edit-data-icon"
              onClick={() => {
                handleDataAdd(props.values[`threats_${num}_description`], num);
              }}
            />
            <button
              className="remove-data-icon"
              onClick={() => {
                num == 0 && counter == 0 ? setShowResults(false) : "";
                handleRemoveTextarea(num, props);
              }}
            />
          </div>
        </div>
      ) : null}
      {!threatsDataSelector[num] ? (
        <div className="position-relative">
          {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid */}
          <a
            href="javascript:void(0)"
            className="data-btn threats-data-btn"
            onClick={() => {
              handleDataAdd(props.values[`threats_${num}_description`], num);
            }}
          >
            Add
          </a>
          <InputTextarea
            icon={null}
            style={""}
            label={""}
            name={`threats_${num}_description`}
            placeholder={t("You can have up to 5 threats, 150 characters each")}
            props={props}
            tips={t("threat_tips")}
            maxLength={150}
          />
          {dataError && <div className="error-el">{t("Required field")}</div>}
        </div>
      ) : null}
    </div>
  );
};

export { ThreatsForm };
