import React, { useState } from "react";
import { 
  COUNTRIES, 
  PLACE_OF_BIRTH, 
  ETHNIC_GROUPS, 
  LANGUAGES, 
  DIALECTS,
  EDUCATION_LEVELS,
  SUBJECT_AREAS,
  STUDENT_STATUS,
  EMPLOYMENT_STATUS,
  YEARS_OF_EXPERIENCE,
  JOB_ROLES,
  CURRENCIES
} from '../../lib/constants/countries';

const Confirmation = ({ formData, onEdit }) => {
  const [expandedSections, setExpandedSections] = useState({
    profile: true,
    demographics: true,
    languages: true,
    education: true,
    profession: true,
    additional: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Helper functions to get labels from values
  const getCountryName = (code) => {
    const country = COUNTRIES.find(c => c.code === code);
    return country ? country.name : code;
  };

  const getPlaceOfBirthLabel = (value) => {
    const place = PLACE_OF_BIRTH.find(p => p.value === value);
    return place ? place.label : value;
  };

  const getEthnicGroupLabel = (value) => {
    const group = ETHNIC_GROUPS.find(e => e.value === value);
    return group ? group.label : value;
  };

  const getLanguageLabel = (value) => {
    const language = LANGUAGES.find(l => l.value === value);
    return language ? language.label : value;
  };

  const getDialectLabel = (value) => {
    const dialect = DIALECTS.find(d => d.value === value);
    return dialect ? dialect.label : value;
  };

  const getEducationLabel = (value) => {
    const education = EDUCATION_LEVELS.find(e => e.value === value);
    return education ? education.label : value;
  };

  const getSubjectAreaLabel = (value) => {
    const subject = SUBJECT_AREAS.find(s => s.value === value);
    return subject ? subject.label : value;
  };

  const getStudentStatusLabel = (value) => {
    const status = STUDENT_STATUS.find(s => s.value === value);
    return status ? status.label : value;
  };

  const getEmploymentStatusLabel = (value) => {
    const status = EMPLOYMENT_STATUS.find(e => e.value === value);
    return status ? status.label : value;
  };

  const getYearsOfExperienceLabel = (value) => {
    const years = YEARS_OF_EXPERIENCE.find(y => y.value === value);
    return years ? years.label : value;
  };

  const getJobRoleLabel = (value) => {
    const role = JOB_ROLES.find(j => j.value === value);
    return role ? role.label : value;
  };

  const getCurrencyLabel = (value) => {
    const currency = CURRENCIES.find(c => c.value === value);
    return currency ? currency.label : value;
  };

  const DetailRow = ({ label, value, fieldName }) => (
    <div className="py-3 border-b border-gray-100 last:border-b-0">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <p className="text-sm text-gray-600 mb-1">{label}</p>
          <p className="text-base text-gray-900">{value || "Not provided"}</p>
        </div>
        <button
          onClick={() => onEdit && onEdit(fieldName)}
          className="text-yellow-500 text-sm font-medium hover:text-yellow-600"
        >
          Edit
        </button>
      </div>
    </div>
  );

  const Section = ({ title, sectionKey, children }) => (
    <div className="mb-4 bg-white rounded-lg border border-gray-200">
      <button
        onClick={() => toggleSection(sectionKey)}
        className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50"
      >
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <svg
          className={`w-5 h-5 text-gray-600 transition-transform ${
            expandedSections[sectionKey] ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {expandedSections[sectionKey] && (
        <div className="px-6 pb-4">{children}</div>
      )}
    </div>
  );

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold mb-2">Confirm your details</h2>
      <p className="text-gray-600 mb-8">
        Review your details carefully. Some details can&apos;t be changed later
      </p>

      <div className="space-y-4">
        {/* Profile Section */}
        <Section title="Profile" sectionKey="profile">
          <DetailRow
            label="First name"
            value={formData.firstName}
            fieldName="firstName"
          />
          <DetailRow
            label="Last name"
            value={formData.lastName}
            fieldName="lastName"
          />
          <DetailRow
            label="Email"
            value={formData.email}
            fieldName="email"
          />
          <DetailRow
            label="Date of birth"
            value={formData.birthMonth && formData.birthDay && formData.birthYear 
              ? `${formData.birthMonth}/${formData.birthDay}/${formData.birthYear}`
              : "Not provided"}
            fieldName="dateOfBirth"
          />
          <DetailRow
            label="What is your sex as recorded on legal/official documents?"
            value={formData.gender === 'other' && formData.genderOther 
              ? formData.genderOther 
              : formData.gender ? formData.gender.charAt(0).toUpperCase() + formData.gender.slice(1).replace(/-/g, ' ')
              : "Not provided"}
            fieldName="gender"
          />
        </Section>

        {/* Demographics Section */}
        <Section title="Demographics" sectionKey="demographics">
          <DetailRow
            label="Country of residence"
            value={getCountryName(formData.countryOfResidence)}
            fieldName="countryOfResidence"
          />
          <DetailRow
            label="Country of birth"
            value={getCountryName(formData.countryOfBirth)}
            fieldName="countryOfBirth"
          />
          <DetailRow
            label="Place of birth"
            value={getPlaceOfBirthLabel(formData.placeOfBirth)}
            fieldName="placeOfBirth"
          />
          <DetailRow
            label="Where did you spend most of your time before turning 18?"
            value={getCountryName(formData.childhoodLocation)}
            fieldName="childhoodLocation"
          />
          <DetailRow
            label="What ethnic group do you belong to?"
            value={getEthnicGroupLabel(formData.ethnicity)}
            fieldName="ethnicity"
          />
        </Section>

        {/* Languages Section */}
        <Section title="Languages" sectionKey="languages">
          <DetailRow
            label="What is your first language?"
            value={getLanguageLabel(formData.firstLanguage)}
            fieldName="firstLanguage"
          />
          <DetailRow
            label="Which of the following languages are you fluent in?"
            value={getLanguageLabel(formData.fluentLanguages)}
            fieldName="fluentLanguages"
          />
          <DetailRow
            label="Which variation(s) or regional dialect(s) do you speak fluently, if any?"
            value={getDialectLabel(formData.dialects)}
            fieldName="dialects"
          />
        </Section>

        {/* Education Section */}
        <Section title="Education" sectionKey="education">
          <DetailRow
            label="Which of these is the highest level of education you have completed?"
            value={getEducationLabel(formData.highestEducation)}
            fieldName="highestEducation"
          />
          <DetailRow
            label="What year did you complete your indicated highest level of education?"
            value={formData.graduationYear}
            fieldName="graduationYear"
          />
          <DetailRow
            label="What subject area does your highest level degree most closely relate to?"
            value={getSubjectAreaLabel(formData.subjectArea)}
            fieldName="subjectArea"
          />
          <DetailRow
            label="Are you a student?"
            value={getStudentStatusLabel(formData.isStudent)}
            fieldName="isStudent"
          />
        </Section>

        {/* Professional Background Section */}
        <Section title="Professional Background" sectionKey="profession">
          <DetailRow
            label="What is your employment status?"
            value={getEmploymentStatusLabel(formData.employmentStatus)}
            fieldName="employmentStatus"
          />
          <DetailRow
            label="How many years of professional experience do you have related to your current role?"
            value={getYearsOfExperienceLabel(formData.yearsOfExperience)}
            fieldName="yearsOfExperience"
          />
          <DetailRow
            label="Which of the following best describes the sector you primarily work in?"
            value={getSubjectAreaLabel(formData.workSector)}
            fieldName="workSector"
          />
          <DetailRow
            label="What specific job role do you currently hold or have held most recently in your area of expertise?"
            value={getJobRoleLabel(formData.jobRole)}
            fieldName="jobRole"
          />
        </Section>

        {/* Additional Questions Section */}
        <Section title="Additional Information" sectionKey="additional">
          <DetailRow
            label="LinkedIn profile sharing"
            value={formData.linkedinShareOption === 'yes' ? 'Yes, I\'d like to share' : 'No, I prefer not to share'}
            fieldName="linkedinShareOption"
          />
          {formData.linkedinShareOption === 'yes' && (
            <DetailRow
              label="LinkedIn profile URL"
              value={formData.linkedinUrl}
              fieldName="linkedinUrl"
            />
          )}
          <DetailRow
            label="Tell us anything else about yourself"
            value={formData.aboutYourself}
            fieldName="aboutYourself"
          />
          <DetailRow
            label="How many hours would you be willing to work on AskField on average per week?"
            value={formData.workHoursPerWeek}
            fieldName="workHoursPerWeek"
          />
          <DetailRow
            label="How much per hour would you like to earn on AskField?"
            value={formData.currency && formData.hourlyRate 
              ? `${getCurrencyLabel(formData.currency)} - ${formData.hourlyRate}`
              : "Not provided"}
            fieldName="hourlyRate"
          />
        </Section>
      </div>
    </div>
  );
};

export default Confirmation;