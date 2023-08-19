import PrimaryHeaderContainer from "./PrimaryHeaderContainer"
import SecondaryHeaderContainer from "./SecondaryHeaderContainer"

const Header = () => {
    return (
        <div className="flex bg-transparent flex-col w-full gap-1">
            <PrimaryHeaderContainer/>
            <SecondaryHeaderContainer/>
        </div>
    )
}

export default Header