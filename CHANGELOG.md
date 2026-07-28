---
layout: default
title: DMR User Database App
---
# Changelog

All notable changes to the DMR User Database app are documented here, in plain language, so anyone can see what's been fixed and improved.

## Version 1.0.20260728 (build 167)

### Fixed
- **The web version's local database didn't actually work at all** — updating, clearing, and searching the database on the web version silently failed every time due to a missing web-compatible file-storage path. Likely the single biggest fix in this release: the web version now genuinely stores and updates its data.
- **Search crashed on the web version** after a successful lookup, immediately after the database fix above made real data reach the search screen for the first time.
- **"Update All" databases crash** — tapping it repeatedly (or letting nested updates run) could crash with a "duplicate widget key" error.
- **The app could crash outright** when opening the Contact screen or the Application/Database Info screens on the web version.
- **Fox-hunt registration silently failed** — it looked like it worked, but device information was never actually being sent, and a real (unrelated) crash-on-open bug made it seem like it had double-submitted.
- **Search result popups took 5-15+ seconds to appear** — they now open instantly and load the profile photo in the background.
- **Theme (Light/Dark/Auto) now updates live everywhere** — previously, changing the theme only updated some screens immediately; the rest required restarting the app.
- **The Database Information tab stopped showing outdated counts** after updating or clearing the database.
- **The progress dialog no longer gets stuck showing the first step's message** while later steps are actually running.
- **"Update Database" now shows one final confirmation** instead of a flood of popups, one per table.
- Fixed a **map screen crash on cold launch** that only happened on the Repeaterbook map, and a related location-permission race condition.
- Fixed a **memory leak** on one of the map screens (map controller never released).
- **The app is now properly translated everywhere.** Fixed roughly 150 places where English text was slipping through untranslated in the other 7 supported languages (Dutch, Chinese, German, Greek, Spanish, French, Japanese) — status messages, error popups, dialog buttons, default text, app info screens, and more. Also fixed a subtler bug where a few "no internet connection" checks matched English error text directly and silently stopped working once that same text got translated.
- **Country/region export selector** — the continent buttons (Asia, Africa, Europe, etc.) on the "Export Selected Countries" screen are now translated instead of always showing in English.
- **Map screens** — a "Hackerspace Map" title that showed as a mix of English and the local language is now fully translated; a bug where tapping the "please select a country" placeholder on the Repeaterbook map would incorrectly zoom to a default location is fixed.
- **CSV exports now show a proper Save As dialog** to pick where the file goes, instead of silently saving into the app's internal folder — added to both the main Export screen and "Export Selected Countries."
- **Bottom navigation bar could get covered by system UI right after completing fox-hunt registration** — an edge-to-edge display fix that was already applied everywhere else in the app had been missed on the screen registration returns to.
- **PWA / "Add to Home Screen" name and icon fixed** — installing the web app on an iPhone showed the old internal project name (`radio_database_app`) and a placeholder icon instead of "DMR User Database" and the real app logo.
- **Web version no longer crashes on startup in some cases** — a debug-only device-info check was accidentally running on web too and could throw an error there.
- **App Store version checking made more reliable** — switched from scraping Apple's store page (which could break any time Apple redesigned it) to Apple's official lookup service.
- **HamVoIP directory import fixed at the source** — traced a long-standing 1-row mismatch between the local and server database counts to an actual typo in HamVoIP's own published extension list (one entry had two different people accidentally sharing the same number, caused by a mistyped digit). Reported to HamVoIP, and switched our import script to their cleaner web-based directory listing so this class of typo can't cause the same problem again.

### Security
- Removed **cleartext (unencrypted) network traffic support** on Android — the app only ever used secure connections anyway, so this closes an unnecessary gap.
- Removed **unused broad storage permissions** on Android.
- Fixed a **macOS sandboxing regression** — the Mac App Store build had been shipping without Apple's app sandbox protections since a prior update; this is now restored.
- Added a **safety check on links** pulled from shared community data (Hackerspaces directory) so they can only open `http`/`https` links, not arbitrary/unsafe link types.
- Fixed a bug where **database import failures were silently swallowed** — if a row failed to import, the app would still claim "Database updated!" with no indication anything went wrong; failures are now reported.

### Changed
- **App now shows its own logo on the boot/splash screen** instead of the generic launcher icon while it starts up.
- **Updated to meet Google Play's latest Android requirements** (target/compile SDK 36), keeping the app compliant for future Play Store updates.
- **Dependencies brought up to date** where possible — bumped everything to the newest version the current toolchain allows, and reorganized the project's dependency file so it's clear at a glance which packages are current, which are intentionally capped (and why), and which are deliberately left for a future toolchain upgrade.
- **macOS "About" window** now includes working links to the website, webapp, and Discord, and the copyright year is no longer stuck on last year.
- General codebase cleanup: removed ~450 stale linter warnings caused by long-dead/duplicate files, archived (not deleted) 20+ orphaned files.
- Full multi-platform release build verified across Android, iOS, macOS, Windows and Web.

---

_Earlier version history is available in the project's git log._
