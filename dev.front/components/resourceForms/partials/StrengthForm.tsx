import React, { useEffect, useState } from "react";
import { InputTextarea } from "../../_form";
import { useDispatch, useSelector } from "react-redux";
import { setStrengthsDisplayAction } from "../../../redux/customerData";
import { strengthsDisplayDataSelector } from "../../../redux/customerData/selectors";
import { useTranslations } from "next-intl";

interface Props {
  props: any;
  num: number;
  customError: any;
  counter: number;
  handleRemoveTextarea: (num: number, props: any) => void;
}

const StrengthForm: React.FC<Props> = ({
  props,
  num,
  counter,
  customError,
  handleRemoveTextarea,
}) => {
  const [showResults, setShowResults] = useState<boolean>(false);
  const [dataError, setDataError] = useState<boolean>(customError);
  const dispatch = useDispatch();
  const strengthDataSelector = useSelector(strengthsDisplayDataSelector);
  const t = useTranslations();
  // const reloadState = useSelector(reloadSelector);

  const handleDataAdd = (data: any, index: number) => {
    if (data?.length) {
      setShowResults(!showResults);
      const tmpServiceList = strengthDataSelector;
      tmpServiceList[index] = !tmpServiceList[index];
      dispatch(setStrengthsDisplayAction(tmpServiceList));
      localStorage.setItem(
        "step2Data_strengthVisibility",
        JSON.stringify(tmpServiceList)
      );
    } else {
      setDataError(true);
    }
  };

  useEffect(() => {
    setDataError(false);
  }, [props.values]);

  useEffect(() => {
    setDataError(customError);
  }, [customError]);

  return (
    <div className="position-relative strengths-block-form">
      {strengthDataSelector[num] ? (
        <div className="textarea-data-value d-flex position-relative">
          <span className="float-start">
            {props.values[`strengths_${num}_description`]}
          </span>
          <div className="d-inline float-end btns-block-content">
            <button
              className="edit-data-icon"
              onClick={() => {
                handleDataAdd(
                  props.values[`strengths_${num}_description`],
                  num
                );
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
      {!strengthDataSelector[num] ? (
        <div className="position-relative">
          {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid */}
          <a
            href="javascript:void(0)"
            className="data-btn"
            onClick={() => {
              handleDataAdd(props.values[`strengths_${num}_description`], num);
            }}
          >
            {t("Add")}
          </a>
          <InputTextarea
            icon={null}
            style={""}
            label={""}
            name={`strengths_${num}_description`}
            placeholder={t(
              "You can have up to 5 strengths, 150 characters each"
            )}
            props={props}
            tips={t("strength_tip_2")}
            maxLength={150}
          />
          {dataError && <div className="error-el">{t("Required field")}</div>}
        </div>
      ) : null}
    </div>
  );
};

export { StrengthForm };
