---
layout: default
title: DMR User Database App
---
<link rel="icon" href="/favicon.ico" type="image/x-icon">

# DMR User Database App - Complete User Manual

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
- **Linux** - Linux desktop support (not tested)
- **Web** - Browser-based version with adapted database engine (still database problems)

### Key Benefits
- **Offline-First Design**: Full functionality without internet connection
- **Cross-Platform Synchronization**: Same experience across all devices
- **Multi-Language Support**: Available in 10+ languages
- **Regular Database Updates**: Automatic synchronization with latest data
- **Amateur Radio Integration**: Direct links to QRZ.com and other services
- **Gamification**: Fox Hunt system encourages exploration
- **Professional Export Tools**: Generate files for radio programming software

## Getting Started

### First Launch Experience
When you first open the app:

1. **Database Initialization**
   - App downloads latest database from GitHub repository
   - Shows loading screen with progress indicator
   - Verifies database integrity with row count comparison
   - Initializes local SQLite database (mobile/desktop) or Sembast (web)

2. **Language Detection**
   - Automatically detects system language
   - Falls back to English (en-us) if language not supported
   - Can be changed later in settings

3. **Version Checking**
   - Automatically checks for app updates
   - Compares with Play Store (Android) and App Store (iOS)
   - Shows update notifications when newer version available

4. **Welcome Screen**
   - Displays app logo and features overview
   - Sets up bottom navigation
   - Prepares all database connections

### System Requirements
- **Android**: 6.0+ (API level 23+)
- **iOS**: 12.0+
- **Windows**: Windows 10+
- **macOS**: macOS 10.14+
- **Linux**: Ubuntu 18.04+ or equivalent
- **Web**: Modern browser with WebAssembly support
- **Storage**: 100MB+ free space for databases
- **Network**: Internet connection for updates (optional for operation)

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
- **Language Options**: 10+ supported languages
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
  - Crown icons for beta testers and contributors
  - ID badge for general amateur radio operators
  - Tower icon for repeaters
  - Phone icon for VoIP services
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
  - Radio ID/DMR ID: Numeric DMR identifiers
  - First Name: Operator's first name
  - City: Geographic city location
  - State: State or province
  - Country: Country information
- **Data Source**: Official RadioID database
- **Update Frequency**: As available (2hrs)
- **Special Features**: Links to official DMR ID registration

#### 2. HamVoIP Database
- **Purpose**: AllStarLink and HamVoIP network participants
- **Search Options**:
  - Callsign: Amateur radio call signs
  - Extension: VoIP node/extension numbers
  - Name: Operator names
  - City, State, Country: Location information
- **Data Source**: AllStarLink node database
- **Features**: VoIP node connection information

#### 3. HamshackHotline Database
- **Purpose**: Amateur radio telephone network
- **Search Options**:
  - Callsign: Amateur radio call signs
  - Extension: Phone extension numbers
  - Name: Operator names
  - City, State, Country: Geographic information
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
  - NXDN ID: NXDN system identifiers
  - First Name: Operator names
  - City, State, Country: Geographic data
- **Features**: Alternative digital radio system to DMR

#### 6. Repeaters Database
- **Purpose**: Amateur radio repeater information
- **Search Options**:
  - Callsign: Repeater call signs
  - Trustee: Repeater trustee/operator
  - City, State, Country: Repeater locations
- **Technical Information**:
  - Frequency: Repeater output frequency
  - Offset: Transmit offset (+ or -)
  - Color Code: DMR color code
  - Timeslot: DMR timeslot information
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
  - Popup details with technical information
  - Color-coded markers by region or status
  - Zoom and pan functionality
  - Search integration from main search results

#### 2. RepeaterBook Map
- **Content**: Alternative repeater database visualization
- **Features**:
  - Comprehensive repeater coverage
  - Technical details in popups
  - Frequency and offset information
  - Coverage area indicators where available

#### 3. Hackerspaces Map
- **Content**: Global amateur radio hackerspaces and clubs
- **Features**:
  - Location markers for hackerspaces
  - Contact information and details
  - Meeting times and information where available
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
- **ADIF Format**: Standard amateur radio interchange format
- **CSV Format**: Spreadsheet-compatible export
- **Custom Formats**: Various amateur radio logging software formats
- **Sharing**: Email or share logbook data

### Logbook Features
- **Search Functionality**: Find specific contacts
- **Sorting Options**: Sort by date, callsign, frequency, etc.
- **Statistics**: Contact counts and summaries
- **Backup**: Automatic local backup of logbook data

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
- **Difficulty**: Easy - Introduction to the game
- **Reward**: Access to the fox hunt tracking system

