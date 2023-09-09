import { useState } from 'react'
import './App.css'
import Content from './components/Content'
import Tabs from './components/Tabs'

function App() {
  // This array holds the content that will be displayed for each tab
  const tabsContentArray = ['Tab 1 content Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis dicta odio nulla fuga corrupti dolore harum molestiae eligendi ullam magni?','Tab 2 content Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis dicta odio nulla fuga corrupti dolore harum molestiae eligendi ullam magni?','Tab 3 content Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis dicta odio nulla fuga corrupti dolore harum molestiae eligendi ullam magni?','Tab 4 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis dicta odio nulla fuga corrupti dolore harum molestiae eligendi ullam magni?.']
  // tabSelection() is the setter for the tab number. Defaulting to '0'
  const [tabSelection, setTabSelection] = useState(0)
  // This function calls the setTabSelection 'setter' to update 'tabSelection'
  // it takes the 'newTabSelection' parameter to 'set' the new value
  const updateTabSelection = (newTabSelection) => {
    setTabSelection (newTabSelection);
  }

  // Below is the actual content:
  // 'Tabs' component needs the following props:
  //   - tabSelection getter: the current value
  //   - tabsContentArray: will use length of this array to determine how many tabs
  //   - updateTabsSelection function: this 'state lifting' function will be used to set the new value for 'tabSelection' 
  //
  // 'Content' component needs the following props:
  //    - tabsContentArray = will provide the content to display in the box
  //    - tabSelection = will provide the index for which element in the content array we will display
  return (
    <div className='wrapper'>
      <Tabs 
        updateTabSelection={updateTabSelection} 
        tabSelection={tabSelection}
        tabsContentArray ={tabsContentArray}
        />
      <Content 
        tabsContentArray ={tabsContentArray} 
        tabSelection={tabSelection}
        />
    </div>
  )
}

export default App
