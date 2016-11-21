import React from 'react'
import { Dialog, Checkbox, TextField } from 'material-ui'

const Modal = ({ names, isVisible }) => (
  <Dialog
    title="Scrollable Dialog"
    actions={[]}
    modal={false}
    open={isVisible}
    // onRequestClose={handleClose}
    autoScrollBodyContent
  >
    {
      names.map(({ name, comment }) =>
        <div key={name}>
          <Checkbox label={name} />
          <TextField value={comment} />
        </div>,
      )
    }
  </Dialog>
)

export default Modal
