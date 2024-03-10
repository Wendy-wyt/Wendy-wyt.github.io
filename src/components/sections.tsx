import { BrowseOptions } from '../constants/browse_options';

export const Sections = ({ browseOption }) => {
    return (
        <div className="section">
            <div className='w-full h-fit'>
                {browseOption === BrowseOptions.MAIN && (<h1>Main</h1>)}
                {browseOption === BrowseOptions.CERTIFCATES && (<h1>Certificates</h1>)}
                {browseOption === BrowseOptions.PROFESSIONAL_EXPERIENCE && (<h1>PROFESSIONAL_EXPERIENCE</h1>)}
                {browseOption === BrowseOptions.PROJECTS && (<h1>PROJECTS</h1>)}
                {browseOption === BrowseOptions.RESUME && (<h1>RESUME</h1>)}
                {browseOption === BrowseOptions.EDUCATION && (<h1>EDUCATION</h1>)}
            </div>
        </div>
    )
}