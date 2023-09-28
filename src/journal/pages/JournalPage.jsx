import { IconButton, Typography } from "@mui/material"
import { AddOutlined } from "@mui/icons-material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView } from "../views/NoteView"
import { NothingSelectedView } from "../views/NothingSelectedView"

export const JournalPage = () => {
  return (
    <JournalLayout>
      
      {/* <Typography >Et sint pariatur tempor consectetur laboris tempor do id id aliquip consectetur anim quis ex. Anim consequat duis laboris aliqua elit amet aliquip deserunt labore tempor enim. Irure id proident sit sit deserunt occaecat cupidatat commodo ut sunt. Lorem nulla in occaecat incididunt ex eiusmod ipsum reprehenderit. Laboris pariatur enim magna nisi nisi magna nostrud.</Typography> */}
      {/* {<NothingSelectedView/>} */}
      <NoteView/>

      <IconButton
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main ', opacity: 0.9},
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30}}/>
      </IconButton>
    </JournalLayout>
  )
}
