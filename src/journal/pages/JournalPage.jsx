import { IconButton, Typography } from "@mui/material"
import { AddOutlined } from "@mui/icons-material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView } from "../views/NoteView"
import { NothingSelectedView } from "../views/NothingSelectedView"
import { startNewNote } from "../../store/journal/thunks"
import { useDispatch, useSelector } from "react-redux"
import { useMemo } from 'react'

export const JournalPage = () => {

  const dispatch = useDispatch();
  const { isSaving, active } = useSelector( state => state.journal );

  const onClickNewNote = () => {
    dispatch(startNewNote());
  }

  return (
    <JournalLayout>
      
      {/* <Typography >Et sint pariatur tempor consectetur laboris tempor do id id aliquip consectetur anim quis ex. Anim consequat duis laboris aliqua elit amet aliquip deserunt labore tempor enim. Irure id proident sit sit deserunt occaecat cupidatat commodo ut sunt. Lorem nulla in occaecat incididunt ex eiusmod ipsum reprehenderit. Laboris pariatur enim magna nisi nisi magna nostrud.</Typography> */}
      {
        ( !!active ) 
        ?  <NoteView/>
        : <NothingSelectedView/>
      }
      
        

      <IconButton
        disabled= { isSaving }
        onClick={ onClickNewNote }
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
