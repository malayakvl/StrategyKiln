import React, { useEffect, useState } from "react";
import { InputTextarea } from "../../_form";
import { useDispatch, useSelector } from "react-redux";
import { setWeaknesses2StrengthDisplayAction } from "../../../redux/customerData";
import { weaknesses2StrengthsDisplayDataSelector } from "../../../redux/customerData/selectors";

interface Props {
  props: any;
  num: number;
  customError: any;
  counter: number;
  handleRemoveTextarea: (num: number, props: any) => void;
}

const Weaknesses2StrengthForm: React.FC<Props> = ({
  props,
  num,
  counter,
  customError,
  handleRemoveTextarea,
}) => {
  const [showResults, setShowResults] = useState<boolean>(false);
  const [dataError, setDataError] = useState<boolean>(customError);
  const dispatch = useDispatch();
  const visibilityStatus = useSelector(weaknesses2StrengthsDisplayDataSelector);

  const handleDataAdd = (data: any, index: number) => {
    if (data?.length) {
      setShowResults(!showResults);
      const tmpServiceList = visibilityStatus;
      tmpServiceList[index] = !tmpServiceList[index];
      dispatch(setWeaknesses2StrengthDisplayAction(tmpServiceList));
      localStorage.setItem(
        "step2Data_weaknesses2StrengthsVisibility",
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
    <div className="position-relative weaknesses2Strengths-block-form">
      {visibilityStatus[num] ? (
        <div className="textarea-data-value d-flex position-relative">
          <span className="float-start">
            {props.values[`weaknesses2Strengths_${num}_description`]}
          </span>
          <div className="d-inline float-end btns-block-content">
            <button
              className="edit-data-icon"
              onClick={() => {
                handleDataAdd(
                  props.values[`weaknesses2Strengths_${num}_description`],
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
      {!visibilityStatus[num] ? (
        <div className="position-relative">
          {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid */}
          <a
            href="javascript:void(0)"
            className="data-btn"
            onClick={() => {
              handleDataAdd(
                props.values[`weaknesses2Strengths_${num}_description`],
                num
              );
            }}
          >
            Add
          </a>
          <InputTextarea
            icon={null}
            style={""}
            label={""}
            name={`weaknesses2Strengths_${num}_description`}
            placeholder={
              "You can have up to 5 weaknesses2Strengths, 150 characters each"
            }
            props={props}
            tips={
              "E.g. “customer recognize our brand” or “higher quality vs. the competition”"
            }
            maxLength={150}
          />
          {dataError && <div className="error-el">Required field</div>}
        </div>
      ) : null}
    </div>
  );
};

export { Weaknesses2StrengthForm };
