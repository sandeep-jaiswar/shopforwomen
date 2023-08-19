"use client"

import { Button } from "@/components/ui/button"

export default function LogoutButton() {
  return (
    <form action="/auth/sign-out" method="post">
       <Button>Logout</Button>
      {/* <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
        Logout
      </button> */}
    </form>
  )
}
