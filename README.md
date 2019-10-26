# WhatsAllApp Community edition

WhatsAllApp is a Chrome extension which creates an overlay of extra information on top of WhatsApp web. This is the community edition and  at this moment it enumerates and shows the following information:
*   Profile pictures
*   Status texts
*   Display names (for chat accounts*)
*   Online statuses (for chat accounts*)

When a WhatsApp contact comes online, the corresponding entry will have a green background and the 'last seen' entry is updated.

You can download a zip file of the currently displayed accounts. The file contains a .csv file and jpegs of all the displayed profile pictures.

Do you like WhatsAllApp and do you want to give me a little support? Even a small donation like $2 for a cup of coffee ☕  helps me a lot! :)	

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PHVYMCEVZNLPA)

![shot_10](https://user-images.githubusercontent.com/12978070/44982248-8576f400-af75-11e8-993c-1ce25af3c3d4.png) 
![shot_11](https://user-images.githubusercontent.com/12978070/44982251-860f8a80-af75-11e8-9f09-32057eeaaa82.png)
![shot_1](https://user-images.githubusercontent.com/12978070/44980623-b30d6e80-af70-11e8-9f19-2083f4816549.png)

## *What are chat accounts?
Chat accounts are WhatsApp users that had a chat session with you before, even if it was 2 years ago. This includes 1 on 1 chats and group chats.

## Installation
This extension is not available in the Chrome store. You have to install it manually. That is an easy task, just following these steps:

1. Click 'clone or download' and choose to download the ZIP file	
2. Extract the folder from the ZIP file	
3. Open up chrome://extensions/	
4. Enable developer mode at the top of the screen by clicking the slider	
5. Click 'load unpacked extension'	
6. **Select the dist/ folder from step 2**
7. The extension should appear at the top of the list
8. Refresh your WhatsApp web
9. An orange slider should appear at the top of the screen

## Usage
Click on the arrow at the top of WhatsApp web. Enter a range of numbers or enter a list of comma separated numbers to search for. Keep in mind: the WhatsApp rate limiter is quite aggressive so don't search for hundreds of numbers at the same time.

## Development
1. Clone the repo ```git clone https://github.com/LoranKloeze/WhatsAllApp.git```
2. Make sure [Node.js](https://nodejs.org/en/) is installed
3. Run ```npm install``` or ```yarn install```
4. Run ```npx webpack``` or ```npx webpack --watch``` to pack the code from /src to /dist
5. Load the unpacked extension from /dist in Chrome

## FAQ

* __I don't see the online statuses of some numbers, why?__

    Then it is problably someone you never had contact with before. You had to have a chat session before with someone to get information about their online status or display name.
    
* __But I still want to see the online presence of users that never had a chat session with me before, I even want to pay for it!__

    No, not possible.
    
* __The extension doesn't work!__

    WhatsAllApp is built on top of the undocumentend API of WhatsApp. They are free to change their API anytime which means that this extension can break anytime. So if something like that happens, create an issue and wait for the bug fix.
    
* __Can I send you an email for support questions?__ 

    I don't offer free individual support. Please create an issue and ask the community.
    
* __How about the Pro version?__

    There are no plans for a pro version anymore. 
