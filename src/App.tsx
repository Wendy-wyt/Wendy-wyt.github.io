import { useState } from 'react';
import { BrowseOptions } from './constants/browse_options';
import { Navigation } from './components/navigation';
import { Sections } from './components/sections';

function App() {
  const [browseOption, setBrowseOption] = useState(BrowseOptions.MAIN);

  const handleNavigation = (data: BrowseOptions) => {
    setBrowseOption(data);
  }

  return (
    <main>
      <div className='w-screen h-screen flex flex-row relative'>
        <div className='w-fit h-full'>
          <Navigation browseOption={browseOption} handleNavigation={handleNavigation} />
        </div>
        <div className='grow h-full overflow-auto'>
          <Sections browseOption={browseOption} />
        </div>
      </div>
    </main>
  );
}

export default App;
