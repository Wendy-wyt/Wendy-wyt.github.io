import { BrowseOptions } from '../constants/browse_options';

type Props = {
    browseOption: BrowseOptions,
    handleNavigation: (data: BrowseOptions) => void,
}

export const Navigation = ({ browseOption, handleNavigation }: Props) => {

    return (
        <div className="navigation">
            <div className="w-full">
                <div
                    className={`${browseOption === BrowseOptions.MAIN ? 'bg-orange-300' : ''}`}
                    onClick={() => { handleNavigation(BrowseOptions.MAIN) }}>
                    Main
                </div>
                <div
                    className={`${browseOption === BrowseOptions.EDUCATION ? 'bg-orange-300' : ''}`}
                    onClick={() => { handleNavigation(BrowseOptions.EDUCATION) }}>
                    Education
                </div>
                <div
                    className={`${browseOption === BrowseOptions.PROFESSIONAL_EXPERIENCE ? 'bg-orange-300' : ''}`}
                    onClick={() => { handleNavigation(BrowseOptions.PROFESSIONAL_EXPERIENCE) }}>
                    Professional Experience
                </div>
                <div
                    className={`${browseOption === BrowseOptions.PROJECTS ? 'bg-orange-300' : ''}`}
                    onClick={() => { handleNavigation(BrowseOptions.PROJECTS) }}>
                    Projects
                </div>
                <div
                    className={`${browseOption === BrowseOptions.CERTIFCATES ? 'bg-orange-300' : ''}`}
                    onClick={() => { handleNavigation(BrowseOptions.CERTIFCATES) }}>
                    Certificates
                </div>
                <div
                    className={`${browseOption === BrowseOptions.RESUME ? 'bg-orange-300' : ''}`}
                    onClick={() => { handleNavigation(BrowseOptions.RESUME) }}>
                    Resume / CV
                </div>
            </div>
        </div>
    )
}