#### Fox Hunt Easter Egg 2: User Settings Integration
- **Location**: User settings configuration
- **Method**: Set up and save your amateur radio callsign in the user settings section
- **Difficulty**: Easy - Encourages proper app configuration
- **Reward**: Personalized app experience with your callsign

#### Fox Hunt Easter Egg 3: Hidden Settings Button
- **Location**: Settings screen secret interaction
- **Method**: Multiple taps on a specific element within the settings screen
- **Difficulty**: Medium - Requires exploration and experimentation in settings
- **Reward**: Access to winners screen

#### Fox Hunt Easter Egg 4: Special Callsign "PI2ASD"
- **Location**: Search results interaction
- **Method**: Search for callsign "PI2ASD" and tap the special award icon that appears
- **Reward**: Opens dedicated Fox Hunt Easter Egg 4 screen with special content
- **Significance**: Dutch amateur radio repeater callsign
- **Difficulty**: Medium - Requires specific search and recognition of special icon

#### Fox Hunt Easter Egg 5: News Screen Weekend Nets
- **Location**: News screen interaction
- **Method**: Special interaction related to weekend amateur radio nets information
- **Reward**: Access to Fox Hunt Easter Egg content about amateur radio nets
- **Difficulty**: Medium - Requires reading news content and finding hidden interaction

#### Fox Hunt Easter Egg 6: Logo Long-Press
- **Location**: Home screen main app logo
- **Method**: Long-press and hold the main app logo for exactly 5 seconds
- **Visual**: Special popup icon appears after the 5-second delay
- **Difficulty**: Easy - But requires patience and discovery of the interaction
- **Reward**: Special popup screen with Fox Hunt Easter Egg content

#### Fox Hunt Easter Egg 7: Special Callsign "PD2EMC"
- **Location**: Search results interaction
- **Method**: Search for callsign "PD2EMC" and tap the special award icon that appears
- **Reward**: Opens dedicated Fox Hunt Easter Egg 7 screen with developer information
- **Significance**: App creator's personal amateur radio callsign
- **Difficulty**: Medium - Requires knowing the developer's callsign

#### Fox Hunt Easter Egg 8: Special Callsign "PD1HPB"
- **Location**: Search results interaction
- **Method**: Search for callsign "PD1HPB" and tap the special award icon that appears
- **Reward**: Opens dedicated Fox Hunt Easter Egg 8 screen with net operator information
- **Significance**: Sunday net control operator callsign
- **Difficulty**: Medium - Another specific callsign search requirement

#### Fox Hunt Easter Egg 9: Database Update Feature
- **Location**: Database management functionality
- **Method**: Successfully trigger and complete a database update process
- **Reward**: Recognition for understanding database management
- **Difficulty**: Medium - Requires understanding database management features

#### Fox Hunt Easter Egg 10: App Restart Completion
- **Location**: Final Fox Hunt Easter Egg after finding the first 9
- **Method**: Restart the app after successfully finding all 9 previous Fox Hunt Easter Eggs
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
- **Persistence**: Some may require multiple attempts or specific conditions

#### Progress Not Saving
- **App Restart**: Some progress may require app restart to register
- **Settings Check**: Verify Fox Hunt Easter Egg progress in fox hunt section
- **Complete Sequence**: Make sure to complete each Fox Hunt Easter Egg fully

#### Final Fox Not Appearing
- **Count Verification**: Ensure you've found exactly 9 foxes first
- **App Restart**: Fox Hunt Easter Egg 10 specifically requires restarting the app
- **Clean Restart**: Close app completely and reopen

#### Fox Hunt Progress After App Reinstall
If you've completed the fox hunt and earned winner status, your progress is preserved through the online winners system:

**Restoring Your Fox Hunt Completion**:
1. **Enter Your Callsign**: Go to Settings and enter the same callsign you used when completing the fox hunt
2. **Internet Connection**: Ensure your device has internet connectivity 
3. **Automatic Recognition**: The app automatically checks the online winners database at startup
4. **Status Restoration**: If your callsign is found in the winners list, all 10 Fox Hunt Easter Eggs are automatically marked as found
5. **Access All Rewards**: You'll have immediate access to all fox hunt screens and the winners screen

