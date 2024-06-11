import React from 'react'
import { connect } from 'react-redux';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

// redux
import { addProduct } from '../../../states/product.action';

const mapStateToProps = (state: any) => {
  return {
    dataSource: state.product.dataSource
  }
}

const mapDispatchToProps = {
  addProduct
}

const BasicDialog = React.forwardRef(({ addProduct, dataSource }: any, ref: any) => {
  const [open, setOpen] = React.useState(false);

  React.useImperativeHandle(ref, () => {
    return {
      openModal() {
        toggleOpenDialog()
      }
    }
  }, [])


  const toggleOpenDialog = () => {
   setOpen(prevState => !prevState)
  };

  return (
    <Dialog
      open={open}
      maxWidth="md"
      fullWidth
      onClose={toggleOpenDialog}
      PaperProps={{
        component: 'form',
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries((formData as any).entries());
          const product_name = formJson.product_name;
          toggleOpenDialog();
          const newProduct = {
            title: product_name,
            id: Date.now()
          }
          const newProducts = [...dataSource, newProduct];
          addProduct(newProducts)
        },
      }}
    >
      <DialogTitle>Add Product</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          required
          margin="dense"
          id="product_name"
          name="product_name"
          label="Product name"
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={toggleOpenDialog}>Cancel</Button>
        <Button type="submit">Submit</Button>
      </DialogActions>
    </Dialog>
  )
})

export default connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(BasicDialog)
