# requestFullscreen API to make the site full screen

If we call `document.documentElement.requestFullscreen()` method, the window will go full screen. I made a fun prank by designing it to look like the Windows 10 blue screen of death (named it as `bsod` class in css.)

When we click the button, it will go full screen.

When we exit the full screen by pressing `esc` key on the keyboard, we should know and change back the styling of the site. We do this by hooking into the `fullscreenchange` event handler. However it triggers everytime you go full screen in and out. The `document.fullscreenElement` object will be `null` when it's not full screen, so I took advantage of this to implement the exiting full screen state.

- [MDN Full Screen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API)
