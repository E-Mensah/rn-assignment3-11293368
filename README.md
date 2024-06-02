# TITLE: rn-assignment2-11293368

# Student Info

ID: 11293368

# Task Description

The task required the creating a react native app using Expo CLI. The main aspect of the task was to create a design as seen in a provided UI mockup.
It also included: 
<br>
• Including at least eight categories such as Exercise, Study, Code, Cook, etc.<br>
• Providing a list of 15 ongoing tasks.<br>
• Styling the application to closely match the provided UI design.<br>
• Using custom components throughout the application.<br>

# Description of components usage:

So on my part, I began the process by first setting up all the folders and installing all packages including the ones for the fonts and images. I went on to divide the layout and created separate components. The usage of the components are as follows:
<br>
## View:
The view component was basically a layout container for all the other components created, similar in functionality to a 'Div' tag in Html. So I used it to create the main app's container where all components would be displayed/nested in the App.js file. I set it's style properties which included: backgroundColor, fontfamily, flex, gap and the others. It was also used it most of my custom components throughout.
## Text:
The component was used to display text to the user. I used it in the 'Layout1' component to display the introductory text "Hello , Devs", in the'TaskView' component and also in the 'Categories' component. I also applied styles such as fontWeight: '700',fontSize: 35, and fontFamily: 'Lato-Bold'. 
## Stylesheet:
I used the Stylesheet to define styles for my custom components and also core components imported. It was embedded in the js files for my components and also the App.js component. It had various styles and their values such as: fontFamily: 'Lato-Regular', backgroundColor: '#f7f0e8', paddingLeft: 20,  paddingRight: 20, flex: 1, gap: 20, and paddingBottom: 50,
## ScrollView:
The ScrollView component was used to make the app's content scrollable. It was used in the category component to display the various categories of actions available with their texts and images. To enable scrolling horizontally to view hidden items; the horizontal={true} prop was used where the value is set to true.
## TextInput:
The TextInput component was used to create a text input field where users can input their tasks. It was in the form of a searchbar with a placeholder 'Search' which recieves words as input.
## TouchableOpacity(Button):
The TouchableOpacity component was used to create a slider button that can be pressed for a specific action. For the touchableopacity component, upon touching there is change in the opacity or transperacy of the button.
## Image:
The Image component was used to display images in the app. It was used in the 'Categories' component where various images were displayed.The Image component was used to display the icons(slider and search) in the SearchbarAndButton custom component.
## Flatlist:
The FlatList component was used to display a list of data in a scrollable manner. It was mainly used in the 'TaskView' component. There data prop is passed to the FlatList component. The value of data is an array of objects, which is stored in the taskList variable. It takes another prop renderItem which returns a React elements that will be rendered for each item in the data array. So in this case, all the 15 ongoing tasks can be viewed by the user.
## Custom Components:
I created several custom components such as:
- Layout1: This component was used to display the introductory statemnts and the profile picture.
- SearchbarAndButton: which was used to create the search bar which recieved input and also a pressable button besides it.
- Categories: which displayed a text and a section of some categories layouts placed in a scrollView component for accessibility while scrolling.
- TaskView: This custom component was used together with json array in the taskinfo.json file to render the different ongoing task. It also made use of the Flatlist compponent for access and display while scrolling through the large list of items.

# Screenshot of app:
<br>

![s1](./screenshots/Screenshot%201.png)

<br>

![s1](./screenshots/Screenshot%202.png)

<br>

![s1](./screenshots/Screenshot%203.png)

<br>

![s1](./screenshots/Screenshot%204.png)

<br>

![s1](./screenshots/Screenshot%205.png)

<br>

![s1](./screenshots/Screenshot%206.png)

<br>

![s1](./screenshots/Screenshot%207.png)

<br>

![s1](./screenshots/Screenshot%208.png)