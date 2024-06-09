# ![Responsive Design - Best Practices](./assets/hero.png)

**Learning objective:** By the end of this lesson, students will be able to utilize testing tools to evaluate the responsiveness of a website on different devices and understand the principles of progressive enhancement to create websites that are accessible to a broad range of users.

## Test your website on different devices

In addition to shrinking/expanding your browser window's width to test its responsive layout, viewing your app on various other devices is a good practice. Each browser/device has different quirks, so it will become important to see how they handle your app in a production environment.

### Key areas to focus on

When conducting tests, zero in on:

- **Layout:** Does it align with your design objectives?
- **Content:** Is all your content visible and easily accessible?
- **Navigation:** How effortless is it to move around the website?
- **Forms:** Are they fully functional?
- **Interactivity:** Do clickable items behave as expected?

> ❓ Which of these would "testing the animation of a hamburger menu" fall under?

## Using Chrome's Device Toolbar for Testing

While testing on the actual devices your audience uses is ideal, it's often not feasible. Tools like the [Device Toolbar in Chrome](https://developer.chrome.com/docs/devtools/device-mode/#viewport) provide a viable alternative. The Device Toolbar in Chrome DevTools simulates various screen sizes and resolutions. To activate it:

1. Open Developer Tools (`⌘ Command` + `Shift` + `C` on Mac or `Control` + `Shift` + `C` on Windows and Linux)
2. Click on the Device Toolbar icon to the left of the Elements tab
3. Select a device from the drop-down or input custom dimensions
4. Refresh the page to see how your website behaves under different conditions.

### 🎓 You Do

Chrome's browser simulation for mobile devices has come a long way, but it isn't perfect. Find a mobile device in the drop-down that most closely matches your personal mobile device.

1. Navigate to one of your favorite websites using the simulator. Take a look at the UI.
2. Now, navigate to that same site from your mobile device.

Are there any differences in how the page is displayed?

## Progressive enhancement

Progressive enhancement is a way to design websites that work for everyone, regardless of their device or browser. To use this strategy, developers start by creating a basic version of the website with all the essential content and features in a way that is accessible to all. Once this is complete, they add features and enhancements for users with more powerful devices and browsers.

### Benefits of Progressive Enhancement

- **Universal Accessibility**: All users receive the essential content and basic functionalities.
- **Reduced Load Times**: Users with older hardware or slower internet connections benefit from faster load times for essential features.
- **Easier Maintenance**: Since the basic version needs to be maintained, it simplifies long-term site upkeep.
