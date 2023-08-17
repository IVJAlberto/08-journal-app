import { Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView } from "../views/NoteView"
import { NothingSelectedView } from "../views/NothingSelectedView"

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography >Et sint pariatur tempor consectetur laboris tempor do id id aliquip consectetur anim quis ex. Anim consequat duis laboris aliqua elit amet aliquip deserunt labore tempor enim. Irure id proident sit sit deserunt occaecat cupidatat commodo ut sunt. Lorem nulla in occaecat incididunt ex eiusmod ipsum reprehenderit. Laboris pariatur enim magna nisi nisi magna nostrud.</Typography> */}
      {/* <NothingSelectedView/> */}
      <NoteView/>
    </JournalLayout>
  )
}
