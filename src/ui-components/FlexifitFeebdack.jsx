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
  Radio,
  RadioGroupField,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createFlexifitModel } from "../graphql/mutations";
const client = generateClient();
export default function FlexifitFeebdack(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
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
    candidateJobPreference: undefined,
    maritalStatus: undefined,
    singleType: undefined,
    ageOfYoungestKid: undefined,
    spouseSupportForKids: undefined,
    spouseSupportForHousehold: undefined,
    helperSupportForKids: undefined,
    helperSupportForHouseHold: undefined,
    otherSupportForKids: undefined,
    otherSupportForHouseHold: undefined,
    readyToExtendSupport: undefined,
    caregiving: undefined,
    supportForCareGiving: undefined,
    Responsibilities: undefined,
    TypeOfContract: undefined,
    DriveToWork: undefined,
    ImmediateCareerAmbitions: undefined,
    FinancialDriveToWork: undefined,
    LearningReadiness: undefined,
    JobSearchReadiness: undefined,
    JobSearchSuccess: undefined,
    LastWorked: undefined,
    TypeOfRole: "",
    Role_Interviewer: undefined,
    OtherCommitments: undefined,
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
    setCandidateid(initialValues.candidateid);
    setCandidateName(initialValues.candidateName);
    setInterviewerName(initialValues.interviewerName);
    setInterviewDate(initialValues.interviewDate);
    setCandidateLocation(initialValues.candidateLocation);
    setCandidateJobPreference(initialValues.candidateJobPreference);
    setMaritalStatus(initialValues.maritalStatus);
    setSingleType(initialValues.singleType);
    setAgeOfYoungestKid(initialValues.ageOfYoungestKid);
    setSpouseSupportForKids(initialValues.spouseSupportForKids);
    setSpouseSupportForHousehold(initialValues.spouseSupportForHousehold);
    setHelperSupportForKids(initialValues.helperSupportForKids);
    setHelperSupportForHouseHold(initialValues.helperSupportForHouseHold);
    setOtherSupportForKids(initialValues.otherSupportForKids);
    setOtherSupportForHouseHold(initialValues.otherSupportForHouseHold);
    setReadyToExtendSupport(initialValues.readyToExtendSupport);
    setCaregiving(initialValues.caregiving);
    setSupportForCareGiving(initialValues.supportForCareGiving);
    setResponsibilities(initialValues.Responsibilities);
    setTypeOfContract(initialValues.TypeOfContract);
    setDriveToWork(initialValues.DriveToWork);
    setImmediateCareerAmbitions(initialValues.ImmediateCareerAmbitions);
    setFinancialDriveToWork(initialValues.FinancialDriveToWork);
    setLearningReadiness(initialValues.LearningReadiness);
    setJobSearchReadiness(initialValues.JobSearchReadiness);
    setJobSearchSuccess(initialValues.JobSearchSuccess);
    setLastWorked(initialValues.LastWorked);
    setTypeOfRole(initialValues.TypeOfRole);
    setRole_Interviewer(initialValues.Role_Interviewer);
    setOtherCommitments(initialValues.OtherCommitments);
    setInterviewer_Proposed_Availability(
      initialValues.Interviewer_Proposed_Availability
    );
    setErrors({});
  };
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
            query: createFlexifitModel.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "FlexifitFeebdack")}
      {...rest}
    >
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
      <TextField
        label="Candidate ID"
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
        label="Candidate Name"
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
        label="Interviewer Name"
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
        label="Interview Date"
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
        label="Candidate Location"
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
      <RadioGroupField
        label="Candidate Job Preference"
        name="candidateJobPreference"
        isReadOnly={false}
        isRequired={false}
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
        <Radio
          children="Remote"
          value="REMOTE"
          {...getOverrideProps(overrides, "candidateJobPreferenceRadio0")}
        ></Radio>
        <Radio
          children="Office"
          value="OFFICE"
          {...getOverrideProps(overrides, "candidateJobPreferenceRadio1")}
        ></Radio>
        <Radio
          children="Hybrid"
          value="HYBRID"
          {...getOverrideProps(overrides, "candidateJobPreferenceRadio2")}
        ></Radio>
      </RadioGroupField>
      <RadioGroupField
        label="Marital Status"
        name="maritalStatus"
        isReadOnly={false}
        isRequired={false}
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
        <Radio
          children="Single"
          value="SINGLE_1"
          {...getOverrideProps(overrides, "maritalStatusRadio0")}
        ></Radio>
        <Radio
          children="Marrie"
          value="MARRIED_2"
          {...getOverrideProps(overrides, "maritalStatusRadio1")}
        ></Radio>
        <Radio
          children="Not Applicable"
          value="NA_0"
          {...getOverrideProps(overrides, "maritalStatusRadio2")}
        ></Radio>
      </RadioGroupField>
      <RadioGroupField
        label="Single type"
        name="singleType"
        isReadOnly={false}
        isRequired={false}
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
        <Radio
          children="Not Aplicable"
          value="NA_0"
          {...getOverrideProps(overrides, "singleTypeRadio0")}
        ></Radio>
        <Radio
          children="Unmarried"
          value="UNMARRIED_1"
          {...getOverrideProps(overrides, "singleTypeRadio1")}
        ></Radio>
        <Radio
          children="Divorced/Widowed"
          value="DIVORCED_WIDOWED_2"
          {...getOverrideProps(overrides, "singleTypeRadio2")}
        ></Radio>
      </RadioGroupField>
      <RadioGroupField
        label="Age of Youngest kid"
        name="ageOfYoungestKid"
        isReadOnly={false}
        isRequired={false}
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
        <Radio
          children="No Kids"
          value="NO_KIDS_0"
          {...getOverrideProps(overrides, "ageOfYoungestKidRadio0")}
        ></Radio>
        <Radio
          children="0-5 Years"
          value="YRS_0_5_1"
          {...getOverrideProps(overrides, "ageOfYoungestKidRadio1")}
        ></Radio>
        <Radio
          children="5-12 Years"
          value="YRS_5_12_2"
          {...getOverrideProps(overrides, "ageOfYoungestKidRadio2")}
        ></Radio>
        <Radio
          children="12-16 Years"
          value="YRS_12_16_3"
          {...getOverrideProps(overrides, "ageOfYoungestKidRadio3")}
        ></Radio>
        <Radio
          children="16 Years+"
          value="YRS_16_PLUS_4"
          {...getOverrideProps(overrides, "ageOfYoungestKidRadio4")}
        ></Radio>
      </RadioGroupField>
      <RadioGroupField
        label="Spouse support for kids"
        name="spouseSupportForKids"
        isReadOnly={false}
        isRequired={false}
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
        <Radio
          children="Not applicable"
          value="NOT_APPLICABLE_0"
          {...getOverrideProps(overrides, "spouseSupportForKidsRadio0")}
        ></Radio>
        <Radio
          children="Weak"
          value="WEAK_1"
          {...getOverrideProps(overrides, "spouseSupportForKidsRadio1")}
        ></Radio>
        <Radio
          children="Medium"
          value="MEDIUM_2"
          {...getOverrideProps(overrides, "spouseSupportForKidsRadio2")}
        ></Radio>
        <Radio
          children="Strong"
          value="STRONG_3"
          {...getOverrideProps(overrides, "spouseSupportForKidsRadio3")}
        ></Radio>
      </RadioGroupField>
      <RadioGroupField
        label="Spouse support for household"
        name="spouseSupportForHousehold"
        isReadOnly={false}
        isRequired={false}
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
        <Radio
          children="Not applicable"
          value="NOT_APPLICABLE_0"
          {...getOverrideProps(overrides, "spouseSupportForHouseholdRadio0")}
        ></Radio>
        <Radio
          children="Weak"
          value="WEAK_1"
          {...getOverrideProps(overrides, "spouseSupportForHouseholdRadio1")}
        ></Radio>
        <Radio
          children="Medium"
          value="MEDIUM_2"
          {...getOverrideProps(overrides, "spouseSupportForHouseholdRadio2")}
        ></Radio>
        <Radio
          children="Strong"
          value="STRONG_3"
          {...getOverrideProps(overrides, "spouseSupportForHouseholdRadio3")}
        ></Radio>
      </RadioGroupField>
      <RadioGroupField
        label="Helper support for kids"
        name="helperSupportForKids"
        isReadOnly={false}
        isRequired={false}
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
        <Radio
          children="Not applicable"
          value="NOT_APPLICABLE_0"
          {...getOverrideProps(overrides, "helperSupportForKidsRadio0")}
        ></Radio>
        <Radio
          children="Weak"
          value="WEAK_1"
          {...getOverrideProps(overrides, "helperSupportForKidsRadio1")}
        ></Radio>
        <Radio
          children="Medium"
          value="MEDIUM_2"
          {...getOverrideProps(overrides, "helperSupportForKidsRadio2")}
        ></Radio>
        <Radio
          children="Strong"
          value="STRONG_3"
          {...getOverrideProps(overrides, "helperSupportForKidsRadio3")}
        ></Radio>
      </RadioGroupField>
      <RadioGroupField
        label="Helper support for house hold"
        name="helperSupportForHouseHold"
        isReadOnly={false}
        isRequired={false}
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
        <Radio
          children="Not applicable"
          value="NOT_APPLICABLE_0"
          {...getOverrideProps(overrides, "helperSupportForHouseHoldRadio0")}
        ></Radio>
        <Radio
          children="Weak"
          value="WEAK_1"
          {...getOverrideProps(overrides, "helperSupportForHouseHoldRadio1")}
        ></Radio>
        <Radio
          children="Medium"
          value="MEDIUM_2"
          {...getOverrideProps(overrides, "helperSupportForHouseHoldRadio2")}
        ></Radio>
        <Radio
          children="Strong"
          value="STRONG_3"
          {...getOverrideProps(overrides, "helperSupportForHouseHoldRadio3")}
        ></Radio>
      </RadioGroupField>
      <RadioGroupField
        label="Other support for kids"
        name="otherSupportForKids"
        isReadOnly={false}
        isRequired={false}
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
        <Radio
          children="Not applicable"
          value="NOT_APPLICABLE_0"
          {...getOverrideProps(overrides, "otherSupportForKidsRadio0")}
        ></Radio>
        <Radio
          children="Weak"
          value="WEAK_1"
          {...getOverrideProps(overrides, "otherSupportForKidsRadio1")}
        ></Radio>
        <Radio
          children="Medium"
          value="MEDIUM_2"
          {...getOverrideProps(overrides, "otherSupportForKidsRadio2")}
        ></Radio>
        <Radio
          children="Strong"
          value="STRONG_3"
          {...getOverrideProps(overrides, "otherSupportForKidsRadio3")}
        ></Radio>
      </RadioGroupField>
      <RadioGroupField
        label="Other support for house hold"
        name="otherSupportForHouseHold"
        isReadOnly={false}
        isRequired={false}
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
        <Radio
          children="Not applicable"
          value="NOT_APPLICABLE_0"
          {...getOverrideProps(overrides, "otherSupportForHouseHoldRadio0")}
        ></Radio>
        <Radio
          children="Weak"
          value="WEAK_1"
          {...getOverrideProps(overrides, "otherSupportForHouseHoldRadio1")}
        ></Radio>
        <Radio
          children="Medium"
          value="MEDIUM_2"
          {...getOverrideProps(overrides, "otherSupportForHouseHoldRadio2")}
        ></Radio>
        <Radio
          children="Strong"
          value="STRONG_3"
          {...getOverrideProps(overrides, "otherSupportForHouseHoldRadio3")}
        ></Radio>
      </RadioGroupField>
      <RadioGroupField
        label="Willingness to extend Support"
        name="readyToExtendSupport"
        isReadOnly={false}
        isRequired={false}
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
        <Radio
          children="Not applicable"
          value="NOT_APPLICABLE_0"
          {...getOverrideProps(overrides, "readyToExtendSupportRadio0")}
        ></Radio>
        <Radio
          children="Weak"
          value="WEAK_1"
          {...getOverrideProps(overrides, "readyToExtendSupportRadio1")}
        ></Radio>
        <Radio
          children="Medium"
          value="MEDIUM_2"
          {...getOverrideProps(overrides, "readyToExtendSupportRadio2")}
        ></Radio>
        <Radio
          children="Strong"
          value="STRONG_3"
          {...getOverrideProps(overrides, "readyToExtendSupportRadio3")}
        ></Radio>
      </RadioGroupField>
      <RadioGroupField
        label="Caregiving Requirement"
        name="caregiving"
        isReadOnly={false}
        isRequired={false}
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
        <Radio
          children="Yes"
          value="YES_1"
          {...getOverrideProps(overrides, "caregivingRadio0")}
        ></Radio>
        <Radio
          children="No"
          value="NO_0"
          {...getOverrideProps(overrides, "caregivingRadio1")}
        ></Radio>
      </RadioGroupField>
      <RadioGroupField
        label="Extent for care giving"
        name="supportForCareGiving"
        isReadOnly={false}
        isRequired={false}
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
        <Radio
          children="Not Applciable"
          value="NA_0"
          {...getOverrideProps(overrides, "supportForCareGivingRadio0")}
        ></Radio>
        <Radio
          children="Completely dependent on care"
          value="COMPLETELY_DEPENEDNET_1"
          {...getOverrideProps(overrides, "supportForCareGivingRadio1")}
        ></Radio>
        <Radio
          children="Partly require care"
          value="PART_CARE_2"
          {...getOverrideProps(overrides, "supportForCareGivingRadio2")}
        ></Radio>
        <Radio
          children="Monitoring is enough"
          value="MONITORING_IS_ENOUGH_3"
          {...getOverrideProps(overrides, "supportForCareGivingRadio3")}
        ></Radio>
      </RadioGroupField>
      <RadioGroupField
        label="Responsibilities"
        name="Responsibilities"
        isReadOnly={false}
        isRequired={false}
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
        <Radio
          children="Individual contributor"
          value="INDIVIDUAL_CONTRIBUTOR_3"
          {...getOverrideProps(overrides, "ResponsibilitiesRadio0")}
        ></Radio>
        <Radio
          children="Team Management"
          value="TEAM_MGMT_1"
          {...getOverrideProps(overrides, "ResponsibilitiesRadio1")}
        ></Radio>
        <Radio
          children="Team Member"
          value="TEAM_MEMBER_4"
          {...getOverrideProps(overrides, "ResponsibilitiesRadio2")}
        ></Radio>
        <Radio
          children="Project manager or Co-ordinator"
          value="PROJECT_MANAGER_2"
          {...getOverrideProps(overrides, "ResponsibilitiesRadio3")}
        ></Radio>
      </RadioGroupField>
      <RadioGroupField
        label="Type of contract"
        name="TypeOfContract"
        isReadOnly={false}
        isRequired={false}
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
        <Radio
          children="Ok to start short term"
          value="SHORTTERM_2"
          {...getOverrideProps(overrides, "TypeOfContractRadio0")}
        ></Radio>
        <Radio
          children="Strong preference for long term"
          value="LONGTERM_1"
          {...getOverrideProps(overrides, "TypeOfContractRadio1")}
        ></Radio>
      </RadioGroupField>
      <RadioGroupField
        label="Drive to work"
        name="DriveToWork"
        isReadOnly={false}
        isRequired={false}
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
        <Radio
          children="Very high"
          value="VERY_HIGH_3"
          {...getOverrideProps(overrides, "DriveToWorkRadio0")}
        ></Radio>
        <Radio
          children="High but not doing much about it"
          value="HIGH_BUT_NOTDOING_2"
          {...getOverrideProps(overrides, "DriveToWorkRadio1")}
        ></Radio>
        <Radio
          children="Low"
          value="LOW_1"
          {...getOverrideProps(overrides, "DriveToWorkRadio2")}
        ></Radio>
      </RadioGroupField>
      <RadioGroupField
        label="Immediate career ambitions"
        name="ImmediateCareerAmbitions"
        isReadOnly={false}
        isRequired={false}
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
        <Radio
          children="Looking for ideal fulltime/long term job"
          value="LONGTERM_1"
          {...getOverrideProps(overrides, "ImmediateCareerAmbitionsRadio0")}
        ></Radio>
        <Radio
          children="In order to be busy and be engaged in free time"
          value="UTILISE_FREE_TIME_2"
          {...getOverrideProps(overrides, "ImmediateCareerAmbitionsRadio1")}
        ></Radio>
        <Radio
          children="WFH and Flexibility"
          value="WFH_FLEXIBILITY_3"
          {...getOverrideProps(overrides, "ImmediateCareerAmbitionsRadio2")}
        ></Radio>
        <Radio
          children="To not have a gap in resume"
          value="REDUCE_GAP_3"
          {...getOverrideProps(overrides, "ImmediateCareerAmbitionsRadio3")}
        ></Radio>
      </RadioGroupField>
      <RadioGroupField
        label="Financial drive to work"
        name="FinancialDriveToWork"
        isReadOnly={false}
        isRequired={false}
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
        <Radio
          children="Contribute to houusehold in a major way"
          value="MAJOR_3"
          {...getOverrideProps(overrides, "FinancialDriveToWorkRadio0")}
        ></Radio>
        <Radio
          children="Contribute to household, in a MINOR way"
          value="MINOR_2"
          {...getOverrideProps(overrides, "FinancialDriveToWorkRadio1")}
        ></Radio>
        <Radio
          children="Spend on Self"
          value="SELF_EXPENSE_1"
          {...getOverrideProps(overrides, "FinancialDriveToWorkRadio2")}
        ></Radio>
      </RadioGroupField>
      <RadioGroupField
        label="Learning readiness"
        name="LearningReadiness"
        isReadOnly={false}
        isRequired={false}
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
        <Radio
          children="Learning new skills is essential"
          value="LEARNING_ESSENTIAL_1"
          {...getOverrideProps(overrides, "LearningReadinessRadio0")}
        ></Radio>
        <Radio
          children="Satisfied with working, but learning is also important"
          value="SATISFIED_WITH_WORK_2"
          {...getOverrideProps(overrides, "LearningReadinessRadio1")}
        ></Radio>
      </RadioGroupField>
      <RadioGroupField
        label="Job search readiness"
        name="JobSearchReadiness"
        isReadOnly={false}
        isRequired={false}
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
        <Radio
          children="Looking very actively"
          value="LOOKING_VERY_ACTIVELY_3"
          {...getOverrideProps(overrides, "JobSearchReadinessRadio0")}
        ></Radio>
        <Radio
          children="Moderately searching"
          value="MODERATELY_SEARCHING_2"
          {...getOverrideProps(overrides, "JobSearchReadinessRadio1")}
        ></Radio>
        <Radio
          children="Job search inactive for sometime"
          value="JOB_SEARCH_INACTIVE_1"
          {...getOverrideProps(overrides, "JobSearchReadinessRadio2")}
        ></Radio>
      </RadioGroupField>
      <RadioGroupField
        label="Job search success"
        name="JobSearchSuccess"
        isReadOnly={false}
        isRequired={false}
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
        <Radio
          children="Not got many call back/interest/interviews"
          value="NOT_MANY_CALLBACK_3"
          {...getOverrideProps(overrides, "JobSearchSuccessRadio0")}
        ></Radio>
        <Radio
          children="Received fair number of call backs/interest/interview for jobs"
          value="RECEIVED_FAIR_NUMEBER_1"
          {...getOverrideProps(overrides, "JobSearchSuccessRadio1")}
        ></Radio>
      </RadioGroupField>
      <RadioGroupField
        label="Last worked"
        name="LastWorked"
        isReadOnly={false}
        isRequired={false}
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
        <Radio
          children="5 years Plus"
          value="MORE_5_YRS_1"
          {...getOverrideProps(overrides, "LastWorkedRadio0")}
        ></Radio>
        <Radio
          children="2-5 Years"
          value="BETEWEEN_2_5_YRS_2"
          {...getOverrideProps(overrides, "LastWorkedRadio1")}
        ></Radio>
        <Radio
          children="< 2 years"
          value="LESS_2_YRS_3"
          {...getOverrideProps(overrides, "LastWorkedRadio2")}
        ></Radio>
      </RadioGroupField>
      <SelectField
        label="Candidate Job Preference"
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
          children="Part Time WFH"
          value="PARTTIME_WFH_3"
          {...getOverrideProps(overrides, "TypeOfRoleoption0")}
        ></option>
        <option
          children="Part Time OFFICE"
          value="PARTTIME_OFFICE_0"
          {...getOverrideProps(overrides, "TypeOfRoleoption1")}
        ></option>
        <option
          children="Part Time Hybrid"
          value="PARTTIME_HYBRID_1"
          {...getOverrideProps(overrides, "TypeOfRoleoption2")}
        ></option>
        <option
          children="Full Time WFH"
          value="FULLTIME_WFH_3"
          {...getOverrideProps(overrides, "TypeOfRoleoption3")}
        ></option>
        <option
          children="Full Time Hybrid"
          value="FULLTIME_HYBRID_1"
          {...getOverrideProps(overrides, "TypeOfRoleoption4")}
        ></option>
        <option
          children="Full time office"
          value="FULLTIME_OFFICE_0"
          {...getOverrideProps(overrides, "TypeOfRoleoption5")}
        ></option>
      </SelectField>
      <RadioGroupField
        label="Interviewer Input - Type of Role Suitable"
        name="Role_Interviewer"
        isReadOnly={false}
        isRequired={false}
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
        <Radio
          children="PartTime WFH"
          value="PARTTIME_WFH_3"
          {...getOverrideProps(overrides, "Role_InterviewerRadio0")}
        ></Radio>
        <Radio
          children="Part Time Office"
          value="PARTTIME_OFFICE_0"
          {...getOverrideProps(overrides, "Role_InterviewerRadio1")}
        ></Radio>
        <Radio
          children="Part Time Hybrid"
          value="PARTTIME_HYBRID_1"
          {...getOverrideProps(overrides, "Role_InterviewerRadio2")}
        ></Radio>
        <Radio
          children="Full Time WFH"
          value="FULLTIME_WFH_3"
          {...getOverrideProps(overrides, "Role_InterviewerRadio3")}
        ></Radio>
        <Radio
          children="Full Time HYBRID"
          value="FULLTIME_HYBRID_1"
          {...getOverrideProps(overrides, "Role_InterviewerRadio4")}
        ></Radio>
        <Radio
          children="FullTime Office"
          value="FULLTIME_OFFICE_0"
          {...getOverrideProps(overrides, "Role_InterviewerRadio5")}
        ></Radio>
      </RadioGroupField>
      <RadioGroupField
        label="Other commitments"
        name="OtherCommitments"
        isReadOnly={false}
        isRequired={false}
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
        <Radio
          children="No or Few Commitments"
          value="N0_FEW_3"
          {...getOverrideProps(overrides, "OtherCommitmentsRadio0")}
        ></Radio>
        <Radio
          children="Moderate/Manageable Commitments"
          value="MODERATE_MANAGEABLE_2"
          {...getOverrideProps(overrides, "OtherCommitmentsRadio1")}
        ></Radio>
        <Radio
          children="Many Commitments"
          value="MANY_1"
          {...getOverrideProps(overrides, "OtherCommitmentsRadio2")}
        ></Radio>
      </RadioGroupField>
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
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
