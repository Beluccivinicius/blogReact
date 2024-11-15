import * as React from "react";
import headers from "../../utils/headers";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useNavigate } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogoCadastro({ bool, email, nome }) {
  const [open, setOpen] = React.useState(bool);

  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  const codigoConfirmacao = (email, nome) => {
    let usuarioJson = JSON.stringify({ nome, email });

    fetch(`http://localhost:5050/cadastrar/email`, {
      method: "POST",
      body: usuarioJson,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    setOpen(false);

    navigate("/codigoVerificar");
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Precisamos confirmar os seus dados, para isso vamos enviar um código
            via email
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => codigoConfirmacao(email, nome)}>
            enviar email
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
