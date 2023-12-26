import React, { useState } from "react";
import { Modal, Stack, Typography, TextField, Button } from "@mui/material";

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [open, setOpen] = useState(true);

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();

    try {
      setPaymentSuccess(true);
    } catch (error) {
      console.error("Ошибка обработки платежа:", error);
    }
  };

  const handleModalClose = () => {
    setCardNumber("");
    setExpiryDate("");
    setCvv("");
    setName("");
    setPaymentSuccess(false);
    setOpen(false);
  };

  return (
    <Modal open={open} onClose={handleModalClose}>
      <Stack
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 300,
          bgcolor: "#fff",
          boxShadow: 24,
          p: 4,
        }}>
        {paymentSuccess ? (
          <Typography variant="h6" component="div">
            Оплата проведена успешно
          </Typography>
        ) : (
          <>
            <Typography variant="h6" component="div" sx={{ marginBottom: 2 }}>
              Оплата YouTube Premium
            </Typography>
            <form onSubmit={handlePaymentSubmit}>
              <TextField
                label="Номер карты"
                variant="outlined"
                fullWidth
                margin="normal"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
              <TextField
                label="Срок действия"
                variant="outlined"
                fullWidth
                margin="normal"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
              />
              <TextField
                label="CVV"
                variant="outlined"
                fullWidth
                margin="normal"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
              <TextField
                label="Имя на карте"
                variant="outlined"
                fullWidth
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: 2 }}>
                Оплатить
              </Button>
            </form>
          </>
        )}
        <Button
          onClick={handleModalClose}
          color="secondary"
          variant="contained"
          fullWidth
          sx={{ marginTop: 2 }}>
          Закрыть
        </Button>
      </Stack>
    </Modal>
  );
};

export default PaymentForm;
