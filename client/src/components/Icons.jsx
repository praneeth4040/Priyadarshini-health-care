import React from 'react';

// Hospital/Healthcare Icon
export const HospitalIcon = ({ className = "", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7V10H22V7L12 2Z" fill="currentColor"/>
    <path d="M4 12V20H20V12H4ZM11 14H13V16H15V18H13V20H11V18H9V16H11V14Z" fill="currentColor"/>
  </svg>
);

// Team/Users Icon
export const TeamIcon = ({ className = "", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9" cy="7" r="4" fill="currentColor"/>
    <path d="M3 21V19C3 16.79 4.79 15 7 15H11C13.21 15 15 16.79 15 19V21H3Z" fill="currentColor"/>
    <path d="M16 3.13C16.8 3.35 17.5 3.8 18 4.5C18.97 5.19 19.5 6.27 19.5 7.5S18.97 9.81 18 10.5C17.5 11.2 16.8 11.65 16 11.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M21 20.9999V18.9999C21 17.1299 20.22 15.4399 19 14.2699" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Medical Equipment/Stethoscope Icon
export const MedicalIcon = ({ className = "", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.5 2C10.67 2 10 2.67 10 3.5V4.5C10 5.33 10.67 6 11.5 6H12.5C13.33 6 14 5.33 14 4.5V3.5C14 2.67 13.33 2 12.5 2H11.5Z" fill="currentColor"/>
    <path d="M6 6V8C6 12.42 9.58 16 14 16H16V18C16 19.1 16.9 20 18 20S20 19.1 20 18V16C20 14.9 19.1 14 18 14S16 14.9 16 16H14C10.69 16 8 13.31 8 10V6H6Z" fill="currentColor"/>
    <circle cx="18" cy="18" r="2" fill="currentColor"/>
  </svg>
);

// Home Icon
export const HomeIcon = ({ className = "", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" fill="currentColor"/>
  </svg>
);

// Nurse Icon
export const NurseIcon = ({ className = "", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="6" r="4" fill="currentColor"/>
    <path d="M12 14C8.13 14 5 17.13 5 21H19C19 17.13 15.87 14 12 14Z" fill="currentColor"/>
    <path d="M15 7H9V9H11V11H13V9H15V7Z" fill="white"/>
  </svg>
);

// Baby Icon
export const BabyIcon = ({ className = "", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="8" r="3" fill="currentColor"/>
    <path d="M12 12C9.24 12 7 14.24 7 17V19H17V17C17 14.24 14.76 12 12 12Z" fill="currentColor"/>
    <circle cx="9" cy="8" r="1" fill="white"/>
    <circle cx="15" cy="8" r="1" fill="white"/>
  </svg>
);

// Briefcase Icon
export const BriefcaseIcon = ({ className = "", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="7" width="20" height="14" rx="2" fill="currentColor"/>
    <path d="M16 21V5C16 3.9 15.1 3 14 3H10C8.9 3 8 3.9 8 4V21" stroke="white" strokeWidth="2"/>
  </svg>
);

// Heart Icon
export const HeartIcon = ({ className = "", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.61C2.1283 5.6417 1.5487 7.04097 1.5487 8.5C1.5487 9.95903 2.1283 11.3583 3.16 12.39L12 21.23L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.06211 22.0329 6.39467C21.7563 5.72723 21.351 5.1208 20.84 4.61V4.61Z" fill="currentColor"/>
  </svg>
);

// Trophy Icon
export const TrophyIcon = ({ className = "", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V7C19 9.76 16.76 12 14 12H13V17H16C16.55 17 17 17.45 17 18S16.55 19 16 19H8C7.45 19 7 18.55 7 18S7.45 17 8 17H11V12H10C7.24 12 5 9.76 5 7V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7Z" fill="currentColor"/>
  </svg>
);

// Shield Icon
export const ShieldIcon = ({ className = "", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L4 5V11C4 16 7.05 20.45 12 22C16.95 20.45 20 16 20 11V5L12 2ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z" fill="currentColor"/>
  </svg>
);

// Phone Icon
export const PhoneIcon = ({ className = "", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="currentColor"/>
  </svg>
);

// Eye Icon
export const EyeIcon = ({ className = "", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5S21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12S9.24 7 12 7S17 9.24 17 12S14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12S10.34 15 12 15S15 13.66 15 12S13.66 9 12 9Z" fill="currentColor"/>
  </svg>
);

// Target Icon
export const TargetIcon = ({ className = "", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
  </svg>
);
