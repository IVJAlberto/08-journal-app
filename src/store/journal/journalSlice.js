import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: true,
        messageSaves: '',
        notes: [],
        active: null,
        // // active: {
        // //     id: '123',
        // //     title: '',
        // //     body: '',
        // //     date: '',
        // //     imageUrls: [],

        // // }

    },
    reducers: {
        addNewEmptyNote: (state, action) => {

        },
        setActiveNote: (state, action) => {

        },
        setNotes: (state, action) => {

        },
        setSaving: (state) => {

        },
        updateNote: (state, action) => {

        },
        deleteNoteByID: (state, action) => {

        },
    }
});


// Action creators are generated for each case reducer function
export const { 
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteByID,
 } = journalSlice.actions;