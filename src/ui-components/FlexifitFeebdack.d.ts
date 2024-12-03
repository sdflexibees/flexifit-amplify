/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, RadioGroupFieldProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FlexifitFeebdackInputValues = {
    candidateid?: string;
    candidateName?: string;
    interviewerName?: string;
    interviewDate?: string;
    candidateLocation?: string;
    candidateJobPreference?: string;
    maritalStatus?: string;
    singleType?: string;
    ageOfYoungestKid?: string;
    spouseSupportForKids?: string;
    spouseSupportForHousehold?: string;
    helperSupportForKids?: string;
    helperSupportForHouseHold?: string;
    otherSupportForKids?: string;
    otherSupportForHouseHold?: string;
    readyToExtendSupport?: string;
    caregiving?: string;
    supportForCareGiving?: string;
    Responsibilities?: string;
    TypeOfContract?: string;
    DriveToWork?: string;
    ImmediateCareerAmbitions?: string;
    FinancialDriveToWork?: string;
    LearningReadiness?: string;
    JobSearchReadiness?: string;
    JobSearchSuccess?: string;
    LastWorked?: string;
    TypeOfRole?: string;
    Role_Interviewer?: string;
    OtherCommitments?: string;
    Interviewer_Proposed_Availability?: number;
};
export declare type FlexifitFeebdackValidationValues = {
    candidateid?: ValidationFunction<string>;
    candidateName?: ValidationFunction<string>;
    interviewerName?: ValidationFunction<string>;
    interviewDate?: ValidationFunction<string>;
    candidateLocation?: ValidationFunction<string>;
    candidateJobPreference?: ValidationFunction<string>;
    maritalStatus?: ValidationFunction<string>;
    singleType?: ValidationFunction<string>;
    ageOfYoungestKid?: ValidationFunction<string>;
    spouseSupportForKids?: ValidationFunction<string>;
    spouseSupportForHousehold?: ValidationFunction<string>;
    helperSupportForKids?: ValidationFunction<string>;
    helperSupportForHouseHold?: ValidationFunction<string>;
    otherSupportForKids?: ValidationFunction<string>;
    otherSupportForHouseHold?: ValidationFunction<string>;
    readyToExtendSupport?: ValidationFunction<string>;
    caregiving?: ValidationFunction<string>;
    supportForCareGiving?: ValidationFunction<string>;
    Responsibilities?: ValidationFunction<string>;
    TypeOfContract?: ValidationFunction<string>;
    DriveToWork?: ValidationFunction<string>;
    ImmediateCareerAmbitions?: ValidationFunction<string>;
    FinancialDriveToWork?: ValidationFunction<string>;
    LearningReadiness?: ValidationFunction<string>;
    JobSearchReadiness?: ValidationFunction<string>;
    JobSearchSuccess?: ValidationFunction<string>;
    LastWorked?: ValidationFunction<string>;
    TypeOfRole?: ValidationFunction<string>;
    Role_Interviewer?: ValidationFunction<string>;
    OtherCommitments?: ValidationFunction<string>;
    Interviewer_Proposed_Availability?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FlexifitFeebdackOverridesProps = {
    FlexifitFeebdackGrid?: PrimitiveOverrideProps<GridProps>;
    candidateid?: PrimitiveOverrideProps<TextFieldProps>;
    candidateName?: PrimitiveOverrideProps<TextFieldProps>;
    interviewerName?: PrimitiveOverrideProps<TextFieldProps>;
    interviewDate?: PrimitiveOverrideProps<TextFieldProps>;
    candidateLocation?: PrimitiveOverrideProps<TextFieldProps>;
    candidateJobPreference?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    maritalStatus?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    singleType?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    ageOfYoungestKid?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    spouseSupportForKids?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    spouseSupportForHousehold?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    helperSupportForKids?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    helperSupportForHouseHold?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    otherSupportForKids?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    otherSupportForHouseHold?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    readyToExtendSupport?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    caregiving?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    supportForCareGiving?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    Responsibilities?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    TypeOfContract?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    DriveToWork?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    ImmediateCareerAmbitions?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    FinancialDriveToWork?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    LearningReadiness?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    JobSearchReadiness?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    JobSearchSuccess?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    LastWorked?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    TypeOfRole?: PrimitiveOverrideProps<SelectFieldProps>;
    Role_Interviewer?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    OtherCommitments?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    Interviewer_Proposed_Availability?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FlexifitFeebdackProps = React.PropsWithChildren<{
    overrides?: FlexifitFeebdackOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FlexifitFeebdackInputValues) => FlexifitFeebdackInputValues;
    onSuccess?: (fields: FlexifitFeebdackInputValues) => void;
    onError?: (fields: FlexifitFeebdackInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: FlexifitFeebdackInputValues) => FlexifitFeebdackInputValues;
    onValidate?: FlexifitFeebdackValidationValues;
} & React.CSSProperties>;
export default function FlexifitFeebdack(props: FlexifitFeebdackProps): React.ReactElement;
