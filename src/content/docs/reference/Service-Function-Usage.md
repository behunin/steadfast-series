---
title: Service Function Usage
description: Setup
---

As a means to help with testing and verifying, this page serves to list a handful of games that use the various services provided by the Switch OS. When adding to the list make sure to alphabetize the entry being added. Also please add where the service is used, so it's easier know where to go once the game is booted. For example, if `SomeRandomFunction` is used in a certain menu, indicate what menu in particular it is.

# Services

## acc

#### GetUserCount

- Pokken Tournament DX

### IProfile

#### LoadImage

- Nintendo Labo Toycon

## am

#### SetScreenShotImageOrientation

- Super Mario Odyssey

### IApplicationFunctions

#### GetSaveDataSize

- Skyrim

### ICommonStateGetter

#### GetBootMode

- Taiko no Tatsujin

#### GetDefaultDisplayResolutionChangeEvent

- Toki Tori
- Toki Tori 2

### ISelfController

#### GetIdleTimeDetectionExtension

- Mario Tennis Aces

#### SetIdleTimeDetectionExtension

- Mario Tennis Aces

## friend

### IFriendService

#### UpdateUserPresence

- Retro City Rampage (needed to go in-game)

## hid

#### DisconnectNpad

- ARMS (required to go in-game)

## pctl

### IParentalControlService

#### CheckFreeCommunicationPermission

- Required for save files to load properly in Splatoon 2