**What Gets Restored**:
- All 10 Fox Hunt Easter Eggs marked as completed
- Access to all individual fox hunt reward screens
- Winners screen access (available after finding 3+ foxes)
- Your completion status and progress counter

**Technical Details**:
- The app checks against the online winners database hosted on GitHub
- Winners data includes your callsign, completion date, and any comments
- No manual re-hunting required - your achievement is permanently recognized
- Works across all platforms (Android, iOS, Windows, macOS, Linux, Web)

## Settings & Customization

### User Settings

#### Personal Information
- **Username/Callsign**: Your amateur radio call sign or preferred name
  - Displayed on home screen welcome message
  - Used in logbook and sharing functions
  - Persistent storage across app sessions

#### Language Selection
The app supports multiple languages with complete translations:
- **English (en-us)**: Default language
- **German (de-de)**: Deutsche Sprache
- **Greek (el-gr)**: Greek
- **Spanish (es-es)**: Idioma Español
- **French (fr-fr)**: Langue Française
- **Dutch (nl-nl)**: Nederlandse Taal
- **Chinese**: Traditional and Simplified variants
- **Japanese**: Full Japanese translation
- **Additional Languages**: Continuously expanding

**Language Features**:
- **Dynamic Switching**: Changes take effect immediately
- **Complete Translation**: All UI elements, messages, and help text
- **Cultural Adaptation**: Date/time formats and number formatting
- **Persistent Storage**: Language choice remembered across sessions

#### Theme Customization
Choose from multiple visual themes:

**Light Theme**:
- Clean, bright interface
- High contrast for daylight use
- Professional appearance
- Easy on battery for OLED displays

**Dark Theme**:
- Dark backgrounds with light text
- Reduced eye strain in low light
- Better battery life on OLED displays
- Modern appearance

**Auto Theme**:
- Follows system settings
- Automatically switches based on time or system preference
- Seamless adaptation to device settings

**Theme Features**:
- **Custom Gradients**: Beautiful background gradients
- **Consistent Colors**: Coordinated color schemes throughout app
- **High Contrast**: Accessible design for all users
- **Icon Adaptation**: Icons change with theme selection

### Feature Toggles
Enable or disable specific app features:
- **Location Services**: GPS and location-based features
- **Photo Downloads**: QRZ.com image fetching
- **Audio Feedback**: Sound effects and notifications
- **Analytics**: Usage statistics and crash reporting
- **Push Notifications**: Update and news notifications

## News & Updates

### News Sources
The news screen aggregates information from multiple sources:

#### Official App Updates
- **Version Releases**: New app version announcements
- **Feature Additions**: New functionality descriptions
- **Bug Fixes**: Resolution of reported issues
- **Security Updates**: Important security patches

#### Database Updates
- **Database Refreshes**: When new data is available
- **Record Count Changes**: Statistics on database growth
- **Coverage Expansion**: New regions or services added
- **Data Quality Improvements**: Corrections and enhancements

#### Amateur Radio Community
- **Events**: Amateur radio events and conventions
- **Net Schedules**: Regular amateur radio nets
- **Emergency Communications**: Emergency and public service information
- **Technical Articles**: Amateur radio technical content

#### Weekend Nets Special Feature
- **Sunday Net Information**: Special content about Sunday amateur radio nets
- **PD1HPB Recognition**: Information about net control operator
- **Fox Hunt Easter Egg Integration**: Hidden interaction for Fox Hunt game

### Update Notifications
The app provides comprehensive update notifications:

#### Version Checking
- **Automatic Checking**: Compares local version with app stores
- **Platform Specific**: Different checking for Android, iOS, desktop
- **Update Prompts**: Direct links to appropriate app store
- **Beta Version Recognition**: Special handling for beta/test versions

#### Notification Types
- **Update Available**: Newer version available for download
- **Beta Version Warning**: Running pre-release software
- **Security Updates**: Important security-related updates
- **Database Updates**: New data available for download

### News Features
- **Refresh Function**: Pull-to-refresh for latest news
- **Link Integration**: Tap links to open external websites
- **Sharing**: Share interesting news items
- **Language Adaptation**: News content translated to selected language

## Contact & Information

### Developer Contact Methods

#### Primary Developer: PD2EMC
- **Amateur Radio Callsign**: PD2EMC
- **Email Contact**: Available through app contact form
- **GitHub**: Project repository and issue tracking
- **Amateur Radio Community**: Active in Dutch amateur radio community

#### Support Channels
- **In-App Contact**: Contact form within the app
- **Email Support**: Direct email contact for technical issues
- **Bug Reports**: Structured bug reporting system
- **Feature Requests**: Suggest new functionality

