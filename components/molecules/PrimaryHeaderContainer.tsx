import Link from "next/link"
import ProfileNavSection from "./ProfileNavSection"

const PrimaryHeaderContainer = () => {
    return (
        <div className="flex w-full px-3 py-5 justify-between bg-stone-900 text-stone-50 shadow hover:bg-stone-900/90 dark:bg-stone-50 dark:text-stone-900 dark:hover:bg-stone-50/90">
            <Link href='/'>Shop For Her</Link>
            <div>search</div>
            <div className="flex gap-3">
                <div >orders</div>
                <div>Cart</div>
                <div>
                    <ProfileNavSection />
                </div>
            </div>
        </div>
    )
}

export default PrimaryHeaderContainer