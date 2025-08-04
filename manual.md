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
10. [User Settings & Profile Management](#user-settings--profile-management)
11. [App Information Screen](#app-information-screen)
12. [News & Updates](#news--updates)
13. [Contact & Information](#contact--information)
14. [Export & Data Management](#export--data-management)
15. [Advanced Features](#advanced-features)
16. [Platform-Specific Features](#platform-specific-features)
17. [Troubleshooting](#troubleshooting)
18. [Developer Information](#developer-information)

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

### Additional Screens & Features

#### Privacy Screen
- **Privacy Policy Display**: Complete privacy policy and data handling information
- **Data Usage Information**: How your data is collected, stored, and used
- **Third-Party Services**: Information about external integrations (QRZ.com, etc.)
- **User Rights**: Your rights regarding personal data

#### Testers Screen  
- **Beta Tester Credits**: Recognition for community contributors who helped test the app
- **Contributor Acknowledgments**: Special thanks to users who provided feedback
- **Testing History**: Information about beta testing phases
- **Community Recognition**: Hall of fame for dedicated testers

#### Contact Options
The contact system includes multiple specialized screens:

##### Online Contact Screen
- **Web-Based Support**: Online contact forms and support channels
- **Social Media Links**: Connect via various social platforms
- **Community Forums**: Links to amateur radio discussion groups
- **Bug Reporting**: Direct channels for reporting issues

##### Phone Contact Screen
- **Voice Contact Options**: Phone numbers for direct contact when available
- **Emergency Contacts**: Important contact information for urgent issues
- **Regional Support**: Location-specific contact information

#### Link Management
##### External Links Configuration
- **BrandMeister Network**: Direct integration with https://hose.brandmeister.network/
- **Custom URL Settings**: Configure additional external links
- **Quick Access Links**: Frequently used amateur radio resources

##### Links Page
- **Organized Link Directory**: Categorized list of amateur radio websites
- **Community Resources**: Links to clubs, nets, and amateur radio organizations
- **Technical Resources**: Programming software, documentation, and tools

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

The built-in logbook system provides comprehensive QSO (contact) management with multiple specialized screens for different functions.

### Logbook Management Screens

#### Main Logbook Screen
- **Overview Dashboard**: Summary of your amateur radio contacts
- **Quick Statistics**: Total QSOs, recent contacts, and activity summaries
- **Navigation Hub**: Access to all logbook functions
- **Search Integration**: Quick search through your contact history

#### Logbook List Screen
- **Contact Display**: Scrollable list of all your QSOs
- **Sorting Options**: Sort by date, callsign, frequency, mode, etc.
- **Filter Functions**: Filter contacts by date range, band, mode, or other criteria
- **Quick Actions**: Edit, delete, or view details for each contact
- **Batch Operations**: Select multiple contacts for bulk operations

#### QSO Input Screen (Add New Contact)
- **Contact Entry Form**: Comprehensive form for new QSO entry
- **Auto-Completion**: Smart suggestions based on previous contacts
- **Validation**: Real-time validation of callsigns, frequencies, and other data
- **Quick Entry**: Streamlined interface for rapid QSO logging during contests

#### Logbook Edit Screen
- **Contact Modification**: Edit any field in existing QSOs
- **Data Validation**: Ensures changes maintain data integrity
- **History Tracking**: Keeps track of modifications
- **Bulk Editing**: Edit multiple contacts simultaneously when needed

#### Logbook View Screen
- **Detailed Display**: Complete information view for individual QSOs
- **Contact History**: Shows all contacts with the same station
- **QRZ Integration**: Links to QRZ.com profiles when available
- **Notes and Comments**: Additional information storage for each contact

### QSO Management Features

#### Contact Data Fields
- **Essential Information**:
  - Callsign: Contact's amateur radio call sign
  - Date/Time: Contact date and time (UTC and local time support)
  - Frequency: Operating frequency with band detection
  - Mode: Operating mode (FM, DMR, NXDN, SSB, CW, FT8, etc.)
  - Signal Reports: Both sent and received signal reports (RST format)
- **Additional Information**:
  - Name: Operator's name
  - QTH: Location information (city, state, country)
  - Grid Square: Maidenhead locator system
  - Power: Transmitter power levels
  - Antenna: Antenna information
  - Weather: Weather conditions during contact
  - Notes: Free-form notes and comments

#### Advanced Logbook Features
- **Contest Logging**: Specialized fields for contest operations
- **Award Tracking**: DXCC, WAS, WAZ, and other amateur radio awards
- **QSL Management**: QSL card sent/received tracking
- **Digital Mode Support**: Special fields for digital mode operations
- **Satellite Operations**: Satellite name, mode, and pass information

### Export and Sharing Options

#### ADIF Export (Amateur Data Interchange Format)
- **Standard Format**: Industry-standard .adi format
- **Full Compatibility**: Works with all major logging software
- **Complete Data**: Exports all QSO fields and custom data
- **Date Range Selection**: Export specific time periods
- **Contest Exports**: Specialized contest log formats

#### CSV Export
- **Spreadsheet Compatible**: Opens in Excel, Google Sheets, etc.
- **Custom Field Selection**: Choose which fields to include
- **Multiple Formats**: Different CSV layouts for different purposes
- **Data Analysis**: Perfect for statistical analysis of contacts

#### Sharing Capabilities
- **Email Integration**: Send logbook exports via email
- **Cloud Storage**: Save to Google Drive, iCloud, Dropbox, etc.
- **Social Sharing**: Share notable contacts on social media
- **QRZ Upload**: Direct integration with QRZ.com logbook (where supported)

### Logbook Statistics and Analysis
- **Contact Summaries**: Total contacts by band, mode, year, etc.
- **Progress Tracking**: Track progress toward awards and achievements
- **Activity Analysis**: Graphs and charts showing operating patterns
- **Band Plans**: Visual representation of activity across amateur bands
- **Geographic Analysis**: Maps showing worked countries and states

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

## User Settings & Profile Management

### Personal Configuration Screen
The User Settings screen provides comprehensive options for personalizing your app experience:

#### Amateur Radio Profile
- **Callsign Entry**: Store your amateur radio callsign for personalization
- **License Class**: Select your amateur radio license level
- **Operating Preferences**: Set default modes, bands, and power levels
- **Location Information**: Home QTH (city, state, country, grid square)
- **Station Information**: Default equipment and antenna configurations

#### Personalization Options
- **Display Name**: How your name appears in the app
- **Profile Picture**: Optional photo or avatar
- **Signature**: Automatic signature for exports and sharing
- **Time Zone**: Local time zone for accurate logging
- **Units Preference**: Metric vs. Imperial units

#### Fox Hunt Integration
- **Progress Tracking**: View your Fox Hunt Easter Egg completion status
- **Achievement History**: Record of found easter eggs and completion dates
- **Restart Capability**: Reset Fox Hunt progress if desired
- **Special Recognition**: Displays if you've completed all 10 Fox Hunt Easter Eggs

#### Privacy Controls
- **Data Sharing**: Control what information is shared
- **Anonymous Usage**: Option for anonymous analytics
- **Contact Visibility**: Manage how your information appears to others
- **Export Permissions**: Control what data can be exported

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

## App Information Screen

The App Information screen provides comprehensive details about your app installation and available updates across different platforms.

### Version Information Display
- **Local Version**: Shows your currently installed app version and build number
- **Android Play Store Version**: Latest version available on Google Play Store (Android)
- **Apple App Store Version**: Latest version available on Apple App Store (iOS/macOS)
- **GitHub Version**: Development version information from the official repository

### Platform-Specific Changelogs
The app now displays separate changelogs for different platforms:

#### Android Changelog
- **Source**: Google Play Store
- **Display**: Shows latest changes from Android version
- **Availability**: Visible on Android
- **Format**: Extracted from Play Store listing using regex pattern matching

#### Apple Changelog  
- **Source**: Apple App Store
- **Display**: Shows latest changes from iOS/macOS version
- **Availability**: Visible on iOS and macOS
- **Format**: Extracted from App Store listing using HTML parsing

### Database Information
- **Database Path**: Shows local database file location
- **Last Database Update**: When the database was last updated from the server
- **Last Local Download**: When you last downloaded database updates

### Update Detection
- **Automatic Checking**: App automatically checks for updates on startup
- **Version Comparison**: Compares local vs. remote versions across platforms
- **User Notifications**: Alerts when newer versions are available
- **Direct Links**: Provides update links for each platform

## Export & Data Management

The app supports comprehensive data export functionality for radio programming and data management. Export capabilities vary by platform, with desktop platforms offering the most complete feature set.

### Radio Programming Exports

#### Anytone Radio Export
- **Export format**: `userat.csv`
- **Compatible with**: Anytone DMR radios (MD-380, MD-390, MD-UV380, etc.)
- **Content**: User database with callsigns, DMR IDs, and names
- **Platform availability**: Desktop only
- **Use case**: Programming Anytone radios with contact lists

#### Fanvil Phone Export
- **Export format**: CSV for Fanvil IP phones
- **Compatible with**: Fanvil VoIP phone systems
- **Content**: Directory entries with callsigns and VoIP information
- **Platform availability**: Desktop only
- **Use case**: Programming IP phone directories for HamVoIP networks

#### Grandstream Phone Export
- **Export format**: CSV for Grandstream IP phones
- **Compatible with**: Grandstream VoIP phone systems
- **Multiple export options**:
  - All Dutch users export (Netherlands-specific contacts)
  - All HamVoIP users export (complete VoIP network directory)
- **Platform availability**: Desktop only
- **Use case**: Enterprise and amateur radio VoIP phone programming

#### Cisco Phone Export
- **Export format**: CSV for Cisco IP phones
- **Compatible with**: Cisco VoIP phone systems
- **Content**: Enterprise-formatted directory entries
- **Platform availability**: Desktop only
- **Use case**: Corporate and amateur radio network phone programming

#### Ailunce HD1 Export
- **Export format**: CSV for Ailunce HD1 radios
- **Compatible with**: Ailunce HD1 DMR handheld radios
- **Content**: Contact list optimized for HD1 radio format
- **Platform availability**: Desktop only
- **Use case**: Programming Ailunce handheld radios

#### Tytera MD2017 Export
- **Export format**: CSV for Tytera MD2017 radios
- **Compatible with**: Tytera MD2017 DMR mobile radios
- **Content**: Mobile radio contact database
- **Platform availability**: Desktop only
- **Use case**: Programming Tytera mobile DMR radios

### Export Selection and Filtering

#### Advanced User Selection
- **Individual Selection**: Choose specific users from search results
- **Bulk Selection**: Select all users or none with one click
- **Filter Options**: Export subsets based on location, database, or other criteria
- **Country-Specific Exports**: Filter by country or region for localized contact lists
- **Database-Specific Exports**: Export from individual databases (RadioID, HamVoIP, etc.)

#### Export Process
- **Real-Time Progress**: Shows export progress with user counts
- **File Generation**: Creates properly formatted files for each radio/phone type
- **Validation**: Ensures data integrity and proper formatting
- **Error Handling**: Reports any issues during export process

### Export Limitations
- **Desktop Only**: Export functionality is available on desktop platforms only (Windows, macOS, Linux)
- **Mobile Restrictions**: Mobile platforms (Android, iOS) do not support file system export operations
- **Web Limitations**: Web platform has limited export capabilities

### Database Export Features
- **Bulk database export functionality**: Export entire databases
- **Search result exports**: Export specific search results
- **Sharing capabilities**: Share individual results via system sharing (email, messaging, etc.)

## Advanced Features

### Database Management System

The app includes sophisticated database management tools accessible through multiple specialized screens:

#### Database Information Screen  
- **Local Database Statistics**: Shows number of records for all 7 databases
- **Server-Side Comparisons**: Remote database record counts for comparison
- **Synchronization Status**: Real-time comparison between local and server data
- **Storage Usage**: Detailed information about database file sizes and storage usage
- **Update History**: Track when each database was last updated

#### Database Count Screen
- **Real-Time Counts**: Live display of record counts for each database
- **Comparison Tables**: Side-by-side local vs. server record counts
- **Sync Status Indicators**: Visual indicators showing which databases are up-to-date
- **Database Health**: Indicators for database integrity and performance

#### Database Update Management
- **Selective Updates**: Choose which databases to update
- **Progress Monitoring**: Real-time progress bars during database updates
- **Error Handling**: Detailed error reporting and recovery options
- **Rollback Capability**: Restore previous database versions if needed
- **Bandwidth Management**: Control update timing and data usage

### Supported Database Tables
The app manages multiple specialized databases:

- **RadioID users**: DMR radio ID assignments worldwide
- **HamVoIP users**: AllStarLink and VoIP network participants  
- **DAPNET users**: Digital Amateur Packet Network participants
- **NXDN users**: NXDN digital radio system users
- **Repeaters**: Amateur radio repeater information
- **Ham Shack Hotline entries**: Amateur radio telephone network
- **Hackerspaces**: Global amateur radio hackerspaces and clubs

### Database Integrity & Maintenance
- **Automatic Verification**: Regular integrity checks of local databases
- **Corruption Detection**: Identifies and reports database issues
- **Repair Tools**: Built-in database repair and optimization functions
- **Backup System**: Automatic backup creation during updates
- **Storage Optimization**: Efficient SQLite indexing and compression

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

#### App Information Issues
- **Version Mismatch**: Check App Information screen for latest versions across platforms
- **Changelog Not Loading**: Verify internet connection for store information
- **Update Notifications**: Enable notifications in device settings

#### Logbook Problems
- **QSO Not Saving**: Check all required fields are completed
- **Export Failures**: Ensure sufficient storage space and file permissions
- **ADIF Compatibility**: Verify export format matches your logging software requirements

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
- **Latest Features**: Separate Android and Apple changelog displays, enhanced version comparison across platforms

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

---

*This manual is based on app version 1.0.20250802+157 and covers only the features actually implemented in the codebase. All features described have been verified to exist in the actual application code.*
