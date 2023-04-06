import React, { useEffect, useState } from "react";
import { InputTextarea } from "../../_form";
import { useDispatch, useSelector } from "react-redux";
import { setOpportunitiesDisplayAction } from "../../../redux/customerData";
import { opportunitiesDisplayDataSelector } from "../../../redux/customerData/selectors";
import { useTranslations } from "next-intl";

interface Props {
  props: any;
  num: number;
  customError: any;
  counter: number;
  handleRemoveTextarea: (num: number, props: any) => void;
}

const OpportunitiesForm: React.FC<Props> = ({
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
  const opportunitiesDataSelector = useSelector(
    opportunitiesDisplayDataSelector
  );

  const handleDataAdd = (data: any, index: number) => {
    if (data?.length) {
      setShowResults(!showResults);
      const tmpServiceList = opportunitiesDataSelector;
      tmpServiceList[index] = !tmpServiceList[index];
      dispatch(setOpportunitiesDisplayAction(tmpServiceList));
      localStorage.setItem(
        "step2Data_opportunitiesVisibility",
        JSON.stringify(tmpServiceList)
      );
    } else {
      setDataError(true);
    }
  };

  useEffect(() => {
    setDataError(false);
  }, [props.values[`opportunities_${num}_description`]]);

  useEffect(() => {
    setDataError(customError);
  }, [customError]);

  return (
    <div className="position-relative strengths-block-form">
      {opportunitiesDataSelector[num] ? (
        <div className="textarea-data-value d-flex position-relative">
          <span className="float-start">
            {props.values[`opportunities_${num}_description`]}
          </span>
          <div className="d-inline float-end btns-block-content">
            <button
              className="edit-data-icon"
              onClick={() => {
                handleDataAdd(
                  props.values[`opportunities_${num}_description`],
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
      {!opportunitiesDataSelector[num] ? (
        <div className="position-relative">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            href="javascript:void(0)"
            className="data-btn opportunities-data-btn"
            onClick={() => {
              handleDataAdd(
                props.values[`opportunities_${num}_description`],
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
            name={`opportunities_${num}_description`}
            placeholder={t(
              "You can have up to 5 opportunities, 150 characters each"
            )}
            props={props}
            tips={t("oppo_form_descr")}
            maxLength={150}
          />
          {dataError && <div className="error-el">{t("Required field")}</div>}
        </div>
      ) : null}
    </div>
  );
};

export { OpportunitiesForm };
