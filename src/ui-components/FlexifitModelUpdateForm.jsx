/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getFlexifitModel } from "../graphql/queries";
import { updateFlexifitModel } from "../graphql/mutations";
const client = generateClient();
export default function FlexifitModelUpdateForm(props) {
  const {
    id: idProp,
    flexifitModel: flexifitModelModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    candidateid: "",
    candidateName: "",
    interviewerName: "",
    interviewDate: "",
    candidateLocation: "",
    candidateJobPreference: "",
    maritalStatus: "",
    singleType: "",
    ageOfYoungestKid: "",
    spouseSupportForKids: "",
    spouseSupportForHousehold: "",
    helperSupportForKids: "",
    helperSupportForHouseHold: "",
    otherSupportForKids: "",
    otherSupportForHouseHold: "",
    readyToExtendSupport: "",
    caregiving: "",
    supportForCareGiving: "",
    Responsibilities: "",
    TypeOfContract: "",
    DriveToWork: "",
    ImmediateCareerAmbitions: "",
    FinancialDriveToWork: "",
    LearningReadiness: "",
    JobSearchReadiness: "",
    JobSearchSuccess: "",
    LastWorked: "",
    TypeOfRole: "",
    Role_Interviewer: "",
    OtherCommitments: "",
    Interviewer_Proposed_Availability: "",
  };
  const [candidateid, setCandidateid] = React.useState(
    initialValues.candidateid
  );
  const [candidateName, setCandidateName] = React.useState(
    initialValues.candidateName
  );
  const [interviewerName, setInterviewerName] = React.useState(
    initialValues.interviewerName
  );
  const [interviewDate, setInterviewDate] = React.useState(
    initialValues.interviewDate
  );
  const [candidateLocation, setCandidateLocation] = React.useState(
    initialValues.candidateLocation
  );
  const [candidateJobPreference, setCandidateJobPreference] = React.useState(
    initialValues.candidateJobPreference
  );
  const [maritalStatus, setMaritalStatus] = React.useState(
    initialValues.maritalStatus
  );
  const [singleType, setSingleType] = React.useState(initialValues.singleType);
  const [ageOfYoungestKid, setAgeOfYoungestKid] = React.useState(
    initialValues.ageOfYoungestKid
  );
  const [spouseSupportForKids, setSpouseSupportForKids] = React.useState(
    initialValues.spouseSupportForKids
  );
  const [spouseSupportForHousehold, setSpouseSupportForHousehold] =
    React.useState(initialValues.spouseSupportForHousehold);
  const [helperSupportForKids, setHelperSupportForKids] = React.useState(
    initialValues.helperSupportForKids
  );
  const [helperSupportForHouseHold, setHelperSupportForHouseHold] =
    React.useState(initialValues.helperSupportForHouseHold);
  const [otherSupportForKids, setOtherSupportForKids] = React.useState(
    initialValues.otherSupportForKids
  );
  const [otherSupportForHouseHold, setOtherSupportForHouseHold] =
    React.useState(initialValues.otherSupportForHouseHold);
  const [readyToExtendSupport, setReadyToExtendSupport] = React.useState(
    initialValues.readyToExtendSupport
  );
  const [caregiving, setCaregiving] = React.useState(initialValues.caregiving);
  const [supportForCareGiving, setSupportForCareGiving] = React.useState(
    initialValues.supportForCareGiving
  );
  const [Responsibilities, setResponsibilities] = React.useState(
    initialValues.Responsibilities
  );
  const [TypeOfContract, setTypeOfContract] = React.useState(
    initialValues.TypeOfContract
  );
  const [DriveToWork, setDriveToWork] = React.useState(
    initialValues.DriveToWork
  );
  const [ImmediateCareerAmbitions, setImmediateCareerAmbitions] =
    React.useState(initialValues.ImmediateCareerAmbitions);
  const [FinancialDriveToWork, setFinancialDriveToWork] = React.useState(
    initialValues.FinancialDriveToWork
  );
  const [LearningReadiness, setLearningReadiness] = React.useState(
    initialValues.LearningReadiness
  );
  const [JobSearchReadiness, setJobSearchReadiness] = React.useState(
    initialValues.JobSearchReadiness
  );
  const [JobSearchSuccess, setJobSearchSuccess] = React.useState(
    initialValues.JobSearchSuccess
  );
  const [LastWorked, setLastWorked] = React.useState(initialValues.LastWorked);
  const [TypeOfRole, setTypeOfRole] = React.useState(initialValues.TypeOfRole);
  const [Role_Interviewer, setRole_Interviewer] = React.useState(
    initialValues.Role_Interviewer
  );
  const [OtherCommitments, setOtherCommitments] = React.useState(
    initialValues.OtherCommitments
  );
  const [
    Interviewer_Proposed_Availability,
    setInterviewer_Proposed_Availability,
  ] = React.useState(initialValues.Interviewer_Proposed_Availability);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = flexifitModelRecord
      ? { ...initialValues, ...flexifitModelRecord }
      : initialValues;
    setCandidateid(cleanValues.candidateid);
    setCandidateName(cleanValues.candidateName);
    setInterviewerName(cleanValues.interviewerName);
    setInterviewDate(cleanValues.interviewDate);
    setCandidateLocation(cleanValues.candidateLocation);
    setCandidateJobPreference(cleanValues.candidateJobPreference);
    setMaritalStatus(cleanValues.maritalStatus);
    setSingleType(cleanValues.singleType);
    setAgeOfYoungestKid(cleanValues.ageOfYoungestKid);
    setSpouseSupportForKids(cleanValues.spouseSupportForKids);
    setSpouseSupportForHousehold(cleanValues.spouseSupportForHousehold);
    setHelperSupportForKids(cleanValues.helperSupportForKids);
    setHelperSupportForHouseHold(cleanValues.helperSupportForHouseHold);
    setOtherSupportForKids(cleanValues.otherSupportForKids);
    setOtherSupportForHouseHold(cleanValues.otherSupportForHouseHold);
    setReadyToExtendSupport(cleanValues.readyToExtendSupport);
    setCaregiving(cleanValues.caregiving);
    setSupportForCareGiving(cleanValues.supportForCareGiving);
    setResponsibilities(cleanValues.Responsibilities);
    setTypeOfContract(cleanValues.TypeOfContract);
    setDriveToWork(cleanValues.DriveToWork);
    setImmediateCareerAmbitions(cleanValues.ImmediateCareerAmbitions);
    setFinancialDriveToWork(cleanValues.FinancialDriveToWork);
    setLearningReadiness(cleanValues.LearningReadiness);
    setJobSearchReadiness(cleanValues.JobSearchReadiness);
    setJobSearchSuccess(cleanValues.JobSearchSuccess);
    setLastWorked(cleanValues.LastWorked);
    setTypeOfRole(cleanValues.TypeOfRole);
    setRole_Interviewer(cleanValues.Role_Interviewer);
    setOtherCommitments(cleanValues.OtherCommitments);
    setInterviewer_Proposed_Availability(
      cleanValues.Interviewer_Proposed_Availability
    );
    setErrors({});
  };
  const [flexifitModelRecord, setFlexifitModelRecord] = React.useState(
    flexifitModelModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getFlexifitModel.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getFlexifitModel
        : flexifitModelModelProp;
      setFlexifitModelRecord(record);
    };
    queryData();
  }, [idProp, flexifitModelModelProp]);
  React.useEffect(resetStateValues, [flexifitModelRecord]);
  const validations = {
    candidateid: [{ type: "Required" }],
    candidateName: [],
    interviewerName: [],
    interviewDate: [],
    candidateLocation: [],
    candidateJobPreference: [],
    maritalStatus: [],
    singleType: [],
    ageOfYoungestKid: [],
    spouseSupportForKids: [],
    spouseSupportForHousehold: [],
    helperSupportForKids: [],
    helperSupportForHouseHold: [],
    otherSupportForKids: [],
    otherSupportForHouseHold: [],
    readyToExtendSupport: [],
    caregiving: [],
    supportForCareGiving: [],
    Responsibilities: [],
    TypeOfContract: [],
    DriveToWork: [],
    ImmediateCareerAmbitions: [],
    FinancialDriveToWork: [],
    LearningReadiness: [],
    JobSearchReadiness: [],
    JobSearchSuccess: [],
    LastWorked: [],
    TypeOfRole: [],
    Role_Interviewer: [],
    OtherCommitments: [],
    Interviewer_Proposed_Availability: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          candidateid,
          candidateName: candidateName ?? null,
          interviewerName: interviewerName ?? null,
          interviewDate: interviewDate ?? null,
          candidateLocation: candidateLocation ?? null,
          candidateJobPreference: candidateJobPreference ?? null,
          maritalStatus: maritalStatus ?? null,
          singleType: singleType ?? null,
          ageOfYoungestKid: ageOfYoungestKid ?? null,
          spouseSupportForKids: spouseSupportForKids ?? null,
          spouseSupportForHousehold: spouseSupportForHousehold ?? null,
          helperSupportForKids: helperSupportForKids ?? null,
          helperSupportForHouseHold: helperSupportForHouseHold ?? null,
          otherSupportForKids: otherSupportForKids ?? null,
          otherSupportForHouseHold: otherSupportForHouseHold ?? null,
          readyToExtendSupport: readyToExtendSupport ?? null,
          caregiving: caregiving ?? null,
          supportForCareGiving: supportForCareGiving ?? null,
          Responsibilities: Responsibilities ?? null,
          TypeOfContract: TypeOfContract ?? null,
          DriveToWork: DriveToWork ?? null,
          ImmediateCareerAmbitions: ImmediateCareerAmbitions ?? null,
          FinancialDriveToWork: FinancialDriveToWork ?? null,
          LearningReadiness: LearningReadiness ?? null,
          JobSearchReadiness: JobSearchReadiness ?? null,
          JobSearchSuccess: JobSearchSuccess ?? null,
          LastWorked: LastWorked ?? null,
          TypeOfRole: TypeOfRole ?? null,
          Role_Interviewer: Role_Interviewer ?? null,
          OtherCommitments: OtherCommitments ?? null,
          Interviewer_Proposed_Availability:
            Interviewer_Proposed_Availability ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateFlexifitModel.replaceAll("__typename", ""),
            variables: {
              input: {
                id: flexifitModelRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "FlexifitModelUpdateForm")}
      {...rest}
    >
      <TextField
        label="Candidateid"
        isRequired={true}
        isReadOnly={false}
        value={candidateid}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateid: value,
              candidateName,
              interviewerName,
              interviewDate,
              candidateLocation,
              candidateJobPreference,
              maritalStatus,
              singleType,
              ageOfYoungestKid,
              spouseSupportForKids,
              spouseSupportForHousehold,
              helperSupportForKids,
              helperSupportForHouseHold,
              otherSupportForKids,
              otherSupportForHouseHold,
              readyToExtendSupport,
              caregiving,
              supportForCareGiving,
              Responsibilities,
              TypeOfContract,
              DriveToWork,
              ImmediateCareerAmbitions,
              FinancialDriveToWork,
              LearningReadiness,
              JobSearchReadiness,
              JobSearchSuccess,
              LastWorked,
              TypeOfRole,
              Role_Interviewer,
              OtherCommitments,
              Interviewer_Proposed_Availability,
            };
            const result = onChange(modelFields);
            value = result?.candidateid ?? value;
          }
          if (errors.candidateid?.hasError) {
            runValidationTasks("candidateid", value);
          }
          setCandidateid(value);
        }}
        onBlur={() => runValidationTasks("candidateid", candidateid)}
        errorMessage={errors.candidateid?.errorMessage}
        hasError={errors.candidateid?.hasError}
        {...getOverrideProps(overrides, "candidateid")}
      ></TextField>
      <TextField
        label="Candidate name"
        isRequired={false}
        isReadOnly={false}
        value={candidateName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateid,
              candidateName: value,
              interviewerName,
              interviewDate,
              candidateLocation,
              candidateJobPreference,
              maritalStatus,
              singleType,
              ageOfYoungestKid,
              spouseSupportForKids,
              spouseSupportForHousehold,
              helperSupportForKids,
              helperSupportForHouseHold,
              otherSupportForKids,
              otherSupportForHouseHold,
              readyToExtendSupport,
              caregiving,
              supportForCareGiving,
              Responsibilities,
              TypeOfContract,
              DriveToWork,
              ImmediateCareerAmbitions,
              FinancialDriveToWork,
              LearningReadiness,
              JobSearchReadiness,
              JobSearchSuccess,
              LastWorked,
              TypeOfRole,
              Role_Interviewer,
              OtherCommitments,
              Interviewer_Proposed_Availability,
            };
            const result = onChange(modelFields);
            value = result?.candidateName ?? value;
          }
          if (errors.candidateName?.hasError) {
            runValidationTasks("candidateName", value);
          }
          setCandidateName(value);
        }}
        onBlur={() => runValidationTasks("candidateName", candidateName)}
        errorMessage={errors.candidateName?.errorMessage}
        hasError={errors.candidateName?.hasError}
        {...getOverrideProps(overrides, "candidateName")}
      ></TextField>
      <TextField
        label="Interviewer name"
        isRequired={false}
        isReadOnly={false}
        value={interviewerName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateid,
              candidateName,
              interviewerName: value,
              interviewDate,
              candidateLocation,
              candidateJobPreference,
              maritalStatus,
              singleType,
              ageOfYoungestKid,
              spouseSupportForKids,
              spouseSupportForHousehold,
              helperSupportForKids,
              helperSupportForHouseHold,
              otherSupportForKids,
              otherSupportForHouseHold,
              readyToExtendSupport,
              caregiving,
              supportForCareGiving,
              Responsibilities,
              TypeOfContract,
              DriveToWork,
              ImmediateCareerAmbitions,
              FinancialDriveToWork,
              LearningReadiness,
              JobSearchReadiness,
              JobSearchSuccess,
              LastWorked,
              TypeOfRole,
              Role_Interviewer,
              OtherCommitments,
              Interviewer_Proposed_Availability,
            };
            const result = onChange(modelFields);
            value = result?.interviewerName ?? value;
          }
          if (errors.interviewerName?.hasError) {
            runValidationTasks("interviewerName", value);
          }
          setInterviewerName(value);
        }}
        onBlur={() => runValidationTasks("interviewerName", interviewerName)}
        errorMessage={errors.interviewerName?.errorMessage}
        hasError={errors.interviewerName?.hasError}
        {...getOverrideProps(overrides, "interviewerName")}
      ></TextField>
      <TextField
        label="Interview date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={interviewDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateid,
              candidateName,
              interviewerName,
              interviewDate: value,
              candidateLocation,
              candidateJobPreference,
              maritalStatus,
              singleType,
              ageOfYoungestKid,
              spouseSupportForKids,
              spouseSupportForHousehold,
              helperSupportForKids,
              helperSupportForHouseHold,
              otherSupportForKids,
              otherSupportForHouseHold,
              readyToExtendSupport,
              caregiving,
              supportForCareGiving,
              Responsibilities,
              TypeOfContract,
              DriveToWork,
              ImmediateCareerAmbitions,
              FinancialDriveToWork,
              LearningReadiness,
              JobSearchReadiness,
              JobSearchSuccess,
              LastWorked,
              TypeOfRole,
              Role_Interviewer,
              OtherCommitments,
              Interviewer_Proposed_Availability,
            };
            const result = onChange(modelFields);
            value = result?.interviewDate ?? value;
          }
          if (errors.interviewDate?.hasError) {
            runValidationTasks("interviewDate", value);
          }
          setInterviewDate(value);
        }}
        onBlur={() => runValidationTasks("interviewDate", interviewDate)}
        errorMessage={errors.interviewDate?.errorMessage}
        hasError={errors.interviewDate?.hasError}
        {...getOverrideProps(overrides, "interviewDate")}
      ></TextField>
      <TextField
        label="Candidate location"
        isRequired={false}
        isReadOnly={false}
        value={candidateLocation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateid,
              candidateName,
              interviewerName,
              interviewDate,
              candidateLocation: value,
              candidateJobPreference,
              maritalStatus,
              singleType,
              ageOfYoungestKid,
              spouseSupportForKids,
              spouseSupportForHousehold,
              helperSupportForKids,
              helperSupportForHouseHold,
              otherSupportForKids,
              otherSupportForHouseHold,
              readyToExtendSupport,
              caregiving,
              supportForCareGiving,
              Responsibilities,
              TypeOfContract,
              DriveToWork,
              ImmediateCareerAmbitions,
              FinancialDriveToWork,
              LearningReadiness,
              JobSearchReadiness,
              JobSearchSuccess,
              LastWorked,
              TypeOfRole,
              Role_Interviewer,
              OtherCommitments,
              Interviewer_Proposed_Availability,
            };
            const result = onChange(modelFields);
            value = result?.candidateLocation ?? value;
          }
          if (errors.candidateLocation?.hasError) {
            runValidationTasks("candidateLocation", value);
          }
          setCandidateLocation(value);
        }}
        onBlur={() =>
          runValidationTasks("candidateLocation", candidateLocation)
        }
        errorMessage={errors.candidateLocation?.errorMessage}
        hasError={errors.candidateLocation?.hasError}
        {...getOverrideProps(overrides, "candidateLocation")}
      ></TextField>
      <SelectField
        label="Candidate job preference"
        placeholder="Please select an option"
        isDisabled={false}
        value={candidateJobPreference}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateid,
              candidateName,
              interviewerName,
              interviewDate,
              candidateLocation,
              candidateJobPreference: value,
              maritalStatus,
              singleType,
              ageOfYoungestKid,
              spouseSupportForKids,
              spouseSupportForHousehold,
              helperSupportForKids,
              helperSupportForHouseHold,
              otherSupportForKids,
              otherSupportForHouseHold,
              readyToExtendSupport,
              caregiving,
              supportForCareGiving,
              Responsibilities,
              TypeOfContract,
              DriveToWork,
              ImmediateCareerAmbitions,
              FinancialDriveToWork,
              LearningReadiness,
              JobSearchReadiness,
              JobSearchSuccess,
              LastWorked,
              TypeOfRole,
              Role_Interviewer,
              OtherCommitments,
              Interviewer_Proposed_Availability,
            };
            const result = onChange(modelFields);
            value = result?.candidateJobPreference ?? value;
          }
          if (errors.candidateJobPreference?.hasError) {
            runValidationTasks("candidateJobPreference", value);
          }
          setCandidateJobPreference(value);
        }}
        onBlur={() =>
          runValidationTasks("candidateJobPreference", candidateJobPreference)
        }
        errorMessage={errors.candidateJobPreference?.errorMessage}
        hasError={errors.candidateJobPreference?.hasError}
        {...getOverrideProps(overrides, "candidateJobPreference")}
      >
        <option
          children="Remote"
          value="REMOTE"
          {...getOverrideProps(overrides, "candidateJobPreferenceoption0")}
        ></option>
        <option
          children="Office"
          value="OFFICE"
          {...getOverrideProps(overrides, "candidateJobPreferenceoption1")}
        ></option>
        <option
          children="Hybrid"
          value="HYBRID"
          {...getOverrideProps(overrides, "candidateJobPreferenceoption2")}
        ></option>
      </SelectField>
      <SelectField
        label="Marital status"
        placeholder="Please select an option"
        isDisabled={false}
        value={maritalStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateid,
              candidateName,
              interviewerName,
              interviewDate,
              candidateLocation,
              candidateJobPreference,
              maritalStatus: value,
              singleType,
              ageOfYoungestKid,
              spouseSupportForKids,
              spouseSupportForHousehold,
              helperSupportForKids,
              helperSupportForHouseHold,
              otherSupportForKids,
              otherSupportForHouseHold,
              readyToExtendSupport,
              caregiving,
              supportForCareGiving,
              Responsibilities,
              TypeOfContract,
              DriveToWork,
              ImmediateCareerAmbitions,
              FinancialDriveToWork,
              LearningReadiness,
              JobSearchReadiness,
              JobSearchSuccess,
              LastWorked,
              TypeOfRole,
              Role_Interviewer,
              OtherCommitments,
              Interviewer_Proposed_Availability,
            };
            const result = onChange(modelFields);
            value = result?.maritalStatus ?? value;
          }
          if (errors.maritalStatus?.hasError) {
            runValidationTasks("maritalStatus", value);
          }
          setMaritalStatus(value);
        }}
        onBlur={() => runValidationTasks("maritalStatus", maritalStatus)}
        errorMessage={errors.maritalStatus?.errorMessage}
        hasError={errors.maritalStatus?.hasError}
        {...getOverrideProps(overrides, "maritalStatus")}
      >
        <option
          children="Single 1"
          value="SINGLE_1"
          {...getOverrideProps(overrides, "maritalStatusoption0")}
        ></option>
        <option
          children="Married 2"
          value="MARRIED_2"
          {...getOverrideProps(overrides, "maritalStatusoption1")}
        ></option>
        <option
          children="Na 0"
          value="NA_0"
          {...getOverrideProps(overrides, "maritalStatusoption2")}
        ></option>
      </SelectField>
      <SelectField
        label="Single type"
        placeholder="Please select an option"
        isDisabled={false}
        value={singleType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateid,
              candidateName,
              interviewerName,
              interviewDate,
              candidateLocation,
              candidateJobPreference,
              maritalStatus,
              singleType: value,
              ageOfYoungestKid,
              spouseSupportForKids,
              spouseSupportForHousehold,
              helperSupportForKids,
              helperSupportForHouseHold,
              otherSupportForKids,
              otherSupportForHouseHold,
              readyToExtendSupport,
              caregiving,
              supportForCareGiving,
              Responsibilities,
              TypeOfContract,
              DriveToWork,
              ImmediateCareerAmbitions,
              FinancialDriveToWork,
              LearningReadiness,
              JobSearchReadiness,
              JobSearchSuccess,
              LastWorked,
              TypeOfRole,
              Role_Interviewer,
              OtherCommitments,
              Interviewer_Proposed_Availability,
            };
            const result = onChange(modelFields);
            value = result?.singleType ?? value;
          }
          if (errors.singleType?.hasError) {
            runValidationTasks("singleType", value);
          }
          setSingleType(value);
        }}
        onBlur={() => runValidationTasks("singleType", singleType)}
        errorMessage={errors.singleType?.errorMessage}
        hasError={errors.singleType?.hasError}
        {...getOverrideProps(overrides, "singleType")}
      >
        <option
          children="Na 0"
          value="NA_0"
          {...getOverrideProps(overrides, "singleTypeoption0")}
        ></option>
        <option
          children="Unmarried 1"
          value="UNMARRIED_1"
          {...getOverrideProps(overrides, "singleTypeoption1")}
        ></option>
        <option
          children="Divorced widowed 2"
          value="DIVORCED_WIDOWED_2"
          {...getOverrideProps(overrides, "singleTypeoption2")}
        ></option>
      </SelectField>
      <SelectField
        label="Age of youngest kid"
        placeholder="Please select an option"
        isDisabled={false}
        value={ageOfYoungestKid}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateid,
              candidateName,
              interviewerName,
              interviewDate,
              candidateLocation,
              candidateJobPreference,
              maritalStatus,
              singleType,
              ageOfYoungestKid: value,
              spouseSupportForKids,
              spouseSupportForHousehold,
              helperSupportForKids,
              helperSupportForHouseHold,
              otherSupportForKids,
              otherSupportForHouseHold,
              readyToExtendSupport,
              caregiving,
              supportForCareGiving,
              Responsibilities,
              TypeOfContract,
              DriveToWork,
              ImmediateCareerAmbitions,
              FinancialDriveToWork,
              LearningReadiness,
              JobSearchReadiness,
              JobSearchSuccess,
              LastWorked,
              TypeOfRole,
              Role_Interviewer,
              OtherCommitments,
              Interviewer_Proposed_Availability,
            };
            const result = onChange(modelFields);
            value = result?.ageOfYoungestKid ?? value;
          }
          if (errors.ageOfYoungestKid?.hasError) {
            runValidationTasks("ageOfYoungestKid", value);
          }
          setAgeOfYoungestKid(value);
        }}
        onBlur={() => runValidationTasks("ageOfYoungestKid", ageOfYoungestKid)}
        errorMessage={errors.ageOfYoungestKid?.errorMessage}
        hasError={errors.ageOfYoungestKid?.hasError}
        {...getOverrideProps(overrides, "ageOfYoungestKid")}
      >
        <option
          children="No kids 0"
          value="NO_KIDS_0"
          {...getOverrideProps(overrides, "ageOfYoungestKidoption0")}
        ></option>
        <option
          children="Yrs 0 5 1"
          value="YRS_0_5_1"
          {...getOverrideProps(overrides, "ageOfYoungestKidoption1")}
        ></option>
        <option
          children="Yrs 5 12 2"
          value="YRS_5_12_2"
          {...getOverrideProps(overrides, "ageOfYoungestKidoption2")}
        ></option>
        <option
          children="Yrs 12 16 3"
          value="YRS_12_16_3"
          {...getOverrideProps(overrides, "ageOfYoungestKidoption3")}
        ></option>
        <option
          children="Yrs 16 plus 4"
          value="YRS_16_PLUS_4"
          {...getOverrideProps(overrides, "ageOfYoungestKidoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Spouse support for kids"
        placeholder="Please select an option"
        isDisabled={false}
        value={spouseSupportForKids}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateid,
              candidateName,
              interviewerName,
              interviewDate,
              candidateLocation,
              candidateJobPreference,
              maritalStatus,
              singleType,
              ageOfYoungestKid,
              spouseSupportForKids: value,
              spouseSupportForHousehold,
              helperSupportForKids,
              helperSupportForHouseHold,
              otherSupportForKids,
              otherSupportForHouseHold,
              readyToExtendSupport,
              caregiving,
              supportForCareGiving,
              Responsibilities,
              TypeOfContract,
              DriveToWork,
              ImmediateCareerAmbitions,
              FinancialDriveToWork,
              LearningReadiness,
              JobSearchReadiness,
              JobSearchSuccess,
              LastWorked,
              TypeOfRole,
              Role_Interviewer,
              OtherCommitments,
              Interviewer_Proposed_Availability,
            };
            const result = onChange(modelFields);
            value = result?.spouseSupportForKids ?? value;
          }
          if (errors.spouseSupportForKids?.hasError) {
            runValidationTasks("spouseSupportForKids", value);
          }
          setSpouseSupportForKids(value);
        }}
        onBlur={() =>
          runValidationTasks("spouseSupportForKids", spouseSupportForKids)
        }
        errorMessage={errors.spouseSupportForKids?.errorMessage}
        hasError={errors.spouseSupportForKids?.hasError}
        {...getOverrideProps(overrides, "spouseSupportForKids")}
      >
        <option
          children="Not applicable 0"
          value="NOT_APPLICABLE_0"
          {...getOverrideProps(overrides, "spouseSupportForKidsoption0")}
        ></option>
        <option
          children="Weak 1"
          value="WEAK_1"
          {...getOverrideProps(overrides, "spouseSupportForKidsoption1")}
        ></option>
        <option
          children="Medium 2"
          value="MEDIUM_2"
          {...getOverrideProps(overrides, "spouseSupportForKidsoption2")}
        ></option>
        <option
          children="Strong 3"
          value="STRONG_3"
          {...getOverrideProps(overrides, "spouseSupportForKidsoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Spouse support for household"
        placeholder="Please select an option"
        isDisabled={false}
        value={spouseSupportForHousehold}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateid,
              candidateName,
              interviewerName,
              interviewDate,
              candidateLocation,
              candidateJobPreference,
              maritalStatus,
              singleType,
              ageOfYoungestKid,
              spouseSupportForKids,
              spouseSupportForHousehold: value,
              helperSupportForKids,
              helperSupportForHouseHold,
              otherSupportForKids,
              otherSupportForHouseHold,
              readyToExtendSupport,
              caregiving,
              supportForCareGiving,
              Responsibilities,
              TypeOfContract,
              DriveToWork,
              ImmediateCareerAmbitions,
              FinancialDriveToWork,
              LearningReadiness,
              JobSearchReadiness,
              JobSearchSuccess,
              LastWorked,
              TypeOfRole,
              Role_Interviewer,
              OtherCommitments,
              Interviewer_Proposed_Availability,
            };
            const result = onChange(modelFields);
            value = result?.spouseSupportForHousehold ?? value;
          }
          if (errors.spouseSupportForHousehold?.hasError) {
            runValidationTasks("spouseSupportForHousehold", value);
          }
          setSpouseSupportForHousehold(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "spouseSupportForHousehold",
            spouseSupportForHousehold
          )
        }
        errorMessage={errors.spouseSupportForHousehold?.errorMessage}
        hasError={errors.spouseSupportForHousehold?.hasError}
        {...getOverrideProps(overrides, "spouseSupportForHousehold")}
      >
        <option
          children="Not applicable 0"
          value="NOT_APPLICABLE_0"
          {...getOverrideProps(overrides, "spouseSupportForHouseholdoption0")}
        ></option>
        <option
          children="Weak 1"
          value="WEAK_1"
          {...getOverrideProps(overrides, "spouseSupportForHouseholdoption1")}
        ></option>
        <option
          children="Medium 2"
          value="MEDIUM_2"
          {...getOverrideProps(overrides, "spouseSupportForHouseholdoption2")}
        ></option>
        <option
          children="Strong 3"
          value="STRONG_3"
          {...getOverrideProps(overrides, "spouseSupportForHouseholdoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Helper support for kids"
        placeholder="Please select an option"
        isDisabled={false}
        value={helperSupportForKids}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateid,
              candidateName,
              interviewerName,
              interviewDate,
              candidateLocation,
              candidateJobPreference,
              maritalStatus,
              singleType,
              ageOfYoungestKid,
              spouseSupportForKids,
              spouseSupportForHousehold,
              helperSupportForKids: value,
              helperSupportForHouseHold,
              otherSupportForKids,
              otherSupportForHouseHold,
              readyToExtendSupport,
              caregiving,
              supportForCareGiving,
              Responsibilities,
              TypeOfContract,
              DriveToWork,
              ImmediateCareerAmbitions,
              FinancialDriveToWork,
              LearningReadiness,
              JobSearchReadiness,
              JobSearchSuccess,
              LastWorked,
              TypeOfRole,
              Role_Interviewer,
              OtherCommitments,
              Interviewer_Proposed_Availability,
            };
            const result = onChange(modelFields);
            value = result?.helperSupportForKids ?? value;
          }
          if (errors.helperSupportForKids?.hasError) {
            runValidationTasks("helperSupportForKids", value);
          }
          setHelperSupportForKids(value);
        }}
        onBlur={() =>
          runValidationTasks("helperSupportForKids", helperSupportForKids)
        }
        errorMessage={errors.helperSupportForKids?.errorMessage}
        hasError={errors.helperSupportForKids?.hasError}
        {...getOverrideProps(overrides, "helperSupportForKids")}
      >
        <option
          children="Not applicable 0"
          value="NOT_APPLICABLE_0"
          {...getOverrideProps(overrides, "helperSupportForKidsoption0")}
        ></option>
        <option
          children="Weak 1"
          value="WEAK_1"
          {...getOverrideProps(overrides, "helperSupportForKidsoption1")}
        ></option>
        <option
          children="Medium 2"
          value="MEDIUM_2"
          {...getOverrideProps(overrides, "helperSupportForKidsoption2")}
        ></option>
        <option
          children="Strong 3"
          value="STRONG_3"
          {...getOverrideProps(overrides, "helperSupportForKidsoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Helper support for house hold"
        placeholder="Please select an option"
        isDisabled={false}
        value={helperSupportForHouseHold}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateid,
              candidateName,
              interviewerName,
              interviewDate,
              candidateLocation,
              candidateJobPreference,
              maritalStatus,
              singleType,
              ageOfYoungestKid,
              spouseSupportForKids,
              spouseSupportForHousehold,
              helperSupportForKids,
              helperSupportForHouseHold: value,
              otherSupportForKids,
              otherSupportForHouseHold,
              readyToExtendSupport,
              caregiving,
              supportForCareGiving,
              Responsibilities,
              TypeOfContract,
              DriveToWork,
              ImmediateCareerAmbitions,
              FinancialDriveToWork,
              LearningReadiness,
              JobSearchReadiness,
              JobSearchSuccess,
              LastWorked,
              TypeOfRole,
              Role_Interviewer,
              OtherCommitments,
              Interviewer_Proposed_Availability,
            };
            const result = onChange(modelFields);
            value = result?.helperSupportForHouseHold ?? value;
          }
          if (errors.helperSupportForHouseHold?.hasError) {
            runValidationTasks("helperSupportForHouseHold", value);
          }
          setHelperSupportForHouseHold(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "helperSupportForHouseHold",
            helperSupportForHouseHold
          )
        }
        errorMessage={errors.helperSupportForHouseHold?.errorMessage}
        hasError={errors.helperSupportForHouseHold?.hasError}
        {...getOverrideProps(overrides, "helperSupportForHouseHold")}
      >
        <option
          children="Not applicable 0"
          value="NOT_APPLICABLE_0"
          {...getOverrideProps(overrides, "helperSupportForHouseHoldoption0")}
        ></option>
        <option
          children="Weak 1"
          value="WEAK_1"
          {...getOverrideProps(overrides, "helperSupportForHouseHoldoption1")}
        ></option>
        <option
          children="Medium 2"
          value="MEDIUM_2"
          {...getOverrideProps(overrides, "helperSupportForHouseHoldoption2")}
        ></option>
        <option
          children="Strong 3"
          value="STRONG_3"
          {...getOverrideProps(overrides, "helperSupportForHouseHoldoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Other support for kids"
        placeholder="Please select an option"
        isDisabled={false}
        value={otherSupportForKids}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateid,
              candidateName,
              interviewerName,
              interviewDate,
              candidateLocation,
              candidateJobPreference,
              maritalStatus,
              singleType,
              ageOfYoungestKid,
              spouseSupportForKids,
              spouseSupportForHousehold,
              helperSupportForKids,
              helperSupportForHouseHold,
              otherSupportForKids: value,
              otherSupportForHouseHold,
              readyToExtendSupport,
              caregiving,
              supportForCareGiving,
              Responsibilities,
              TypeOfContract,
              DriveToWork,
              ImmediateCareerAmbitions,
              FinancialDriveToWork,
              LearningReadiness,
              JobSearchReadiness,
              JobSearchSuccess,
              LastWorked,
              TypeOfRole,
              Role_Interviewer,
              OtherCommitments,
              Interviewer_Proposed_Availability,
            };
            const result = onChange(modelFields);
            value = result?.otherSupportForKids ?? value;
          }
          if (errors.otherSupportForKids?.hasError) {
            runValidationTasks("otherSupportForKids", value);
          }
          setOtherSupportForKids(value);
        }}
        onBlur={() =>
          runValidationTasks("otherSupportForKids", otherSupportForKids)
        }
        errorMessage={errors.otherSupportForKids?.errorMessage}
        hasError={errors.otherSupportForKids?.hasError}
        {...getOverrideProps(overrides, "otherSupportForKids")}
      >
        <option
          children="Not applicable 0"
          value="NOT_APPLICABLE_0"
          {...getOverrideProps(overrides, "otherSupportForKidsoption0")}
        ></option>
        <option
          children="Weak 1"
          value="WEAK_1"
          {...getOverrideProps(overrides, "otherSupportForKidsoption1")}
        ></option>
        <option
          children="Medium 2"
          value="MEDIUM_2"
          {...getOverrideProps(overrides, "otherSupportForKidsoption2")}
        ></option>
        <option
          children="Strong 3"
          value="STRONG_3"
          {...getOverrideProps(overrides, "otherSupportForKidsoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Other support for house hold"
        placeholder="Please select an option"
        isDisabled={false}
        value={otherSupportForHouseHold}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateid,
              candidateName,
              interviewerName,
              interviewDate,
              candidateLocation,
              candidateJobPreference,
              maritalStatus,
              singleType,
              ageOfYoungestKid,
              spouseSupportForKids,
              spouseSupportForHousehold,
              helperSupportForKids,
              helperSupportForHouseHold,
              otherSupportForKids,
              otherSupportForHouseHold: value,
              readyToExtendSupport,
              caregiving,
              supportForCareGiving,
              Responsibilities,
              TypeOfContract,
              DriveToWork,
              ImmediateCareerAmbitions,
              FinancialDriveToWork,
              LearningReadiness,
              JobSearchReadiness,
              JobSearchSuccess,
              LastWorked,
              TypeOfRole,
              Role_Interviewer,
              OtherCommitments,
              Interviewer_Proposed_Availability,
            };
            const result = onChange(modelFields);
            value = result?.otherSupportForHouseHold ?? value;
          }
          if (errors.otherSupportForHouseHold?.hasError) {
            runValidationTasks("otherSupportForHouseHold", value);
          }
          setOtherSupportForHouseHold(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "otherSupportForHouseHold",
            otherSupportForHouseHold
          )
        }
        errorMessage={errors.otherSupportForHouseHold?.errorMessage}
        hasError={errors.otherSupportForHouseHold?.hasError}
        {...getOverrideProps(overrides, "otherSupportForHouseHold")}
      >
        <option
          children="Not applicable 0"
          value="NOT_APPLICABLE_0"
          {...getOverrideProps(overrides, "otherSupportForHouseHoldoption0")}
        ></option>
        <option
          children="Weak 1"
          value="WEAK_1"
          {...getOverrideProps(overrides, "otherSupportForHouseHoldoption1")}
        ></option>
        <option
          children="Medium 2"
          value="MEDIUM_2"
          {...getOverrideProps(overrides, "otherSupportForHouseHoldoption2")}
        ></option>
        <option
          children="Strong 3"
          value="STRONG_3"
          {...getOverrideProps(overrides, "otherSupportForHouseHoldoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Ready to extend support"
        placeholder="Please select an option"
        isDisabled={false}
        value={readyToExtendSupport}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateid,
              candidateName,
              interviewerName,
              interviewDate,
              candidateLocation,
              candidateJobPreference,
              maritalStatus,
              singleType,
              ageOfYoungestKid,
              spouseSupportForKids,
              spouseSupportForHousehold,
              helperSupportForKids,
              helperSupportForHouseHold,
              otherSupportForKids,
              otherSupportForHouseHold,
              readyToExtendSupport: value,
              caregiving,
              supportForCareGiving,
              Responsibilities,
              TypeOfContract,
              DriveToWork,
              ImmediateCareerAmbitions,
              FinancialDriveToWork,
              LearningReadiness,
              JobSearchReadiness,
              JobSearchSuccess,
              LastWorked,
              TypeOfRole,
              Role_Interviewer,
              OtherCommitments,
              Interviewer_Proposed_Availability,
            };
            const result = onChange(modelFields);
            value = result?.readyToExtendSupport ?? value;
          }
          if (errors.readyToExtendSupport?.hasError) {
            runValidationTasks("readyToExtendSupport", value);
          }
          setReadyToExtendSupport(value);
        }}
        onBlur={() =>
          runValidationTasks("readyToExtendSupport", readyToExtendSupport)
        }
        errorMessage={errors.readyToExtendSupport?.errorMessage}
        hasError={errors.readyToExtendSupport?.hasError}
        {...getOverrideProps(overrides, "readyToExtendSupport")}
      >
        <option
          children="Not applicable 0"
          value="NOT_APPLICABLE_0"
          {...getOverrideProps(overrides, "readyToExtendSupportoption0")}
        ></option>
        <option
          children="Weak 1"
          value="WEAK_1"
          {...getOverrideProps(overrides, "readyToExtendSupportoption1")}
        ></option>
        <option
          children="Medium 2"
          value="MEDIUM_2"
          {...getOverrideProps(overrides, "readyToExtendSupportoption2")}
        ></option>
        <option
          children="Strong 3"
          value="STRONG_3"
          {...getOverrideProps(overrides, "readyToExtendSupportoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Caregiving"
        placeholder="Please select an option"
        isDisabled={false}
        value={caregiving}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateid,
              candidateName,
              interviewerName,
              interviewDate,
              candidateLocation,
              candidateJobPreference,
              maritalStatus,
              singleType,
              ageOfYoungestKid,
              spouseSupportForKids,
              spouseSupportForHousehold,
              helperSupportForKids,
              helperSupportForHouseHold,
              otherSupportForKids,
              otherSupportForHouseHold,
              readyToExtendSupport,
              caregiving: value,
              supportForCareGiving,
              Responsibilities,
              TypeOfContract,
              DriveToWork,
              ImmediateCareerAmbitions,
              FinancialDriveToWork,
              LearningReadiness,
              JobSearchReadiness,
              JobSearchSuccess,
              LastWorked,
              TypeOfRole,
              Role_Interviewer,
              OtherCommitments,
              Interviewer_Proposed_Availability,
            };
            const result = onChange(modelFields);
            value = result?.caregiving ?? value;
          }
          if (errors.caregiving?.hasError) {
            runValidationTasks("caregiving", value);
          }
          setCaregiving(value);
        }}
        onBlur={() => runValidationTasks("caregiving", caregiving)}
        errorMessage={errors.caregiving?.errorMessage}
        hasError={errors.caregiving?.hasError}
        {...getOverrideProps(overrides, "caregiving")}
      >
        <option
          children="Yes 1"
          value="YES_1"
          {...getOverrideProps(overrides, "caregivingoption0")}
        ></option>
        <option
          children="No 0"
          value="NO_0"
          {...getOverrideProps(overrides, "caregivingoption1")}
        ></option>
      </SelectField>
      <SelectField
        label="Support for care giving"
        placeholder="Please select an option"
        isDisabled={false}
        value={supportForCareGiving}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateid,
              candidateName,
              interviewerName,
              interviewDate,
              candidateLocation,
              candidateJobPreference,
              maritalStatus,
              singleType,
              ageOfYoungestKid,
              spouseSupportForKids,
              spouseSupportForHousehold,
              helperSupportForKids,
              helperSupportForHouseHold,
              otherSupportForKids,
              otherSupportForHouseHold,
              readyToExtendSupport,
              caregiving,
              supportForCareGiving: value,
              Responsibilities,
              TypeOfContract,
              DriveToWork,
              ImmediateCareerAmbitions,
              FinancialDriveToWork,
              LearningReadiness,
              JobSearchReadiness,
              JobSearchSuccess,
              LastWorked,
              TypeOfRole,
              Role_Interviewer,
              OtherCommitments,
              Interviewer_Proposed_Availability,
            };
            const result = onChange(modelFields);
            value = result?.supportForCareGiving ?? value;
          }
          if (errors.supportForCareGiving?.hasError) {
            runValidationTasks("supportForCareGiving", value);
          }
          setSupportForCareGiving(value);
        }}
        onBlur={() =>
          runValidationTasks("supportForCareGiving", supportForCareGiving)
        }
        errorMessage={errors.supportForCareGiving?.errorMessage}
        hasError={errors.supportForCareGiving?.hasError}
        {...getOverrideProps(overrides, "supportForCareGiving")}
      >
        <option
          children="Na 0"
          value="NA_0"
          {...getOverrideProps(overrides, "supportForCareGivingoption0")}
        ></option>
        <option
          children="Completely depenednet 1"
          value="COMPLETELY_DEPENEDNET_1"
          {...getOverrideProps(overrides, "supportForCareGivingoption1")}
        ></option>
        <option
          children="Part care 2"
          value="PART_CARE_2"
          {...getOverrideProps(overrides, "supportForCareGivingoption2")}
        ></option>
        <option
          children="Monitoring is enough 3"
          value="MONITORING_IS_ENOUGH_3"
          {...getOverrideProps(overrides, "supportForCareGivingoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Responsibilities"
        placeholder="Please select an option"
        isDisabled={false}
        value={Responsibilities}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateid,
              candidateName,
              interviewerName,
              interviewDate,
              candidateLocation,
              candidateJobPreference,
              maritalStatus,
              singleType,
              ageOfYoungestKid,
              spouseSupportForKids,
              spouseSupportForHousehold,
              helperSupportForKids,
              helperSupportForHouseHold,
              otherSupportForKids,
              otherSupportForHouseHold,
              readyToExtendSupport,
              caregiving,
              supportForCareGiving,
              Responsibilities: value,
              TypeOfContract,
              DriveToWork,
              ImmediateCareerAmbitions,
              FinancialDriveToWork,
              LearningReadiness,
              JobSearchReadiness,
              JobSearchSuccess,
              LastWorked,
              TypeOfRole,
              Role_Interviewer,
              OtherCommitments,
              Interviewer_Proposed_Availability,
            };
            const result = onChange(modelFields);
            value = result?.Responsibilities ?? value;
          }
          if (errors.Responsibilities?.hasError) {
            runValidationTasks("Responsibilities", value);
          }
          setResponsibilities(value);
        }}
        onBlur={() => runValidationTasks("Responsibilities", Responsibilities)}
        errorMessage={errors.Responsibilities?.errorMessage}
        hasError={errors.Responsibilities?.hasError}
        {...getOverrideProps(overrides, "Responsibilities")}
      >
        <option
          children="Individual contributor 3"
          value="INDIVIDUAL_CONTRIBUTOR_3"
          {...getOverrideProps(overrides, "Responsibilitiesoption0")}
        ></option>
        <option
          children="Team mgmt 1"
          value="TEAM_MGMT_1"
          {...getOverrideProps(overrides, "Responsibilitiesoption1")}
        ></option>
        <option
          children="Team member 4"
          value="TEAM_MEMBER_4"
          {...getOverrideProps(overrides, "Responsibilitiesoption2")}
        ></option>
        <option
          children="Project manager 2"
          value="PROJECT_MANAGER_2"
          {...getOverrideProps(overrides, "Responsibilitiesoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Type of contract"
        placeholder="Please select an option"
        isDisabled={false}
        value={TypeOfContract}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateid,
              candidateName,
              interviewerName,
              interviewDate,
              candidateLocation,
              candidateJobPreference,
              maritalStatus,
              singleType,
              ageOfYoungestKid,
              spouseSupportForKids,
              spouseSupportForHousehold,
              helperSupportForKids,
              helperSupportForHouseHold,
              otherSupportForKids,
              otherSupportForHouseHold,
              readyToExtendSupport,
              caregiving,
              supportForCareGiving,
              Responsibilities,
              TypeOfContract: value,
              DriveToWork,
              ImmediateCareerAmbitions,
              FinancialDriveToWork,
              LearningReadiness,
              JobSearchReadiness,
              JobSearchSuccess,
              LastWorked,
              TypeOfRole,
              Role_Interviewer,
              OtherCommitments,
              Interviewer_Proposed_Availability,
            };
            const result = onChange(modelFields);
            value = result?.TypeOfContract ?? value;
          }
          if (errors.TypeOfContract?.hasError) {
            runValidationTasks("TypeOfContract", value);
          }
          setTypeOfContract(value);
        }}
        onBlur={() => runValidationTasks("TypeOfContract", TypeOfContract)}
        errorMessage={errors.TypeOfContract?.errorMessage}
        hasError={errors.TypeOfContract?.hasError}
        {...getOverrideProps(overrides, "TypeOfContract")}
      >
        <option
          children="Shortterm 2"
          value="SHORTTERM_2"
          {...getOverrideProps(overrides, "TypeOfContractoption0")}
        ></option>
        <option
          children="Longterm 1"
          value="LONGTERM_1"
          {...getOverrideProps(overrides, "TypeOfContractoption1")}
        ></option>
      </SelectField>
      <SelectField
        label="Drive to work"
        placeholder="Please select an option"
        isDisabled={false}
        value={DriveToWork}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateid,
              candidateName,
              interviewerName,
              interviewDate,
              candidateLocation,
              candidateJobPreference,
              maritalStatus,
              singleType,
              ageOfYoungestKid,
              spouseSupportForKids,
              spouseSupportForHousehold,
              helperSupportForKids,
              helperSupportForHouseHold,
              otherSupportForKids,
              otherSupportForHouseHold,
              readyToExtendSupport,
              caregiving,
              supportForCareGiving,
              Responsibilities,
              TypeOfContract,
              DriveToWork: value,
              ImmediateCareerAmbitions,
              FinancialDriveToWork,
              LearningReadiness,
              JobSearchReadiness,
              JobSearchSuccess,
              LastWorked,
              TypeOfRole,
              Role_Interviewer,
              OtherCommitments,
              Interviewer_Proposed_Availability,
            };
            const result = onChange(modelFields);
            value = result?.DriveToWork ?? value;
          }
          if (errors.DriveToWork?.hasError) {
            runValidationTasks("DriveToWork", value);
          }
          setDriveToWork(value);
        }}
        onBlur={() => runValidationTasks("DriveToWork", DriveToWork)}
        errorMessage={errors.DriveToWork?.errorMessage}
        hasError={errors.DriveToWork?.hasError}
        {...getOverrideProps(overrides, "DriveToWork")}
      >
        <option
          children="Very high 3"
          value="VERY_HIGH_3"
          {...getOverrideProps(overrides, "DriveToWorkoption0")}
        ></option>
        <option
          children="High but notdoing 2"
          value="HIGH_BUT_NOTDOING_2"
          {...getOverrideProps(overrides, "DriveToWorkoption1")}
        ></option>
        <option
          children="Low 1"
          value="LOW_1"
          {...getOverrideProps(overrides, "DriveToWorkoption2")}
        ></option>
      </SelectField>
      <SelectField
        label="Immediate career ambitions"
        placeholder="Please select an option"
        isDisabled={false}
        value={ImmediateCareerAmbitions}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateid,
              candidateName,
              interviewerName,
              interviewDate,
              candidateLocation,
              candidateJobPreference,
              maritalStatus,
              singleType,
              ageOfYoungestKid,
              spouseSupportForKids,
              spouseSupportForHousehold,
              helperSupportForKids,
              helperSupportForHouseHold,
              otherSupportForKids,
              otherSupportForHouseHold,
              readyToExtendSupport,
              caregiving,
              supportForCareGiving,
              Responsibilities,
              TypeOfContract,
              DriveToWork,
              ImmediateCareerAmbitions: value,
              FinancialDriveToWork,
              LearningReadiness,
              JobSearchReadiness,
              JobSearchSuccess,
              LastWorked,
              TypeOfRole,
              Role_Interviewer,
              OtherCommitments,
              Interviewer_Proposed_Availability,
            };
            const result = onChange(modelFields);
            value = result?.ImmediateCareerAmbitions ?? value;
          }
          if (errors.ImmediateCareerAmbitions?.hasError) {
            runValidationTasks("ImmediateCareerAmbitions", value);
          }
          setImmediateCareerAmbitions(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "ImmediateCareerAmbitions",
            ImmediateCareerAmbitions
          )
        }
        errorMessage={errors.ImmediateCareerAmbitions?.errorMessage}
        hasError={errors.ImmediateCareerAmbitions?.hasError}
        {...getOverrideProps(overrides, "ImmediateCareerAmbitions")}
      >
        <option
          children="Longterm 1"
          value="LONGTERM_1"
          {...getOverrideProps(overrides, "ImmediateCareerAmbitionsoption0")}
        ></option>
        <option
          children="Utilise free time 2"
          value="UTILISE_FREE_TIME_2"
          {...getOverrideProps(overrides, "ImmediateCareerAmbitionsoption1")}
        ></option>
        <option
          children="Wfh flexibility 3"
          value="WFH_FLEXIBILITY_3"
          {...getOverrideProps(overrides, "ImmediateCareerAmbitionsoption2")}
        ></option>
        <option
          children="Reduce gap 3"
          value="REDUCE_GAP_3"
          {...getOverrideProps(overrides, "ImmediateCareerAmbitionsoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Financial drive to work"
        placeholder="Please select an option"
        isDisabled={false}
        value={FinancialDriveToWork}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateid,
              candidateName,
              interviewerName,
              interviewDate,
              candidateLocation,
              candidateJobPreference,
              maritalStatus,
              singleType,
              ageOfYoungestKid,
              spouseSupportForKids,
              spouseSupportForHousehold,
              helperSupportForKids,
              helperSupportForHouseHold,
              otherSupportForKids,
              otherSupportForHouseHold,
              readyToExtendSupport,
              caregiving,
              supportForCareGiving,
              Responsibilities,
              TypeOfContract,
              DriveToWork,
              ImmediateCareerAmbitions,
              FinancialDriveToWork: value,
              LearningReadiness,
              JobSearchReadiness,
              JobSearchSuccess,
              LastWorked,
              TypeOfRole,
              Role_Interviewer,
              OtherCommitments,
              Interviewer_Proposed_Availability,
            };
            const result = onChange(modelFields);
            value = result?.FinancialDriveToWork ?? value;
          }
          if (errors.FinancialDriveToWork?.hasError) {
            runValidationTasks("FinancialDriveToWork", value);
          }
          setFinancialDriveToWork(value);
        }}
        onBlur={() =>
          runValidationTasks("FinancialDriveToWork", FinancialDriveToWork)
        }
        errorMessage={errors.FinancialDriveToWork?.errorMessage}
        hasError={errors.FinancialDriveToWork?.hasError}
        {...getOverrideProps(overrides, "FinancialDriveToWork")}
      >
        <option
          children="Major 3"
          value="MAJOR_3"
          {...getOverrideProps(overrides, "FinancialDriveToWorkoption0")}
        ></option>
        <option
          children="Minor 2"
          value="MINOR_2"
          {...getOverrideProps(overrides, "FinancialDriveToWorkoption1")}
        ></option>
        <option
          children="Self expense 1"
          value="SELF_EXPENSE_1"
          {...getOverrideProps(overrides, "FinancialDriveToWorkoption2")}
        ></option>
      </SelectField>
      <SelectField
        label="Learning readiness"
        placeholder="Please select an option"
        isDisabled={false}
        value={LearningReadiness}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateid,
              candidateName,
              interviewerName,
              interviewDate,
              candidateLocation,
              candidateJobPreference,
              maritalStatus,
              singleType,
              ageOfYoungestKid,
              spouseSupportForKids,
              spouseSupportForHousehold,
              helperSupportForKids,
              helperSupportForHouseHold,
              otherSupportForKids,
              otherSupportForHouseHold,
              readyToExtendSupport,
              caregiving,
              supportForCareGiving,
              Responsibilities,
              TypeOfContract,
              DriveToWork,
              ImmediateCareerAmbitions,
              FinancialDriveToWork,
              LearningReadiness: value,
              JobSearchReadiness,
              JobSearchSuccess,
              LastWorked,
              TypeOfRole,
              Role_Interviewer,
              OtherCommitments,
              Interviewer_Proposed_Availability,
            };
            const result = onChange(modelFields);
            value = result?.LearningReadiness ?? value;
          }
          if (errors.LearningReadiness?.hasError) {
            runValidationTasks("LearningReadiness", value);
          }
          setLearningReadiness(value);
        }}
        onBlur={() =>
          runValidationTasks("LearningReadiness", LearningReadiness)
        }
        errorMessage={errors.LearningReadiness?.errorMessage}
        hasError={errors.LearningReadiness?.hasError}
        {...getOverrideProps(overrides, "LearningReadiness")}
      >
        <option
          children="Learning essential 1"
          value="LEARNING_ESSENTIAL_1"
          {...getOverrideProps(overrides, "LearningReadinessoption0")}
        ></option>
        <option
          children="Satisfied with work 2"
          value="SATISFIED_WITH_WORK_2"
          {...getOverrideProps(overrides, "LearningReadinessoption1")}
        ></option>
      </SelectField>
      <SelectField
        label="Job search readiness"
        placeholder="Please select an option"
        isDisabled={false}
        value={JobSearchReadiness}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateid,
              candidateName,
              interviewerName,
              interviewDate,
              candidateLocation,
              candidateJobPreference,
              maritalStatus,
              singleType,
              ageOfYoungestKid,
              spouseSupportForKids,
              spouseSupportForHousehold,
              helperSupportForKids,
              helperSupportForHouseHold,
              otherSupportForKids,
              otherSupportForHouseHold,
              readyToExtendSupport,
              caregiving,
              supportForCareGiving,
              Responsibilities,
              TypeOfContract,
              DriveToWork,
              ImmediateCareerAmbitions,
              FinancialDriveToWork,
              LearningReadiness,
              JobSearchReadiness: value,
              JobSearchSuccess,
              LastWorked,
              TypeOfRole,
              Role_Interviewer,
              OtherCommitments,
              Interviewer_Proposed_Availability,
            };
            const result = onChange(modelFields);
            value = result?.JobSearchReadiness ?? value;
          }
          if (errors.JobSearchReadiness?.hasError) {
            runValidationTasks("JobSearchReadiness", value);
          }
          setJobSearchReadiness(value);
        }}
        onBlur={() =>
          runValidationTasks("JobSearchReadiness", JobSearchReadiness)
        }
        errorMessage={errors.JobSearchReadiness?.errorMessage}
        hasError={errors.JobSearchReadiness?.hasError}
        {...getOverrideProps(overrides, "JobSearchReadiness")}
      >
        <option
          children="Looking very actively 3"
          value="LOOKING_VERY_ACTIVELY_3"
          {...getOverrideProps(overrides, "JobSearchReadinessoption0")}
        ></option>
        <option
          children="Moderately searching 2"
          value="MODERATELY_SEARCHING_2"
          {...getOverrideProps(overrides, "JobSearchReadinessoption1")}
        ></option>
        <option
          children="Job search inactive 1"
          value="JOB_SEARCH_INACTIVE_1"
          {...getOverrideProps(overrides, "JobSearchReadinessoption2")}
        ></option>
      </SelectField>
      <SelectField
        label="Job search success"
        placeholder="Please select an option"
        isDisabled={false}
        value={JobSearchSuccess}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateid,
              candidateName,
              interviewerName,
              interviewDate,
              candidateLocation,
              candidateJobPreference,
              maritalStatus,
              singleType,
              ageOfYoungestKid,
              spouseSupportForKids,
              spouseSupportForHousehold,
              helperSupportForKids,
              helperSupportForHouseHold,
              otherSupportForKids,
              otherSupportForHouseHold,
              readyToExtendSupport,
              caregiving,
              supportForCareGiving,
              Responsibilities,
              TypeOfContract,
              DriveToWork,
              ImmediateCareerAmbitions,
              FinancialDriveToWork,
              LearningReadiness,
              JobSearchReadiness,
              JobSearchSuccess: value,
              LastWorked,
              TypeOfRole,
              Role_Interviewer,
              OtherCommitments,
              Interviewer_Proposed_Availability,
            };
            const result = onChange(modelFields);
            value = result?.JobSearchSuccess ?? value;
          }
          if (errors.JobSearchSuccess?.hasError) {
            runValidationTasks("JobSearchSuccess", value);
          }
          setJobSearchSuccess(value);
        }}
        onBlur={() => runValidationTasks("JobSearchSuccess", JobSearchSuccess)}
        errorMessage={errors.JobSearchSuccess?.errorMessage}
        hasError={errors.JobSearchSuccess?.hasError}
        {...getOverrideProps(overrides, "JobSearchSuccess")}
      >
        <option
          children="Not many callback 3"
          value="NOT_MANY_CALLBACK_3"
          {...getOverrideProps(overrides, "JobSearchSuccessoption0")}
        ></option>
        <option
          children="Received fair numeber 1"
          value="RECEIVED_FAIR_NUMEBER_1"
          {...getOverrideProps(overrides, "JobSearchSuccessoption1")}
        ></option>
      </SelectField>
      <SelectField
        label="Last worked"
        placeholder="Please select an option"
        isDisabled={false}
        value={LastWorked}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateid,
              candidateName,
              interviewerName,
              interviewDate,
              candidateLocation,
              candidateJobPreference,
              maritalStatus,
              singleType,
              ageOfYoungestKid,
              spouseSupportForKids,
              spouseSupportForHousehold,
              helperSupportForKids,
              helperSupportForHouseHold,
              otherSupportForKids,
              otherSupportForHouseHold,
              readyToExtendSupport,
              caregiving,
              supportForCareGiving,
              Responsibilities,
              TypeOfContract,
              DriveToWork,
              ImmediateCareerAmbitions,
              FinancialDriveToWork,
              LearningReadiness,
              JobSearchReadiness,
              JobSearchSuccess,
              LastWorked: value,
              TypeOfRole,
              Role_Interviewer,
              OtherCommitments,
              Interviewer_Proposed_Availability,
            };
            const result = onChange(modelFields);
            value = result?.LastWorked ?? value;
          }
          if (errors.LastWorked?.hasError) {
            runValidationTasks("LastWorked", value);
          }
          setLastWorked(value);
        }}
        onBlur={() => runValidationTasks("LastWorked", LastWorked)}
        errorMessage={errors.LastWorked?.errorMessage}
        hasError={errors.LastWorked?.hasError}
        {...getOverrideProps(overrides, "LastWorked")}
      >
        <option
          children="More 5 yrs 1"
          value="MORE_5_YRS_1"
          {...getOverrideProps(overrides, "LastWorkedoption0")}
        ></option>
        <option
          children="Beteween 2 5 yrs 2"
          value="BETEWEEN_2_5_YRS_2"
          {...getOverrideProps(overrides, "LastWorkedoption1")}
        ></option>
        <option
          children="Less 2 yrs 3"
          value="LESS_2_YRS_3"
          {...getOverrideProps(overrides, "LastWorkedoption2")}
        ></option>
      </SelectField>
      <SelectField
        label="Type of role"
        placeholder="Please select an option"
        isDisabled={false}
        value={TypeOfRole}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateid,
              candidateName,
              interviewerName,
              interviewDate,
              candidateLocation,
              candidateJobPreference,
              maritalStatus,
              singleType,
              ageOfYoungestKid,
              spouseSupportForKids,
              spouseSupportForHousehold,
              helperSupportForKids,
              helperSupportForHouseHold,
              otherSupportForKids,
              otherSupportForHouseHold,
              readyToExtendSupport,
              caregiving,
              supportForCareGiving,
              Responsibilities,
              TypeOfContract,
              DriveToWork,
              ImmediateCareerAmbitions,
              FinancialDriveToWork,
              LearningReadiness,
              JobSearchReadiness,
              JobSearchSuccess,
              LastWorked,
              TypeOfRole: value,
              Role_Interviewer,
              OtherCommitments,
              Interviewer_Proposed_Availability,
            };
            const result = onChange(modelFields);
            value = result?.TypeOfRole ?? value;
          }
          if (errors.TypeOfRole?.hasError) {
            runValidationTasks("TypeOfRole", value);
          }
          setTypeOfRole(value);
        }}
        onBlur={() => runValidationTasks("TypeOfRole", TypeOfRole)}
        errorMessage={errors.TypeOfRole?.errorMessage}
        hasError={errors.TypeOfRole?.hasError}
        {...getOverrideProps(overrides, "TypeOfRole")}
      >
        <option
          children="Parttime wfh 3"
          value="PARTTIME_WFH_3"
          {...getOverrideProps(overrides, "TypeOfRoleoption0")}
        ></option>
        <option
          children="Parttime office 0"
          value="PARTTIME_OFFICE_0"
          {...getOverrideProps(overrides, "TypeOfRoleoption1")}
        ></option>
        <option
          children="Parttime hybrid 1"
          value="PARTTIME_HYBRID_1"
          {...getOverrideProps(overrides, "TypeOfRoleoption2")}
        ></option>
        <option
          children="Fulltime wfh 3"
          value="FULLTIME_WFH_3"
          {...getOverrideProps(overrides, "TypeOfRoleoption3")}
        ></option>
        <option
          children="Fulltime hybrid 1"
          value="FULLTIME_HYBRID_1"
          {...getOverrideProps(overrides, "TypeOfRoleoption4")}
        ></option>
        <option
          children="Fulltime office 0"
          value="FULLTIME_OFFICE_0"
          {...getOverrideProps(overrides, "TypeOfRoleoption5")}
        ></option>
      </SelectField>
      <SelectField
        label="Role interviewer"
        placeholder="Please select an option"
        isDisabled={false}
        value={Role_Interviewer}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateid,
              candidateName,
              interviewerName,
              interviewDate,
              candidateLocation,
              candidateJobPreference,
              maritalStatus,
              singleType,
              ageOfYoungestKid,
              spouseSupportForKids,
              spouseSupportForHousehold,
              helperSupportForKids,
              helperSupportForHouseHold,
              otherSupportForKids,
              otherSupportForHouseHold,
              readyToExtendSupport,
              caregiving,
              supportForCareGiving,
              Responsibilities,
              TypeOfContract,
              DriveToWork,
              ImmediateCareerAmbitions,
              FinancialDriveToWork,
              LearningReadiness,
              JobSearchReadiness,
              JobSearchSuccess,
              LastWorked,
              TypeOfRole,
              Role_Interviewer: value,
              OtherCommitments,
              Interviewer_Proposed_Availability,
            };
            const result = onChange(modelFields);
            value = result?.Role_Interviewer ?? value;
          }
          if (errors.Role_Interviewer?.hasError) {
            runValidationTasks("Role_Interviewer", value);
          }
          setRole_Interviewer(value);
        }}
        onBlur={() => runValidationTasks("Role_Interviewer", Role_Interviewer)}
        errorMessage={errors.Role_Interviewer?.errorMessage}
        hasError={errors.Role_Interviewer?.hasError}
        {...getOverrideProps(overrides, "Role_Interviewer")}
      >
        <option
          children="Parttime wfh 3"
          value="PARTTIME_WFH_3"
          {...getOverrideProps(overrides, "Role_Intervieweroption0")}
        ></option>
        <option
          children="Parttime office 0"
          value="PARTTIME_OFFICE_0"
          {...getOverrideProps(overrides, "Role_Intervieweroption1")}
        ></option>
        <option
          children="Parttime hybrid 1"
          value="PARTTIME_HYBRID_1"
          {...getOverrideProps(overrides, "Role_Intervieweroption2")}
        ></option>
        <option
          children="Fulltime wfh 3"
          value="FULLTIME_WFH_3"
          {...getOverrideProps(overrides, "Role_Intervieweroption3")}
        ></option>
        <option
          children="Fulltime hybrid 1"
          value="FULLTIME_HYBRID_1"
          {...getOverrideProps(overrides, "Role_Intervieweroption4")}
        ></option>
        <option
          children="Fulltime office 0"
          value="FULLTIME_OFFICE_0"
          {...getOverrideProps(overrides, "Role_Intervieweroption5")}
        ></option>
      </SelectField>
      <SelectField
        label="Other commitments"
        placeholder="Please select an option"
        isDisabled={false}
        value={OtherCommitments}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateid,
              candidateName,
              interviewerName,
              interviewDate,
              candidateLocation,
              candidateJobPreference,
              maritalStatus,
              singleType,
              ageOfYoungestKid,
              spouseSupportForKids,
              spouseSupportForHousehold,
              helperSupportForKids,
              helperSupportForHouseHold,
              otherSupportForKids,
              otherSupportForHouseHold,
              readyToExtendSupport,
              caregiving,
              supportForCareGiving,
              Responsibilities,
              TypeOfContract,
              DriveToWork,
              ImmediateCareerAmbitions,
              FinancialDriveToWork,
              LearningReadiness,
              JobSearchReadiness,
              JobSearchSuccess,
              LastWorked,
              TypeOfRole,
              Role_Interviewer,
              OtherCommitments: value,
              Interviewer_Proposed_Availability,
            };
            const result = onChange(modelFields);
            value = result?.OtherCommitments ?? value;
          }
          if (errors.OtherCommitments?.hasError) {
            runValidationTasks("OtherCommitments", value);
          }
          setOtherCommitments(value);
        }}
        onBlur={() => runValidationTasks("OtherCommitments", OtherCommitments)}
        errorMessage={errors.OtherCommitments?.errorMessage}
        hasError={errors.OtherCommitments?.hasError}
        {...getOverrideProps(overrides, "OtherCommitments")}
      >
        <option
          children="N0 few 3"
          value="N0_FEW_3"
          {...getOverrideProps(overrides, "OtherCommitmentsoption0")}
        ></option>
        <option
          children="Moderate manageable 2"
          value="MODERATE_MANAGEABLE_2"
          {...getOverrideProps(overrides, "OtherCommitmentsoption1")}
        ></option>
        <option
          children="Many 1"
          value="MANY_1"
          {...getOverrideProps(overrides, "OtherCommitmentsoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Interviewer proposed availability"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Interviewer_Proposed_Availability}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              candidateid,
              candidateName,
              interviewerName,
              interviewDate,
              candidateLocation,
              candidateJobPreference,
              maritalStatus,
              singleType,
              ageOfYoungestKid,
              spouseSupportForKids,
              spouseSupportForHousehold,
              helperSupportForKids,
              helperSupportForHouseHold,
              otherSupportForKids,
              otherSupportForHouseHold,
              readyToExtendSupport,
              caregiving,
              supportForCareGiving,
              Responsibilities,
              TypeOfContract,
              DriveToWork,
              ImmediateCareerAmbitions,
              FinancialDriveToWork,
              LearningReadiness,
              JobSearchReadiness,
              JobSearchSuccess,
              LastWorked,
              TypeOfRole,
              Role_Interviewer,
              OtherCommitments,
              Interviewer_Proposed_Availability: value,
            };
            const result = onChange(modelFields);
            value = result?.Interviewer_Proposed_Availability ?? value;
          }
          if (errors.Interviewer_Proposed_Availability?.hasError) {
            runValidationTasks("Interviewer_Proposed_Availability", value);
          }
          setInterviewer_Proposed_Availability(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "Interviewer_Proposed_Availability",
            Interviewer_Proposed_Availability
          )
        }
        errorMessage={errors.Interviewer_Proposed_Availability?.errorMessage}
        hasError={errors.Interviewer_Proposed_Availability?.hasError}
        {...getOverrideProps(overrides, "Interviewer_Proposed_Availability")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || flexifitModelModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || flexifitModelModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
