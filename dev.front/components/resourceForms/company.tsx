import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import * as Yup from "yup";
import { Formik } from "formik";
import { InputText } from "../_form";
import { useDispatch, useSelector } from "react-redux";
import { setCompanyAction } from "../../redux/customerData/actions";
import {
  companyDataSelector,
  uploadedFileSelector,
} from "../../redux/customerData/selectors";
import { addUploadedFile } from "../../redux/customerData";
import { uploadLogoAction } from "../../redux/customerData/actions";
import { baseApiUrl } from "../../constants";

const thumbsContainer = {
  display: "flex",
  marginTop: 16,
};
const thumb = {
  display: "inline-flex",
  width: 100,
  height: 100,
};
const thumbLoaded = {
  width: 100,
  height: 100,
};
const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
  width: 100,
  height: "auto",
};

export default function Step1() {
  const router = useRouter();
  const dispatch = useDispatch();
  const stepData: any = useSelector(companyDataSelector);
  const [myFiles, setMyFiles] = useState<any[]>([]);
  const uploadedFiles = useSelector(uploadedFileSelector);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setMyFiles(
        (acceptedFiles as any).map((file: Blob | MediaSource) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      dispatch(addUploadedFile(acceptedFiles));
    },
  });

  // @ts-ignore
  const thumbs = myFiles.map((file) => (
    <div style={thumb} key={file.name}>
      <div
        style={thumbInner}
        className="position-relative border-1 thumb-preview"
      >
        <Image
          alt=""
          fill
          src={file.preview}
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    acceptedFiles.forEach((file: File) => {
      dispatch(addUploadedFile(file));
    });
  }, [acceptedFiles]);

  const SubmitSchema = Yup.object().shape({
    company_name: Yup.string().required("Required field"),
    company_headline: Yup.string().required("Required field"),
  });

  const checkFormData = (values: any) => {
    const formData = new FormData();
    formData.append("logo", uploadedFiles);
    localStorage.setItem("step2Data_company", JSON.stringify(values));

    dispatch(uploadLogoAction(formData));
    dispatch(setCompanyAction(values));
  };

  return (
    <>
      <Formik
        initialValues={stepData}
        enableReinitialize
        validationSchema={SubmitSchema}
        onSubmit={(values: any) => {
          dispatch(setCompanyAction(values));
          router.push("/resources/strengths-step1");
        }}
      >
        {(props: any) => (
          <form onSubmit={props.handleSubmit}>
            <div className="row no-gutters">
              <div className="col-lg-6 col-md-6">
                <InputText
                  icon={null}
                  style={"mb-6 md:mb-3"}
                  label={"What is the name of your company?"}
                  name={"company_name"}
                  placeholder={"Company Name"}
                  props={props}
                  tips={null}
                />
                <InputText
                  icon={null}
                  style={"mb-3"}
                  label={"What is your headline for the SWOT Analysis?"}
                  name={"company_headline"}
                  placeholder={"Your Headline"}
                  props={props}
                  tips={"E.g. “Amazon entry into online grocery delivery”"}
                />
              </div>
              <div className="col-lg-6  col-md-6 dropzone-block">
                <div className="mb-3">
                  <label htmlFor="strengths" className="form-label">
                    Upload your company logo, if you have it
                  </label>
                  <div className="styles-dropzone">
                    <div
                      {...getRootProps({ className: "dropzone", maxfiles: 1 })}
                    >
                      <input {...getInputProps()} />
                      <p>Select a file to upload</p>
                    </div>
                    <div className="thumb-block-images">
                      <aside style={thumbsContainer}>
                        {thumbs}
                        {stepData.company_logo && thumbs.length === 0 && (
                          <div style={thumbLoaded}>
                            <div
                              style={thumbInner}
                              className="position-relative border-1 thumb-preview"
                            >
                              <img
                                alt=""
                                src={
                                  baseApiUrl +
                                  "/uploads/logos/" +
                                  stepData.company_logo
                                }
                              />
                            </div>
                          </div>
                        )}
                      </aside>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row no-gutters mt-3">
              <div className="col-12 d-flex justify-content-between">
                <button className="gray-medium-button" disabled>
                  Back
                </button>
                <button
                  className="red-medium-button"
                  type="submit"
                  onClick={() => checkFormData(props.values)}
                >
                  Next
                </button>
                {/*<Link legacyBehavior href={'/resourceForms/strengths'}>*/}
                {/*    <button className="red-medium-button">Next</button>*/}
                {/*</Link>*/}
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}
