# ProDev Mobile App - 0x05

This is version 0x05 of the ProDev Mobile App project, implementing **Tab Navigation** using `expo-router`. It builds upon the previous stack navigation version (0x04).

## Features

- Tab Navigation between Home, Search, Saved, Inbox, Profile
- Reusable `PropertyListingCard` component
- Sample property data for listings
- Clean folder structure: components, styles, constants, interfaces
- Expo-compatible

## Folder Structure

app
├── index.tsx
├── join.tsx
├── signin.tsx
└── (home)
├── _layout.tsx
├── index.tsx
├── profile.tsx
├── saved.tsx
├── search.tsx
└── inbox.tsx
components
├── common
│ └── PropertyListingCard.tsx
└── PropertyListing
└── index.tsx
styles
├── _mainstyle.ts
├── _join.ts
└── _propertyCardStyle.ts
interfaces
└── index.ts
constants
└── data.ts