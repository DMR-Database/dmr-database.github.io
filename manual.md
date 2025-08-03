---
layout: default
title: DMR User Database App
---
<link rel="icon" href="/favicon.ico" type="image/x-icon">

# DMR User Database App - Complete User Manual
**Version 1.0.20250802+157**

## Table of Contents
1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Main Navigation](#main-navigation)
4. [Search Functionality](#search-functionality)
5. [Database Systems](#database-systems)
6. [Interactive Maps](#interactive-maps)
7. [Logbook System](#logbook-system)
8. [Fox Hunt Game](#fox-hunt-game)
9. [Settings & Customization](#settings--customization)
10. [News & Updates](#news--updates)
11. [Contact & Information](#contact--information)
12. [Export & Data Management](#export--data-management)
13. [Advanced Features](#advanced-features)
14. [Platform-Specific Features](#platform-specific-features)
15. [Troubleshooting](#troubleshooting)
16. [Developer Information](#developer-information)

## Introduction

The DMR User Database App is your comprehensive digital phonebook and amateur radio toolkit, developed by PD2EMC. This app provides access to thousands of amateur radio operators worldwide across multiple digital radio systems and amateur radio services.

### Core Purpose
This app serves as a unified platform for amateur radio operators to:
- **Search Multiple Databases**: Find users across DMR, NXDN, VoIP systems, and repeaters
- **Manage QSO Logs**: Track your amateur radio contacts
- **Explore Maps**: Discover repeaters and hackerspaces globally
- **Participate in Fox Hunting**: Engage in a fun gamified experience
- **Export Data**: Generate files for radio programming and logging

### Platform Support
The app runs on:
- **Android** - Full functionality via Google Play Store
- **iOS** - Full functionality via Apple App Store  
- **Windows** - Desktop application with full features
- **macOS** - Native macOS application
- **Linux** - Linux desktop support
- **Web** - Browser-based version with adapted database engine

### Key Benefits
- **Offline-First Design**: Full functionality without internet connection
- **Cross-Platform Synchronization**: Same experience across all devices
- **Multi-Language Support**: Available in 8 languages
- **Regular Database Updates**: Automatic synchronization with latest data
- **Amateur Radio Integration**: Direct links to QRZ.com and other services
- **Gamification**: Fox Hunt system encourages exploration
- **Professional Export Tools**: Generate files for radio programming software

## Getting Started

### First Launch Experience
When you first open the app:

1. **Database Initialization**
   - App downloads latest database from GitHub repository
   - Initializes local SQLite database (mobile/desktop) or Sembast (web)

2. **Language Detection**
   - Automatically detects system language
   - Can be changed later in settings

3. **Version Checking**
   - Automatically checks for app updates
   - Shows update notifications when newer version available

4. **Welcome Screen**
   - Displays app logo and features overview
   - Prepares all database connections

### System Requirements
- **Android**: 6.0+ (API level 21+)
- **iOS**: 12.0+
- **Windows**: Windows 10+
- **macOS**: macOS 10.14+
- **Linux**: Ubuntu 18.04+ or equivalent
- **Web**: Modern browser with WebAssembly support
- **Storage**: 100MB+ free space for databases
- **Network**: Internet connection for updates (optional for operation)

### Languages
The app supports 8 languages:
- **English** (en-us)
- **Dutch** (nl)
- **German** (de)
- **Greek** (el)
- **Spanish** (es)
- **French** (fr)
- **Chinese** (zh)
- **Japanese** (ja)

## Main Navigation

The app uses a bottom navigation bar with six main sections:

### 1. Home Screen
- **Welcome Message**: Personalized greeting with your callsign/username
- **App Overview**: Introduction to features and capabilities
- **Feature Highlights**: Key functionality summary
- **Fox Hunt Easter Egg 6**: Long-press the logo for 5 seconds to access hidden feature
- **Dynamic Content**: Updates based on your usage and settings

### 2. Search Screen
- **Multi-Database Search**: Search across all amateur radio databases
- **Advanced Filters**: Multiple search criteria and operators
- **Instant Results**: Real-time search with result counts
- **Detailed Views**: Complete information displays
- **Export Options**: Share and export search results

### 3. News Screen
- **Latest Updates**: App and database update announcements
- **Amateur Radio News**: Community updates and events
- **Developer Messages**: Direct communication from app creator
- **Weekend Nets**: Information about amateur radio nets
- **Fox Hunt Easter Egg 5**: Special interaction for Sunday net information to access hidden feature

### 4. Database/Info Screen
- **Database Statistics**: Record counts for each database
- **Last Update Times**: When data was last refreshed
- **Storage Information**: Local storage usage details
- **Maintenance Tools**: Database repair and optimization
- **Export Tools**: Bulk database export functionality

### 5. Settings Screen
- **User Configuration**: Personal settings and preferences
- **Theme Selection**: Light, Dark, and Auto modes
- **Language Options**: 8 supported languages
- **Advanced Features**: Beta features and developer options
- **Fox Hunt Progress**: Track completion status of all 10 Fox Hunt Easter Eggs

### 6. Contact/Information Screen
- **Developer Contact**: Multiple ways to reach PD2EMC
- **App Information**: Version details and credits
- **Support Resources**: Help and documentation links
- **Community Links**: Amateur radio related websites
- **Privacy Policy**: Data handling and privacy information

## Search Functionality

### Search Interface
The search screen provides three dropdown menus:
1. **Database Selection**: Choose which database to search
2. **Search Type**: Select field to search by (Callsign, ID, Name, etc.)
3. **Search Term**: Enter your search query

### Search Features
- **Wildcard Support**: Use `*` for partial matches (e.g., `PA*` finds all callsigns starting with PA)
- **Case Insensitive**: Search ignores upper/lowercase differences
- **Trim Whitespace**: Automatically removes extra spaces
- **Real-time Results**: Results appear immediately
- **Result Counting**: Shows total number of matches found
- **Cross-Database**: "Lazy Search" option searches all databases simultaneously

### Search Result Display
Each result shows:
- **Primary Information**: Callsign, Name, Location
- **Database Source**: Which database contained the result
- **Service Icons**: Different icons for different services:
  - Award icon for special developer callsigns (PD2EMC, PI2ASD, PD1HPB)
  - Pager icon for DAPNET users

### Detailed Result View
Tapping any result opens a detailed dialog with:

#### Information Display
- **QRZ Photo Integration**: Automatically fetches operator photos from QRZ.com
- **Complete Details**: All available information for the operator/station
- **Formatted Data**: Properly formatted frequencies, offsets, and technical details
- **Database Source**: Clear indication of which database provided the information

#### Action Buttons
- **QRZ Button**: Opens QRZ.com profile in external browser
- **Export Button**: Share result via system sharing (email, messaging, etc.)
- **Close Button**: Return to search results

#### Special Callsign Recognition
Certain callsigns trigger special behaviors:
- **PD2EMC**: Search for this callsign and tap the award icon to access Fox Hunt Easter Egg 7 (app creator's callsign)
- **PI2ASD**: Search for this callsign and tap the award icon to access Fox Hunt Easter Egg 4 (Dutch repeater)
- **PD1HPB**: Search for this callsign and tap the award icon to access Fox Hunt Easter Egg 8 (Sunday net operator)

### Search Tips
- **Use Wildcards**: `N0*` finds all callsigns starting with N0
- **Partial Matches**: Search partial cities like `New*` for New York, New Jersey, etc.
- **Numeric IDs**: Search by exact DMR ID or extension numbers
- **Location Searches**: Use country codes like `NL` or `US` for country-specific results

## Database Systems

### Primary Databases

#### 1. RadioID Database
- **Purpose**: Official DMR Radio ID assignments worldwide
- **Search Options**:
  - Callsign: Amateur radio call signs
  - Country: Country information
- **Data Source**: Official RadioID database
- **Update Frequency**: As available
- **Special Features**: Links to official DMR ID registration

#### 2. HamVoIP Database
- **Purpose**: AllStarLink and HamVoIP network participants
- **Search Options**:
  - Callsign: Amateur radio call signs
  - City, State, Country: Location information
- **Data Source**: AllStarLink node database
- **Features**: VoIP node connection information

#### 3. HamshackHotline Database
- **Purpose**: Amateur radio telephone network
- **Search Options**:
  - Callsign: Amateur radio call signs
  - Server: Server/system information
- **Special Features**: Phone system integration for amateur radio

#### 4. DAPNET Database
- **Purpose**: Digital Amateur Packet Network (paging system)
- **Search Options**:
  - Callsign: Amateur radio call signs
  - City, State, Country: Location data
- **Features**: Digital paging network for amateur radio
- **Coverage**: Primarily European network

#### 5. NXDN Database
- **Purpose**: NXDN digital radio system users
- **Search Options**:
  - Callsign: Amateur radio call signs
  - City, State, Country: Geographic data
- **Features**: Alternative digital radio system to DMR

#### 6. Repeaters Database
- **Purpose**: Amateur radio repeater information
- **Search Options**:
  - Callsign: Repeater call signs
  - City, State, Country: Repeater locations
- **Technical Information**:
  - Frequency: Repeater output frequency
  - Network: Connected network information

#### 7. Lazy Search (All Databases)
- **Purpose**: Cross-database searching
- **Function**: Searches all databases simultaneously
- **Results**: Combined results from all systems
- **Use Case**: When you're not sure which database contains the information

### Database Management
- **Updates**: Checks for updates on Database Screen
- **Manual Refresh**: Force database updates in settings
- **Integrity Verification**: Compares local vs. remote row counts
- **Storage Optimization**: Efficient SQLite storage with indexing
- **Backup System**: Maintains backup databases during updates

## Interactive Maps

### Available Map Types

#### 1. RadioID Repeaters Map
- **Content**: DMR repeater locations from RadioID database
- **Features**:
  - Interactive markers showing repeater locations
  - Search integration from main search results

#### 2. RepeaterBook Map
- **Content**: Alternative repeater database visualization
- **Features**:
  - Comprehensive repeater coverage
  - Coverage area indicators where available

#### 3. Hackerspaces Map
- **Content**: Global amateur radio hackerspaces and clubs
- **Features**:
  - Location markers for hackerspaces
  - Community gathering points

### Map Features
- **Interactive Navigation**: Pan, zoom, and explore
- **Marker Clustering**: Groups nearby markers for clarity
- **Detail Popups**: Tap markers for complete information
- **Search Integration**: Jump to map from search results
- **Location Services**: Uses device GPS when permitted
- **Offline Maps**: Cached map tiles for offline viewing

### Navigation Controls
- **Zoom**: Pinch to zoom or use +/- buttons
- **Pan**: Drag to move around the map
- **Reset**: Return to default view
- **Location**: Center on your current location (if permitted)
- **Search**: Find specific locations or callsigns

## Logbook System

### QSO Management
The built-in logbook allows you to track your amateur radio contacts:

#### Add QSO Entry
- **Callsign**: Contact's amateur radio call sign
- **Date/Time**: Contact date and time (UTC and local)
- **Frequency**: Operating frequency
- **Mode**: Operating mode (FM, DMR, NXDN, etc.)
- **Report**: Signal reports (both sent and received)
- **Notes**: Additional contact information
- **Location**: Contact's location if known

#### Edit/Delete QSOs
- **Modify Entries**: Update any field in existing QSOs
- **Delete Contacts**: Remove QSOs from logbook
- **Validation**: Ensures data integrity and proper formatting

### Export Options
- **ADIF Format**: Standard amateur radio interchange format (.adi)
- **CSV Format**: Spreadsheet-compatible export
- **Sharing**: Email or share logbook data

### Logbook Features
- **Search Functionality**: Find specific contacts
- **Sorting Options**: Sort by date, callsign, frequency, etc.
- **Statistics**: Contact counts and summaries
- **Backup**: Automatic local backup of logbook data

## Settings & Customization

### Theme Selection
- **Light Theme**: Bright color scheme optimized for daylight use with high contrast for outdoor visibility
- **Dark Theme**: Dark color scheme optimized for low-light conditions with reduced eye strain
- **Auto Theme**: Automatically switches between light and dark based on system settings with seamless transitions
- **Gradient Backgrounds**: Dynamic gradient backgrounds for enhanced visual appeal with theme-appropriate color schemes

### Language Selection
- **Choose from 8 supported languages**: English, Dutch, German, Greek, Spanish, French, Chinese, Japanese
- **Automatic language detection**: System language automatically detected on first launch
- **Manual language override**: Change language anytime in settings

### External Links
- **BrandMeister Network**: Direct link to https://hose.brandmeister.network/ for DMR network access
- **External link integration**: Quick access to amateur radio resources

### Feature Toggles
- **Various app feature enable/disable options**: Customize which features are active
- **User preference management**: Personal settings stored locally
- **Fox Hunt Progress**: Track completion status of all 10 Fox Hunt Easter Eggs

### User Configuration
- **Personal settings and preferences**: Customize app behavior
- **Callsign Storage**: Save your amateur radio callsign for personalization
- **Advanced Features**: Beta features and developer options access

## News & Updates

The news screen provides:
- **App updates and announcements**: Latest version information and feature releases
- **Database update notifications**: When new database versions are available
- **Urgent notifications system**: Priority announcements for important updates
- **Category-based news filtering**: Organized by type (Database, App, General)
- **Automatic sorting by urgency and date**: Most important news appears first

### News Sources
- **Primary**: GitHub repository news feed (https://raw.githubusercontent.com/DMR-Database/dmr-database-appdata/main/news.json)
- **Fallback**: API endpoint for news delivery (https://api.einstein.amsterdam/news)

### News Features
- **Amateur Radio News**: Community updates and events
- **Developer Messages**: Direct communication from app creator
- **Weekend Nets**: Information about amateur radio nets
- **Fox Hunt Easter Egg 5**: Special interaction for Sunday net information

## Contact & Information

The contact screen provides:
- **Developer Contact**: Multiple ways to reach PD2EMC
- **App Information**: Version details and credits
- **Support Resources**: Help and documentation links
- **Community Links**: Amateur radio related websites
- **Privacy Policy**: Data handling and privacy information

### Contact Options
- **Online contact options**: Web-based support channels
- **Social sharing capabilities**: Share app information with others
- **Tester credits and acknowledgments**: Recognition for beta testers and contributors

### App Information
- **Version details**: Current app version and build information
- **Credits**: Development team and contributor acknowledgments
- **Privacy Policy access**: Complete privacy and data handling information

## Export & Data Management

The app supports exporting data for radio programming in the following formats:

### Anytone Radio Export
- **Export format**: `userat.csv`
- **Compatible with**: Anytone DMR radios
- **Platform availability**: Desktop only

### Fanvil Phone Export
- **Export format**: CSV for Fanvil IP phones
- **Purpose**: VoIP phone directory programming
- **Platform availability**: Desktop only

### Grandstream Phone Export
- **Export format**: CSV for Grandstream IP phones
- **Multiple export options**:
  - All Dutch users export
  - All HamVoIP users export
- **Platform availability**: Desktop only

### Cisco Phone Export
- **Export format**: CSV for Cisco IP phones
- **Purpose**: Enterprise VoIP phone programming
- **Platform availability**: Desktop only

### Ailunce HD1 Export
- **Export format**: CSV for Ailunce HD1 radios
- **Purpose**: DMR handheld radio programming
- **Platform availability**: Desktop only

### Tytera MD2017 Export
- **Export format**: CSV for Tytera MD2017 radios
- **Purpose**: DMR mobile radio programming
- **Platform availability**: Desktop only

### Export Limitations
- **Desktop Only**: Export functionality is available on desktop platforms only (Windows, macOS, Linux)
- **Mobile Restrictions**: Mobile platforms (Android, iOS) do not support file system export operations
- **Web Limitations**: Web platform has limited export capabilities

### Database Export Features
- **Bulk database export functionality**: Export entire databases
- **Search result exports**: Export specific search results
- **Sharing capabilities**: Share individual results via system sharing (email, messaging, etc.)

## Advanced Features

### Database Information
The info screen displays:
- **Local database record counts**: Shows number of records for all 7 databases
- **Server-side database statistics**: Remote database record counts
- **Database synchronization status**: Comparison between local and server data
- **Real-time count comparison**: Live updates of database statistics

### Supported Database Tables
- **RadioID users**: DMR radio ID assignments
- **HamVoIP users**: AllStarLink and VoIP network participants
- **DAPNET users**: Digital Amateur Packet Network participants
- **NXDN users**: NXDN digital radio system users
- **Repeaters**: Amateur radio repeater information
- **Ham Shack Hotline entries**: Amateur radio telephone network

### Database Management
- **Updates**: Manual database update checking
- **Manual Refresh**: Force database updates in settings
- **Integrity Verification**: Automatic verification of database integrity
- **Storage Optimization**: Efficient SQLite storage with indexing
- **Backup System**: Automatic backup during database updates

### QRZ Integration
- **QRZ Photo Integration**: Automatically fetches operator photos from QRZ.com
- **QRZ Profile Links**: Direct links to QRZ.com profiles from search results
- **Automatic Photo Loading**: Seamless integration with QRZ database

## Platform-Specific Features

### Mobile Platforms (Android/iOS)
- **Optimized touch interface**: Designed for finger navigation
- **Share functionality**: System-level sharing for results
- **Notification support**: App update notifications
- **Background updates**: Database synchronization when app is backgrounded

### Desktop Platforms (Windows/macOS/Linux)
- **Full export functionality**: Complete file export capabilities
- **File system access**: Direct file saving and management
- **Window management**: Resizable interface
- **Keyboard shortcuts**: Enhanced navigation options

### Web Platform
- **Browser-based database storage**: Sembast database for web compatibility
- **Cross-browser support**: Chrome, Firefox, Safari, Edge compatibility
- **Responsive design**: Adapts to different screen sizes
- **Progressive Web App**: Can be installed as standalone app

### Technical Implementation
- **Database Storage**:
  - Mobile/Desktop: SQLite database engine
  - Web Platform: Sembast database for web compatibility
- **Network Features**:
  - Automatic database synchronization
  - News feed updates
  - Real-time server count comparisons
  - Offline functionality with cached data

## Troubleshooting

### Common Issues

#### Database Problems
- **Empty Search Results**: Check if database is properly loaded
- **Outdated Information**: Force database update in settings
- **Slow Performance**: Clear app cache or restart application

#### Search Issues
- **No Results Found**: Try using wildcards (*) in search terms
- **Partial Results**: Check spelling and try different search types
- **Wrong Database**: Ensure correct database is selected

#### Fox Hunt Problems
- **Easter Eggs Not Triggering**: 
  - Make sure to hold interactions long enough (5 seconds for logo)
  - Look for special award icons, not regular icons
  - Use exact spelling for callsigns: "PD2EMC", "PI2ASD", "PD1HPB"

#### Export Issues
- **Export Not Working**: Export is only available on desktop platforms
- **File Not Saved**: Check file permissions and storage space
- **Wrong Format**: Verify you selected the correct export format

#### Performance Issues
- **App Slow**: Restart application or clear cached data
- **Map Loading**: Check internet connection for map tiles
- **Database Updates**: Ensure stable internet connection

### Getting Help
- **Contact Developer**: Use contact screen to reach PD2EMC
- **Community Support**: Join amateur radio forums for help
- **Documentation**: Refer to this manual for feature explanations

## Developer Information

### About the Developer
- **Developer**: PD2EMC
- **Callsign**: PD2EMC (Amateur Radio Call Sign)
- **Project**: Open source amateur radio database application

### Technical Details
- **Framework**: Flutter (Cross-platform development)
- **Database**: SQLite (mobile/desktop), Sembast (web)
- **Version**: 1.0.20250802+157
- **Build**: 157
- **Release Date**: August 2, 2025

### Data Sources
- **Primary Database**: GitHub repository (https://github.com/DMR-Database/dmr-database-appdata)
- **News Feed**: GitHub raw content and API endpoints
- **QRZ Integration**: QRZ.com database for photos and profiles

### Contact Information
- **Primary Contact**: Through app contact screen
- **Amateur Radio**: PD2EMC callsign
- **Community**: Amateur radio networks and forums

### License and Attribution
- **App License**: Check app information screen for current license
- **Data Sources**: Multiple amateur radio databases with appropriate attribution
- **Third-party Libraries**: Flutter framework and associated packages

### Contributing
- **Bug Reports**: Use contact functionality to report issues
- **Feature Requests**: Submit suggestions through contact channels
- **Amateur Radio Community**: Participate in nets and forums for feedback

---

*This manual is based on app version 1.0.20250802+157 and covers only the features actually implemented in the codebase. All features described have been verified to exist in the actual application code.*

## Contact & Support
The contact screen provides:
- Online contact options
- Privacy policy access
- App information and version details
- Tester credits and acknowledgments
- Social sharing capabilities

## Settings
The settings screen includes:

### Theme Selection
- Light theme
- Dark theme  
- Auto (system-based) theme switching
- Gradient background options

### Language Selection
- Choose from 8 supported languages
- Automatic language detection
- Manual language override

### External Links
- **BrandMeister Network**: Direct link to https://hose.brandmeister.network/
- External link integration for DMR network access

### Feature Toggles
- Various app feature enable/disable options
- User preference management

## Fox Hunt Game

The Fox Hunt is a comprehensive gamification system with 10 hidden "foxes" throughout the app. This encourages users to explore all features and learn about amateur radio.

### Overview
- **Total Foxes**: 10 hidden Fox Hunt Easter Eggs
- **Progress Tracking**: App tracks which foxes you've found
- **Audio Feedback**: Applause sound when completing the hunt
- **Special Ending**: Unique screen when all foxes are found
- **Restart Requirement**: App restart needed after finding all foxes

### Complete Fox Hunt Guide

#### Fox Hunt Easter Egg 1: Finding the Fox Hunt Feature
- **Location**: Fox Hunt menu/section discovery
- **Method**: Navigate to and discover the fox hunt feature itself through the app menus
- **Hint**: "You found this page :)"
- **Difficulty**: Easy - Introduction to the game
- **Reward**: Access to the fox hunt tracking system

#### Fox Hunt Easter Egg 2: User Settings Integration
- **Location**: User settings configuration
- **Method**: Set up and save your amateur radio callsign in the user settings section
- **Hint**: "Did you save your callsign in the App?"
- **Difficulty**: Easy - Encourages proper app configuration
- **Reward**: Personalized app experience with your callsign

#### Fox Hunt Easter Egg 3: Hidden Settings Button
- **Location**: Settings screen secret interaction
- **Method**: Multiple taps on a specific element within the settings screen
- **Hint**: "Tap the hidden settings button multiple times."
- **Difficulty**: Medium - Requires exploration and experimentation in settings
- **Reward**: Access to winners screen

#### Fox Hunt Easter Egg 4: Special Callsign "PI2ASD"
- **Location**: Search results interaction
- **Method**: Search for callsign "PI2ASD" and tap the special award icon that appears
- **Hint**: "Maybe a repeater in Holland has a hidden Fox."
- **Reward**: Opens dedicated Fox Hunt Easter Egg 4 screen with special content
- **Significance**: Dutch amateur radio repeater callsign
- **Difficulty**: Medium - Requires specific search and recognition of special icon

#### Fox Hunt Easter Egg 5: News Screen Weekend Nets
- **Location**: News screen interaction
- **Method**: Special interaction related to weekend amateur radio nets information
- **Hint**: "News is more than just news. Especially during the saturday and sunday net."
- **Reward**: Access to Fox Hunt Easter Egg content about amateur radio nets
- **Difficulty**: Medium - Requires reading news content and finding hidden interaction

#### Fox Hunt Easter Egg 6: Logo Long-Press
- **Location**: Home screen main app logo
- **Method**: Long-press and hold the main app logo for exactly 5 seconds
- **Hint**: "Do you like our logo? Shall we hold it?"
- **Visual**: Special popup icon appears after the 5-second delay
- **Difficulty**: Easy - But requires patience and discovery of the interaction
- **Reward**: Special popup screen with Fox Hunt Easter Egg content

#### Fox Hunt Easter Egg 7: Special Callsign "PD2EMC"
- **Location**: Search results interaction
- **Method**: Search for callsign "PD2EMC" and tap the special award icon that appears
- **Hint**: "Search for the maker of this app."
- **Reward**: Opens dedicated Fox Hunt Easter Egg 7 screen with developer information
- **Significance**: App creator's personal amateur radio callsign
- **Difficulty**: Medium - Requires knowing the developer's callsign

#### Fox Hunt Easter Egg 8: Special Callsign "PD1HPB"
- **Location**: Search results interaction
- **Method**: Search for callsign "PD1HPB" and tap the special award icon that appears
- **Hint**: "Search for the Operator of the Sunday Net on 204."
- **Reward**: Opens dedicated Fox Hunt Easter Egg 8 screen with net operator information
- **Significance**: Sunday net control operator callsign
- **Difficulty**: Medium - Another specific callsign search requirement

#### Fox Hunt Easter Egg 9: Database Update Feature
- **Location**: Database management functionality
- **Method**: Successfully trigger and complete a database update process
- **Hint**: "Did you update the database lately?"
- **Reward**: Recognition for understanding database management
- **Difficulty**: Medium - Requires understanding database management features

#### Fox Hunt Easter Egg 10: App Restart Completion
- **Location**: Final Fox Hunt Easter Egg after finding the first 9
- **Method**: Restart the app after successfully finding all 9 previous Fox Hunt Easter Eggs
- **Hint**: "Found all 9 Foxes (wow)? Did you restart the App to find number 10 :)"
- **Reward**: Completion screen, winner registration, and special recognition
- **Difficulty**: Easy once you know - Simply requires app restart after completing others

### Fox Hunt Easter Egg Locations by App Section

#### Home Screen
- **Fox Hunt Easter Egg 6**: Long-press logo for 5 seconds

#### Search Screen
- **Fox Hunt Easter Egg 4**: Search "PI2ASD" and tap award icon
- **Fox Hunt Easter Egg 7**: Search "PD2EMC" and tap award icon
- **Fox Hunt Easter Egg 8**: Search "PD1HPB" and tap award icon

#### News Screen
- **Fox Hunt Easter Egg 5**: Weekend nets interaction

#### Settings Screen
- **Fox Hunt Easter Egg 2**: Save callsign in user settings
- **Fox Hunt Easter Egg 3**: Multiple taps on hidden element

#### Database/System Features
- **Fox Hunt Easter Egg 1**: Discover fox hunt feature
- **Fox Hunt Easter Egg 9**: Database update process
- **Fox Hunt Easter Egg 10**: App restart after finding 9 foxes

### Special Callsigns and Icons

When searching for these special callsigns, look for the **award icon** instead of the regular ID badge icon:

- **PD2EMC**: App developer's callsign - access Fox Hunt Easter Egg 7
- **PI2ASD**: Dutch repeater callsign - access Fox Hunt Easter Egg 4
- **PD1HPB**: Sunday net operator callsign - access Fox Hunt Easter Egg 8

### Completion Rewards

#### Progress Tracking
- **Fox Counter**: App tracks which Fox Hunt Easter Eggs you've found
- **Progress Screen**: Visual indication of completion status
- **Achievement System**: Recognition for each fox found

#### Final Rewards
- **Winner's Screen**: Special completion screen after finding all 10 foxes
- **Audio Celebration**: Applause sound effect upon completion
- **Registration System**: Enter your information as a successful fox hunter
- **Leaderboard Recognition**: Join the list of successful fox hunters

### Pro Tips for Fox Hunters

1. **Start with Easy Ones**: Begin with Fox Hunt Easter Eggs 1, 2, and 6 (discovery, settings, logo press)
2. **Use Search Function**: Fox Hunt Easter Eggs 4, 7, and 8 all require specific callsign searches
3. **Explore Every Screen**: Each main app section contains at least one Fox Hunt Easter Egg
4. **Try Different Interactions**: Long-press, multiple taps, and unusual gestures
5. **Read Everything**: News and help content may contain clues
6. **Be Patient**: Some Fox Hunt Easter Eggs require waiting (like the 5-second logo press)
7. **Think Amateur Radio**: Consider amateur radio concepts and terminology
8. **Don't Give Up**: The reward system is designed to be achievable with persistence

### Fox Hunt Easter Egg Troubleshooting

#### Not Triggering
- **Timing**: Make sure to hold interactions long enough (5 seconds for logo)
- **Icon Recognition**: Look for special award icons, not regular icons
- **Exact Callsigns**: Use exact spelling: "PD2EMC", "PI2ASD", "PD1HPB"

## Themes
The app supports multiple visual themes:

### Light Theme
- Bright color scheme optimized for daylight use
- High contrast for outdoor visibility

### Dark Theme  
- Dark color scheme optimized for low-light conditions
- Reduced eye strain in dark environments

### Auto Theme
- Automatically switches between light and dark based on system settings
- Seamless theme transitions

### Gradient Backgrounds
- Dynamic gradient backgrounds for enhanced visual appeal
- Theme-appropriate color schemes

## Technical Notes

### Database Storage
- **Mobile/Desktop**: SQLite database engine
- **Web Platform**: Sembast database for web compatibility
- Automatic database updates from remote sources

### Network Features
- Automatic database synchronization
- News feed updates
- Real-time server count comparisons
- Offline functionality with cached data

### Platform-Specific Features
- Desktop: Full export functionality
- Mobile: Optimized touch interface
- Web: Browser-based database storage
- Cross-platform data synchronization

---

*This manual is based on app version 1.0.20250802+157*