#### Online Contact Form
- **Technical Issues**: Report bugs and technical problems
- **Feature Suggestions**: Propose new functionality
- **Database Corrections**: Report incorrect or missing data
- **General Feedback**: Share thoughts and experiences

#### Phone Contact (Advanced)
For users with special circumstances:
- **Emergency Contact**: Available for critical issues
- **Amateur Radio Networks**: Contact via amateur radio if needed
- **International Support**: Multiple time zones supported

### App Information

#### Version Details
- **Current Version**: Displayed with build number
- **Release Date**: When current version was published
- **Platform Information**: Specific platform details
- **Build Information**: Technical build details for debugging

#### Credits and Attribution
- **Primary Developer**: PD2EMC development credit
- **Data Sources**: Attribution to database providers
- **Open Source Components**: Recognition of open source libraries
- **Beta Testers**: Recognition of testing community
- **Contributors**: Amateur radio community contributions

#### Legal Information
- **Privacy Policy**: Complete privacy policy and data handling
- **Terms of Use**: Application usage terms
- **Data Sources**: Attribution to database providers
- **Intellectual Property**: Copyright and trademark information

### Community Links
- **Amateur Radio Organizations**: Links to IARU, ARRL, and national organizations
- **Technical Resources**: Amateur radio technical references
- **Education**: Amateur radio education and licensing resources
- **Emergency Communications**: ARES, RACES, and emergency communication groups

## Export & Data Management

### Database Export Options

#### Individual Record Export
- **Share Function**: Use system sharing to send single records
- **Format Options**: Plain text, formatted text, or structured data
- **Destinations**: Email, messaging, social media, or file storage

#### Bulk Database Export
Available on desktop platforms (Windows, macOS, Linux):

**Export Formats**:
- **CSV**: Comma-separated values for spreadsheets
- **JSON**: Structured data format for programming
- **XML**: Structured markup format
- **Custom Formats**: Radio-specific programming formats

**Radio Programming Integration**:
- **Anytone Radios**: Direct programming file generation
- **CHIRP Compatibility**: Export for CHIRP programming software
- **Pi-Star Integration**: DMR hotspot configuration files
- **Custom Radio Support**: Support for various radio manufacturers

#### Logbook Export
- **ADIF Format**: Amateur Data Interchange Format (standard)
- **Cabrillo**: Contest logging format
- **CSV Export**: Spreadsheet-compatible format
- **Custom Formats**: Support for various logging software

### Data Management Features

#### Database Maintenance
- **Integrity Checking**: Verify database consistency
- **Repair Functions**: Fix corrupted data
- **Optimization**: Improve database performance
- **Statistics**: Detailed database statistics and health metrics

#### Storage Management
- **Space Usage**: Monitor storage space consumption
- **Cache Clearing**: Clear cached images and temporary data
- **Backup Creation**: Create local backups of important data
- **Data Migration**: Transfer data between devices

#### Update Management
- **Automatic Updates**: Configure automatic database updates
- **Manual Control**: Force updates or prevent automatic updates
- **Version History**: Track database version changes
- **Rollback Options**: Revert to previous database versions if needed

## Advanced Features

### QRZ.com Integration
- **Photo Fetching**: Automatically download operator photos
- **Profile Linking**: Direct links to QRZ.com profiles
- **Data Verification**: Cross-reference with QRZ.com data
- **Privacy Respect**: Only fetch publicly available information

### Network Features
- **Connectivity Detection**: Automatically detect online/offline status
- **Background Updates**: Download updates in background
- **Retry Logic**: Automatically retry failed network operations
- **Bandwidth Management**: Optimize for limited connections

### Performance Optimization
- **Database Indexing**: Optimized database queries
- **Memory Management**: Efficient memory usage
- **Caching System**: Cache frequently accessed data
- **Background Processing**: Non-blocking operations

### Security Features
- **Local Storage**: All sensitive data stored locally
- **No Cloud Dependency**: Full offline operation capability
- **Privacy Protection**: No personal data transmitted
- **Secure Preferences**: Encrypted storage of sensitive settings

### Developer Tools
- **Debug Logging**: Comprehensive logging for troubleshooting
- **Performance Monitoring**: Track app performance metrics
- **Error Reporting**: Automatic crash reporting (if enabled)
- **Testing Interface**: Special functions for beta testers

## Platform-Specific Features

