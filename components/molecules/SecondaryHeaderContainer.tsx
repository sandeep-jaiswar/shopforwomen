import { Separator } from "@/components/ui/separator"

const SecondaryHeaderContainer = () => {
    return (
        <div className="flex w-full px-3 py-2 justify-between bg-stone-100 text-stone-900 shadow-sm hover:bg-stone-100/80 dark:bg-stone-800 dark:text-stone-50 dark:hover:bg-stone-800/80">
            <div>Location</div>
            <Separator orientation="vertical" />
            <div className="flex gap-3">
                <div>Deals</div>
                <Separator orientation="vertical" />
                <div>Makeup</div>
                <Separator orientation="vertical" />
                <div>Skin</div>
                <Separator orientation="vertical" />
                <div>Hair</div>
                <Separator orientation="vertical" />
                <div>Clothes</div>
                <Separator orientation="vertical" />
                <div>Fragrance</div>
                <Separator orientation="vertical" />
                <div>Health</div>
            </div>
        </div>
    )
}

export default SecondaryHeaderContainer