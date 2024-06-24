import { ModeToggle } from "./theme-switcher"

export const Navbar =  () => {


    return(
        <div className="p-4 flex justify-between border-b">
            <h1 className="text-2xl">Subscription Navbar layout</h1>
            <ModeToggle/>
        </div>
    )
}