### Android Features
- **Google Play Integration**: Update checking and distribution
- **Android Permissions**: Location, storage, and network permissions
- **Background Operation**: Background database updates
- **System Integration**: Android sharing and intent system
- **Material Design**: Native Android design language

### iOS Features
- **App Store Integration**: Automatic update checking
- **iOS Permissions**: Location and data access permissions
- **Background App Refresh**: Automatic data updates
- **iOS Sharing**: Native iOS sharing functionality
- **Human Interface Guidelines**: Native iOS design

### Desktop Features (Windows/macOS/Linux)
- **Full Database Export**: Complete export functionality
- **File System Access**: Direct file system integration
- **Window Management**: Resizable windows and multiple monitors
- **Keyboard Shortcuts**: Desktop-specific keyboard navigation
- **Menu Integration**: Native menu systems

### Web Features
- **Browser Compatibility**: Modern browser support
- **WebAssembly**: High-performance database operations
- **Progressive Web App**: Installable web application
- **Cross-Browser**: Support for Chrome, Firefox, Safari, Edge
- **Responsive Design**: Adapts to different screen sizes

## Troubleshooting

### Common Issues and Solutions

#### Search Problems
**No Results Found**:
- Check spelling of search terms
- Try using wildcards (*) for partial matches
- Verify you're searching the correct database
- Try "Lazy Search" to search all databases

**Slow Search Performance**:
- Large result sets may take time to process
- Use more specific search terms
- Clear app cache in settings
- Restart app if performance degrades

**Missing or Incorrect Data**:
- Database may need updating
- Force database refresh in settings
- Report data errors through contact form
- Check multiple databases for same information

#### Database Update Issues
**Update Failures**:
- Check internet connection
- Verify sufficient storage space
- Restart app and try again
- Use manual update option in settings

**Corrupt Database**:
- Use database repair function in settings
- Clear all data and re-download
- Contact support for assistance
- Check available storage space

#### Performance Issues
**App Running Slowly**:
- Restart the application
- Clear cache in settings
- Check available device memory
- Close other running applications

**Crashes or Freezing**:
- Update to latest app version
- Restart device
- Check available storage space
- Report crash through contact form

#### Platform-Specific Issues

**Android Issues**:
- Check app permissions in Android settings
- Verify Google Play Services are updated
- Clear app cache through Android settings
- Try reinstalling if problems persist

**iOS Issues**:
- Check app permissions in iOS Settings
- Verify iOS version compatibility
- Restart iPhone/iPad
- Reinstall app from App Store

**Desktop Issues**:
- Check firewall and antivirus settings
- Verify database file permissions
- Run as administrator (Windows) if needed
- Check available disk space

**Web Issues**:
- Try different browser
- Clear browser cache and cookies
- Disable browser extensions temporarily
- Check browser WebAssembly support

### Getting Help

#### Self-Help Resources
1. **Check This Manual**: Most questions answered here
2. **App Settings**: Many issues resolved through settings
3. **Restart App**: Simple restart fixes many problems
4. **Update App**: Ensure you're running latest version

#### Contact Support
- **In-App Contact**: Use contact form within app
- **Email Support**: Direct email to developer
- **GitHub Issues**: Report bugs on project repository
- **Amateur Radio Community**: Ask other amateur radio operators

#### Bug Reporting
When reporting bugs, include:
- **App Version**: Found in settings or about screen
- **Platform**: Android, iOS, Windows, etc.
- **Steps to Reproduce**: Exact steps that cause the problem
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Screenshots**: If applicable

## Developer Information

### About the Developer

#### PD2EMC - Primary Developer
- **Amateur Radio Callsign**: PD2EMC
- **Location**: Netherlands
- **Experience**: Active amateur radio operator and software developer
- **Specialties**: Digital radio systems, database management, mobile applications

#### Development Philosophy
- **Amateur Radio First**: Designed by and for amateur radio operators
- **Community Driven**: Features based on community needs
- **Open Source Friendly**: Uses open source components where possible
- **Privacy Focused**: Local data storage, minimal data collection
- **Cross-Platform**: Same experience across all devices

### Technical Details

#### Technology Stack
- **Framework**: Flutter for cross-platform development
- **Database**: SQLite for mobile/desktop, Sembast for web
- **Languages**: Dart (primary), with platform-specific integrations
- **Networking**: HTTP for data downloads and updates
- **Maps**: Flutter Map with OpenStreetMap tiles
- **Audio**: Native audio support for feedback sounds

#### Data Sources
- **RadioID**: Official DMR-MARC database
- **HamVoIP**: AllStarLink node database
- **HamshackHotline**: HHL network database
- **DAPNET**: DAPNET network participants
- **NXDN**: NXDN system registrations
- **Repeaters**: Multiple repeater databases
- **QRZ.com**: Operator photos and verification

#### Update Mechanism
- **GitHub Repository**: Database files hosted on GitHub
- **Automatic Checking**: Regular checks for updates
- **Delta Updates**: Only download changed data when possible
- **Integrity Verification**: Row count and checksum verification
- **Rollback Capability**: Ability to revert to previous database version

### Contributing to the Project

#### Beta Testing
- **Early Access**: Try new features before release
- **Feedback**: Provide feedback on new functionality
- **Bug Reports**: Report issues in beta versions
- **Feature Suggestions**: Suggest improvements

#### Data Contributions
- **Corrections**: Report incorrect database information
- **Missing Data**: Identify missing operators or repeaters
- **Regional Experts**: Local knowledge for specific areas
- **Verification**: Verify accuracy of existing data

#### Translation Help
- **Language Support**: Help translate to new languages
- **Accuracy**: Verify existing translations
- **Cultural Adaptation**: Ensure cultural appropriateness
- **Technical Terms**: Accurate translation of amateur radio terms

#### Community Support
- **User Help**: Assist other users with questions
- **Documentation**: Help improve documentation
- **Tutorials**: Create tutorials and how-to guides
- **Promotion**: Share app with amateur radio community

### Version History and Roadmap

#### Current Version: 1.0.20250729+150
- **Fox Hunt System**: Complete 10 Fox Hunt Easter Egg system
- **Multi-Platform**: Support for all major platforms
- **Database Integration**: Seven major amateur radio databases
- **Export Functionality**: Multiple export formats
- **Interactive Maps**: Repeater and hackerspace mapping
- **Logbook System**: Complete QSO management

#### Planned Features
- **Additional Databases**: More amateur radio services
- **Advanced Mapping**: Enhanced map features and layers
- **Social Features**: Connect with other amateur radio operators
- **Advanced Export**: More radio programming formats
- **Cloud Sync**: Optional cloud synchronization
- **Contest Integration**: Contest logging and scoring

#### Long-term Vision
- **Universal Amateur Radio Tool**: Single app for all amateur radio needs
- **Global Community**: Connect amateur radio operators worldwide
- **Education Platform**: Help new operators learn amateur radio
- **Emergency Communications**: Enhanced emergency communication features
- **Technology Integration**: Integration with latest amateur radio technologies

---

## Quick Reference

### Search Shortcuts
- `*` = Wildcard for partial matches
- Search "PD2EMC", "PI2ASD", or "PD1HPB" and tap award icons to access Fox Hunt Easter Eggs 7, 4, and 8
- Use "Lazy Search" to search all databases
- Long-press logo for 5 seconds to access Fox Hunt Easter Egg 6

### Fox Hunt Checklist
- [ ] **Easter Egg 1**: Find fox hunt feature
- [ ] **Easter Egg 2**: Set up callsign in settings
- [ ] **Easter Egg 3**: Multiple taps in settings
- [ ] **Easter Egg 4**: Search "PI2ASD" and tap award icon
- [ ] **Easter Egg 5**: News screen weekend nets interaction
- [ ] **Easter Egg 6**: Long-press logo for 5 seconds
- [ ] **Easter Egg 7**: Search "PD2EMC" and tap award icon
- [ ] **Easter Egg 8**: Search "PD1HPB" and tap award icon
- [ ] **Easter Egg 9**: Database update functionality
- [ ] **Easter Egg 10**: Restart app after finding 9 foxes

### Database Quick Reference
- **RadioID**: DMR operators and IDs
- **HamVoIP**: AllStarLink nodes
- **HamshackHotline**: Amateur radio phone system
- **DAPNET**: Digital paging network
- **NXDN**: NXDN digital radio
- **Repeaters**: Repeater technical information
- **Lazy Search**: All databases combined

### Export Options
- **Individual**: Share single search results
- **Logbook**: ADIF and CSV formats
- **Bulk**: Full database export (desktop only)
- **Radio Programming**: Anytone, CHIRP, Pi-Star formats

---

**Version**: 1.0.20250729+150
**Last Updated**: August 2025
**Developer**: PD2EMC
**Support**: Available through in-app contact form

**73, and happy fox hunting!**
*The DMR User Database Team*
